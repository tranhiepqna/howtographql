const {GraphQLServer} = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const { PubSub } = require('graphql-yoga')

const Vote = require('./resolvers/Vote')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')

const prisma = new PrismaClient()
const pubsub = new PubSub()


const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
}

const server = new GraphQLServer({
    typeDefs: './server/schema.graphql',
    resolvers,
    context: request => {
        return {
          ...request,
          prisma,
          pubsub,
        }
    }
})

server.start(() => console.log(`Server is running on http://localhost:4000`))