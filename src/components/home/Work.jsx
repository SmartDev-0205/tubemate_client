import React from 'react'

const Work = () => {
	return (
		<div className="w-full text-center">
			<div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h3 className="text-black font-medium text-4xl mb-5">How does it work?</h3>
				<p className="text-black text-sm mb-16 max-w-[555px] mx-auto">
					We have partners at WinTube, love share multiple videos. So why not get paid by watching videos online in your free time ? we pay you cash simply for watching short videos or TV show trailers.
				</p>

				<div className="grid md:grid-cols-3 grid-cols-1 gap-10">
					<div className="bg-[#00458f] p-8 rounded-md text-white text-center hover:bg-[#003b7a] hover:boder-[#00458f]">
						<h3 className="font-bold text-2xl mb-4">Watch Videos</h3>
						<p>commercial ads, movies, and TV shows online It’s the perfect way to earn money at WinTub.</p>
					</div>
					<div className="bg-[#00458f] p-8 rounded-md text-white text-center hover:bg-[#003b7a] hover:boder-[#00458f]">
						<h3 className="font-bold text-2xl mb-4">Refer your friends</h3>
						<p>We'll confirm as soon as your friend joins. You get $1 and Your friend gets $5.</p>
					</div>
					<div className="bg-[#00458f] p-8 rounded-md text-white text-center hover:bg-[#003b7a] hover:boder-[#00458f]">
						<h3 className="font-bold text-2xl mb-4">Get paid</h3>
						<p>As the money flows in, you can transfer it to your bank account, PayPal account and more options.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work
