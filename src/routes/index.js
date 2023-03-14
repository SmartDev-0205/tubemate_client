import {lazy} from 'react'
import {ROLES} from 'constants'

const Home = lazy(() => import('pages/Home'))
const AboutUs = lazy(() => import('pages/AboutUs'))
const ContactUs = lazy(() => import('pages/ContactUs'))
const PrivacyPolicy = lazy(() => import('pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('pages/TermsOfService'))
const Login = lazy(() => import('pages/auth/Login'))
const ForgotPassword = lazy(() => import('pages/auth/ForgotPassword'))
const ResetPassword = lazy(() => import('pages/auth/ResetPassword'))
const Register = lazy(() => import('pages/auth/Register'))
const VerifyAccount = lazy(() => import('pages/auth/VerifyAccount'))
const Dashboard = lazy(() => import('pages/Dashboard'))
const Referral = lazy(() => import('pages/Referral'))
const Profile = lazy(() => import('pages/Profile'))
const Withdraw = lazy(() => import('pages/Withdraw'))
const UpdatePassword = lazy(() => import('pages/UpdatePassword'))
const NotAuth = lazy(() => import('pages/NotAuth'))
const Users = lazy(() => import('pages/Users'))
const NotFound = lazy(() => import('pages/NotFound'))
const RegisterComplete = lazy(() => import('../components/register/registerComplete'))

const routes = [
	{
		path: '*',
		element: <NotFound />,
		private: false
	},
	{
		path: '/registered',
		element: <RegisterComplete />,
		private: false
	},
	{
		path: '/',
		element: <Home />,
		private: false
	},
	{
		path: '/about-us',
		element: <AboutUs />,
		private: false
	},
	{
		path: '/contact-us',
		element: <ContactUs />,
		private: false
	},
	{
		path: '/privacy-policy',
		element: <PrivacyPolicy />,
		private: false
	},
	{
		path: '/terms-of-service',
		element: <TermsOfService />,
		private: false
	},
	{
		path: '/login',
		element: <Login />,
		private: false
	},
	{
		path: '/forgot-password',
		element: <ForgotPassword />,
		private: false
	},
	{
		path: '/reset-password?',
		element: <ResetPassword />,
		private: false
	},
	{
		path: '/register',
		element: <Register />,
		private: false
	},
	{
		path: '/auth/verify-account',
		element: <VerifyAccount />,
		private: false
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
		private: true,
		allows: [ROLES.ADMIN, ROLES.USER]
	},
	{
		path: '/referral',
		element: <Referral />,
		private: true,
		allows: [ROLES.USER]
	},
	{
		path: '/profile',
		element: <Profile />,
		private: true,
		allows: [ROLES.ADMIN, ROLES.USER]
	},
	{
		path: '/withdraw',
		element: <Withdraw />,
		private: true,
		allows: [ROLES.USER]
	},
	{
		path: '/update-password',
		element: <UpdatePassword />,
		private: true,
		allows: [ROLES.ADMIN, ROLES.USER]
	},
	{
		path: '/users',
		element: <Users />,
		private: true,
		allows: [ROLES.ADMIN]
	},
	{
		path: '/403',
		element: <NotAuth />,
		private: false
	}
]

export default routes
