import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={`h-[80vh] bg-gray-200 ${styles.footer}`}>

        <div className='flex items-start'>
            <section>
                <h2>Navigate</h2>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/'>Latest</Link>
                    </li>
                    <li>
                        <Link href='/'>Topic</Link>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Category</h2>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/'>Latest</Link>
                    </li>
                    <li>
                        <Link href='/'>Topic</Link>
                    </li>
                    <li>
                        <Link href='/'>Topic</Link>
                    </li>
                    <li>
                        <Link href='/'>Topic</Link>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Navigate</h2>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/'>Latest</Link>
                    </li>
                    <li>
                        <Link href='/'>Topic</Link>
                    </li>
                    <li>
                        <Link href='/'>Topic</Link>
                    </li>
                </ul>
            </section>
        </div>
        <div>

        </div>
    </footer>
  )
}
