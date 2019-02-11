import { resolvers } from './resolvers';
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    feeds(limit: Int!, offset: Int!, category: String!): [Feed]
    sources: [FeedSource]
  }
  type Mutation {
    source(name: String!, url: String!): FeedSource
  }
  type FeedSource {
    id: String
    name: String
    url: String
  }
  type FeedMark {
    id: String
    type: String
    createdAt: String
    updatedAt: String
  }
  type Feed {
    id: String
    title: String
    author: String
    originHref: String
    sourceId: String
    content: String
    createdAt: String
    updatedAt: String
    publishedDate: String
    marks: [FeedMark]
    source: FeedSource
  }
`;

export const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    auth: req.auth
  })
});
