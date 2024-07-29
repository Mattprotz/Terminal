import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-title">ABOUT ME- MATTHEW PROTEAU</div>
      <div className="about-content">
        <div className="about-box">
          <p>
            I'm a 3D ARTIST and FULL STACK DEVELOPER with expertise in creating compelling 
            and user-friendly applications. With a strong background in both creative and technical 
            aspects of development, I succeed in transforming complex ideas into intuitive, beautiful creations.
          </p>
        </div>
        <div className="about-image">
          <img style={{maxWidth: '470px'}} src={`${process.env.PUBLIC_URL}/yung.jpg`}/>
        </div>
        <div className="about-image">
        <img style={{maxWidth: '470px'}} src={`${process.env.PUBLIC_URL}/dog.jpg`}/>
        </div>
        <div className="about-box">
          <p>
            Besides my passion for technology and design, I love listening to my favorite music such as RnB and Jazz. My favorite artists these days are Mereba and Outkast. Fun fact, last year I was in the top 0.5% listeners to Outkast on Spotfiy. I also like to play video games like Fallout and Skyrim, but right now all I play is Star Wars Battlefront II. On the weekends I take my dog, Apple, to the dog park so she can see all her friends. She is a 130 pound harlequin Great Dane. As you can see, we are attached at the hip.
          </p>
        </div>
        {/* <br/> */}
        <div className="about-box">
          <p>
            I recently completed a Bachelor of Arts, majoring in Art and Technology at the University of Oregon. 
            My time in the College of Design has provided me with a solid foundation in both artistic principles and specialized technical skills.
          </p>
        </div>
        <div className="about-box">
        <p>
            Along with my degree, I have also completed an intensive eight-month full stack developer bootcamp at Career Foundry, which has equipped me with 
            valuable coding skills and a deeper understanding for web and software development.
          </p>
        </div>
        <div className="about-box">
        <p>
          My main professional goal is to become a web developer with a specialization in 3D design. After graduating, I started working in the crypto industry. However like many others in this field, I was laid off. I fortunately found a new avenue that my skills could be directly applicable, web development!    
        </p>
        </div>
      </div>
    </div>
  );
}
