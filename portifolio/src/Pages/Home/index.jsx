import Header from "../../components/Header";
import MyImage from "../../assets/img/MyImage.png";
import Subtitle from "../../components/Subtitles";
import Paragraph from "../../components/Paragraph";
import Form from "../../components/Form";
import { PositionMain, BoxBody } from "./style";

const Home = () => {
  return (
    <BoxBody>
      <Header />
      <PositionMain>
        <div>
          {" "}
          <Subtitle children="Sobre Mim" />
          <Paragraph />
        </div>
        <img
          style={{ width: "300px", borderRadius: "15px" }}
          src={MyImage}
          alt="MyImage"
        />
      </PositionMain>
      <Form />
    </BoxBody>
  );
};

export default Home;
