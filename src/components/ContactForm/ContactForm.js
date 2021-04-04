import React from "react";
import emailjs from "emailjs-com";

import "./ContactForm.css";

function ContactForm({ english }) {
    const submitHandler = async (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "eazocar_mail",
                "template_contact",
                e.target,
                "user_LWs3DqAHhzYTQm8wsql3q"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        Array.from(document.querySelectorAll("input")).forEach(
            (input) => (input.value = "")
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            (textarea) => (textarea.value = "")
        );
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        {english ? 'Name' : 'Nombre'}
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        autoComplete="off"
                        name="name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        {english ? 'Email' : 'Correo Electrónico'}
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        autoComplete="off"
                        name="email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        {english ? 'Message' : 'Mensaje'}
                    </label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows={3}
                        name="message"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-gray col-12">
                    {english ? 'Send' : 'Enviar'}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
