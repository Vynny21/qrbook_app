import "./database"

import { ApolloServer } from "apollo-server"

import typeDefs from './app/schemas/schemas'
import resolvers from './resolvers'

module.exports = new ApolloServer({ typeDefs, resolvers })