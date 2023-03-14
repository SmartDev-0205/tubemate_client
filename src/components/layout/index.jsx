import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
	return (
		<div className="w-full">
			<Header />
			<div className="w-full mb-[170px]">{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
