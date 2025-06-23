import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="dark:bg-gray-900 dark:text-gray-100 bg-slate-100 text-gray-800 text-sm">
      <hr className="mb-4 border-gray-900 dark:border-gray-100" />
      <div className="max-w-screen-xl mx-auto p-4 py-8">
        <div className="md:flex md:justify-between items-start">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" className="h-8 mr-2" alt="Arivra Logo" />
              <span className="text-2xl font-bold dark:text-gray-50 text-gray-900">Arivra</span>
            </Link>
            <p className="mt-2 text-gray-800 dark:text-gray-400 italic">
              Learn. Build. Evolve. 🚀
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-gray-500 dark:text-gray-400">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase dark:text-gray-50 text-gray-900">Explore</h2>
              <ul>
                <li className="mb-2"><Link to="/courses/html" className="hover:underline">HTML</Link></li>
                <li className="mb-2"><Link to="/courses/css" className="hover:underline">CSS</Link></li>
                <li><Link to="/courses/javascript" className="hover:underline">JavaScript</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold  uppercase dark:text-gray-50 text-gray-900">Resources</h2>
              <ul>
                <li className="mb-2"><Link to="/about"  className="hover:underline">About Us</Link></li>
                <li><a href="/courses" target="_blank" rel="noreferrer" className="hover:underline">Courses</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase dark:text-gray-50 text-gray-900">Community</h2>
              <ul>
                <li className="mb-2"><a href="https://github.com" className="hover:underline">GitHub</a></li>
                <li><a href="https://discord.com" className="hover:underline">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-900 dark:border-gray-100" />
                

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-400 text-sm">
  <span>
    © 2025 <span className="font-semibold dark:text-gray-50 text-gray-900">Arivra</span>. All Rights Reserved.
  </span>
  <span className="mt-2 sm:mt-0 italic">
    Built with ❤️ by Saurav & Aria
  </span>
</div>


      </div>
    </footer>
  )
}

export default Footer;