import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
	const router = useRouter();

	return (
		<nav className="relative">
			{/* for SEO purposes, we use correct HTML syntax for container elements */}
			<div
				className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
					space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
			>
				{/* this is going to grab the data from the movie database that we requested */}
				{Object.entries(requests).map(([key, { title, url }]) => (
					// anytime we map through and array, object or anything we need a key
					// so that react knows how to rerender the list
					<h2
						key={key}
						// this will change the route when someone clicks on a certain genre
						onClick={() => router.push(`/?genre=${key}`)}
						className="last:pr-24 cursor-pointer transistion duration-100 transform 
							hover:scale-125 hover:text-white active:text-red-500"
					>
						{title}
					</h2>
				))}
			</div>
			<div
				className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A]
					h-10 w-1/12"
			/>
		</nav>
	);
}

export default Nav;
