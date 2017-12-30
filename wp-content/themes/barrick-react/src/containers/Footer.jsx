import React from 'react'
import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'

const FooterSection = () => {
  return (
    <footer className="footer">
      <Logo className="logo-footer" />
      <SearchBar />
    </footer>
  )
}

export default FooterSection