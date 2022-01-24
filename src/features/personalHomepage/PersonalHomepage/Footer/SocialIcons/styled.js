import styled from "styled-components";

export const List = styled.ul`
  margin-top: 56px;
  margin-bottom: 0;
  display: flex;
  list-style: none;
  padding: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax767}px) {
    margin-top: 40px;
  }
`;

export const Item = styled.li`
  /* &:not(:last-child) { */
    margin-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax767}px) {
      margin-right: 16px;
    }
  /* } */
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const styleIcon = Icon => styled(Icon)`
  height: auto;
  margin-right: 16px; 

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax767}px) {
    width: 32px;
  }
`;