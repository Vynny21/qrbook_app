import mongoose from "mongoose"

const BooksSchema = new mongoose.Schema({
  isbn: String,
  name: String,
  coverImage: String,
  price: Number,
  promotionalPrice: Number,
  rating: Number,
  score: Number,
  scores: [{ name: String, value: Number }],
  tecnologies: [String],
  requirements: [String],
  description: String,
})

export default mongoose.model('Books', BooksSchema)