function loginCheck(email, password) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  const userLogin = users.find(element =>
    element.email === email && element.password === password
  )

  if (userLogin) {
    return `${userLogin.firstName}`
  } else {
    return '帳號或密碼不正確'
  }
}
module.exports = loginCheck
