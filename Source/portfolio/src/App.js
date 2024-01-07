import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
     
      <header>
        <h1>Anojan</h1>
        <p>B.ET Undergraduate | Industrial Automation and Robotics</p>
      </header>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Principles of Engineering</li>
          <li>Problem Solving</li>
          <li>C, C++, Embedded C, C#, Java, Python</li>
          <li>HTML, Bootstrap</li>
          <li>IOT Base Software Development</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>I have experience in IOT-based Software Development and a strong knowledge of back-end development.</p>
            <ul>
              <li>Participate in the development of a point-of-sale (POS) system for a retail business.(.NET)</li>
              <li>Collaborated with a team of developers to design and develop a library management system.(JAVA)</li>
              <li>I worked as a software developer in a small team to create a management system for a private institute.(C#)</li>

            </ul>
      </section>

      <section id="education">
        <h2>Education</h2>
        <p>Bachelor of Engineering in Industrial Automation and Robotics</p>
      </section>

      <section id="tools">
        <h2>Familiar Tools</h2>
        <ul>
          <li>Visual Studio Code</li>
          <li>Visual Studio Professional - 2022</li>
          <li>Microchip Studio</li>
          <li>Github</li>
          <li>Arduino IDE</li>
          <li>Netbeans</li>
          <li>Android Studio</li>
        </ul>
      </section>

      <section id="learning">
        <h2>Learning</h2>
        <p>Currently learning front-end development with React JS.</p>
      </section>

      
    </div>
  );
}

export default App;


