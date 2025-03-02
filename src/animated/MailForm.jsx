import { useState } from 'react';

export default function EmailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!/^[a-zA-Z ]+$/.test(name)) {
            alert('Name should only contain letters and spaces.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Email sent successfully!');
    };

    return (
        <div className="bg-transparent text-gray-200  flex items-center justify-center p-0">
            <div className="w-96 h-96 bg-transparent p-1 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Send an Email</h2>
                <form onSubmit={validateForm}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="example@mail.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            rows="2"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="Write your message..."
                            required
                        ></textarea>
                        <div className='flex justify-center items-center'>
                        <button 
                        type="submit"
                        className=" p-1 px-3 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-lg transition">
                        Send Email
                    </button>
                        </div>
                        
                    </div>
                 
                    
                </form>
            </div>
        </div>
    );
}
