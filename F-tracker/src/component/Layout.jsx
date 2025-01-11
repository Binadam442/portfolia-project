import React from 'react';
import Nav from './Nav'
import Footer from './Footer'
export default function Layout({ children }) {
    return <div>
        <Nav />

        <div className='app-main-content'>
            {children}
        </div>

        <Footer />
    </div>
}