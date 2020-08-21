const {GraphQLServer} = require('graphql-yoga')

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]

let idCount = links.length

const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links,
        link: (parent, args) => {
            console.log(args.id)
            let index = links.findIndex(obj => obj.id = args.id)
            console.log(index)
            return links[index]
        }
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
              }
              links.push(link)
              return link
        },

        updateLink: (parent, args) => {
            let index = links.findIndex(obj => obj.id = args.id)
            let newLink = {
                id: args.id,
                url: args.url,
                description: args.description
            }
            links[index] = newLink
            return newLink
        },

        deleteLink: (parent, args) => {
            let index = links.findIndex(obj => obj.id = args.id)
            let link = links[index]
            links.splice(index, 1);
            return link
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))