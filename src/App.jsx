import React from 'react'
import Navigation from './commopents/Navigation/Navigation'
import ContactHeader from './commopents/ContactHeader/ContactHeader'
import ContactFrom from './commopents/ContactFrom/ContactFrom'

function App() {
  return (
    <div>

      <Navigation />
      <main className='main_container'>
      <ContactHeader/>
      <ContactFrom />
      </main>
    </div>
  )
}

export default App