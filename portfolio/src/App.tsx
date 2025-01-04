import React from 'react';
import {Footer,Experience,Projects,Contact,About,Profile,Navbar} from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
