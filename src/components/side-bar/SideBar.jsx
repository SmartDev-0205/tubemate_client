import React, {useState} from 'react'
import {ChevronDownIcon} from '@heroicons/react/24/outline'
import {useLocation, Link} from 'react-router-dom'
import {get} from 'lodash'
import {resetAuth} from 'stores/reducers/auth'
import {useSelector, useDispatch} from 'react-redux'

const SideMenu = ({openSideBar}) => {
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false)
	const current_user = useSelector((state) => get(state, 'userStore.user'))

	const handleUserNavigationClick = (e) => {
		e.preventDefault()
		dispatch(resetAuth())
		window.location.href = '/login'
	}

	return (
		<div className="w-full absolute top-0 right-0 left-0 bottom-0 h-screen opacity-90 bg-[#435061]">
			<aside id="logo-sidebar" className={`fixed bg-endregion top-0 left-0 z-40 w-[20.6rem] h-screen py-4 transition-transform -translate-x-full bg-[#1b2d41] lg:translate-x-0 ${openSideBar ? 'translate-x-0' : ''} aria-label="Sidebar`}>
				<div className={`h-full pb-4 overflow-y-auto bg-endregion bg-[#1b2d41]`}>
					{!current_user ? (
						<ul className="flex flex-col gap-0.5">
							<li>
								<Link to="/">
									<p className={`flex items-center p-2 mx-5 text-[0.938rem] cursor-pointer leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
										<span>Home</span>
									</p>
								</Link>
							</li>

							<li>
								<Link to="/register">
									<p className={`flex items-center p-2 mx-5 text-[0.938rem] cursor-pointer leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
										<span>Sign Up</span>
									</p>
								</Link>
							</li>

							<li>
								<Link to="/login">
									<p className={`flex items-center p-2 mx-5 text-[0.938rem] cursor-pointer leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
										<span>Log In</span>
									</p>
								</Link>
							</li>

							<li>
								<Link to="/about-us">
									<p className={`flex items-center p-2 mx-5 text-[0.938rem] cursor-pointer leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
										<span>About Us</span>
									</p>
								</Link>
							</li>
						</ul>
					) : (
						<ul className="flex flex-col gap-0.5">
							<li>
								<Link to="/">
									<p className={`flex items-center p-2 mx-5 text-[0.938rem] cursor-pointer leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
										<span>Home</span>
									</p>
								</Link>
							</li>
							<li
								onClick={() => {
									setIsOpen(!isOpen)
								}}
								className="flex items-center cursor-pointer justify-between pr-3">
								<p className={`${isOpen ? 'text-[#83a1c0]' : 'text-white'} cursor-pointer flex items-center p-2 mx-5 text-[0.938rem] leading-[1.75rem] font-medium text-side_menu_text  gap-3  rounded  hover:bg-side_menu_hover `}>
									<span>My Account</span>
								</p>
								{isOpen ? <ChevronDownIcon className="block rotate-180  text-[#3b82f6] h-3 w-5 ml-1" aria-hidden="true" /> : <ChevronDownIcon className=" text-white block  h-3 w-5 ml-1" aria-hidden="true" />}
							</li>

							{isOpen && (
								<ul>
									<li>
										<Link to="/dashboard">
											<p className={`flex items-center p-2 cursor-pointer  pl-8 mx-5 text-[0.938rem] leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
												<span>DashBoard</span>
											</p>
										</Link>
									</li>
									<li>
										<Link to="/referral">
											<p className={`flex items-center p-2 cursor-pointer  pl-8 mx-5 text-[0.938rem] leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
												<span>Refferral</span>
											</p>
										</Link>
									</li>
									<li>
										<Link to="/profile">
											<p className={`flex items-center p-2 cursor-pointer  pl-8 mx-5 text-[0.938rem] leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
												<span>Profile</span>
											</p>
										</Link>
									</li>
									<li>
										<Link to="/withdraw">
											<p className={`flex items-center p-2 cursor-pointer  pl-8 mx-5 text-[0.938rem] leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
												<span>WithDraw</span>
											</p>
										</Link>
									</li>
									<li>
										<Link onClick={handleUserNavigationClick}>
											<p className={`flex items-center p-2  cursor-pointer pl-8 mx-5 text-[0.938rem] leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
												<span>LogOut</span>
											</p>
										</Link>
									</li>
								</ul>
							)}

							<li>
								<Link to="/about-us">
									<p className={`flex items-center p-2 mx-5 text-[0.938rem] cursor-pointer leading-[1.75rem] font-medium text-side_menu_text  gap-3 text-white rounded  hover:bg-side_menu_hover `}>
										<span>About Us</span>
									</p>
								</Link>
							</li>
						</ul>
					)}
				</div>
			</aside>
		</div>
	)
}

export default SideMenu
