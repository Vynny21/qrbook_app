import Book from './app/models/Book'

export default {
  Query: {
    // search
    book: async (_, { isbn }) => {
      const book = await Book.findOne({ isbn })

      if(!book) return 'Error: Book not found.'

      return book
    }
  },

  Mutation: {
    // insert
    addBook: async (_, {bookInput} ) => {
      const book = await Book.create(bookInput)

      return book
    },

    // update
    updateBook: async (_, { isbn, bookInput } ) => {
      const book = await Book.findOne({ isbn })

      if(!book) return 'Error: Book not found.'

      await book.updateOne(bookInput)

      return true
    },

    // delete
    deleteBook: async (_, { isbn }) => {
      const book = await Book.findOne({ isbn })

      if(!book) return 'Error: Book not found.'

      await book.deleteOne()

      return true
    }
  }
}