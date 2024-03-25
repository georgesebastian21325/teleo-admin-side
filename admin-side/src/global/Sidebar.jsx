import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants'
import ImgPlaceHolder from '../assets/img-place-holder.png'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	return (
		<div className="bg-gradient-to-t from-red-900 via-slate-900 to-sky-900 h-screen w-60 p-3 flex-col hidden lg:block">
			<div className="flex flex-col items-center py-3">
				<div className='flex flex-col mr-2 items-center mt-10'>
					<img src={ImgPlaceHolder} alt="" />
					<span className="text-neutral-200 text-lg">Every Nation</span>
				</div>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-3 mt-12">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(
				'flex items-center p-2 space-x-2 rounded-md transition-colors duration-200',
				{
					'bg-neutral-700 text-white': pathname === link.path && link.key !== 'sign-out',
					'text-red-500': link.key === 'sign-out',
					'text-neutral-400': pathname !== link.path && link.key !== 'sign-out',
				},
				link.linkClass
			)}
		>
			<span className="text-xl">{link.icon}</span>
			<span className="text-sm">{link.label}</span>
		</Link>
	)
}
