import React from 'react'

import GetStarted from 'components/home/GetStarted'
import OurPartners from 'components/home/OurPartners'
import Banner from 'components/home/Banner'
import Work from 'components/home/Work'
import WhyStripe from 'components/home/WhyStripe'
import GlobalScale from 'components/home/GlobalScale'
import ReadyGetStarted from 'components/home/ReadyGetStarted'

const Home = () => {
	return (
		<div className="w-full mb-[230px]">
			<Banner />
			<Work />
			<OurPartners />
			<GetStarted />
			<WhyStripe />
			<GlobalScale />
			<ReadyGetStarted />
		</div>
	)
}

export default Home
