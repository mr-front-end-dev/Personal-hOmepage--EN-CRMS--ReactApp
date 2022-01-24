import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { ReactComponent as EnvelopeIcon } from "./envelope.svg";

export const Wrapper = styled.header`
  margin-top: -30px; // that's height of the theme switch
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.tableVerticalMax991}px) {
    grid-gap: 32px;
  } 

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax767}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Avatar = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax767}px) {
    width: 132px;
  }
`;

export const ThisIs = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: initial;
`;

export const Name = styled.h1`
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 12px 0 0 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax767}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Summary = styled.p`
  font-size: 20px;
  margin: 36px 0 0 0;
  line-height: 1.4;
  max-width: 650px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tableVerticalMax991}px) {
    margin-top: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax767}px) {
    font-size: 18px;
    max-width: 570px;
  }
`;

export const Icon = styled.img`
  margin-right: 4px;
  vertical-align: text-top;
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax767}px) {
    margin-top: 24px;
  }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
  margin-right: 16px;
`;
