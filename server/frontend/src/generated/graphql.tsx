import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
};

export type HiveType = {
  __typename?: 'HiveType';
  id: Scalars['UUID'];
  /** Unique hive ID */
  uid: Scalars['String'];
  /** Human-friendly hive name */
  name: Scalars['String'];
  /** Short human and URL-friendly name used for the hive's URL */
  slug: Scalars['String'];
  /** Determines if this hive should be accessible publicly */
  active: Scalars['Boolean'];
  /** AV stream name for this hive */
  streamKey?: Maybe<Scalars['String']>;
  /** Determines if this hive's stream should be accessible publicly */
  streamActive: Scalars['Boolean'];
  /** Absolute URL for this hive's sensor dashboard */
  dashboardUrl?: Maybe<Scalars['String']>;

  dashboardActive: Scalars['Boolean'];

  streamUrl?: Maybe<Scalars['String']>;
};


export type Query = {
  __typename?: 'Query';
  /** Retrieve a list of all hives */
  allHives?: Maybe<Array<Maybe<HiveType>>>;
  /** Retrieve a single hive by an identifier. One and only one kind of identifier must be specified */
  hive?: Maybe<HiveType>;
};


export type QueryHiveArgs = {
  hiveId?: Maybe<Scalars['String']>;
  hiveUid?: Maybe<Scalars['String']>;
  hiveSlug?: Maybe<Scalars['String']>;
};


export type HiveDetailQueryVariables = Exact<{
  hiveSlug?: Maybe<Scalars['String']>;
}>;


export type HiveDetailQuery = (
  { __typename?: 'Query' }
  & { hive?: Maybe<(
    { __typename?: 'HiveType' }
    & Pick<HiveType, 'id' | 'uid' | 'name' | 'slug' | 'streamActive' | 'streamKey' | 'streamUrl' | 'dashboardActive' | 'dashboardUrl'>
  )> }
);

export type HiveListQueryVariables = Exact<{ [key: string]: never; }>;


export type HiveListQuery = (
  { __typename?: 'Query' }
  & { allHives?: Maybe<Array<Maybe<(
    { __typename?: 'HiveType' }
    & Pick<HiveType, 'id' | 'name' | 'slug'>
  )>>> }
);


export const HiveDetailDocument = gql`
    query HiveDetail($hiveSlug: String) {
  hive(hiveSlug: $hiveSlug) {
    id
    uid
    name
    slug
    streamActive
    streamKey
    streamUrl
    dashboardActive
    dashboardUrl
  }
}
    `;

/**

 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example

 */
export function useHiveDetailQuery(baseOptions?: Apollo.QueryHookOptions<HiveDetailQuery, HiveDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HiveDetailQuery, HiveDetailQueryVariables>(HiveDetailDocument, options);
      }
export function useHiveDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HiveDetailQuery, HiveDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HiveDetailQuery, HiveDetailQueryVariables>(HiveDetailDocument, options);
        }
export type HiveDetailQueryHookResult = ReturnType<typeof useHiveDetailQuery>;
export type HiveDetailLazyQueryHookResult = ReturnType<typeof useHiveDetailLazyQuery>;
export type HiveDetailQueryResult = Apollo.QueryResult<HiveDetailQuery, HiveDetailQueryVariables>;
export const HiveListDocument = gql`
    query HiveList {
  allHives {
    id
    name
    slug
  }
}
    `;

/**
 
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHiveListQuery({
 *   variables: {
 *   },
 * });
 */
export function useHiveListQuery(baseOptions?: Apollo.QueryHookOptions<HiveListQuery, HiveListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HiveListQuery, HiveListQueryVariables>(HiveListDocument, options);
      }
export function useHiveListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HiveListQuery, HiveListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HiveListQuery, HiveListQueryVariables>(HiveListDocument, options);
        }
export type HiveListQueryHookResult = ReturnType<typeof useHiveListQuery>;
export type HiveListLazyQueryHookResult = ReturnType<typeof useHiveListLazyQuery>;
export type HiveListQueryResult = Apollo.QueryResult<HiveListQuery, HiveListQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    