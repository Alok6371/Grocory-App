import React from 'react'

const NeedHelp = () => {
    return (
        <div className="max-w-5xl mt-[7vh] mx-auto px-4 py-12">
            <h1 className="text-3xl font-semibold mb-10 text-center">
                Help & Customer Information
            </h1>

            {/* Delivery Information */}
            <section className="mb-12">
                <h2 className="text-2xl font-medium mb-4">Delivery Information</h2>
                <p className="text-gray-600 mb-3">
                    We aim to deliver fresh and high-quality products to your doorstep
                    as quickly as possible. Once your order is confirmed, it is processed
                    immediately and prepared for dispatch.
                </p>
                <p className="text-gray-600 mb-3">
                    Orders are usually delivered within <strong>24–48 hours</strong>,
                    depending on product availability and delivery location. During peak
                    hours or special occasions, delivery time may vary slightly.
                </p>
                <p className="text-gray-600">
                    You will receive order confirmation and delivery updates via SMS
                    or email. Delivery charges, if applicable, are clearly shown during
                    checkout before placing the order.
                </p>
            </section>

            {/* Return & Refund Policy */}
            <section className="mb-12">
                <h2 className="text-2xl font-medium mb-4">Return & Refund Policy</h2>
                <p className="text-gray-600 mb-3">
                    Customer satisfaction is our priority. If you receive a damaged,
                    expired, or incorrect product, you can raise a return request within
                    <strong> 24 hours</strong> of delivery.
                </p>
                <p className="text-gray-600 mb-3">
                    Once your return request is approved, our delivery partner may pick
                    up the item or we may process the refund without pickup, depending on
                    the issue.
                </p>
                <p className="text-gray-600">
                    Refunds are initiated to the original payment method and usually
                    reflect within <strong>5–7 business days</strong>. For Cash on Delivery
                    orders, refunds will be processed via bank transfer or wallet.
                </p>
            </section>

            {/* Payment Methods */}
            <section className="mb-12">
                <h2 className="text-2xl font-medium mb-4">Payment Methods</h2>
                <p className="text-gray-600 mb-3">
                    We offer multiple secure payment options to ensure a smooth and safe
                    checkout experience for our customers.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Credit and Debit Cards (Visa, MasterCard, RuPay)</li>
                    <li>UPI Payments (Google Pay, PhonePe, Paytm, BHIM)</li>
                    <li>Net Banking from major banks</li>
                    <li>Cash on Delivery (available on selected locations)</li>
                </ul>
                <p className="text-gray-600 mt-3">
                    All online payments are processed through trusted and secure payment
                    gateways with encryption to protect your personal and financial data.
                </p>
            </section>

            {/* Track Your Order */}
            <section>
                <h2 className="text-2xl font-medium mb-4">Track Your Order</h2>
                <p className="text-gray-600 mb-3">
                    Tracking your order is simple and transparent. Once your order is
                    shipped, you can view real-time updates from your account.
                </p>
                <p className="text-gray-600 mb-3">
                    Go to the <strong>My Orders</strong> section, select your order, and
                    check the current status such as order confirmed, packed, shipped,
                    or out for delivery.
                </p>
                <p className="text-gray-600">
                    If you face any issues with tracking or delivery, our customer support
                    team is always available to assist you.
                </p>
            </section>
        </div>
    )
}

export default NeedHelp