

function Nav(props) {
  const {
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
            <a href='#about' onClick={() => setContactSelected(false)}>
              About Me
            </a>
          </li>
          <li className='mx-2'>
            <span >
              Portfolio
            </span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`} >
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li>
            <span className='mx-2'>Resume</span>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Nav; 