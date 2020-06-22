const { gql } = require('apollo-server')

// Tipos nativos do GraphQL
// ID
// Int
// Float
// String
// [String]
/* 
Tipos Customizados 
  NomeDoTipo
  [NomeDoTipo]
*/

/* 
Outras definições 
  ! => Obrigatório
*/

const typeDefs = gql`
  type Book {
    isbn: String!
    name: String!
    coverImage: String
    price: Float
    promotionalPrice: Float
    rating: Float
    score: Float
    scores: [Score]
    tecnologies: [String]
    requirements: [String]
    description: String
  }

  type Score {
    name: String
    value: Float
  }

  input BookInput {
    isbn: String
    name: String
    coverImage: String
    price: Float
    promotionalPrice: Float
    rating: Float
    score: Float
    scores: [ScoreInput]
    tecnologies: [String]
    requirements: [String]
    description: String
  }

  input ScoreInput {
    name: String!
    value: Float!
  }

  type Query {
    book(isbn: String!): Book
  }

  type Mutation {
    addBook(bookInput: BookInput): Book
    updateBook(isbn: String!, bookInput: BookInput!): Boolean
    deleteBook(isbn: String!): Boolean
  }
`;

export default typeDefs