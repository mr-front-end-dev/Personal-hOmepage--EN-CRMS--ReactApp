import nikitaRysievProfile from "./profile.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper } from "./styled"; 
import { email } from "../email";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={nikitaRysievProfile} alt="Nikita Rysiev" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Nikita Rysiev</Name>
      <Summary>
         I'm a passionate [__Junior-(-Front-End-Developer-)__] in love with (-React-⚛️-), and [__Junior (-Manual-and-Auto-) Software-Tester__] currently I'am loooking for new job opportunities.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);