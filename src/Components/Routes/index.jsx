import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

import Home from '../Home'
import Favorite from '../Favorite'
import Cart from '../Cart'
import Login from '../Login'

const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.FAVORITE} element={<Favorite />} />
			<Route path={ROUTES.CART} element={<Cart />} />
		</Routes>
	)
}

export default AppRoutes