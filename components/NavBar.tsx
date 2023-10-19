import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const navIcons = [
        {
            src: '/assets/icons/search.svg',
            alt: 'Search'
        },
        {
            src: '/assets/icons/black-heart.svg',
            alt: 'Favourite'
        },
        {
            src: '/assets/icons/user.svg',
            alt: 'User'
        }
    ]

    return (
        <header className='w-full'>
            <nav className='nav'>
                <Link href='/' className='flex items-center gap-2'>
                    <Image
                        src={'/assets/icons/logo.svg'}
                        alt='logo'
                        width={27}
                        height={27}
                    />
                    <p className='nav-logo'>Price<span className='text-sky-800'>Plucker</span></p>
                </Link>
                <div className='flex items-center gap-5'>
                    {navIcons.map((icon, key) => <Image key={key} src={icon.src} alt={icon.alt} width={28} height={28} />)}
                </div>
            </nav>
        </header>
    )
}

export default NavBar