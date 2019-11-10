import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const Quotes = () => {
	const [quotes, updatequotes] = useState({});

	useEffect(() => {
		async function getQuote() {
			try {
				const response = await axios.get(
					"https://programming-quotes-api.herokuapp.com/quotes/random"
				);
				updatequotes(response.data);
			} catch (error) {
				console.error(error);
			}
		}
		getQuote();
	}, []);

	return (
		<header>
			<div className='wrapper'>
				<Helmet>
					<title>{quotes.author}</title>
					<meta name='description' content={quotes.en} />
				</Helmet>
				<blockquote>
					<h1>{quotes.en}</h1>
					<footer>
						- <cite>{quotes.author}</cite>
					</footer>
				</blockquote>
			</div>
		</header>
	);
};

export default Quotes;
