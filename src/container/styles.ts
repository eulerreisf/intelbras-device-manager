import styled from '@emotion/styled';

type WrapperProps = {
  isOpen: boolean;
};

export const WrapperContent = styled.main<WrapperProps>`
  width: ${( { isOpen } ) =>
    isOpen ? 'calc(100% - 232px)' : 'calc(100% - 56px)'};
  margin-left: auto;
  margin-top: 64px;
  transition: width ease 0.5s;
  position: relative;
  min-height: calc(100vh - 64px);
  overflow: hidden;
  padding: 25px 25px 10px;
  box-sizing: border-box;
  background-color: 'whitel;
`;

export const HeaderContainer = styled.div<WrapperProps>`
  margin-bottom: 10px;
  transition: margin ease 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;
