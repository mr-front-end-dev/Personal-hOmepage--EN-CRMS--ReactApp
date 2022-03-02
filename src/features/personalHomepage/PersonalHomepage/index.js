import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { Container, Icon } from "./styled";
import { skills, nextSkills, testSkills } from "./skillsData";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
// import toolsIcon from "./toolsIcon.png";
import codingIcon from "./codingIcon.png";
import testingIcon from "./testingIcon.png";
import rocketIcon from "./rocketIcon.png";
// import Projects from "./Projects";

export const PersonalHomepage = () => (
  <Container>
    {/* <Projects /> */}
    <ThemeSwitch />
    <MainInformation />

    <main>
      <Skills contentEditable
        title={(
          <>
            My skillset of Frontend development includes <Icon src={codingIcon} alt="" />
          </>
        )}
        skills={skills}
      />


      <Skills contentEditable
        title={(
          <>
            My skillset of software testing includes <Icon src={testingIcon} alt="" />
          </>
        )}
        skills={testSkills}
      />

      <Skills contentEditable
        title={(
          <>
            What I want to learn next <Icon src={rocketIcon} alt="" />
          </>
        )}
        skills={nextSkills}
      />

      <Portfolio />
    </main>

    <Footer />
  </Container>
);