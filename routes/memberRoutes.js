import express from 'express'

import show from '../models/Show.js'
import comment from '../models/Comment.js'

import requireLogin from '../middleware/requireLogin.js'

const router = express.Router()


// Member dashboard
router.get('/', requireLogin, async (req, res) => {
  const shows = await show.find()
  res.render('member/dashboard', { shows })
})

// View show page
router.get('/show/:id', requireLogin, async (req, res) => {
  const shows = await Show.findById(req.params.id)

  const comment = await comment.findOne({
    member: req.session.username,
    show: req.params.id
  })

  res.render('member/show', {
    shows,
    comment
  })

})


// Save comment notes
router.post('/show/:id', requireLogin, async (req, res) => {
  const { comments, watched } = req.body

  let comment = await comment.findOne({
    member: req.session.username,
    show: req.params.id
  })

  if (!comment) {
    comment = new comment({
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
  const comments = await comment
    .find({ member: req.session.username })
    .populate('show')

  res.render('member/profile', {
    comments
  })
})

export default router