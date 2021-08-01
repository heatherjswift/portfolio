import { AiFillGithub } from 'react-icons/ai';
import theCommunityGallery from '../../assets/projects/tcg-1.png'
import budgetTracker from '../../assets/projects/budget-tracker.png' 
import calenderApp from '../../assets/projects/calender-app.png'
import justWrite from '../../assets/projects/just-write.png'
import noteTaker from '../../assets/projects/note-taker.png'
import regexTutorial from '../../assets/projects/regex-tutorial.png'
import weatherDashboard from '../../assets/projects/weather-dashboard.png'

function Portfolio() {
  return (
    <section>
      <h1>Portfolio</h1>

      <div className='container'>

      <div className="px-5 my-2 flex-row">
          <a href="https://cryptic-thicket-25855.herokuapp.com/" target="_blank" rel='noreferrer'>
            <h3>
              <a href="https://github.com/deepikabekal/TCG" target='_blank' rel='noreferrer'>
                <AiFillGithub size={30} />
              </a>
              The Community Gallery (TCG)
            </h3>
            <img src={theCommunityGallery} alt='project-screenshot'></img>
          </a>
        </div>

        <div className="px-5 my-2 flex-row">
          <a href="https://lovely-gunnison-29912.herokuapp.com/" target="_blank" rel='noreferrer'>
            <h3>
              <a href="https://github.com/heatherjswift/budget-tracker" target='_blank' rel='noreferrer'>
                <AiFillGithub size={30} />
              </a>
              Budget Tracker
            </h3>
            <img src={budgetTracker} alt='project-screenshot'></img>
          </a>
        </div>

        <div className="px-5 my-2 flex-row">
          <a href="https://heatherjswift.github.io/calender-app/" target="_blank" rel='noreferrer'>
            <h3>
              <a href="https://github.com/heatherjswift/calender-app" target='_blank' rel='noreferrer'>
                <AiFillGithub size={30} />
              </a>
              Calender App
            </h3>
            <img src={calenderApp} alt='project-screenshot'></img>
          </a>
        </div>

        <div className="px-5 my-2 flex-row">
          <a href="https://heatherjswift.github.io/Just-Write/" target="_blank" rel='noreferrer'>
            <h3>
              <a href="https://github.com/heatherjswift/Just-Write" target='_blank' rel='noreferrer'>
                <AiFillGithub size={30} />
              </a>
              Just Write
            </h3>
            <img src={justWrite} alt='project-screenshot'></img>
          </a>
        </div>

        <div className="px-5 my-2 flex-row">
          <a href="https://murmuring-lake-20240.herokuapp.com/" target="_blank" rel='noreferrer'>
            <h3>
              <a href="https://github.com/heatherjswift/note-taker" target='_blank' rel='noreferrer'>
                <AiFillGithub size={30} />
              </a>
              Note Taker
            </h3>
            <img src={noteTaker} alt='project-screenshot'></img>
          </a>
        </div>

        <div className="px-5 my-2 flex-row">
          <a href="https://gist.github.com/heatherjswift/cb0b71ba2aa1721478e2a4ea1ceef61c" target="_blank" rel='noreferrer'>
            <h3>
              <a href="https://gist.github.com/heatherjswift/cb0b71ba2aa1721478e2a4ea1ceef61c" target='_blank' rel='noreferrer'>
                <AiFillGithub size={30} />
              </a>
              Regex Tutorial - Gist
            </h3>
            <img src={regexTutorial} alt='project-screenshot'></img>
          </a>
        </div>
        
        <div className="px-5 my-2 flex-row">
          <a href="https://heatherjswift.github.io/Weather-Dashboard/" target="_blank" rel='noreferrer'>
            <h3>
              <a href="https://github.com/heatherjswift/Weather-Dashboard" target='_blank' rel='noreferrer'>
                <AiFillGithub size={30} />
              </a>
              Weather Dashboard
            </h3>
            <img src={weatherDashboard} alt='project-screenshot'></img>
          </a>
        </div>

      </div>
      
    </section>
  )
}

export default Portfolio;