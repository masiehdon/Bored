import '../styles/About.css'
import headerImage from '../../public/relax.png'

function About() {
  return (
    <>
      <div className='main-container'>
        <div className='primary-content'>
          <h1>About Us</h1>
          <h2>Bored - Find Activities When Bored</h2>
          <p className="ingress">
            {`Bored is a web application designed to help users find engaging activities to do when they're feeling bored. The application presents a variety of activity suggestions across different categories, providing an easy and fun way to beat boredom. With a sleek and user-friendly interface, Bored makes it simple to discover new hobbies and interests.`}
          </p>
          <p className="body-copy">
            {`At Bored, we understand that everyone's had those moments when boredom strikes and creativity seems to be on vacation. That's why we've created a platform that offers a wide range of activities to help you break free from the monotony and inject a dose of fun into your day.`}
          </p>
          <p className="body-copy">
            {` Our team is passionate about curating a diverse collection of activities that cater to all interests and moods. Whether you're a developer looking to enhance your app with engaging content, a designer seeking inspiration, or simply someone searching for a way to unwind, Bored has something for everyone.`}
          </p>
          <p className="body-copy">
            {`Join us in embracing the world of creative possibilities. Let Bored be your companion in turning ordinary moments into extraordinary experiences. Say goodbye to boredom and hello to a world of endless inspiration with Bored!`}
          </p>
        </div>
        
        <div>
          <img src={headerImage} alt="My Image" />
        </div>
      </div>
    </>
  );
}

export default About;