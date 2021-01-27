import styled from 'styled-components';

const Widget = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  input{
    color: white;
    font-weight: 700;
    background-color: black;
    border-left: 2px solid ${({ theme }) => theme.colors.primary}; 
    padding: 8px;
    border-right: 0;
    border-bottom: 0;
  }

  button{
    background-color: #444;
    color: #f0f0f0;
    border-left: 2px solid ${({ theme }) => theme.colors.primary}; 
    margin-left: 10px;
    padding: 8px;
    border-top: 0;
    width: 100%:
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;