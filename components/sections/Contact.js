"use client";

import { useState } from 'react';
import BlobCircle from "../BlobCircle";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CustomButton from '../ui/CustomButton';

const Contact = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [company, setCompany] = useState(""); // honeypot anti-spam (doit rester vide)
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "votre.email@domaine.com";
    const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Demande depuis votre portfolio")}`;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!name) newErrors.name = "Le nom est requis.";
        if (!email) newErrors.email = "L'email est requis.";
        else if (!EMAIL_REGEX.test(email)) newErrors.email = "L'adresse email n'est pas valide.";
        if (!message) newErrors.message = "Le message est requis.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setStatus("Erreur : veuillez corriger les champs ci-dessous.");
            return;
        }

        setErrors({});
        setStatus("Envoi…");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone, message, company }),
            });

            const result = await res.json();
            if (result.error) {
                setStatus(`Erreur : ${result.error}`);
            } else {
                setStatus("Message envoyé !");
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
            }
        } catch {
            setStatus("Erreur : impossible d'envoyer le message. Réessayez plus tard.");
        }
    };
    
    return (
        <div id="say-hi" className="w-full bg-surface relative overflow-hidden">
            <BlobCircle gradientId="grad1" className="absolute -bottom-6/12 z-40 -left-7% w-1000 h-1000 rotate-90" />
            <BlobCircle gradientId="grad2" className="absolute -bottom-7/12 z-40 left-4/12 3xl:-bottom-12/24 6xl:-bottom-18/24 5xl:left-9/24 w-1000 h-1000 4xl:w-1200 4xl:h-1200 6xl:w-[1400px] 6xl:h-[1400px] rotate-90" />
            <BlobCircle gradientId="grad2" className="absolute -bottom-4/12 z-30 -right-4/12 3xl:-bottom-7/24 5xl:-right-7/24 w-1000 h-1000 5xl:w-1200 5xl:h-1200 6xl:w-[1400px] 6xl:h-[1400px] rotate-90" />
            <BlobCircle gradientId="grad2" className="absolute -bottom-5/12 z-40 -right-3/12 3xl:-right-5/24 3xl:-bottom-9/24 5xl:-bottom-7/24 6xl:-bottom-8/24 6xl:-right-2/24 w-750 h-750" />
            <BlobCircle gradientId="grad5" className="absolute -bottom-1/12 z-30 -left-2/12 5xl:-left-3/24 w-500 h-500 rotate-[145deg]" />
            <BlobCircle gradientId="grad2" className="absolute -bottom-6/12 z-20 left-1/12 w-1200 h-1200 6xl:w-[1400px] 6xl:h-[1400px] rotate-90" />
            <motion.div ref={ref} initial={{ opacity: 0, y: -100 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className="container text-center pt-44 pb-750">
                <h2 className="font-rubik font-bold text-xl md:text-2xl leading-loose">
                    Écrivez-moi,<br /> et explorons ensemble votre projet. <span>✏️</span>
                </h2>
                <div className="mt-12 w-full md:w-10/12 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
                    <form onSubmit={handleSubmit} className="md:col-span-2 w-full" aria-labelledby="contact-form-title">
                        <h2 id="contact-form-title" className="sr-only">Formulaire de contact</h2>

                        {/* Honeypot anti-spam : invisible et hors tabulation pour les humains, rempli par les bots */}
                        <div className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                            <label htmlFor="company">Ne pas remplir</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                tabIndex={-1}
                                autoComplete="off"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>

                        <label htmlFor="name" className="sr-only">Nom</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full box-border border border-blackprimary rounded min-h-11 placeholder:text-blackprimary pl-4 shadow-lg"
                            placeholder="Nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            aria-required="true"
                            aria-describedby={errors.name ? "name-error" : null}
                        />
                        {errors.name && (
                            <span id="name-error" className="text-red-600">
                                {errors.name}
                            </span>
                        )}
                        <div className="flex flex-col md:flex-row md:justify-around items-start md:items-center md:gap-5 lg:gap-10 md:shrink mt-4">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="basis-full md:basis-1/2 w-full md:w-1/2 box-border border border-blackprimary rounded min-h-11 placeholder:text-blackprimary pl-4 shadow-lg"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-required="true"
                                aria-describedby={errors.email ? "email-error" : null}
                            />
                            {errors.email && (
                                <span id="email-error" className="text-red-600">
                                    {errors.email}
                                </span>
                            )}
                            <label htmlFor="phone" className="sr-only">Téléphone</label>
                            <input
                                type="tel"
                                id="phone"
                                className="mt-4 md:mt-0 basis-full md:basis-1/2 w-full md:w-1/2 box-border border border-blackprimary rounded min-h-11 placeholder:text-blackprimary pl-4 shadow-lg"
                                placeholder="Téléphone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                aria-required="false"
                            />
                        </div>
                        
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="8"
                            cols="2"
                            className="w-full box-border border border-blackprimary rounded min-h-11 mt-4 placeholder:text-blackprimary pl-4 pt-3 shadow-lg"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            aria-required="true"
                            aria-describedby={errors.message ? "message-error" : null}
                        ></textarea>
                        {errors.message && (
                            <span id="message-error" className="text-red-600">
                                {errors.message}
                            </span>
                        )}
                        <CustomButton type="submit"
                            bgWaveColor="bg-blackprimary"
                            textColor="text-blackprimary"
                            borderColor="before:border-blackprimary"
                            BgColor="bg-transparent"
                            hoverTextColor="text-surface"
                            className="box-border border px-8 rounded-xl mt-2 py-2">
                            Envoyer
                        </CustomButton>
                    </form>

                    <aside className="md:col-span-1 w-full border border-blackprimary rounded-xl p-6 shadow-lg text-left bg-surface-2/70 backdrop-blur-sm">
                        <h3 className="font-rubik font-bold text-lg">Contact direct</h3>
                        <p className="mt-2 text-sm opacity-80">
                            Pas envie de remplir le formulaire ?
                            <br />
                            Envoyez-moi un email :
                        </p>
                        <a
                            href={mailtoHref}
                            className="mt-3 inline-block font-semibold underline underline-offset-4 hover:opacity-70 transition break-all"
                        >
                            {contactEmail}
                        </a>
                        <p className="mt-4 text-xs opacity-70">
                            (Vous pouvez aussi préciser votre dispo et un lien vers votre brief.)
                        </p>
                    </aside>
                </div>
                {status && (
                    <p
                        role="status"
                        aria-live="polite"
                        className={`mt-4 p-4 rounded-lg inline-block shadow text-center border ${
                        status.startsWith("Erreur") ? "bg-red-100 text-red-800 border-red-200" : "bg-green-100 text-green-800 border-green-200"
                    }`}
                    >
                    {status}
                    </p>
                )}
            </motion.div>
        </div>
    );
};

export default Contact;
