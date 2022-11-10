class OrderViewModel {
    constructor(order) {
        this.orderId = order._id;
        this.shippingInfo = order.shippingInfo;
        this.userId = order.userId;
        this.orderItems = order.orderItems;
        this.paymentInfo = order.paymentInfo;
        this.paidAt = order.paidAt;
        this.itemsPrice = order.itemsPrice;
        this.shippingPrice = order.shippingPrice;
        this.totalPrice = order.totalPrice;
        this.orderStatus = order.orderStatus;
        this.deliveredAt = order.deliveredAt;
        this.createdAt = order.createdAt;
    }
}
module.exports.OrderViewModel= OrderViewModel;