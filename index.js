const path = require('path')
const hbs = require('hbs')
const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('Resume')
  })

app.use(express.json())
app.listen(port, () => console.log(`App running on port ${port}`))