const express = require('express')
const router = express.Router()
const passport = require('../helpers/passport')
const { UserController, ProductController } = require('../controllers')
const { authentication } = require('../middlewares/auth')
const sendEmail = require('../helpers/mailer')

/**
 * =========================
 * TEST EMAIL
 * =========================
 */


/**
 * =========================
 * PRODUCT ROUTES
 * =========================
 */

// Public
router.get('/', ProductController.find)
router.get('/:id', ProductController.findById)

// Protected (harus login dulu)
router.post('/', authentication, ProductController.create)

router.put(
  '/:id',
  authentication,
  authorization,
  ProductController.update
)

router.delete(
  '/:id',
  authentication,
  authorization,
  ProductController.delete
)

module.exports = router