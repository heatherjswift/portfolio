import headShot from '../../assets/head-shot.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <div className="flex-row">
        <p> 
          Hi there! Thank you for checking out my developer profile! I am a soon-to-be graduate of the University of Toronto's 
          school of continuing studies full stack web-development bootcamp. I am a junior developer and also a kung fu instructor
          at Niagara Kung Fu Academy. 
        </p>
        <img src={headShot} className='my-2 head-shot' alt='head-shot' />
      </div>
    </section>
  );
}

export default About;