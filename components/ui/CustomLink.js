"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprimary focus-visible:ring-offset-2";

const CustomLink = ({
    children,
    href = "#",
    target = "_self",
    className = "",
    bgWaveColor = "bg-whiteprimary",
    textColor = "text-blackprimary",
    hoverTextColor = "text-blackprimary",
    borderColor = "before:border-blueprimary",
    BgColor = "bg-white",
    wrapperClassName = "mt-5",
}) => {
    const [hovered, setHovered] = useState(false);
    const prefersReducedMotion = useReducedMotion();
    const isActive = hovered;

    return (
        <div className={clsx("relative", wrapperClassName)}>
            <Link
                href={href}
                className={clsx(
                    "blob-btn relative z-10 bg-transparent border-none cursor-pointer rounded-[30px] transition-colors duration-1000 ease-out px-12 py-4",
                    focusRing,
                    className,
                    isActive ? "" : textColor,
                    { [hoverTextColor]: isActive },
                    "before:border-[2px]",
                    borderColor
                )}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onFocus={() => setHovered(true)}
                onBlur={() => setHovered(false)}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
            >
                {children}
                <span className={clsx("blob-btn__inner absolute left-0 top-0 w-full h-full overflow-hidden rounded-[30px] z-[-1]", BgColor)}>
                    <motion.span className="blob-btn__blobs relative block h-full filter-ggoo">
                        {[...Array(4)].map((_, i) => (
                            <motion.span
                                key={i}
                                className={clsx("blob-btn__blob absolute w-1/4 h-full rounded-full", bgWaveColor)}
                                initial={{ y: "150%", scale: 1.4 }}
                                animate={{ y: isActive ? "0%" : "150%", scale: 1.4 }}
                                transition={
                                    prefersReducedMotion
                                        ? { duration: 0 }
                                        : { duration: 0.38, delay: i * 0.08 }
                                }
                            />
                        ))}
                    </motion.span>
                </span>
                <span className={clsx("absolute inset-0 border-[2px] rounded-[30px]", borderColor)} />
            </Link>
        </div>
    );
};

export default CustomLink;
