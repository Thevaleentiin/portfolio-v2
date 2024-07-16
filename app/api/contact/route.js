const nodemailer = require('nodemailer');

export async function POST(request) {
    const { name, email, phone, message } = await request.json();
    
    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
    }
    
    // Configurez Nodemailer avec vos informations SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });
    
    const mailOptions = {
        from: email,
        to: process.env.CONTACT_EMAIL,
        subject: `New contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };
    
    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: 'Email sent successfully' }));
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
    }
}
