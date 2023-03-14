import React from 'react'

const WhyStripe = () => {
	return (
		<div
			style={{
				// border: '2px solid red',
				minHeight: '70vh',
				height: 'max-content',
				width: '100%',
				position: 'relative',
				transform: 'skewY(-6deg)',
				marginTop: '80px',
				marginBottom: '80',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '4em',
				zIndex: 1
				// overflow: 'hidden'
			}}>
			<div
				style={{
					height: '100%',
					width: '100%',
					position: 'absolute',
					background: 'white'
					// border: '2px solid green',
				}}>
				<div
					className=""
					style={{
						// border: '2px solid blue',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
					}}>
					<div>
						<div className="h-10 w-96 bg ml-auto" style={{background: '#80e9ff'}}></div>
						<div className="h-10 w-48 bg ml-auto -mt-3 mr-28" style={{background: '#7a73ff'}}></div>
					</div>
					<div>
						<div className="h-10 w-48 bg mr-auto -mb-3 ml-28" style={{background: '#80e9ff'}}></div>
						<div className="h-10 w-96 bg mr-auto" style={{background: '#7a73ff'}}></div>
					</div>
				</div>
			</div>
			<div
				className="pt-36 md:pt-0"
				style={{
					transform: 'skewY(6deg)',
					display: 'flex',
					flexDirection: 'column',
					gap: '48px',
					height: 'fit-content',
					width: 'fit-content',
					margin: 'auto',
					// paddingTop: '150px',
					paddingBottom: '150px'
					// border: '2px solid red'
				}}>
				<div>
					<h4 className="text-lg text-blue-600 font-bold">Why Wintub</h4>
				</div>

				<div>
					<h2 className="text-3xl text-black font-bold wm-2/4">A technology-first approach to payments and finance</h2>
				</div>

				<div className="flex flex-row gap-5 flex-wrap">
					<div
						style={{
							// border: '2px solid red',
							width: '300px',
							display: 'flex',
							flexDirection: 'column',
							gap: '8px'
						}}>
						<div className="pl-4">
							<img className="h-10 w-10" src={require('../../icons/connection.png')} alt="img" />
						</div>
						<h4 className="font-semibold text-base text-black pl-4 border-l-4 border-violet-500	 ">Close to the metal</h4>
						<p className="font-semibold text-gray-500 text-sm pl-4">From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.</p>
					</div>

					<div
						style={{
							// border: '2px solid red',
							width: '300px',
							display: 'flex',
							flexDirection: 'column',
							gap: '8px'
						}}>
						<div className="pl-4">
							<img className="h-10 w-10" src={require('../../icons/play.png')} alt="img" />
						</div>
						<h4 className="font-semibold text-base text-black pl-4 border-l-4 border-violet-500	 ">Close to the metal</h4>
						<p className="font-semibold text-gray-500 text-sm pl-4">From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.</p>
					</div>

					<div
						style={{
							// border: '2px solid red',
							width: '300px',
							display: 'flex',
							flexDirection: 'column',
							gap: '8px'
						}}>
						<div className="pl-4">
							<img className="h-10 w-10" src={require('../../icons/bar-chart.png')} alt="img" />
						</div>
						<h4 className="font-semibold text-base text-black pl-4 border-l-4 border-violet-500	 ">Close to the metal</h4>
						<p className="font-semibold text-gray-500 text-sm pl-4">From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.</p>
					</div>

					<div
						style={{
							// border: '2px solid red',
							width: '250px',
							display: 'flex',
							flexDirection: 'column',
							gap: '8px'
						}}>
						<div className="pl-4">
							<img className="h-10 w-10" src={require('../../icons/settings.png')} alt="img" />
						</div>
						<h4 className="font-semibold text-base text-black pl-4 border-l-4 border-violet-500	 ">Close to the metal</h4>
						<p className="font-semibold text-gray-500 text-sm pl-4">From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhyStripe
