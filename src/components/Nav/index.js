

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
            <span onClick={() => setPortfolioSelected(true)}>
              Portfolio
            </span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`} >
            <span onClick={() => setContactSelected(true)}>
              Contact
            </span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span onClick={() => setResumeSelected(true)}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav; 