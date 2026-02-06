import React from 'react'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/inventory/Products'
import Sales from '../pages/sales/Sales'
import CreateSale from '../pages/sales/CreateSale'
import Insights from '../pages/ai/AiInsights'
import HomePage from '../pages/HomePage'
export default function AppRoutes() {
  return (
    <Routes>
      
    <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/create-sale' element={<CreateSale />} />
        <Route path='/insights' element={<Insights />} />
      
    </Routes>
  )
}
