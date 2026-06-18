import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 100, email: 150, phone: 40, message: 5000 };

const json = (data, status = 200) =>
    new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return json({ error: "Requête invalide." }, 400);
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const message = (body.message || "").trim();
    const honeypot = (body.company || "").trim();

    // Honeypot : un bot remplit ce champ caché → on simule un succès sans rien envoyer.
    if (honeypot) {
        return json({ success: "Message envoyé !" });
    }

    // Validation serveur
    if (!name || !email || !message) {
        return json({ error: "Veuillez remplir le nom, l'email et le message." }, 400);
    }
    if (!EMAIL_REGEX.test(email)) {
        return json({ error: "L'adresse email n'est pas valide." }, 400);
    }
    if (
        name.length > MAX.name ||
        email.length > MAX.email ||
        phone.length > MAX.phone ||
        message.length > MAX.message
    ) {
        return json({ error: "Un des champs dépasse la longueur autorisée." }, 400);
    }

    // Anti-injection d'en-tête : on neutralise les retours-ligne dans le sujet.
    const safeName = name.replace(/[\r\n]+/g, " ");

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER, // expéditeur authentifié → délivrabilité (SPF/DKIM)
        to: process.env.CONTACT_EMAIL,
        replyTo: email, // répondre directement au visiteur
        subject: `Nouveau message du portfolio — ${safeName}`,
        text: `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone || "—"}\n\nMessage :\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return json({ success: "Message envoyé !" });
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email :", error);
        return json({ error: "Une erreur est survenue lors de l'envoi. Réessayez plus tard." }, 500);
    }
}
