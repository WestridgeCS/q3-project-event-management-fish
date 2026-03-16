import express from 'express'

import Show from '../models/Show.js'
import User from '../models/User.js'
import Comment from '../models/Comment.js'

import requireLogin from '../middleware/requireLogin.js'
import requireAdmin from '../middleware/requireAdmin.js'

const router = express.Router()

import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"uploads/showIcons")
  },

  filename: (req,file,cb)=>{
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

// Admin dashboard
router.get('/', requireLogin, requireAdmin, (req, res) => {
  res.render('admin/dashboard')
})

// Shows dashboard
router.get('/shows', requireLogin, requireAdmin, async (req, res) => {
  const shows = await Show.find()

  res.render('admin/shows', { shows })
})


// Members dashboard
router.get('/members', requireLogin, requireAdmin, async (req, res) => {
  const members = await User.find({ role: 'member' })
  const data = []

  for (let member of members) {
    const comments = await Comment
      .find({ member: member._username })//check if messed up
      .populate('show')

    const watched = comments.filter(c => c.interested)

    data.push({
      member,
      commentCount: comments.length,
      watched
    })

  }

  res.render('admin/members', { data })
})

// Member detail page
router.get('/members/:id', requireLogin, requireAdmin, async (req, res) => {
  const member = await User.findById(req.params.id)

  const comments = await Comment
    .find({ member: req.params.id })
    .populate('show')

  res.render('admin/memberDetail', {
    member,
    comments
  })
})

// GET - Add a new show
router.get('/shows/new', requireLogin, requireAdmin, (req,res)=>{
  res.render('admin/newShow')
})

// GET - Edit a show
router.get('/shows/:id/edit', requireLogin, requireAdmin, async (req,res)=>{
  const show = await Show.findById(req.params.id)
  res.render('admin/editShow',{show})
})

// POST - Add a new show
router.post('/shows', requireLogin, requireAdmin, upload.single("icon"), async (req,res)=>{
  const {
    name,
    description,
    watched,
    watchTime,
    comments
  } = req.body

  const show = new Show({
    name,
    description,
    watched,
    watchTime,
    comments
  })

  if (req.file) {
    show.iconPath = "/uploads/showIcons/" + req.file.filename
  }

  await show.save()

  res.redirect("/admin/shows")
})

// POST - Edit a show
router.post('/shows/:id', requireLogin, requireAdmin, upload.single("icon"), async (req,res)=>{
  const show = await Show.findById(req.params.id)

  show.name = req.body.name
  show.description = req.body.description
  show.watched = req.body.watched
  show.watchTime = req.body.watchTime
  show.comments = req.body.comments

  if (req.file) {
    show.iconPath = "/uploads/showIcons/" + req.file.filename
  }

  await show.save()

  res.redirect("/admin/shows")
})

// Delete a show
router.post('/shows/:id/delete', requireLogin, requireAdmin, async (req,res)=>{
  await Show.findByIdAndDelete(req.params.id)
  res.redirect("/admin/shows")
})

export default router