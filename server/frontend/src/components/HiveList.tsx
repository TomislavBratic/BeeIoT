import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useHiveListQuery } from "../generated/graphql";
import { hiveStyles } from "./HiveStyles";





export default function HiveList() {
  const classes = hiveStyles();

  const { loading, error, data } = useHiveListQuery();

  if (loading) return <Typography variant="body1">Loading...</Typography>;
  if (error) return <Typography variant="body1">Error :(</Typography>;

  return (
    <>
      <Typography variant="h2">Hives</Typography>
      <List>
        {(data?.allHives ?? [])
          .slice()
          .map((hive, index: number) => (
            <React.Fragment key={hive?.id}>
              <ListItem className={classes.hiveListItem}>
                <ListItemText
                  className={classes.hiveName}
                  disableTypography
                  primary={<Typography variant="body1">{hive?.name}</Typography>}
                />
                <Button
                  component={RouterLink}
                  to={`/hive/${hive?.slug}`}
                  variant="contained"
                  color="default"
                  size="small"
                >
                  View
                </Button>
              </ListItem>

              {index !== (data?.allHives?.length ?? 0) - 1 ? (
                <Divider
                  // variant="inset"
                  component="li"
                />
              ) : null}
            </React.Fragment>
          ))}
      </List>
    </>
  );
}
