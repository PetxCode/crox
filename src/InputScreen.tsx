import { FC, useEffect, useState } from "react";
import styled from "styled-components";

interface iProps {
  setData?: any;
  data?: any;
}

const InputScreen: FC<iProps> = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const [show, setShow] = useState<boolean>(false);

  const url: string = "http://localhost:2255/api/post";

  useEffect(() => {
    setShow(false);
  }, [show]);

  const onSubmit = () => {
    const val = { name, image };
    // setData([...data, { name, image }]);

    fetch(url, {
      method: "POST",
      //   headers: { "Content-Type": "application/json" },
      body: JSON.stringify(val),
    }).then(() => {
      console.log("Done");
      setShow(true);
      window.location.reload();
    });
  };

  return (
    <div>
      <Main>
        <Container>
          <Label>Enter Name</Label>
          <Input
            placeholder="Enter your Name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />

          <Space />
          <Label>Enter Image URL</Label>
          <Input
            placeholder="Enter Image URL"
            value={image}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setImage(e.target.value);
            }}
          />

          <Button onClick={onSubmit}>Add to DB</Button>
        </Container>
      </Main>
    </div>
  );
};

export default InputScreen;
const Space = styled.div`
  margin: 5px 0;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid silver;
  height: 35px;
  padding-left: 10px;
  border-radius: 3px;

  ::placeholder {
    font-family: Poppins;
  }
`;

const Label = styled.label`
  font-size: 12px;
  margin-top: 10px;
  font-weight: 600;
`;

const Button = styled.div`
  background-color: coral;
  outline: none;
  border: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  margin-top: 30px;
  border-radius: 3px;
  cursor: pointer;
  color: white;
`;

const Container = styled.div`
  border: 1px solid silver;
  border-radius: 5px;
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div``;
