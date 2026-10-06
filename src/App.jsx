import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-google-blue selection:text-white">
      <header className="bg-white shadow-sm border-b-4 border-b-google-blue sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-google-red"></div>
                <div className="w-3 h-3 rounded-full bg-google-blue"></div>
                <div className="w-3 h-3 rounded-full bg-google-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-google-green"></div>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">GDG Halifax</span>
            </div>
            <a 
              href="https://app.advocu.com/public/gde/events/6ac253183b5fb933c2607baf?cfpid=6ac293681db70629779e559a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full font-medium text-white bg-google-blue hover:bg-blue-600 transition-colors shadow-sm"
            >
              Apply to Speak
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            DevFest <span className="text-google-blue">Nova Scotia</span> 2026
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
            Build, Secure, Scale: <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-red via-google-yellow to-google-green">
              Developers and Builders in the Agentic Era
            </span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <div className="flex items-center text-slate-600 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
              <svg className="w-6 h-6 mr-2 text-google-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="font-semibold">December 5, 2026</span>
            </div>
            <div className="flex items-center text-slate-600 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
              <svg className="w-6 h-6 mr-2 text-google-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="font-semibold">Volta, Halifax & Virtual</span>
            </div>
          </div>

          <div className="mt-16">
            <a 
              href="https://app.advocu.com/public/gde/events/6ac253183b5fb933c2607baf?cfpid=6ac293681db70629779e559a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Apply to Speak
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-google-blue rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Build</h3>
            <p className="text-slate-600">Explore the latest frameworks, tools, and platforms that empower developers to create robust applications in the agentic era.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-google-red rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Secure</h3>
            <p className="text-slate-600">Learn best practices for safeguarding your applications, data, and users against emerging threats and vulnerabilities.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-google-yellow rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Scale</h3>
            <p className="text-slate-600">Discover strategies and architectures for scaling your systems to meet growing demands efficiently and reliably.</p>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-12 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 font-medium">© 2026 GDG Halifax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
