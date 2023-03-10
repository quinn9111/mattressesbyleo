const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const path = require('path')

const { typeDefs, resolvers } = require('./schemas')
const {authMiddleware} = require('./utils/auth')
const db = require('./config/connection')

const PORT = process.env.PORT || 3001

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {

  await server.start()
  server.applyMiddleware({ app })

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`)
      // log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
  })
}

startApolloServer(typeDefs, resolvers)