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
        link: (_, {id}) => {
            let index = links.findIndex(obj => obj.id = id)
            return links[index]
        }
    },
    Mutation: {
        post: (_, {url, description}) => {
            const link = {
                id: `link-${idCount++}`,
                description: description,
                url: url,
              }
              links.push(link)
              return link
        },

        updateLink: (_, {id, url, description}) => {
            let index = links.findIndex(obj => obj.id = id)
            let newLink = {
                id: id,
                url: url,
                description: description
            }
            links[index] = newLink
            return newLink
        },

        deleteLink: (_, {id}) => {
            let index = links.findIndex(obj => obj.id = id)
            let link = links[index]
            links.splice(index, 1);
            return link
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './server/schema.graphql',
    resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))