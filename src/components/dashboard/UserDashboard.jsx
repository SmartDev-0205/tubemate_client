import React from 'react'
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'

import {get} from 'lodash'
import StripeModal from './StripeModal'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import {currencyFormatter} from 'helpers'
import YouTube from 'react-youtube'
import {toast} from 'react-toastify'

const UserDashboard = () => {
	const user = useSelector((state) => get(state, 'userStore.user'))
	const [videoIndex, setVideoIndex] = useState(1)
	// const Isverify = useSelector((state) => get(state, "userStore.isRegister"));

	const stripePromise = loadStripe('pk_test_51IiFx5LZmY1QWSSK4WkfW2HJNBc2mkp6ySRdluIHi6yi0oHEOuH9d4qPXzR1LPc0TWJIFe9ZuvS5dDt599pXdr2H00JcvQi46i')
	console.log('user', user)

	function showToaster() {
		toast.error('\n \n \n Error! Your account is not active! To activate your account, please pay $10.', {
			autoClose: false,
			toastId: 'errortoast',
			hideProgressBar: true,

			position: toast.POSITION.TOP_CENTER,

			onClose: () => {
				document.getElementsByClassName('w-full')[0].style.filter = null

				//    document.getElementById("errortoast").style.width = null;//'154%';

				//  document.getElementsByClassName("Toastify__toast-body")[0].style.padding = null;//'80px';

				//.bg-transparent

				//filter: blur(3px);
				//   document.body.style.opacity = 1;

				console.log('closing')
			},
			onOpen: () => {
				//.

				//   document.body.style.opacity = 0.5;
				document.getElementsByClassName('w-full')[0].style.filter = 'blur(5px)'

				// document.getElementById('errortoast').style.width = '154%'

				// document.getElementsByClassName('Toastify__toast-body')[0].style.padding = '80px'

				document.getElementsByClassName('Toastify__toast-body')[0].style.color = 'red'

				document.getElementsByClassName('Toastify__toast-body')[0].style.fontSize = '19px'
				document.getElementsByClassName('Toastify__toast-container Toastify__toast-container--top-center')[0].style.width = "50%;"

				//errortoast

				console.log('open')
			}
		})
	}

	function setCookie(cname, cvalue, exdays) {
		const d = new Date()
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
		let expires = 'expires=' + d.toUTCString()
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
	}
	function getCookie(cname) {
		let name = cname + '='
		let decodedCookie = decodeURIComponent(document.cookie)
		let ca = decodedCookie.split(';')
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i]
			while (c.charAt(0) == ' ') {
				c = c.substring(1)
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length)
			}
		}
		return ''
	}

	useEffect(() => {
		if (user.subscriptionId == null) {
			//show for first time only
			if (getCookie('seterror') == '') {
				console.log('no cookie')
				setCookie('seterror', true, 30)
				showToaster()
			} else {
				let hasSeenError = getCookie('seterror')
				console.log('already cookie')
				console.log(hasSeenError)
				if (!hasSeenError) {
					showToaster()
				}
			}
		}
	}, [user.subscriptionId])

	// const opts = {
	//   height: "500",
	//   width: "100%",
	//   playerVars: {
	//     // https://developers.google.com/youtube/player_parameters
	//     autoplay: 0,
	//   },
	// };

	return (
		<div className="w-full">
			<h3 className="text-[#283d50] font-semibold text-4xl mb-5 pt-10 pb-5">
				Hi, {get(user, 'firstName')} {get(user, 'lastName')}
			</h3>
			<span className={`${user?.subscriptionId ? 'notActive' : 'alert-primary'} text-sm font-bold px-2 py-1 rounded-2xl`}>{user?.subscriptionId ? '' : 'Your account is not active! To activate your account, please pay $10'} {!user?.subscriptionId && (
							<Elements stripe={stripePromise}>
								<StripeModal />
							</Elements>
						)}</span>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-7">
				<div className="bg-[#40189D] px-6 py-10 relative rounded-lg flex justify-between">
					<div>
						<img src={require('../../icons/account.png')} alt="img" />
					</div>
					<div className="text-white flex flex-col gap-2 items-end">
						<h3 className="text-lg">Account Status </h3>
						<p className={`${user?.subscriptionId ? 'bg-lime-400' : 'bg-red-500'} text-sm font-bold px-2 py-1 rounded-2xl`} style={{width: 'fit-content'}}>
							{user?.subscriptionId ? 'Active' : 'In Active'}
						</p>
						{!user?.subscriptionId && (
							<Elements stripe={stripePromise}>
								<StripeModal />
							</Elements>
						)}
					</div>
				</div>

				<div className="bg-[#1CD083] px-6 py-10 relative rounded-lg flex justify-between">
					<div>
						<img src={require('../../icons/dial.png')} alt="img" />
					</div>
					<div className="text-white flex flex-col gap-2 items-end">
						<h3 className="text-lg">Available Balance </h3>
						<h2 className=" text-3xl font-bold px-2 py-1">{currencyFormatter(get(user, 'balance', 0))}</h2>
					</div>
				</div>

				<div className="bg-[#48A9F8] px-6 py-10 relative rounded-lg flex justify-between">
					<div>
						<img src={require('../../icons/referal.png')} alt="img" />
					</div>
					<div className="text-white flex flex-col gap-2 items-end">
						<h3 className="text-lg">Your Total Referral</h3>
						<h2 className=" text-3xl font-bold px-2 py-1">{get(user, 'shared', 0)}</h2>
						{currencyFormatter(get(user, 'invite_balance', 0))}
					</div>
				</div>

				<div className="bg-[#8BC640] px-6 py-10 relative rounded-lg flex justify-between">
					<div>
						<img src={require('../../icons/bell.png')} alt="img" />
					</div>
					<div className="text-white flex flex-col gap-2 items-end">
						<h3 className="mb-1 text-3xl font-bold">{get(user, 'views', 0)}</h3>
						<p className="text-sm"> Total views </p>
					</div>
				</div>

				
				{/* <div
					className='bg-[#5A55A3] p-4 pb-5 relative rounded-lg'
				>
					<div className='text-white flex flex-col'>
						<h3 className='mb-1 text-3xl font-bold'>{get(user, 'views', 0)}</h3>
						<p className='text-sm'>Account Status </p>
            <span className='bg-[#00a65a] p-2 rounded-lg' style={{width: 'fit-content'}}>Active</span>
					</div>
					<div className='w-16 h-16'>
						<EyeIcon
							className='absolute right-2 w-16 h-16 ml-auto text-[#000]/[.15]'
							aria-hidden='true'
						/>
					</div>
				</div> */}
				{/* <div
					className='bg-[#5A55A3] p-4 pb-5 relative rounded-lg'
				>
					<div className='text-white'>
						<h3 className='mb-1 text-3xl font-bold'>{get(user, 'views', 0)}</h3>
						<p className='text-sm'> Total views </p>
					</div>
					<div className='w-16 h-16'>
						<EyeIcon
							className='absolute right-2 w-16 h-16 ml-auto text-[#000]/[.15]'
							aria-hidden='true'
						/>
					</div>
				</div> */}
				{/* <div className='bg-[#5A55A3] p-4 pb-5 relative rounded-lg'>
					<div className='text-white'>
						<h3 className='mb-1 text-3xl font-bold'>
							{currencyFormatter(get(user, 'watch_balance', 0))}
						</h3>
						<p className='text-sm'> Watch BALANCE </p>
					</div>
					<div className='w-16 h-16'>
						<CurrencyDollarIcon
							className='absolute right-2 w-16 h-16 ml-auto text-[#000]/[.15]'
							aria-hidden='true'
						/>
					</div>
				</div> */}

				<div className="bg-[#48A9F8] px-6 py-10 relative rounded-lg flex justify-between">
					<div>
						<img src={require('../../icons/ViewBalance.png')} alt="img" />
					</div>
					<div className="text-white flex flex-col gap-2 items-end">
						<h3 className="mb-1 text-3xl font-bold">{currencyFormatter(get(user, 'watch_balance', 0))}</h3>
						<p className="text-sm"> Watch BALANCE </p>
					</div>
				</div>
				
				<div className="bg-[#40189D] px-6 py-10 relative rounded-lg flex justify-between">
					<div>
						<img src={require('../../icons/account.png')} alt="img" />
					</div>
					<div className="text-white flex flex-col gap-2 items-end">
						<h3 className="text-lg">Account Activation Fee </h3>
						<p className={`${user?.subscriptionId ? 'bg-lime-400' : 'bg-red-500'} text-sm font-bold px-2 py-1 rounded-2xl`} style={{width: 'fit-content'}}>
							{user?.subscriptionId ? 'Paid' : 'UnPaid'}
						</p>
						<span className='btcPayment'>Btc payment wait for 3 confirmations</span>
					</div>
				</div>
				{/* <div className='bg-[#00a65a] p-4 pb-5 relative rounded-lg'>
					<div className='text-white'>
						<h3 className='mb-1 text-3xl font-bold'>
							{currencyFormatter(get(user, 'balance', 0))}
						</h3>
						<p className='text-sm'> Account BALANCE </p>
					</div>
					<div className='w-16 h-16'>
						<CurrencyDollarIcon
							className='absolute right-2 w-16 h-16 ml-auto text-[#000]/[.15]'
							aria-hidden='true'
						/>
					</div>
				</div> */}
			</div>
			<div className="text-xl text-[#007bff] font-bold text-center py-5">
				<h1 className="watchvideo">Watch entertaining videos and earn!</h1>
				<div>
					<div className="bhoechie-tab-menu">
						<div className="container">
							<div className="rows">
								<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 bhoechie-tab-menu">
									<div className="list-group">
										<span
											onClick={() => {
												setVideoIndex(1)
											}}
											className={`list-group-item ${videoIndex === 1 && 'active'}  cursor-pointer text-center`}>
											<svg className="w-8 h-h m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={videoIndex === 1 ? 'white' : '#007bff'}>
												<path
													stroke-linecap="round"
													d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
												/>
											</svg>
											Video 1 (0.61$)
										</span>

										<span
											href="?v=2"
											onClick={() => {
												setVideoIndex(2)
											}}
											className={`list-group-item ${videoIndex === 2 && 'active'}  cursor-pointer text-center`}>
											<svg className="w-8 h-h m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={videoIndex === 2 ? 'white' : '#007bff'}>
												<path
													stroke-linecap="round"
													d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
												/>
											</svg>
											Video 2 (0.32$)
										</span>

										<span
											href="?v=3"
											onClick={() => {
												setVideoIndex(3)
											}}
											className={`list-group-item ${videoIndex === 3 && 'active'}  cursor-pointer text-center`}>
											<svg className="w-8 h-h m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={videoIndex === 3 ? 'white' : '#007bff'}>
												<path
													stroke-linecap="round"
													d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
												/>
											</svg>
											Video 3 (0.47$)
										</span>

										<span
											href="?v=4"
											onClick={() => {
												setVideoIndex(4)
											}}
											className={`list-group-item ${videoIndex === 4 && 'active'}  cursor-pointer text-center`}>
											<svg className="w-8 h-h m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={videoIndex === 4 ? 'white' : '#007bff'}>
												<path
													stroke-linecap="round"
													d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
												/>
											</svg>
											Video 4 (0.52$)
										</span>

										<span
											href="?v=5"
											onClick={() => {
												setVideoIndex(5)
											}}
											className={`list-group-item ${videoIndex === 5 && 'active'}  cursor-pointer text-center`}>
											<svg className="w-8 h-h m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={videoIndex === 5 ? 'white' : '#007bff'}>
												<path
													stroke-linecap="round"
													d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
												/>
											</svg>
											Video 5 (0.56$)
										</span>
									</div>
								</div>
								<div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 bhoechie-tab">
									{/* <!-- flight section --> */}

									<div className="p-2 pt-0 ">
										<div className="relative lg:w-[41rem] md:w-[25rem] sm:w-[20rem] w-[20.2rem]">
											<img className="opacity-30" src={`/images/video${videoIndex}.png`} alt="img" />
											<div className="absolute inset-0 flex items-center justify-center">
												<h1 className="text-[#4a4848] opacity-1 text-[2rem]">Upcoming Video</h1>
											</div>
										</div>
									</div>

									{/* <div className="md:p-2 p-0 ">
										<div className="relative lg:w-[41rem] md:w-[25rem] sm:w-[21rem] w-[20rem]">
											<img src={`/Images/video${videoIndex}.png`} alt="img" />
											<h1 className="text-[#808080d9] text-[4rem]">Video {videoIndex}</h1>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserDashboard
