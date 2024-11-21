'use client';

import React, { useState } from 'react'
import "./header.css"
import Link from 'next/link';
import Nav from './Nav';
import Sci from './Sci';
import SearchForm from './SearchForm';


const Header = () => {

    const [open, setOpen] = useState(false);
    const [on, setOn] = useState(false);
    const handleFormOpen = () => {
        setOpen((prev) => !prev);
    };

    const handleToggleMenu = () => {
        setOn(!on);
        const body: HTMLElement | any = document.querySelector('body')
        body.classList.toggle('mobile-nav-active')
    }

  return (
    <header id="header" className='header d-flex align-items-center fixed-top'>

        <div className="container-fluid container-xl d-flex align-items-center justify-content-between ">

            <Link href="/" className='logo d-flex align-items-center ' >
                {/* <img  /> */}
                <h1>Digital News</h1>
            </Link>
            <Nav/>
            <div className="position-relative d-flex">
                <Sci/>
                <a className='mx-2 js-search-open' onClick={handleFormOpen}>
                    <span className='bi-search'></span>
                </a>
                {
                    on ? (
                        <i className='bi bi-x mobile-nav-toggle' onClick={handleToggleMenu}></i>
                    ) : (
                        <i className='bi bi-list mobile-nav-toggle' onClick={handleToggleMenu}></i>
                    )
                }
                <SearchForm active={open} formOpen={handleFormOpen} />
            </div>
        </div>

    </header>
  )
}

export default Header