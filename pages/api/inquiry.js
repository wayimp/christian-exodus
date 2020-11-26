import { connectToDatabase } from '../../private/mongodb'
const inquiryModel = require('../../models/inquiry')
const { validate, email } = require('../../private/notify')

const getCollectionInstance = async (db, collection) => {
  return new Promise((resolve, reject) => {
    db.collection(collection, (err, collectionInstance) => {
      if (err) reject(err)
      resolve(collectionInstance)
    })
  })
}

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const { client, db } = await connectToDatabase()

    const collectionInstance = await getCollectionInstance(db, 'inquiries')

    let doc = new inquiryModel(req.body)

    await collectionInstance.insertOne(doc)

    await client.close()

    // Send email with result
    const inquiryEmail = doc.email
    if (validate(inquiryEmail)) {
      email(
        inquiryEmail,
        'Christian Exodus Inquiry Receipt',
        'Thank you for your interest in Christian Exodus. Your inquiry will be reviewed and considered for a potentially suitable community.'
      )

      email(
        'keith@christianexodus.org',
        'Christian Exodus Inquiry Received',
        JSON.stringify(doc)
      )
    }
  }

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end()
}
