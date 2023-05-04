import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Reset from './Reset'
import MyProfile from './MyProfile'
import Destination from './Destination'
import Choice from './Choice'
import Food from './Food'
import Accomodation from './Accomodation'
import Bn from './Bn'
import Entertainment from './Entertainment'
import Transport from './Transport'
import Likedtrips from './Likedtrips'


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}>Login</Route>
            <Route path="Signup" element={<Signup/>}>Signup</Route>
            <Route path="Reset" element={<Reset/>}>Reset</Route>
            <Route path="MyProfile" element={<MyProfile/>}>MyProfile</Route>
            <Route path="Destination" element={<Destination/>}>Destination</Route>
            <Route path="Choice" element={<Choice/>}>Choice</Route>
            <Route path="Food" element={<Food/>}>Food</Route>
            <Route path="Accomodation" element={<Accomodation/>}>Accomodation</Route>
            <Route path="Bn" element={<Bn/>}>Accomodation</Route>
            <Route path="Entertainment" element={<Entertainment/>}>Entertainment</Route>
            <Route path="Transport" element={<Transport/>}>Transport</Route>
            <Route path="Likedtrips" element={<Likedtrips/>}>Likedtrips</Route>
        </Routes>
    </BrowserRouter>
  )
}