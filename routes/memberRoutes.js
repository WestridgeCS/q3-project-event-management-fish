import express from 'express'

import Show from '../models/Show.js'
import Comment from '../models/Comment.js'

import requireLogin from '../middleware/requireLogin.js'

const router = express.Router()


// Member dashboard
router.get('/', requireLogin, async (req, res) => {
  const shows = await Show.find()
  res.render('member/dashboard', { shows })
})

// View show page
router.get('/show/:id', requireLogin, async (req, res) => {
  const show = await Show.findById(req.params.id)

  const comments = await Comment.findOne({
    member: req.session.username,
    show: req.params.id
  })

  res.render('member/show', {
    show,
    comments
  })

})


// Save comment notes
router.post('/show/:id', requireLogin, async (req, res) => {
  const { comments, watched } = req.body

  let comment = await Comment.findOne({
    member: req.session.username,
    show: req.params.id
  })

  if (!comment) {
    comment = new Comment({
      member: req.session.username,
      show: req.params.id
    })
  }

  comment.comments = comments
  comment.watched = watched === 'on'

  await comment.save()

  res.redirect('/member')
})

// Member profile page
router.get('/profile', requireLogin, async (req, res) => {
  const comments = await Comment
    .find({ member: req.session.username })
    .populate('show')

  res.render('member/profile', {
    comments
  })
})

export default router