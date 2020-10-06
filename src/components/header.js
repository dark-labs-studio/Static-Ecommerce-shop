import React from 'react'
import { Link } from 'gatsby'
import '../components/header.css'

function Header(props) {
  return (
    <div className={'header-wrapper'}>
      <ul className={'header-nav--container'}>
        <li ><Link className={'header-nav--item'} to='/'>Home</Link></li>
        <li ><Link className={'header-nav--item'} to='/submit'>Submit</Link></li>
        <li ><Link className={'header-nav--item'} to='/shop'>Shop</Link></li>
        <li ><Link className={'header-nav--item'} to='/about'>About</Link></li>
      </ul>
      <div className={'site-name--container'}>
        {props.siteTitle}
      </div>
    </div>
  )
}

export default Header
