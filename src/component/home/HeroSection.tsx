import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { PiCursorClickBold } from 'react-icons/pi';
import { PiCursorClick } from 'react-icons/pi';

const HeroSection = () => {
	return (
		<div className='relative w-full py-[4rem] text-dark'>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='h-screen bg-hero bg-cover bg-center rounded-[1.5rem] p-4 sm:p-10 grid items-end'>
					{/* text */}
					<div className='bg-light w-full ms:w-fit p-5 rounded-2xl'>
						<div>
							{/* dates */}
							<div>
								{/* date */}
								<div className='border-[1.5px] border-dark bg-dark text-light rounded-full px-3 py-0.5 w-fit'>
									<p className='text-sm font-semibold'>Dec 04 2023</p>
								</div>
							</div>

							{/* categories */}
							<div className='flex items-center gap-2 mt-3'>
								{/* category */}
								<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
									<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
									<p className='text-sm font-semibold'>Technology</p>
								</div>

								<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
									<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
									<p className='text-sm font-semibold'>Travel</p>
								</div>
							</div>
						</div>
						<h1 className='text-lg sm:text-2xl ms:text-3xl font-semibold w-full ms:w-[30rem] mt-5 a'>
							The Impact of Technology on the Workplace: How Technology is
							Changing
						</h1>

						<div className='flex items-center justify-between mt-5'>
							{/* author */}
							<div className='flex items-center gap-4'>
								{/* image */}
								<div className='w-[2.5rem] aspect-square rounded-full overflow-hidden'>
									<img className='w-full h-full' src='/bg.jpg' alt='' />
								</div>

								{/* name */}
								<p className='font-semibold'>qi_beekay</p>
							</div>

							{/* icon */}
							<div className=' bg-dark text-white aspect-square w-[2.4rem] rounded-full grid items-center justify-center'>
								<div>
									<PiCursorClick size={20} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
