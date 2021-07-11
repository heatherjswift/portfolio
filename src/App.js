import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  
  const whichPage = () => {
    if (portfolioSelected) {
      return <Portfolio></Portfolio>
    } else if (contactSelected) {
      return <ContactForm></ContactForm>
    }
     else if (resumeSelected) {
      return <Resume></Resume>
    }
    else {
      return <About></About>
    }
  }

  return (
    <div>
      <Nav
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
       {whichPage()}
      </main>
    </div>
  );
}

export default App;
