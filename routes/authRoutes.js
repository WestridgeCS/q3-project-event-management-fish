import express from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User.js'

const router = express.Router()

// Login page
router.get('/', (req, res) => {
  res.redirect('/login')
})

// Login page
router.get('/login', (req, res) => {
  res.render('auth/login')
})

// Member login
router.post('/login/member', async (req, res) => {
  //const users = await User.find();
  //console.log(users)
  const { name, username } = req.body
 console.log(req.body)
  const user = await User.findOne({
    name,
    username,
    role: 'member'
  })
  
  if (!user) {
    return res.redirect('/login')
  }

  req.session.userId = user._id 
  req.session.role = 'member'
  console.log(req.session)
  res.redirect('/member')
})

// Admin login
router.post('/login/admin', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({
    email,
    role: 'admin'
  })

  if (!user) {
    return res.redirect('/login')
  }

  const valid = await bcrypt.compare(password, user.passwordHash)

  if (!valid) {
    console.log("Incorrect login");
    return res.redirect('/login');
  }

  req.session.userId = user._id
  req.session.role = 'admin'

  res.redirect('/admin')
})

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login')
  })
})

// Admin registration page (invite only)
router.get('/admin/register', (req, res) => {
  if (req.query.token !== process.env.ADMIN_INVITE_TOKEN) {
    return res.status(403).send("Unauthorized")
  }

  res.render('auth/registerAdmin', {
    token: req.query.token
  })
})


// Create admin account
router.post('/admin/register', async (req, res) => {
  if (req.body.token !== process.env.ADMIN_INVITE_TOKEN) {
    return res.status(403).send("Unauthorized")
  }

  const { name, email, password } = req.body

  const existing = await User.findOne({ email })

  if (existing) {
    return res.send("Admin already exists with that email.")
  }

  const hash = await bcrypt.hash(password, 10)

  const admin = new User({
    name,
    email,
    passwordHash: hash,
    role: "admin"
  })

  await admin.save()

  res.redirect('/login')
})

export default router