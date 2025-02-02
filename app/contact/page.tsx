"use client"

import { useRef, useState } from "react";
import styles from "./page.module.css"

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [successMessage, setSuccessMessage] = useState<string>("")

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
        data[key] = value.toString();
});
        try {
            const response = await fetch("/__forms.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(data).toString(),
              });

            if (response.ok) {
                setSuccessMessage("Your message has been successfully sent!");
                formRef.current?.reset(); // Clear the form only if submission is successful
            } else {
                setSuccessMessage("Something went wrong. Please try again later.");
            }
        } catch {
            setSuccessMessage("An error occurred. Please try again.");
        }
        
        // Clear the form
        formRef.current?.reset();
      };

    return (
    <div className={styles.page}>
        <main className={ styles.contact }>
            <section className={ 'section-container' }>
                <h1>Contact</h1>
                <p>
                    If you want to discuss a project or make an enquiry about a commission,
                    you can email me or fill in the form below.
                </p>
                <p>
                    If you would like to get in contact you can email me at <a href="mailto:ways.unseen@gmail.com">ways.unseen@gmail.com</a> or 
                    you can message me on <a href="https://bsky.app/profile/ways-unseen.bsky.social" target="_blank">Bluesky</a> or <a href="https://www.instagram.com/ways.unseen" target="_blank">Instagram</a>. 
                </p>
                <form
                    ref={formRef}
                    name="contact"
                    onSubmit={handleFormSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className={styles['contact-field']}>
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" required />
                    </div>
                    <div className={styles['contact-field']}>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" required />
                    </div>        
                    <div className={styles['contact-field']}>
                        <label htmlFor="message">Message</label>
                        <input id="message" name="message" type="text" required />
                    </div>  
                    <div className={styles.button}>
                        <button type="submit">Submit</button>
                    </div>          
                </form>
                {successMessage && (
                        <p className={styles.successMessage}>{successMessage}</p>
                    )}
            </section>
        </main>
    </div>
    );
}