import Link from 'next/link';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
	return (
		<nav>
			<div className='flex items-center justify-between'>
				{/* logo / navs */}
				<div className='flex items-end gap-10'>
					{/* logo */}
					<div>
						<h1 className='font-bold text-3xl'>X-Blog.</h1>
					</div>

					{/* link */}
					<ul className='flex items-center gap-7 font-semibold text-sm'>
						<li>
							<Link href={''}>Articles</Link>
						</li>
						<li>
							<Link href={''}>Top Stories</Link>
						</li>
						<li>
							<Link href={''}>About</Link>
						</li>
						<li>
							<Link href={''}>Be a writer</Link>
						</li>
						<li>
							<Link href={''}>Talk to us</Link>
						</li>
					</ul>
				</div>

				{/* search / auths */}
				<div className='flex items-center'>
					{/* search */}
					<div className=''>
						<div>
							<FiSearch />
						</div>
					</div>

					{/* get started */}
					<div className='flex items-center'>
						{/* login */}
						<div>
							<Link href={''}>Login</Link>
						</div>
						{/* Signup */}
						<div>
							<Link href={''}>Sign up</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
