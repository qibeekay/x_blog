import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { PiCursorClick } from 'react-icons/pi';

const RecentSide = () => {
	return (
		<div className='w-full'>
			<div className='w-full'>
				{/* header */}
				<div className='bg-white p-4'>
					<h1 className='text-center font-semibold xs:text-2xl sm:text-4xl flex items-baseline gap-2'>
						More Posts
						<Link href={'/'} className='text-[12px] flex items-center gap-2'>
							See all posts <BsArrowRight />
						</Link>
					</h1>
				</div>

				{/* grids */}
				<div className='flex flex-col gap-4 w-full'>
					{/* grid */}
					<div className='w-full bg-white p-4'>
						{/* flex items */}
						<div className='flex items-center gap-4'>
							{/* image */}
							<div className=''>
								<div className='w-[5rem] h-[5rem] w sm:w-[8rem] sm:h-[8rem] overflow-hidden bg-blue-700'>
									<img className='w-full h-full' src='/bg1.jpg' alt='' />
								</div>
							</div>

							{/* text */}
							<div className=' w-full'>
								<div className='flex items-center gap-2 mt-1.5 my-1'>
									<div className='h-[2.5rem] w-2 bg-black'></div>
									{/* text */}
									<h1 className='text-[10px] sm:text-sm font-semibold a'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
										ducimus commodi beatae
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center gap-4'>
									{/* name */}

									<p className='text-[12px] sm:text-sm font-semibold sm:font-medium'>
										by <span> qi_beekay</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* grid */}
					<div className='w-full bg-white p-4'>
						{/* flex items */}
						<div className='flex items-center gap-4'>
							{/* image */}
							<div className=''>
								<div className='w-[5rem] h-[5rem] w sm:w-[8rem] sm:h-[8rem] overflow-hidden bg-blue-700'>
									<img className='w-full h-full' src='/bg1.jpg' alt='' />
								</div>
							</div>

							{/* text */}
							<div className=' w-full'>
								<div className='flex items-center gap-2 mt-1.5 my-1'>
									<div className='h-[2.5rem] w-2 bg-black'></div>
									{/* text */}
									<h1 className='text-[10px] sm:text-sm font-semibold a'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
										ducimus commodi beatae
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center gap-4'>
									{/* name */}

									<p className='text-[12px] sm:text-sm font-semibold sm:font-medium'>
										by <span> qi_beekay</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* grid */}
					<div className='w-full bg-white p-4'>
						{/* flex items */}
						<div className='flex items-center gap-4'>
							{/* image */}
							<div className=''>
								<div className='w-[5rem] h-[5rem] w sm:w-[8rem] sm:h-[8rem] overflow-hidden bg-blue-700'>
									<img className='w-full h-full' src='/bg1.jpg' alt='' />
								</div>
							</div>

							{/* text */}
							<div className=' w-full'>
								<div className='flex items-center gap-2 mt-1.5 my-1'>
									<div className='h-[2.5rem] w-2 bg-black'></div>
									{/* text */}
									<h1 className='text-[10px] sm:text-sm font-semibold a'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
										ducimus commodi beatae
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center gap-4'>
									{/* name */}

									<p className='text-[12px] sm:text-sm font-semibold sm:font-medium'>
										by <span> qi_beekay</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* grid */}
					<div className='w-full bg-white p-4'>
						{/* flex items */}
						<div className='flex items-center gap-4'>
							{/* image */}
							<div className=''>
								<div className='w-[5rem] h-[5rem] w sm:w-[8rem] sm:h-[8rem] overflow-hidden bg-blue-700'>
									<img className='w-full h-full' src='/bg1.jpg' alt='' />
								</div>
							</div>

							{/* text */}
							<div className=' w-full'>
								<div className='flex items-center gap-2 mt-1.5 my-1'>
									<div className='h-[2.5rem] w-2 bg-black'></div>
									{/* text */}
									<h1 className='text-[10px] sm:text-sm font-semibold a'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
										ducimus commodi beatae
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center gap-4'>
									{/* name */}

									<p className='text-[12px] sm:text-sm font-semibold sm:font-medium'>
										by <span> qi_beekay</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecentSide;
