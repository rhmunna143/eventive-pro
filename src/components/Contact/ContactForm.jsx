import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Name:', name);
        // console.log('Email:', email);
        // console.log('Message:', message);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-white bg-pink-600 text-center p-6 rounded-md mb-5 mt-20">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-600">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-600 focus:border-pink-600"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-600">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-600 focus:border-pink-600"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-600">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-600 focus:border-pink-600"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-300 w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;