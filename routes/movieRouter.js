const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')

router.get('/', movieController.index)
router.get('/new', movieController.new)
router.post('/', movieController.create)
// router.get('/:id', movieController.show)
// router.get('/:id/edit', movieController.edit)
// router.put('/:id', movieController.update)
// router.destroy('/:id', movieController.destroy)

module.exports = router