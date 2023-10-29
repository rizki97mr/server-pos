const { subject } = require('@casl/ability');
const { policyFor } = require('../../../utils');
const Invoice = require('../../model/invoice/model');
const OrderItems = require('../../model/order-item/model')


const show = async(req, res, next) => {
    try {
        let {order_id} = req.params;
        let invoice = await Invoice
        .findOne({order: order_id})
        .populate('order')
        .populate('user')

        let orderItems = await OrderItems.find({order: order_id})
        invoice.order.order_items = orderItems

        console.log(invoice)
        let policy = policyFor(req.user);
        let subjectInvoice = subject('Invoice', {...invoice, user_id: invoice.user._id});
        delete invoice.user
        if(!policy.can('read', subjectInvoice)){
            return res.json({
                error: 1,
                message: `Anda tidak memiliki akses untuk melihat invoice ini.`
            });
        }

    return res.json(invoice);
    } catch (err) {
        console.log(err)
        return res.json({
            error: 1,
            message: `Error when getting invoice.`
        });
    }
}

module.exports = {
    show
}