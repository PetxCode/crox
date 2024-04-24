import moment from "moment";
import { FC, useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import styled from "styled-components";

interface iProps {
  data?: any;
}
const DisplayScreen: FC<iProps> = ({ data }) => {
  const url: string = "http://localhost:2255/api/read";
  const [storage, setStorage] = useState([]);

  const displayData = () => {
    fetch(url, {
      method: "GET",
      //   headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json().then((res) => {
        setStorage(res.data);
      });
    });
  };

  useEffect(() => {
    displayData();
  }, []);

  return (
    <div>
      <Main>
        {storage?.map((props: any) => (
          <Container key={props.id}>
            <Image src={props.image} />
            <Bottom>
              <Right>
                <Avatar src={props.image} />
                <div>
                  <Name>{props.name}</Name>
                  <P>{moment(props.date).fromNow()}</P>
                </div>
              </Right>
              <Right>
                <IconHolder>
                  <Icon>
                    <MdFavorite />
                  </Icon>
                  <Rate>4</Rate>
                </IconHolder>
              </Right>
            </Bottom>
          </Container>
        ))}
      </Main>
    </div>
  );
};

export default DisplayScreen;

const P = styled.div`
  font-size: 10px;
`;

const Rate = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  color: #383838;
`;

const Icon = styled.div`
  color: #f9aaaa;
  margin-right: 3px;
  margin-top: 2px;
`;

const IconHolder = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  gap: 5;
`;

const Name = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid silver;
  object-fit: cover;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 1px solid silver;
  overflow: hidden;
  border-radius: 3px;
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;
