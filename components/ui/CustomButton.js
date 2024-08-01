"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const CustomButton = ({
	children,
	onClick,
	type = "button",
	className = '',
	bgWaveColor = 'bg-whiteprimary',
	textColor = 'text-blackprimary',
	hoverTextColor = 'text-blackprimary',
	borderColor = 'before:border-blueprimary',
	BgColor = 'bg-white',
}) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div className="relative mt-5">
			<button
				type={type}
				className={clsx(
					'blob-btn relative z-10 bg-transparent outline-none border-none cursor-pointer rounded-[30px] transition-colors duration-1000 ease-out px-12 py-4',
					className,
					hovered ? '' : textColor,
					{ [hoverTextColor]: hovered },
					'before:border-[2px]',
					borderColor
				)}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				onClick={onClick}
			>
				{children}
				<span className={clsx('blob-btn__inner absolute left-0 top-0 w-full h-full overflow-hidden rounded-[30px] z-[-1]', BgColor)}>
					<motion.span className="blob-btn__blobs relative block h-full filter-ggoo">
						{[...Array(4)].map((_, i) => (
							<motion.span
								key={i}
								className={clsx('blob-btn__blob absolute w-1/4 h-full rounded-full', bgWaveColor)}
								initial={{ y: '150%', scale: 1.4 }}
								animate={{ y: hovered ? '0%' : '150%', scale: 1.4 }}
								transition={{ duration: 0.38, delay: i * 0.08 }}
							/>
						))}
					</motion.span>
				</span>
				<span className={clsx('absolute inset-0 border-[2px] rounded-[30px]', borderColor)}></span>
				<span
					className={clsx('absolute left-[6px] top-[6px] w-full h-full transition-all duration-300 border-[2px] border-transparent rounded-[30px]', {
						[hoverTextColor]: hovered,
					})}
					style={{ transitionDelay: '0.2s' }}
				></span>
			</button>
		</div>
	);
};

export default CustomButton;