import React, { useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { isIOS, isSafari } from "react-device-detect";
import {
  Typography,
  Breadcrumbs,
  Button,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import { useHiveDetailQuery } from "../generated/graphql";
import Link from "@material-ui/core/Link";
import ReactPlayer from "react-player";
import RecordIcon from "./RecordIcon";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    player: {
      width: '100%',
      height: 'auto'
    },
    reactPlayer: {
      backgroundColor: "#000",
      position: "absolute",
      top: 0,
      left: 0,
    },
    reactPlayerWrapper: {
      position: "relative",
      paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
    },
  })
);

interface HiveDetailParams {
  hiveSlug: string
}

export default function HiveDetail() {
  const classes = useStyles();
  const { hiveSlug } = useParams<HiveDetailParams>();

  const [streamError, setStreamError] = useState(false);

  const { loading, error, data } = useHiveDetailQuery({
    variables: {
      hiveSlug,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const hive = data?.hive ?? null;
 
  /*const streamUrl = hive?.streamUrl ?? null;*/

  const streamUrl =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_APIARY_DEVELOPMENT_STREAM_URL
      : hive?.streamUrl ?? null;



  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" component={RouterLink} to="/">
          Apiary
        </Link>
        <Typography color="textPrimary">{hive?.name} Hive</Typography>
      </Breadcrumbs>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h2">{hive?.name}</Typography>
      </div>

  

      {streamUrl && hive?.streamActive && (
        <>
          <Typography variant="h4" gutterBottom>
            <RecordIcon /> Live stream
          </Typography>
          {streamError && (
            <>
              <Typography variant="body1">
                Error loading live stream&nbsp;
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={() => setStreamError(false)}
                >
                  Retry
                </Button>
              </Typography>
            </>
          )}
          {streamUrl && !streamError && (
            isIOS || isSafari ? (
              <video className={classes.player} controls>
                <source src={streamUrl} type="application/x-mpegURL" />
              </video>
            ) : (
              <div className={classes.reactPlayerWrapper}>
                <ReactPlayer
                  className={classes.reactPlayer}
                  url={streamUrl}
                  light
                  width="100%"
                  height="100%"
                  playing
                  volume={1}
                  muted={false}
                  controls={true}
                  config={{
                    file: {
                      forceHLS: true,
                    },
                  }}
                  onError={() => {
                    setStreamError(true);
                  }}
                />
              </div>
            ))}
        </>)}

      {/* Sensor dashboards */}
      {
        hive?.dashboardUrl && hive?.dashboardActive ? <>
          <Typography variant="h4" gutterBottom>
            Sensor data
          </Typography>
          <iframe title={`${hive.name} sensor data`} style={{width: '100%', height: '50vh', border: 'none'}} src={hive.dashboardUrl}></iframe>
        </> : <></>
      }
    </>
  )
}
