import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';


function Footer () {
  return (
    <footer className='mx-2'>
      <a href="https://github.com/heatherjswift" target='_blank' rel='noreferrer'>
       <AiFillGithub size={70} />
      </a>
      <a href="https://www.facebook.com/hede3" target='_blank' rel='noreferrer'>
        <AiFillFacebook size={70} />
      </a>
      <a href="https://www.linkedin.com/in/heather-swift-67277b205/" target='_blank' rel='noreferrer'>
        <AiFillLinkedin size={70} />
      </a>
    </footer>
  )
}

export default Footer;