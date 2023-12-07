import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { PiCursorClick } from 'react-icons/pi';
import { RecentSide } from '..';

const Recommended = () => {
	return (
		<div className='w-full relative pb-[4rem]'>
			<div className='max-w-6xl mx-auto px-4'>
				{/* header */}
				<div className='mb-5'>
					<h1 className='text-center font-semibold xs:text-2xl sm:text-4xl md:text-5xl flex items-baseline gap-2'>
						Recent Posts
						<Link href={'/'} className='text-[12px] flex items-center gap-2'>
							See all posts <BsArrowRight />
						</Link>
					</h1>
				</div>

				{/* news */}
				<div className='flex flex-col lg:flex-row gap-10'>
					{/* grids */}
					<div className='grid sm:grid-cols-2 gap-4 w-full'>
						{/* grid-1 */}
						<div className=' hover:bg-white hover:shadow-md p-2 pb-7 relative duration-500 ease-in-out'>
							<div>
								{/* image */}
								<div>
									<div className='h-[12rem]'>
										<img className='w-full h-full' src='/bg.jpg' alt='' />
									</div>
								</div>

								{/* categories */}
								<div className='flex items-center gap-2 my-5'>
									{/* category */}
									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Technology</p>
									</div>

									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Travel</p>
									</div>
								</div>

								{/* h1 */}
								<div className='flex items-center gap-3'>
									{/* line */}
									<div className='h-[3rem] w-1.5 bg-[rgb(123,0,211)]'></div>

									{/* text */}
									<h1 className='font-semibold w-full ms:w-[30rem] a'>
										The Impact of Technology on the Workplace: How Technology is
										Changing
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center justify-between mt-3'>
									{/* author */}
									<div className='flex items-center gap-4'>
										{/* image */}
										<div className='w-[2.5rem] aspect-square rounded-full overflow-hidden'>
											<img className='w-full h-full' src='/bg.jpg' alt='' />
										</div>

										{/* name */}
										<p className='font-semibold'>qi_beekay</p>
									</div>
								</div>

								{/* icon */}
								<div className=' bg-dark text-white aspect-square w-[2rem] rounded-full grid items-center justify-center absolute top-[10rem] right-4'>
									<div>
										<PiCursorClick size={18} />
									</div>
								</div>

								{/* date */}
								<div className='border-[1.5px] border-dark bg-dark text-light rounded-full px-3 py-0.5 w-fit absolute top-[10.7rem] left-3'>
									<p className='text-[9px] font-semibold'>Dec 04 2023</p>
								</div>
							</div>
						</div>

						{/* grid-2 */}
						<div className=' hover:bg-white hover:shadow-md p-2 pb-7 relative duration-500 ease-in-out'>
							<div>
								{/* image */}
								<div>
									<div className='h-[12rem]'>
										<img className='w-full h-full' src='/bg1.jpg' alt='' />
									</div>
								</div>

								{/* categories */}
								<div className='flex items-center gap-2 my-5'>
									{/* category */}
									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Technology</p>
									</div>

									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Travel</p>
									</div>
								</div>

								{/* h1 */}
								<div className='flex items-center gap-3'>
									{/* line */}
									<div className='h-[3rem] w-1.5 bg-[#7b00d3]'></div>

									{/* text */}
									<h1 className='font-semibold w-full ms:w-[30rem] a'>
										The Impact of Technology on the Workplace: How Technology is
										Changing
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center justify-between mt-3'>
									{/* author */}
									<div className='flex items-center gap-4'>
										{/* image */}
										<div className='w-[2.5rem] aspect-square rounded-full overflow-hidden'>
											<img className='w-full h-full' src='/bg.jpg' alt='' />
										</div>

										{/* name */}
										<p className='font-semibold'>qi_beekay</p>
									</div>
								</div>

								{/* icon */}
								<div className=' bg-dark text-white aspect-square w-[2rem] rounded-full grid items-center justify-center absolute top-[10rem] right-4'>
									<div>
										<PiCursorClick size={18} />
									</div>
								</div>

								{/* date */}
								<div className='border-[1.5px] border-dark bg-dark text-light rounded-full px-3 py-0.5 w-fit absolute top-[10.7rem] left-3'>
									<p className='text-[9px] font-semibold'>Dec 04 2023</p>
								</div>
							</div>
						</div>

						{/* grid-3 */}
						<div className=' hover:bg-white hover:shadow-md p-2 pb-7 relative duration-500 ease-in-out'>
							<div>
								{/* image */}
								<div>
									<div className='h-[12rem]'>
										<img className='w-full h-full' src='/bg2.jpg' alt='' />
									</div>
								</div>

								{/* categories */}
								<div className='flex items-center gap-2 my-5'>
									{/* category */}
									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Technology</p>
									</div>

									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Travel</p>
									</div>
								</div>

								{/* h1 */}
								<div className='flex items-center gap-3'>
									{/* line */}
									<div className='h-[3rem] w-1.5 bg-[#7b00d3]'></div>

									{/* text */}
									<h1 className='font-semibold w-full ms:w-[30rem] a'>
										The Impact of Technology on the Workplace: How Technology is
										Changing
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center justify-between mt-3'>
									{/* author */}
									<div className='flex items-center gap-4'>
										{/* image */}
										<div className='w-[2.5rem] aspect-square rounded-full overflow-hidden'>
											<img className='w-full h-full' src='/bg.jpg' alt='' />
										</div>

										{/* name */}
										<p className='font-semibold'>qi_beekay</p>
									</div>
								</div>

								{/* icon */}
								<div className=' bg-dark text-white aspect-square w-[2rem] rounded-full grid items-center justify-center absolute top-[10rem] right-4'>
									<div>
										<PiCursorClick size={18} />
									</div>
								</div>

								{/* date */}
								<div className='border-[1.5px] border-dark bg-dark text-light rounded-full px-3 py-0.5 w-fit absolute top-[10.7rem] left-3'>
									<p className='text-[9px] font-semibold'>Dec 04 2023</p>
								</div>
							</div>
						</div>

						{/* grid-4 */}
						<div className=' hover:bg-white hover:shadow-md p-2 pb-7 relative duration-500 ease-in-out'>
							<div>
								{/* image */}
								<div>
									<div className='h-[12rem]'>
										<img className='w-full h-full' src='/bg3.jpg' alt='' />
									</div>
								</div>

								{/* categories */}
								<div className='flex items-center gap-2 my-5'>
									{/* category */}
									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Technology</p>
									</div>

									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Travel</p>
									</div>
								</div>

								{/* h1 */}
								<div className='flex items-center gap-3'>
									{/* line */}
									<div className='h-[3rem] w-1.5 bg-[#7b00d3]'></div>

									{/* text */}
									<h1 className='font-semibold w-full ms:w-[30rem] a'>
										The Impact of Technology on the Workplace: How Technology is
										Changing
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center justify-between mt-3'>
									{/* author */}
									<div className='flex items-center gap-4'>
										{/* image */}
										<div className='w-[2.5rem] aspect-square rounded-full overflow-hidden'>
											<img className='w-full h-full' src='/bg.jpg' alt='' />
										</div>

										{/* name */}
										<p className='font-semibold'>qi_beekay</p>
									</div>
								</div>

								{/* icon */}
								<div className=' bg-dark text-white aspect-square w-[2rem] rounded-full grid items-center justify-center absolute top-[10rem] right-4'>
									<div>
										<PiCursorClick size={18} />
									</div>
								</div>

								{/* date */}
								<div className='border-[1.5px] border-dark bg-dark text-light rounded-full px-3 py-0.5 w-fit absolute top-[10.7rem] left-3'>
									<p className='text-[9px] font-semibold'>Dec 04 2023</p>
								</div>
							</div>
						</div>

						{/* grid-4 */}
						<div className=' hover:bg-white hover:shadow-md p-2 pb-7 relative duration-500 ease-in-out'>
							<div>
								{/* image */}
								<div>
									<div className='h-[12rem]'>
										<img className='w-full h-full' src='/bg3.jpg' alt='' />
									</div>
								</div>

								{/* categories */}
								<div className='flex items-center gap-2 my-5'>
									{/* category */}
									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Technology</p>
									</div>

									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Travel</p>
									</div>
								</div>

								{/* h1 */}
								<div className='flex items-center gap-3'>
									{/* line */}
									<div className='h-[3rem] w-1.5 bg-[#7b00d3]'></div>

									{/* text */}
									<h1 className='font-semibold w-full ms:w-[30rem] a'>
										The Impact of Technology on the Workplace: How Technology is
										Changing
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center justify-between mt-3'>
									{/* author */}
									<div className='flex items-center gap-4'>
										{/* image */}
										<div className='w-[2.5rem] aspect-square rounded-full overflow-hidden'>
											<img className='w-full h-full' src='/bg.jpg' alt='' />
										</div>

										{/* name */}
										<p className='font-semibold'>qi_beekay</p>
									</div>
								</div>

								{/* icon */}
								<div className=' bg-dark text-white aspect-square w-[2rem] rounded-full grid items-center justify-center absolute top-[10rem] right-4'>
									<div>
										<PiCursorClick size={18} />
									</div>
								</div>

								{/* date */}
								<div className='border-[1.5px] border-dark bg-dark text-light rounded-full px-3 py-0.5 w-fit absolute top-[10.7rem] left-3'>
									<p className='text-[9px] font-semibold'>Dec 04 2023</p>
								</div>
							</div>
						</div>

						{/* grid-4 */}
						<div className=' hover:bg-white hover:shadow-md p-2 pb-7 relative duration-500 ease-in-out'>
							<div>
								{/* image */}
								<div>
									<div className='h-[12rem]'>
										<img className='w-full h-full' src='/bg3.jpg' alt='' />
									</div>
								</div>

								{/* categories */}
								<div className='flex items-center gap-2 my-5'>
									{/* category */}
									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Technology</p>
									</div>

									<div className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-xs font-semibold'>Travel</p>
									</div>
								</div>

								{/* h1 */}
								<div className='flex items-center gap-3'>
									{/* line */}
									<div className='h-[3rem] w-1.5 bg-[#7b00d3]'></div>

									{/* text */}
									<h1 className='font-semibold w-full ms:w-[30rem] a'>
										The Impact of Technology on the Workplace: How Technology is
										Changing
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center justify-between mt-3'>
									{/* author */}
									<div className='flex items-center gap-4'>
										{/* image */}
										<div className='w-[2.5rem] aspect-square rounded-full overflow-hidden'>
											<img className='w-full h-full' src='/bg.jpg' alt='' />
										</div>

										{/* name */}
										<p className='font-semibold'>qi_beekay</p>
									</div>
								</div>

								{/* icon */}
								<div className=' bg-dark text-white aspect-square w-[2rem] rounded-full grid items-center justify-center absolute top-[10rem] right-4'>
									<div>
										<PiCursorClick size={18} />
									</div>
								</div>

								{/* date */}
								<div className='border-[1.5px] border-dark bg-dark text-light rounded-full px-3 py-0.5 w-fit absolute top-[10.7rem] left-3'>
									<p className='text-[9px] font-semibold'>Dec 04 2023</p>
								</div>
							</div>
						</div>
					</div>

					{/* side */}
					<div className=' ms:w-[70%]'>
						<RecentSide />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recommended;
