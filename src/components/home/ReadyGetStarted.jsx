import React from 'react'

function ReadyGetStarted() {
	return (
		<div className="readyToGet">
			<div
				style={{
					// border: '2px solid red',
					// minHeight: '60vh',
					height: 'max-content',
					width: '100%',
					position: 'relative',
					// transform: 'skewY(-6deg)',
					marginBottom: '-125px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '5em 6em 0',
					zIndex: 1
					// overflow: 'hidden'
				}}>
				<div className="pl-4 w-full flex flex-row flex-wrap md:flex-nowrap gap-[10px]">
					<div
						className="w-1/2"
						style={{
							// transform: 'skewY(6deg)',
							display: 'flex',
							flexDirection: 'column',
							gap: '26px',
							height: 'fit-content',
							// width: 'max-content',
							width: '60%',
							margin: 'auto',
							// paddingBottom: '70px'
							// border: '2px solid red',
						}}>
						<div>
							<h4 className="text-black font-bold text-lg">Ready to get started?</h4>
						</div>

						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								flexWrap: 'wrap'
							}}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									gap: '32px'
								}}>
								<div
									style={{
										// width: '350px',
										display: 'flex',
										flexDirection: 'column',
										gap: '32px',
										paddingTop: '12px',
										paddingBottom: '12px'
									}}>
									<h4 className="text-lg text-[#425466]">Explore Stripe Payments, or create an account instantly and start accepting payments. You can also contact us to design a custom package for your business.</h4>

									<div className="flex flex-row gap-5 align-middle" style={{alignItems: 'center'}}>
										<div className="text-white text-sm p-2 rounded-2xl bg-[#0048e5]">Start now</div>
										<div className="text-[#0048e5] text-sm font-semibold">Contact sales</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div
						className="w-1/2"
						style={{
							// transform: 'skewY(6deg)',
							display: 'flex',
							flexDirection: 'column',
							gap: '26px',
							height: 'fit-content',
							// width: 'max-content',
							width: '60%',
							margin: 'auto',
							// paddingBottom: '70px'
							// border: '2px solid red',
						}}>
						<div className="flex">
							<div
								className="mr-8"
								style={{
									width: '250px',
									display: 'flex',
									flexDirection: 'column',
									gap: '8px'
								}}>
								<div className="pl-4">
									<img className="h-10 w-10 mb-2" src={require('../../icons/price-tag.png')} alt="img" />
								</div>
								<h4 className="font-semibold text-base text-black pl-4 border-l-4 border-violet-500	 ">Always know what you pay</h4>
								<p className="text-sm text-[#425466] pl-4">Integrated per-transaction pricing with no hidden fees.</p>

								<p className="text-[#0048e5] text-sm pl-4 font-semibold	">Pricing details</p>
							</div>

							<div
								style={{
									width: '250px',
									display: 'flex',
									flexDirection: 'column',
									gap: '8px'
								}}>
								<div className="pl-4">
									<img className="h-10 w-10 mb-2" src={require('../../icons/browser.png')} alt="img" />
								</div>
								<h4 className="font-semibold text-base text-black pl-4 border-l-4 border-violet-500	 ">Start Your Integration</h4>
								<p className="text-sm text-[#425466] pl-4">Get up and running with Stripe in as little as 10 minutes. </p>
								<p className="text-[#0048e5] font-semibold	 text-sm pl-4">API reference</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReadyGetStarted
