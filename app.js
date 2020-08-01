const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const loginCheck = require('./models/loginCheck')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))


// login page
app.get('/', (req, res) => {
  res.render('index')
})

// welcome page
app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const loginInput = loginCheck(email, password)

  if (loginInput !== '帳號或密碼不正確') {
    res.render('welcome', { loginInput })
  } else {
    res.render('index', { loginInput })
  }
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
