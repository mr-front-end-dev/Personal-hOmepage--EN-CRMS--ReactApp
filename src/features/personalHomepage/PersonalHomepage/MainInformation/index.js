import nikitaRysievProfile from "./profile.jpg";
// import Projects from "../Projects"
// import Clock from "../Clock";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper } from "./styled"; 
import { email } from "../email";

export const MainInformation = () => (
  <Wrapper>
    {/* <Clock /> */}
    {/* <Projects /> */}
    <Avatar src={nikitaRysievProfile} alt="Nikita Rysiev" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Nikita Rysiev</Name>
      <Summary contentEditable>
        I am a passionate 👶 Junior Front-End (💻) Developer in love with React, and Junior Manual and Automation Software Tester currently 🔍 I am looking for new job opportunities.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);