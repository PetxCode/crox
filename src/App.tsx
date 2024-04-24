import styled from "styled-components";
import InputScreen from "./InputScreen";
import DisplayScreen from "./DisplayScreen";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState<Array<{}>>([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Main>
      <Container>
        <br />
        <br />
        <InputScreen setData={setData} data={data} />
        <Top />
        <hr />
        <DisplayScreen data={data} />
      </Container>
    </Main>
  );
};

export default App;

const Container = styled.div`
  margin: auto 0;
  max-width: 71rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Top = styled.div`
  margin: 50px 0;
  justify-content: center;
  display: flex;
  width: 100%;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  padding-bottom: 50px;
`;
