import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
    const url = "https://js2-ecommerce-api.vercel.app/api/messages"

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData(data => {
            return {
                ...data,
                [e.target.id]: e.target.value
            }
        });
    }

    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFeedback({
            text: '',
            type: ''
        });

        try {
            const res = await axios.post(url, formData);
            setFeedback({
                text: 'Ditt meddelande har skickats!',
                type: 'success'
            });
            setFormData({ 
                name: '', 
                email: '', 
                message: '' 
            });
        } 

        catch (error) {
            console.error('Error submitting form:', error);
            setFeedback({
                text: 'Något gick fel! Försök igen.',
                type: 'danger'
            });
        } 
        
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="contact">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-3 py-3">
                    <input id="name" type="text" value={formData.name} onChange={handleChange} className="p-3 w-100" placeholder="Namn" required></input>
                    <input id="email" type="email" value={formData.email} onChange={handleChange} className="p-3 w-100" placeholder="Mejladress" required></input>               
                    <textarea id="message" value={formData.message} onChange={handleChange} className="p-3 w-100" placeholder="Ditt meddelande" required></textarea>
        
                    {feedback.text && (
                        <div className={`alert alert-${feedback.type} text-center text-${feedback.type}`} role="alert">
                            {feedback.text}
                    </div>
                    )}

                    <div className="text-center d-flex flex-column">
                        <button id="submitButton" className="btn btn-primary py-3" disabled={loading}>{loading ? 'Skickar...' : 'Skicka meddelande'}</button>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default ContactForm
