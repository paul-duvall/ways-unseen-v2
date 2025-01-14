"use client"
import styles from "./page.module.css"

export default function Contact() {
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
        data[key] = value.toString();
});
        await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data).toString(),
        });
        // Success and error handling ...
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
                    you can message me on <a href="ways-unseen.bsky.social" target="_blank">Bluesky</a> or <a href="https://www.instagram.com/ways.unseen" target="_blank">Instagram</a>. 
                </p>
                <form name="contact" onSubmit={handleFormSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <label for="name">Name:</label>
                    <input id="name" name="name" type="text" required />
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="email" required />
                    <label for="message">Message:</label>
                    <input id="message" name="message" type="text" required />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </main>
    </div>
    );
}