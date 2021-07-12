import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';


function Footer () {
  return (
    <footer className='mx-2'>
      <a href="https://github.com/heatherjswift" target='_blank' rel='noreferrer'>
       <AiFillGithub size={70} />
      </a>
      {/* <a href="" */}
      <AiFillFacebook size={70} />
      <AiFillLinkedin size={70} />
    </footer>
  )
}

export default Footer;