"use client"

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