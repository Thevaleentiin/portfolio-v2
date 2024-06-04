
const Contact = () => {
    return (
        <div className="container">
            <h2>Écrivez-moi, appelez-moi,<br />
                et échangeons sur votre projet.✏️
            </h2>
            <form action="">
                <input type="text" placeholder="Nom" />
                <input type="email" placeholder="Email" />
                <input type="phone" placeholder="Téléphone" />
                <textarea name="message" id="message"></textarea>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
}

export default Contact;