"use client"

export default function Contact() {
    const handleFormSubmit = async (event) => {
        console.log(1)
        console.log(event)
        event.preventDefault();
        const formData = new FormData(event.target);
        await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });
        // Success and error handling ...
      };

    return (
    // className={styles.page}
    <div>
        <main>
            <section className={ 'section-container' }>
                <h1>Commissions</h1>
                <form name="contact" onSubmit={handleFormSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <input name="query" type="text" />
                    <button type="submit">Search</button>
                </form>
            </section>
        </main>
    </div>
    );
}