import React from 'react';
import { Categories, Header, Recommended, TrendingPost } from '..';

const Homepage = () => {
	return (
		<div>
			<Header />
			<Categories />
			<TrendingPost />
			<Recommended />
		</div>
	);
};

export default Homepage;
