

function Nav(props) {
  const {
    portfolioSelected,
    setPortfolioSelected,
    resumeSelected,
    setResumeSelected,
    contactSelected,
    setContactSelected
  } = props

  return (
    <header className='flex-row px-1'>
      <h2>
        <a href='/'>
          <span role="img" aria-label="flame">🔥</span> Heather Swift <span role="img" aria-label="flame">🔥</span>
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a href='#about' onClick={() => {
              setContactSelected(false);
              setPortfolioSelected(false);
              setResumeSelected(false);
              }}>
              About Me
            </a>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <a href="#portfolio" onClick={() => {
              setPortfolioSelected(true);
              setContactSelected(false);
              setResumeSelected(false);
            }}>
              Portfolio
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`} >
            <a href="#contact" onClick={() => {
              setContactSelected(true); 
              setPortfolioSelected(false);
              setResumeSelected(false);
            }}>
              Contact
            </a>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <a href="#resume" onClick={() => {
              setResumeSelected(true);
              setPortfolioSelected(false);
              setContactSelected(false);
            }}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav; 