import React from "react";
import "../css/components/_aboutme.scss";
const AboutMe = () => {
  return (
    <div id="About-Me">
      <div id="aboutMeOuter">
        <div id="aboutMeInner">
          <a id="closeBtn">
            <img id="closeBtn" src="delete.svg" alt="Close Button" />
          </a>
          <div className="aboutMePic">
            <img
              src="standingPic.jpg"
              className="aboutMePic"
              alt="Damian Standing Next to a Tree with a Flower in his Hair"
            />
          </div>
          <div className="aboutMeText">
            <h2 className="aboutMeTitle">I am Damian Barrous Dume</h2>
            <p className="aboutMeParagraph">
              I was born in the Dominican Republic and moved to the United
              States as a toddler. Growing up I was always so fascinated with
              technology and how to use it to the best of my ability, I also
              loved to solve problems. These abilities helped me to choose
              Computer Science as the field in which I wanted to explore in
              college. All of the theory and possible applications were
              interesting in class but it all clicked when I discovered Web
              Development. My creative side that I am super proud and passionate
              about, can come together with my problem-solving side to build
              something unique that others can see and use. I spent a lot of
              time trying to learn the basics and understanding them
              fundamentally, to the point where I taught middle and high school
              kids them. Then I dived into the world of NodeJS and JS Frameworks
              and currently trying to understand how to create beautiful UIs
              with an emphasis on UX design using these tools. While
              overwhelming at times, the modern Web Development scene to me is
              so interesting and diverse, and I want to try my best to
              contribute positively to the environment and inspire new
              developers as some of the current veterans in the field have
              inspired me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
