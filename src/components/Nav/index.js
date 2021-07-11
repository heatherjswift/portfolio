function Nav() {

  return (
    <header>
      <h2>
        <a href='/'>
          <span role="img" aria-label="flame">🔥</span> Heather Swift
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a href='#about'>
              About Me
            </a>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span>Resume</span>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Nav; 