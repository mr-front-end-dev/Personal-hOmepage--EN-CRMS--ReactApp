import { email } from "../email";
import { phone } from "../phone";
import { SocialIcons } from "./SocialIcons";
import { Address, EmailLink, EmailWrapper, PhoneWrapper, PhoneLink, LetsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>

      <PhoneWrapper>
        <PhoneLink>{phone}</PhoneLink>
      </PhoneWrapper>

      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>📧 {email}</EmailLink>
      </EmailWrapper>

      <Paragraph contentEditable>
        Sometimes I open to new projects, often I test web applications. If you have a&nbsp;website, dashboard or a mobile app in mind and need some help to&nbsp;make your ideas come to life, feel free to contact me
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);