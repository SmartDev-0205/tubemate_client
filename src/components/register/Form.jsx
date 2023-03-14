import React, {useState, useEffect} from 'react'

import {Link, useSearchParams, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {get} from 'lodash'
import moment from 'moment'
import {toast} from 'react-toastify'

import {register} from 'stores/reducers/auth'

const GENDER_VALUE = {
	MALE: 'male',
	FEMALE: 'female'
}

const RegisterForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [searchParams] = useSearchParams()
	const loading = useSelector((state) => get(state, 'authStore.loading'))
	const isRegister = useSelector((state) => get(state, 'authStore.isRegister'))
	const error = useSelector((state) => get(state, 'authStore.errors.register.message'))
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		gender: GENDER_VALUE.MALE,
		birthday: ''
	})

	useEffect(() => {
		if (!!isRegister) {
			toast.success('Successfully! Please check email to verify your account')
			setFormData({
				email: '',
				password: '',
				firstName: '',
				lastName: '',
				gender: GENDER_VALUE.MALE,
				birthday: ''
			})
			navigate('/registered')
		}
	}, [isRegister])

	const handleSubmit = (e) => {
		e.preventDefault()
		const referral = searchParams.get('r')
		dispatch(
			register({
				...formData,
				...(referral && {userId: referral})
			})
		)
	}

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div className="max-w-2xl m-auto">
			<div className="bg-[#fff] rounded-[10px] md:px-[57px] md:py-[65px] px-[30px] py-[40px] border border-[#00000020]" style={{boxShadow: '0px 8px 20px 0px rgb(0 0 0 / 15%)'}}>
				<h3 className="text-[#283d50] font-medium text-2xl mb-10">Join Now</h3>
				<form onSubmit={handleSubmit}>
					{isRegister && <div className="text-[#05d54a] mb-4 text-center border border-[#05d54a] p-1 rounded bg-[#05d54a]/[.06]">Successfully! Please check email to verify your account</div>}
					{error && <div className="text-[#ff6600] mb-4 text-center border border-[#ff6600] p-1 rounded bg-[#ff6600]/[.06]">{error}</div>}
					<div className="grid grid-cols-2 gap-7">
						<div className="">
							<label className="flex w-full mb-1 text-base font-medium label">First Name</label>
							<input className="form-input" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
						</div>
						<div className="">
							<label className="flex w-full mb-1 text-base font-medium label">Last Name</label>
							<input className="form-input" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
						</div>
						<div className="">
							<label className="flex w-full mb-1 text-base font-medium label">Birthday</label>
							<input className="form-input" type="date" name="birthday" onChange={handleChange} value={formData.birthday} max={moment().format('YYYY-MM-DD')} required />
						</div>
						<div className="">
							<label className="flex w-full mb-1 text-base font-medium label">Gender</label>
							<div className="pt-3">
								<label className="mr-4 radio-container">
									<input type="radio" value={GENDER_VALUE.MALE} checked={formData.gender === GENDER_VALUE.MALE} name="gender" className="mr-1" onChange={handleChange} />
									Male
								</label>

								<label className="radio-container">
									<input type="radio" checked={formData.gender === GENDER_VALUE.FEMALE} value={GENDER_VALUE.FEMALE} name="gender" className="mr-1" onChange={handleChange} />
									Female
								</label>
							</div>
						</div>
						<div className="">
							<label className="flex w-full mb-1 text-base font-medium label">Email</label>
							<input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
						</div>
						<div className="">
							<label className="flex w-full mb-1 text-base font-medium label">Password</label>
							<input className="form-input" type="password" name="password" value={formData.password} onChange={handleChange} required />
						</div>
					</div>
					<div className="pt-4 text-base">
						By Creating An Account You Are Agreeing To Our <Link to="/privacy-policy">Privacy Policy</Link> And
						<Link to="/terms-of-service"> Terms Of Service</Link>.
					</div>
					<div className="pt-9">
						<button className="btn primary" type="submit" disabled={loading}>
							Create Account
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterForm
