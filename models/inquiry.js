const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inquirySchema = new Schema(
  {
    _id: { type: String, required: false },
    name: { type: String, required: false },
    email: { type: String, required: false },
    relocate: { type: String, required: false },
    region: { type: String, required: false },
    family: { type: String, required: false },
    homeschooling: { type: String, required: false },
    area: { type: String, required: false },
    spending: { type: String, required: false },
    faith: { type: String, required: false },
    livlihood: { type: String, required: false },
    notes: { type: String, required: false }
  },
  { collection: 'inquiries' }
)

module.exports = mongoose.model('inquiries', inquirySchema)
