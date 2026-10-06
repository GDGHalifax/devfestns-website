/* global __APP_VERSION__ */
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-google-blue selection:text-white">
      <header className="bg-white shadow-sm border-b-[3px] border-b-google-blue sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-google-red"></div>
                <div className="w-3 h-3 rounded-full bg-google-blue"></div>
                <div className="w-3 h-3 rounded-full bg-google-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-google-green"></div>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800 hidden sm:block">GDG Halifax & GDG Sydney</span>
              <span className="font-bold text-xl tracking-tight text-slate-800 sm:hidden">GDG</span>
            </div>
            <a 
              href="https://gdg.community.dev/events/details/google-gdg-halifax-presents-devfest-2026-nova-scotia-edition/cohost-gdg-halifax" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md font-medium text-white bg-google-blue hover:bg-[#3367d6] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-google-blue"
            >
              RSVP Now
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Build, Secure, Scale: <br className="hidden sm:block"/>
            <span className="text-google-blue">Developers and Builders in the Agentic Era</span>
          </h1>
          
          <h2 className="mt-4 text-xl md:text-2xl text-slate-600 font-medium">
            DevFest Nova Scotia 2026
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <div className="flex items-center text-slate-700 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-200">
              <svg className="w-5 h-5 mr-2 text-google-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="font-semibold text-sm sm:text-base">Dec 5, 2026</span>
            </div>
            <div className="flex items-center text-slate-700 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-200">
              <svg className="w-5 h-5 mr-2 text-google-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="font-semibold text-sm sm:text-base">Volta, Halifax & Virtual</span>
            </div>
          </div>

          <div className="mt-12 px-4 sm:px-0 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://gdg.community.dev/events/details/google-gdg-halifax-presents-devfest-2026-nova-scotia-edition/cohost-gdg-halifax" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-google-blue hover:bg-[#3367d6] focus:outline-none focus:ring-4 focus:ring-google-blue/30 transition-all shadow-md hover:shadow-lg"
            >
              RSVP Now
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a 
              href="https://app.advocu.com/public/gde/events/6ac253183b5fb933c2607baf?cfpid=6ac293681db70629779e559a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border-2 border-google-blue text-lg font-bold rounded-md text-slate-900 bg-transparent hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-google-blue/30 transition-all shadow-sm hover:shadow-md"
            >
              Apply to Speak
            </a>
          </div>
        </section>

        {/* About the Event */}
        <section className="bg-white py-12 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">About the Event</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Join developers, students, and tech enthusiasts from across Atlantic Canada as GDG Halifax and GDG Sydney team up for a day of hands-on Cloud and AI workshops, agent-building codelabs, and community networking.
            </p>
          </div>
        </section>

        {/* Tracks Section */}
        <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-google-blue rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Build</h3>
                <p className="text-slate-600 leading-relaxed">Explore the latest frameworks, tools, and platforms that empower developers to create robust applications in the agentic era.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-google-red rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Secure</h3>
                <p className="text-slate-600 leading-relaxed">Learn best practices for safeguarding your applications, data, and users against emerging threats and vulnerabilities.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-google-yellow rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Scale</h3>
                <p className="text-slate-600 leading-relaxed">Discover strategies and architectures for scaling your systems to meet growing demands efficiently and reliably.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2 Coming Soon Stubs */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Featured Speakers</h2>
                <p className="text-slate-500 mb-6">We are currently reviewing submissions. The speaker lineup will be announced soon!</p>
                <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded-full font-medium text-sm">
                  Coming Soon
                </div>
              </div>
              
              <div className="flex-1 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Agenda</h2>
                <p className="text-slate-500 mb-6">The full schedule of keynotes, workshops, and codelabs is actively being built.</p>
                <div className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded-full font-medium text-sm">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Partners */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-12">Community Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <a href="https://immigratr.ca" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center w-64 h-32 hover:shadow-md transition-shadow">
                <div className="flex items-center text-2xl font-black text-slate-800">
                  <span className="text-google-blue mr-2">H.M.</span> Immigratr
                </div>
              </a>
              {/* Additional sponsor placeholders */}
              <div className="bg-slate-100 border-2 border-dashed border-slate-200 rounded-2xl w-64 h-32 flex items-center justify-center opacity-70">
                <span className="text-slate-400 font-medium">Your Logo Here</span>
              </div>
            </div>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:" + "gdghalifax" + "@" + "gmail.com";
              }}
              className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-base font-bold rounded-md text-slate-700 bg-transparent hover:bg-slate-100 hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all cursor-pointer"
            >
              Become a Sponsor
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-google-red"></div>
            <div className="w-2 h-2 rounded-full bg-google-blue"></div>
            <div className="w-2 h-2 rounded-full bg-google-yellow"></div>
            <div className="w-2 h-2 rounded-full bg-google-green"></div>
          </div>
          <p className="font-medium text-sm text-slate-400">© 2026 DevFest Nova Scotia. All rights reserved.</p>
          <p className="mt-2 text-xs text-slate-500">v{__APP_VERSION__}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
