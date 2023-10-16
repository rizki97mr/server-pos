const router = require('express').Router();
const { police_check } = require('../../../middlewares');
const cartController = require('../../controller/cart/controller');

router.put(
    '/carts',
    police_check('update', 'Cart'),
    cartController.update
)

router.get(
    '/carts',
    police_check('read', 'Cart'),
    cartController.index
)

module.exports = router