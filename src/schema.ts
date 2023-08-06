import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type details{
    name: String
    age: Int
  }
  type Query {
    details: [details]
  }
`;