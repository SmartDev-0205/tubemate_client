import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
	return (
		<>
		<div className="w-full text-white relative">
			<div
				style={{
					height: '200px',
					width: '100%',
					position: 'absolute',
					background: 'white',
					transform: 'skew(0deg, -4deg)',
					top: '-125px'
					// border: '2px solid green',
				}}>
				<div
					className=""
					style={{
						// border: '2px solid blue',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'end'
					}}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between'
						}}>
						<div>
							<div className="h-10 w-48 bg mr-auto -mb-3 ml-28" style={{background: '#80e9ff'}}></div>
							<div className="h-10 w-96 bg mr-auto" style={{background: '#7a73ff'}}></div>
						</div>

						<div style={{width: 'fit-content'}} className="overflow-hidden invisible md:visible">
							<div className="h-10 w-96 bg ml-auto" style={{background: '#80e9ff'}}></div>
							<div className="h-10 w-48 bg ml-auto -mt-3 mr-28" style={{background: '#7a73ff'}}></div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-[#004a99]  pb-[30px] pt-[250px]">
				<div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
					<div className="grid md:grid-cols-6 grid-cols-1 gap-8">
						<div className="col-span-2">
							<h3 className="font-normal text-[34px] mb-6">WINTUB</h3>
							<p className="text-sm text-[#ecf5ff]">Wintub is The most popular spot online to earn cash for watching videos.</p>
						</div>
						<div className="">
							<h4 className="text-base font-bold uppercase mb-[10px]">USEFUL LINKS</h4>
							<div className="py-2">
								<Link className="text-sm font-medium text-[#ecf5ff]" to="/">
									Home
								</Link>
							</div>
							<div className="py-2">
								<Link className="text-sm font-medium text-[#ecf5ff]" to="/about-us">
									About Us
								</Link>
							</div>
							<div className="py-2">
								<Link className="text-sm font-medium text-[#ecf5ff]" to="/contact-us">
									Contact Us
								</Link>
							</div>
							<div className="py-2">
								<Link className="text-sm font-medium text-[#ecf5ff]" to="/terms-of-service">
									Terms of service
								</Link>
							</div>
							<div className="py-2">
								<Link className="text-sm font-medium text-[#ecf5ff]" to="/privacy-policy">
									Privacy policy
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div className="w-full bg-[#00428a] py-[30px]">
				<p className="text-center text-sm">
					© Copyright <strong>WINTUB</strong>. All Rights Reserved
				</p>
			</div>
		</div>
		</>
	)
}

export default Footer
