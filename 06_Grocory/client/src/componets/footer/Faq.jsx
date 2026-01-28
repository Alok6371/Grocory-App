import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
const faqsData = [
    {
        question: 'How do I place an order?',
        answer:
            'You can place an order by browsing products, adding them to your cart, and completing the checkout process using your preferred payment method.',
    },
    {
        question: 'What is the delivery time?',
        answer:
            'Orders are usually delivered within 24–48 hours depending on your location and product availability.',
    },
    {
        question: 'Can I cancel my order?',
        answer:
            'Yes, you can cancel your order before it is shipped. Once shipped, cancellation may not be possible.',
    },
    {
        question: 'What payment methods are accepted?',
        answer:
            'We accept Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery for selected locations.',
    },
    {
        question: 'How do refunds work?',
        answer:
            'Refunds are processed to the original payment method within 5–7 business days after approval.',
    },
    {
        question: 'How can I track my order?',
        answer:
            'Go to the “My Orders” section in your account to track real-time updates of your order.',
    },
]
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 mt-[7vh]">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold text-center mb-10"
            >
                Frequently Asked Questions
            </motion.h1>

            <div className="space-y-4">
                {faqsData.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border rounded-lg p-4 cursor-pointer bg-white shadow-sm"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium">{faq.question}</h3>
                            <span className="text-xl font-bold">
                                {activeIndex === index ? '−' : '+'}
                            </span>
                        </div>

                        <div>
                            {activeIndex === index && (
                                <motion.p
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-600 mt-3 overflow-hidden"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Extra Help Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 text-center"
            >
                <p className="text-gray-600">
                    Still have questions? Our support team is here to help you anytime.
                </p>
                <p className="font-medium mt-2">
                    Email us at <span className="text-green-600">support@yourapp.com</span>
                </p>
            </motion.div>
        </div>
    )
}

export default Faq