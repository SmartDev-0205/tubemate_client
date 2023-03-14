import React from 'react'
import RegisterForm from 'components/register/Form'
import {GoogleReCaptchaProvider, GoogleReCaptcha} from 'react-google-recaptcha-v3'

const Register = () => {
	const handleVerify = (verify) => {
		console.log('verify: ', verify)
	}

	return (
		<GoogleReCaptchaProvider reCaptchaKey="6LeoI0EkAAAAALw1hNpMafZ_Oo6az6V9lNn8-Sc9">
			<div
				className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
				style={{
					position: 'relative',
					overflow: 'hidden',
					maxWidth: '1920px'
				}}>
				<div
					style={{
						position: 'absolute',
						height: '40px',
						background: '#7a73ff',
						width: '100%',
						top: '0%',
						left: '70%',
						zIndex: -1,
						rotate: '-15deg',
						transform: 'skew(-15deg)',
						transformOrigin: 'center'
					}}></div>
				<div
					style={{
						position: 'absolute',
						height: '40px',
						background: '#80e9ff',
						width: '10%',
						top: '68%',
						right: '72%',
						zIndex: -1,
						rotate: '-15deg',
						transform: 'skew(-15deg)',
						transformOrigin: 'center'
					}}></div>
				<div
					style={{
						position: 'absolute',
						height: '40px',
						background: '#7a73ff',
						width: '100%',
						top: '90%',
						right: '70%',
						zIndex: -1,
						rotate: '-15deg',
						transform: 'skew(-15deg)',
						transformOrigin: 'center'
					}}></div>
				<div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-[100px] mb-[180px]">
					<RegisterForm />
					<GoogleReCaptcha onVerify={handleVerify} />
				</div>
			</div>
		</GoogleReCaptchaProvider>
	)
}

export default Register
