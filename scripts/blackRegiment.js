const { writeFile } = require('fs').promises
const url = 'https://chuckbaldwinlive.com/Resources/BlackRegiment.aspx'
const filePathHtml = __dirname + '/blackRegiment.html'
const filePathJson = __dirname + '/blackRegiment.json'
const puppeteer = require('puppeteer')
const fs = require('fs')

const download = async () => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, {
      timeout: 0,
      waitUntil: 'networkidle2'
    })

    let loadedPage = await page.evaluate(() => document.body.innerHTML)

    writeFile(filePathHtml, loadedPage)

    await browser.close()
    return
  } catch (err) {
    console.error(err)
  }
}

const parse = async () => {
  const loadedPage = fs.readFileSync(filePathHtml).toString()
  const contacts = loadedPage.match(/<p><strong>(.+?)<\/p>/gms)
  const parsed = contacts
    .map(contact => {
      const address = contact.match(/Address:\s(.+?)\,\s(.+?)\,\s([A-Z]{2})/)
      if (address) {
        const street = address[1]
        const city = address[2]
        const state = address[3]
        return { contact, street, city, state }
      }
    })
    .filter(noNull => noNull)
  writeFile(filePathJson, JSON.stringify(parsed))
}

const fn = async () => {
  //await download()
  await parse()
}

fn()
