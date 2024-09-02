'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, ChevronDown, Twitter, Youtube, Instagram, Twitch, Music, ExternalLink } from 'lucide-react'
import Image from 'next/image';
import Head from 'next/head';

export function RichBustosPortfolio() {
  const [activeSections, setActiveSections] = useState<string[]>(['home'])
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleSection = (section: string) => {
    setActiveSections(prevSections =>
      prevSections.includes(section)
        ? prevSections.filter(s => s !== section)
        : [...prevSections, section]
    )
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const sections = {
    home: (
      <div className="space-y-4">
        <p className="text-green-600 dark:text-green-400">
          hello, im bustos. i like making cool shit.<br />
          <br />
          im a builder by heart - i love composing music, developing cool shit & pushing my potential to the absolute limit.<br />
          <br />
          i have an AI engineering degree but i rather make games, music & web3 stuff lol.
        </p>
        <p className="text-green-600 dark:text-green-400">get in touch</p>
        <a href="mailto:bustos@vibing.studio" className="text-blue-600 dark:text-blue-400 hover:underline">bustos@vibing.studio</a>
      </div>
    ),
    projects: (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">checkout my cool projects</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" /> ixtlan - band & videogame
            </a>
            <p className="text-green-600 dark:text-green-400">2024-now. an art project blending music and gaming to explore human potential.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" /> kiwii pocket - pet racoon
            </a>
            <p className="text-green-600 dark:text-green-400">2023-2024. a digital pet racoon for all your needs. i crafted the marketing plan, funded the project, and oversaw the music. available on android & ios.</p>
          </li>
          <li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" /> vibe knights - digital collectibles
            </a>
            <p className="text-green-600 dark:text-green-400">2022-2023 - led an art project that blended anime, AI curation, and blockchain to make a beautiful collection of 4663 pfp's.</p>
          </li>
        </ul>
      </div>
    ),
    socials: (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">follow my socials</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://x.com/0xbustos" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"><Twitter className="w-4 h-4 mr-2" /> twitter</a>
            <p className="text-green-600 dark:text-green-400">insights on development, web3, videogames and my creative journey. working towards 1M followers - currently 22k.</p>
          </li>
          <li>
            <a href="https://www.instagram.com/bustos.x0/" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"><Instagram className="w-4 h-4 mr-2" /> instagram</a>
            <p className="text-green-600 dark:text-green-400">nothing to see here.</p>
          </li>
          <li>
            <a href="https://github.com/0xbustos" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"><Youtube className="w-4 h-4 mr-2" /> github</a>
            <p className="text-green-600 dark:text-green-400">code, code & code.</p>
          </li>
        
          {/*<li>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"><Twitter className="w-4 h-4 mr-2" /> tiktok</a>
            <p className="text-green-600 dark:text-green-400">unique content related to my music and gaming projects.</p>
          </li>
          */}
        </ul>
      </div>
    ),
    blog: (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">blog</h2>
        <p className="text-2xl text-green-600 dark:text-green-400">coming soon</p>
        {/* <ul className="space-y-2">
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
        </ul> */}
      </div>
    ),
    // music: (
    //   <div className="space-y-4">
    //     <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">my music</h2>
    //     <ul className="space-y-2">
    //       <li>
    //         <a href="https://open.spotify.com/track/your_track_id" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
    //           <ExternalLink className="w-4 h-4 mr-2" /> latest single: &apos;digital dreams&apos;
    //         </a>
    //         <p className="text-green-600 dark:text-green-400">a fusion of electronic beats and soulful melodies.</p>
    //         <a href="https://open.spotify.com/track/your_track_id" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
    //           <Music className="w-4 h-4 mr-2" /> listen on spotify
    //         </a>
    //       </li>
    //       <li>
    //         <a href="https://open.spotify.com/album/your_album_id" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
    //           <ExternalLink className="w-4 h-4 mr-2" /> album: &apos;web3 symphonies&apos;
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

  const currentYear = new Date().getFullYear();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-green-400' : 'bg-white text-gray-800'} font-mono transition-colors duration-300`}>
      <Head>
        <link rel="icon" href="/izaki.jpg" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8 space-x-4">
          <Image
            src="/izaki.jpg"
            alt="0xbustos"
            width={24}
            height={24}
            className="rounded-full"
          />
          <h1 className="text-lg font-bold text-purple-600 dark:text-purple-400">0xbustos</h1>
        </div>
        <nav className="space-y-2">
          {Object.entries(sections).map(([section, content]) => (
            <div key={section}>
              <button
                onClick={() => toggleSection(section)}
                className={`text-left w-full flex items-center ${activeSections.includes(section) ? 'text-purple-600 dark:text-purple-400' : 'text-green-600 dark:text-green-400'}`}
              >
                {activeSections.includes(section) ? (
                  <ChevronDown className="inline w-4 h-4 mr-2" />
                ) : (
                  <ChevronRight className="inline w-4 h-4 mr-2" />
                )}
                {section}
              </button>
              {activeSections.includes(section) && (
                <div className="mt-2 mb-4 ml-6">
                  {content}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      <footer className="text-center p-4 mt-8 border-t border-green-600 dark:border-green-400 flex justify-between items-center">
        <p className="text-sm text-green-600 dark:text-green-400">© 0xbustos {currentYear}</p>
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