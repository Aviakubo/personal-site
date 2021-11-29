import React from "react";
import styled from "styled-components";
import ProfileForegroung from "../images/Foreground.png";
import ProfileBackground from "../images/Background2.png";
import Inventory from "../images/magicInventory.png";
import PickACard from "../images/pickACard2.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";


import JavaScript from "../Tags/javaScript.svg";
import Html5 from "../Tags/html-5.svg";
import Css3 from "../Tags/css3.svg";
import ReactIcon from "../Tags/react.svg";
import NodeJs from "../Tags/node-js.svg";
import MongoDB from "../Tags/mongodb.svg";
import Npm from "../Tags/npm.svg";
import Python from "../Tags/python.svg";
import Django from "../Tags/django.svg";
import Bootstrap from "../Tags/bootstrap.svg";
import GitHub from "../Tags/github.svg";
import Sass from "../Tags/sass.svg";
import Yarn from "../Tags/yarn.svg";

import { Container } from "./Container";
import { device } from "../components.styles/sizes";

const projects = [
  {
    type: "right",
    title: `Pick a Card`,
    description:
      "I created a very light JavaScript application to help perform magic virtually. It utilizes a deck of cards api that generates a new deck ID and gives you the freedom to shuffle as many times as you like before drawing a card.",
    imageSrc: PickACard,
    url: "https://pick-a-card-magic.vercel.app/",
    github: "https://github.com/Aviakubo/pick-a-card-magic",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "CSS3",
        imageSrc: Css3,
      },
      {
        name: "JavaScript",
        imageSrc: JavaScript,
      },
    ],
  },
  {
    type: "left",
    title: `Magician's Inventory`,
    description:
      "In an effort to keep track of all of my props, I created a full CRUD app following the restful methodologies. It's another lightweight application that does precisely what I need.",
    imageSrc: Inventory,
    url: "https://dyakubov-project2.herokuapp.com/inventory",
    github: "https://github.com/Aviakubo/dyakubov-project2",
    tags: [
      {
        name: "HTML5",
        imageSrc: Html5,
      },
      {
        name: "JavaScript",
        imageSrc: JavaScript,
      },
      {
        name: "NodeJs",
        imageSrc: NodeJs,
      },
      {
        name: "Mongoose",
        imageSrc: MongoDB,
      },
    ],
  },
];

const tags = [
  {
    name: "HTML5",
    imageSrc: Html5,
  },
  {
    name: "CSS3",
    imageSrc: Css3,
  },
  {
    name: "JavaScript",
    imageSrc: JavaScript,
  },
  {
    name: "React",
    imageSrc: ReactIcon,
  },
  {
    name: "NodeJs",
    imageSrc: NodeJs,
  },
  {
    name: "MongoDB",
    imageSrc: MongoDB,
  },
  {
    name: "Python",
    imageSrc: Python,
  },
  {
    name: "Django",
    imageSrc: Django,
  },
  {
    name: "Bootstrap",
    imageSrc: Bootstrap,
  },
  {
    name: "GitHub",
    imageSrc: GitHub,
  },
  {
    name: "Sass",
    imageSrc: Sass,
  },
  {
    name: "Yarn",
    imageSrc: Yarn,
  },
  {
    name: "Express",
    imageSrc: NodeJs,
  },
  {
    name: "Mongoose",
    imageSrc: MongoDB,
  },
  {
    name: "NPM",
    imageSrc: Npm,
  },
];

