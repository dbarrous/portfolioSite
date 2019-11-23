import React from "react";
import Button from "./Button";
import Typing from "react-typing-animation";
import "../css/components/new.scss";

const NewApp = () => {
  return (
    <div className="body">
      <div className="ColumnLeft">
        <img src="images/profilePic.jpg" />
        <nav className="mainButtons">
          <Button
            btnText="Who Am I?"
            specialCss={"leftButtons"}
            hrefLink={"#aboutMe"}
          />
          <Button
            btnText="My Projects"
            specialCss={"leftButtons"}
            hrefLink={"#myProjects"}
          />
        </nav>
      </div>
      <div className="ColumnRight">
        <div className="pages">
          <div className="mainPage" id="home">
            <div className="description">
              <Typing hideCursor={true} speed={20}>
                <h2 className="title">Hello World,</h2>
                <h1 className="title main">
                  My Name is <span>Damian Barrous.</span>
                </h1>
                <h2 className="title">I'm a Web Developer :)</h2>
              </Typing>
            </div>

            <nav className="buttons">
              <Button btnText="Resume" animation="resume" />
              <Button btnText="Github" animation="github" />
              <Button btnText="LinkedIn" animation="linkedin" />
            </nav>
          </div>
          <div className="secondaryPage" id="aboutMe">
            <a href="#home">Go Back</a>
            <div className="aboutMeText">
              <h2 className="aboutMeTitle">I am Damian Barrous Dume</h2>
              <p className="aboutMeParagraph">
                I was born in the Dominican Republic and moved to the United
                States as a toddler. Growing up I was always so fascinated with
                technology and how to use it to the best of my ability, I also
                loved to solve problems. These abilities helped me to choose
                Computer Science as the field in which I wanted to explore in
                college.
              </p>
              <p className="aboutMeParagraph">
                All of the theory and possible applications were interesting in
                class but it all clicked when I discovered Web Development. My
                creative side that I am super proud and passionate about, can
                come together with my problem-solving side to build something
                unique that others can see and use. I spent a lot of time trying
                to learn the basics and understanding them fundamentally, to the
                point where I taught middle and high school kids them.
              </p>
              <p className="aboutMeParagraph">
                Then I dived into the world of NodeJS and JS Frameworks and
                currently trying to understand how to create beautiful UIs with
                an emphasis on UX design using these tools. While overwhelming
                at times, the modern Web Development scene to me is so
                interesting and diverse, and I want to try my best to contribute
                positively to the environment and inspire new developers as some
                of the current veterans in the field have inspired me.
              </p>
            </div>
            <div className="aboutMePic">
              <img
                src="images/standingPic.jpg"
                className="aboutMePic"
                alt="Damian Standing Next to a Tree with a Flower in his Hair"
              />
            </div>
          </div>
          <div className="secondaryPage" id="myProjects">
            <a href="#home">Go Back</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewApp;
