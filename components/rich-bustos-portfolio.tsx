'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, ChevronDown, Twitter, Youtube, Instagram, Twitch, Music, ExternalLink } from 'lucide-react'

export function RichBustosPortfolio() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? '' : section)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const sections = {
    home: (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          hi, i'm rich, also known as bustos. welcome to my creative hub where music, technology, and philanthropy converge.
        </h1>
        <p className="text-green-600 dark:text-green-400">get in touch</p>
        <a href="mailto:me@richbustos.com" className="text-blue-600 dark:text-blue-400 hover:underline">me@richbustos.com</a>
      </div>
    ),
    socials: (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">follow my socials</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"><Twitter className="w-4 h-4 mr-2" /> twitter</a>
            <p className="text-green-600 dark:text-green-400">insights on music, web3, and my creative journey. working towards 5 million followers.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"><Instagram className="w-4 h-4 mr-2" /> instagram</a>
            <p className="text-green-600 dark:text-green-400">visual moments from my music and creative endeavors.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"><Youtube className="w-4 h-4 mr-2" /> youtube</a>
            <p className="text-green-600 dark:text-green-400">music and behind-the-scenes content.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"><Twitter className="w-4 h-4 mr-2" /> tiktok</a>
            <p className="text-green-600 dark:text-green-400">unique content related to my music and gaming projects.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"><Twitch className="w-4 h-4 mr-2" /> twitch</a>
            <p className="text-green-600 dark:text-green-400">live streams exploring music, gaming, and community interaction.</p>
          </li>
        </ul>
      </div>
    ),
    blog: (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">blog</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" /> my journey into music and web3 development
            </a>
            <p className="text-green-600 dark:text-green-400">2024-03-01: blending music with web3. insights on projects and inspirations.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" /> the future of music in the digital era
            </a>
            <p className="text-green-600 dark:text-green-400">2024-04-15: exploring technology and web3 in music creation and consumption.</p>
          </li>
        </ul>
      </div>
    ),
    projects: (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">checkout my cool projects</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" /> kiwii pocket
            </a>
            <p className="text-green-600 dark:text-green-400">2024- tamagotchi-inspired mobile game with a raccoon. viral hit with top influencers.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" /> echoes of ixtlan
            </a>
            <p className="text-green-600 dark:text-green-400">2024- video game exploring human experiences. inspired by carlos castaneda.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" /> ixtlan (band)
            </a>
            <p className="text-green-600 dark:text-green-400">2024- music project syncing album releases with games and animations.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" /> drip haus
            </a>
            <p className="text-green-600 dark:text-green-400">2024- distributing digital collectibles in the solana ecosystem.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" /> vibing studios
            </a>
            <p className="text-green-600 dark:text-green-400">2024- driving growth and innovation in the web3 space.</p>
          </li>
        </ul>
      </div>
    ),
    // music: (
    //   <div className="space-y-4">
    //     <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">my music</h2>
    //     <ul className="space-y-2">
    //       <li>
    //         <a href="https://open.spotify.com/track/your_track_id" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
    //           <ExternalLink className="w-4 h-4 mr-2" /> latest single: "digital dreams"
    //         </a>
    //         <p className="text-green-600 dark:text-green-400">a fusion of electronic beats and soulful melodies.</p>
    //         <a href="https://open.spotify.com/track/your_track_id" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
    //           <Music className="w-4 h-4 mr-2" /> listen on spotify
    //         </a>
    //       </li>
    //       <li>
    //         <a href="https://open.spotify.com/album/your_album_id" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
    //           <ExternalLink className="w-4 h-4 mr-2" /> album: "web3 symphonies"
    //         </a>
    //         <p className="text-green-600 dark:text-green-400">blending traditional instruments with blockchain-inspired sound design.</p>
    //         <a href="https://open.spotify.com/album/your_album_id" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
    //           <Music className="w-4 h-4 mr-2" /> listen on spotify
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // ),
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-green-400' : 'bg-white text-gray-800'} font-mono transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <img
            src="/placeholder.svg?height=24&width=24"
            alt="Rich Bustos"
            className="w-6 h-6 rounded-full mr-2"
          />
          <h1 className="text-lg font-bold text-purple-600 dark:text-purple-400">rich bustos</h1>
        </div>
        <nav className="space-y-2">
          {Object.entries(sections).map(([section, content]) => (
            <div key={section}>
              <button
                onClick={() => toggleSection(section)}
                className={`text-left w-full flex items-center ${activeSection === section ? 'text-purple-600 dark:text-purple-400' : 'text-green-600 dark:text-green-400'}`}
              >
                {activeSection === section ? (
                  <ChevronDown className="inline w-4 h-4 mr-2" />
                ) : (
                  <ChevronRight className="inline w-4 h-4 mr-2" />
                )}
                {section}
              </button>
              {activeSection === section && (
                <div className="mt-2 mb-4 ml-6">
                  {content}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      <footer className="text-center p-4 mt-8 border-t border-green-600 dark:border-green-400 flex justify-between items-center">
        <p className="text-sm text-green-600 dark:text-green-400">© rich bustos 2024</p>
        <button
          onClick={toggleDarkMode}
          className="text-sm text-green-600 dark:text-green-400 hover:underline focus:outline-none"
          aria-label={isDarkMode ? "switch to light mode" : "switch to dark mode"}
        >
          {isDarkMode ? "light mode" : "dark mode"}
        </button>
      </footer>
    </div>
  )
}