const Main = () => {
  return (
    <>
      <ContainerHead>
        <Profile width="700px">
          <HeadImage>
            <Background src={ProfileBackground} alt="ProfilePhoto" />
            <Foreground src={ProfileForegroung} alt="ProfilePhoto" />
          </HeadImage>
          <HeadLine>I'm David</HeadLine>
          <Subtext>
            a Russian-American Developer living and working in Atlanta, Georgia
          </Subtext>
        </Profile>
      </ContainerHead>
      <ContainerAbout id="aboutme">
        <Container width="700px">
          <AboutMe>About Me</AboutMe>
          <AboutMeText>
            I'm David, a bilingual Full Stack Developer with a background in entertainment, skilled at creating solutions. Relish helping people in
            all possible capacities with diverse communication skills and creative problem solving. A massive passion for seeing people
            smile and motivated by meaningful relationships.
          </AboutMeText>
        </Container>
      </ContainerAbout>

      <ContainerSkills id="skills">
        <AboutMe>Technologies and Skills</AboutMe>
        <Tags width="900px">
          {tags.map((tag, index) => (
            <Tag key={index}>
              <Skills src={tag.imageSrc} alt="HTML5" />
              <SkillsName>{tag.name}</SkillsName>
            </Tag>
          ))}
        </Tags>
      </ContainerSkills>

      <ContainerProjects id="projects">
        <AboutMe>Projects</AboutMe>
        <Container>
          {projects.map((project, index) => (
            <ScrollAnimation animateIn="fadeInRight" animateOnce key={index}>
              <Card type={project.type}>
                <ImageWrapper>
                  <ProjectImage
                    src={project.imageSrc}
                    alt="ProfilePhoto"
                  ></ProjectImage>
                </ImageWrapper>
                <ProjectContent>
                  <Title>{project.title}</Title>
                  <Info>{project.description}</Info>

                  <TagsProjects>
                    {project.tags.map((tags, index) => (
                      <Tag key={index}>
                        <Skills src={tags.imageSrc} alt="HTML5" />
                        <SkillsName>{tags.name}</SkillsName>
                      </Tag>
                    ))}
                  </TagsProjects>

                  <Buttons>
                    {project.github && (
                      <ViewCode href={project.github} target="_blank">
                        VIEW SOURCE CODE
                      </ViewCode>
                    )}
                    {project.url && (
                      <ViewWebsite href={project.url} target="_blank">
                        VIEW WEBSITE
                      </ViewWebsite>
                    )}
                  </Buttons>
                </ProjectContent>
              </Card>
            </ScrollAnimation>
          ))}
        </Container>
      </ContainerProjects>
      <Hobbies>
        <AboutMe>Hobbies & Interests</AboutMe>
        <List>
          <AboutMeText>
            Weightlifting: I've invested in a home gym during quarantine and it's proven to be one of the best decisions I've made (aside from learning how to code!)
          </AboutMeText>
          <AboutMeText>
            Magic: Prestidigitation has allowed me to meet, inspire, and entertain so many wonderful people around Atlanta
          </AboutMeText>
          <AboutMeText>
            Tinkering: I have a 3D printer and I'm always thinking of new projects to print!
          </AboutMeText>
        </List>
      </Hobbies>
    </>
  );
};

const Hobbies = styled.div`
  background-color: ${(props) => props.theme.aboutBackground};
  padding: 100px 0;
`;

const List = styled.ul`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
  text-align: center;
  padding: 10px 30px 10px;
`;
const TagsProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Tags = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Tag = styled.div`
  margin: 20px 17px;
`;

const ContainerSkills = styled.div`
  background-color: ${(props) => props.theme.skills};
  padding: 100px 0;
`;
const Skills = styled.img`
  max-width: 48px;
`;
const SkillsName = styled.div``;
const Buttons = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.desktop} {
    flex-direction: row;
  }

  @media ${device.wide} {
    flex-direction: row;
  }
`;
const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Button = styled.a`
  font: inherit;
  color: inherit;
  border-radius: 7px;
  outline: 0 none;
  border: 0 none;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  text-align: center;
  text-decoration: none;
  padding: 15px 0;
  font-family: "Roboto Condensed", sans-serif;
  transition: transform 150ms;
  &:hover {
    transform: scale(1.1);
  }
`;
const ViewCode = styled(Button)`
  background-color: #e2e2e2;
  color: black;
  margin-top: 25px;
  @media ${device.tablet} {
    margin: 10px 10px 0;
  }
  @media ${device.desktop} {
    margin: 10px 10px 0;
  }
  @media ${device.wide} {
    margin: 10px 10px 0;
  }
`;
const ViewWebsite = styled(Button)`
  background-color: ${(props) => props.theme.website};
  color: white;
  margin-top: 10px;
`;

const Info = styled.div`
  font-size: 18px;
  font-family: "Roboto Condensed", sans-serif;
  flex: 1;
`;
const Title = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin: 30px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
`;
const ImageWrapper = styled.div`
  flex: 1;
`;
const ProjectImage = styled.img`
  width: 100%;
`;
const Card = styled.div`
  background-color: ${(props) => props.theme.aboutBackground};
  padding: 20px;
  display: flex;
  border-radius: 15px;
  margin: 30px 0;
  flex-direction: column;
  z-index: 0;

  @media ${device.desktop} {
    flex-direction: ${(props) =>
    props.type === "left" ? "row" : "row-reverse"};
  }

  /* @media ${device.desktop} {
  background:red;
}

@media ${device.wide} {
  background:yellow;
} */
`;
const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.projectsBackground};
  padding: 100px 0;
`;
const AboutMeText = styled.div`
  font-size: 20px;
  margin: 10px 0;
  font-family: "Roboto Condensed", sans-serif;
`;
const AboutMe = styled.div`
  font-size: 50px;
  color: ${(props) => props.theme.subHeader};
  margin: 0 0 20px;
  display: flex;
  justify-content: center;
`;

const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.aboutBackground};
  padding: 100px 0;
`;

const Subtext = styled.p`
  color: white;
  font-size: 20px;
  letter-spacing: 1px;
`;
const HeadLine = styled.div`
  color: ${(props) => props.theme.headline};
  font-size: 45px;
`;
const ProfileImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
const Background = styled(ProfileImg)``;
const Foreground = styled(ProfileImg)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2) translateY(-8px) translateX(-8px);
  }
`;
const HeadImage = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 100px;
  margin: 0 20px 20px;
  position: relative;
`;
const ContainerHead = styled.div`
  background-color: ${(props) => props.theme.nav};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 80px - 30px);
`;

const Profile = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Main;
