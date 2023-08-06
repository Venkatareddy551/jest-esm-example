import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express, { Express } from 'express';
import http from 'http';
//import cors from 'cors';
import { typeDefs } from './schema.js'
import { resolvers } from './resolver.js';
//import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
//import {GraphQLError } from 'graphql';
import * as dotenv from 'dotenv';
dotenv.config();

//const ddbClient: DynamoDBClient = new DynamoDBClient({region: process.env.AWS_REGION});
const port = process.env.PORT || 8080;

export async function startApolloServer() {
  const app: Express = express();
  const httpServer: http.Server = http.createServer(app);
  const server = new ApolloServer({typeDefs,resolvers,plugins: [ApolloServerPluginDrainHttpServer({httpServer})]});
  await server.start();
  app.use(express.json({limit:'50mb'}));
  app.use(express.urlencoded({extended:true, limit: '50mb'}))
  app.use(expressMiddleware(server, {}))
  httpServer.listen(port, () => {
    console.log(`Server ready at port: ${port}`);
  })
  return {app, httpServer, server};
}