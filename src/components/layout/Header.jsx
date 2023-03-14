import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { get } from 'lodash'
import { resetAuth } from 'stores/reducers/auth'
import SideBar from 'components/side-bar/SideBar'
import { FaAngleUp } from "react-icons/fa";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const Header = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const [isActiveScroll, setIsActiveScroll] = useState(false);
	const pathname = location.pathname
	const current_user = useSelector((state) => get(state, 'userStore.user'))
	const navigation = [
		{ name: 'Home', href: '/', current: true },
		...(!current_user
			? [
				{ name: 'Sign Up', href: '/register', current: false },

				{ name: 'Log In', href: '/login', current: false }
			]
			: []),
		{ name: 'About Us', href: '/about-us', current: false }
	]

	const userNavigation = [
		{ name: 'Dashboard', href: '/dashboard' },
		...(current_user && !get(current_user, 'isAdmin', false) ? [{ name: 'Referral', href: '/referral' }] : []),
		{ name: 'Profile', href: '/profile' },
		...(current_user && !get(current_user, 'isAdmin', false) ? [{ name: 'Withdraw', href: '/withdraw' }] : []),
		{ name: 'Logout', href: '#' }
	]

	const handleUserNavigationClick = (e) => {
		const link_name = e.target.name
		if (link_name === 'Sign Up') {
			e.preventDefault()
			dispatch(resetAuth())
			window.location.href = '/register'
		} else if (link_name === 'Logout') {
			e.preventDefault()
			dispatch(resetAuth())
			window.location.href = '/login'
		}
	}

	const [scrollPos, setScrollPos] = useState(0)
	const [navbarClass, setNavbarClass] = useState('')

	const moveTop = () => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrollPos(window.pageYOffset)
			setNavbarClass(scrollPos > 50 ? 'scrolled' : '')
			if(scrollPos < 100) setIsActiveScroll(false);
			else setIsActiveScroll(true);
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollPos])

	return (
		<>
			<div
				className={`fixed z-50 left-0 right-0 top-0 `}
				style={{
					boxShadow: navbarClass === '' ? 'none' : '0px 0px 30px rgb(127 137 161 / 30%)'
				}}>
				<Disclosure as="nav" className={navbarClass === '' ? `bg-transparent` : 'bg-white'}>
					{({ open }) => (
						<>
							<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center justify-between w-full">
										<Link to="/" className="flex-shrink-0">
											<h2 className={`text-3xl tracking-wide font-bold hover:opacity-70 ${pathname === '/' && navbarClass === '' ? 'text-white' : 'text-blue-500'}`}>WINTUB</h2>
										</Link>

										<div className="hidden md:block">
											<div className="flex items-baseline space-x-4">
												{navigation.map((item) => (
													<Link
														key={item.name}
														to={item.href}
														name={item.name}
														onClick={handleUserNavigationClick}
														className={`px-3 py-2 rounded-md text-sm font-bold hover:opacity-70 ${pathname === '/' && navbarClass === '' ? 'text-white' : 'text-blue-500'}`}
														aria-current={item.href === pathname ? 'page' : undefined}>
														{item.name}
													</Link>
												))}

												{!!current_user && (
													<div className="hidden md:block">
														<div className="flex items-center">
															<Menu as="div" className="relative ml-3">
																<div>
																	<Menu.Button className={`flex max-w-xs items-center text-sm px-3 py-2 rounded-md font-bold hover:opacity-70 ${pathname === '/' && navbarClass === '' ? 'text-white' : 'text-blue-500'}`}>
																		My Account <ChevronDownIcon className="block h-3 w-3 ml-1" aria-hidden="true" />
																	</Menu.Button>
																</div>

																<Transition
																	as={Fragment}
																	enter="transition ease-out duration-100"
																	enterFrom="transform opacity-0 scale-95"
																	enterTo="transform opacity-100 scale-100"
																	leave="transition ease-in duration-75"
																	leaveFrom="transform opacity-100 scale-100"
																	leaveTo="transform opacity-0 scale-95">
																	<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
																		{userNavigation.map((item) => (
																			<Menu.Item key={item.name}>
																				{({ active }) => (
																					<Link
																						to={item.href}
																						name={item.name}
																						onClick={handleUserNavigationClick}
																						className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
																						{item.name}
																					</Link>
																				)}
																			</Menu.Item>
																		))}
																	</Menu.Items>
																</Transition>
															</Menu>
														</div>
													</div>
												)}
											</div>
										</div>
									</div>

									<div className="-mr-2 flex md:hidden">
										<Disclosure.Button
											className={`${open
												? ' inline-flex items-center justify-center rounded-md bg-transparent  text-white z-50 font-bold'
												: ' inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
												} `}>
											<span className="sr-only">Open main menu</span>
											{open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="md:hidden">
								<SideBar openSideBar={true} />
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				{
					isActiveScroll && <div className="move-top-btn" onClick={moveTop} ><FaAngleUp /></div>
				}
			</div>
		</>
	)
}

export default Header
