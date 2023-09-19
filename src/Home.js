import './Home.css';

function Home(){

  return (
    <>
      <section className='home'>
        <div className="home-content">
          <h1>Hi, I'm Nawaz Sharief</h1>
          <h3 className='text'>Full Stack Developer <span className='blinker'></span> </h3>
          <p>To secure a challenging position in a reputable organization where I can
            apply my programming skills, knowledge of computer science principles, and
            enthusiasm for innovation to develop high-quality software solutions. My goal is to
            continuously learn and grow as a professional in the field of computer science while
            contributing to the success of the organization</p>
          <div className="btn-box">
            <a href="/static/Nawaz Sharief.pdf" download="Nawaz Sharief.pdf" target='_blank' rel='noreferrer'>Download CV</a>
            <a href='mailto:nsharief330@gmail.com'>Connect</a>
          </div>
          <div className="image">
            <img src="/Images/new.jpg" alt='Portfolioimage' className='portImage'></img>
          </div>
        </div>
        <div className="footer">
          <a href='https://github.com/nsharie/' target='_blank' rel='noreferrer'><img src="/Images/github.png" alt='github'></img></a>
          <a href='https://www.linkedin.com/in/nawaz-sharief-07b880244/' target='_blank' rel='noreferrer'><img src='/Images/linkedin1.png' alt='linkedIn'></img></a>
        </div>
      </section>
    </>
  );
}

export default Home;
