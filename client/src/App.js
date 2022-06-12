import styled from "styled-components";
import "./App.css";
import Theme from "./styles/theme";

const StyledDiv = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

function App() {
  return (
    <div className="App">
      <Theme>
        <StyledDiv>Hall of Fame</StyledDiv>
      </Theme>
    </div>
  );
}

export default App;
