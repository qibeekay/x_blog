'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [search, setSearch] = useState(false);

	const toggleNav = () => {
		setNav(!nav);
	};

	const toggleSearch = () => {
		setSearch(!search);
	};
	return (
		<nav
			className={` text-dark w-full relative z-[100] ${
				!nav ? '' : 'bg-white'
			}`}>
			<div className='flex items-center justify-between py-5 max-w-6xl mx-auto px-4'>
				{/* logo / navs */}
				<div className='flex items-center gap-10'>
					{/* logo */}
					<div className='flex items-center gap-4'>
						<button
							onClick={toggleNav}
							className='flex lg:hidden flex-col gap-[1.2px] justify-center'>
							<span
								className={`bg-dark block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
											nav ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
										}`}></span>
							<span
								className={`bg-dark block transition-all duration-300 ease-out 
                    h-0.5 w-4 rounded-sm my-0.5 ${
											nav ? 'opacity-0' : 'opacity-100'
										}`}></span>
							<span
								className={`bg-dark block transition-all duration-300 ease-out 
                    h-0.5 rounded-sm ${
											nav
												? '-rotate-45 -translate-y-1 w-6'
												: 'translate-y-0.5 w-3'
										}`}></span>
						</button>
						<div>
							<Link href={'/'} className='font-bold text-xl sm:text-3xl'>
								X-Blog.
							</Link>
						</div>
					</div>

					{/* link */}
					<ul className='hidden lg:flex items-center gap-7 font-semibold text-sm'>
						<li className='hover-underline'>
							<Link href={''}>Articles</Link>
						</li>
						<li className='hover-underline'>
							<Link href={''}>Top Stories</Link>
						</li>
						<li className='hover-underline'>
							<Link href={''}>About</Link>
						</li>
						<li className='hover-underline'>
							<Link href={''}>Be a writer</Link>
						</li>
						<li>
							<Link href={''} className=' a hover:text-dark/70'>
								Talk to us
							</Link>
						</li>
					</ul>
				</div>

				{/* search / auths */}
				<div className='flex items-center gap-1 sm:gap-5'>
					{/* search */}
					<div className='relative'>
						<div
							className=' bg-dark text-white aspect-square w-[2.4rem] rounded-full grid items-center justify-center cursor-pointer'
							onClick={toggleSearch}>
							<div>
								<FiSearch size={20} />
							</div>
						</div>

						<div
							className={`absolute z-[999] -right-[5rem] sm:-right-14 ms:right-0 top-[3rem] rounded-xl p-4 w-[13rem] xs:w-[18rem] sm:w-[20rem] bg-white shadow ${
								search ? 'grid' : 'hidden'
							}`}>
							{/* search */}
							<div className='mb-4'>
								<label htmlFor=''>Search Topics</label>
								<div className='flex items-center gap-4 mt-2'>
									<input
										type='text'
										className='w-full outline-none border-red rounded-full border px-4 py-2'
										placeholder='Enter keyword'
									/>
									<div className='bg-dark text-white p-3 rounded-md cursor-pointer'>
										<FiSearch />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* get started */}
					<div className='flex items-center gap-3 sm:gap-5'>
						{/* login */}
						<div className='hidden lg:grid'>
							<Link
								href={''}
								className='text-sm font-semibold hover:text-dark/70'>
								Log in
							</Link>
						</div>
						{/* Signup */}
						<div className=''>
							<Link
								className='border-2 border-dark rounded-full py-2 px-3 sm:py-2 sm:px-6 hover:text-white hover:bg-dark'
								href={''}>
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Appear on nav true */}
			{/* mobile nav */}
			<div
				className={`fixed duration-300 ${
					nav ? 'left-0 ease-in opacity-100' : '-left-full ease-out opacity-0'
				} w-full bg-white border-t border-dark/20`}>
				<div className='px-5 py-7'>
					{/* link */}
					<ul className=' flex flex-col gap-7 font-semibold text-sm'>
						<li className='hover-underline w-fit'>
							<Link href={''}>Articles</Link>
						</li>
						<li className='hover-underline w-fit'>
							<Link href={''}>Top Stories</Link>
						</li>
						<li className='hover-underline w-fit'>
							<Link href={''}>About</Link>
						</li>
						<li className='hover-underline w-fit'>
							<Link href={''}>Be a writer</Link>
						</li>
						<li>
							<Link href={''} className=' underline hover:text-dark/70'>
								Talk to us
							</Link>
						</li>
					</ul>
					<div className='mt-4'>
						<Link
							href={''}
							className='text-sm font-semibold hover:text-dark/70'>
							Log in
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
