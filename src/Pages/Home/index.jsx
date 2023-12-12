import Header from "../../components/Header";
import MyImage from "../../assets/img/MyImage.png";
import Subtitle from "../../components/Subtitles";
import ParagraphAbout from "../../components/ParagraphAbout";
import Form from "../../components/Form";
import { PositionMain, BoxSection } from "./style";

const Home = () => {
  return (
    <>
    <Header />
    <BoxSection>
      <PositionMain>
        <div>
          <Subtitle children="Sobre Mim" />
          <ParagraphAbout />
        </div>
        <img
          style={{ width: "300px", borderRadius: "15px" }}
          src={MyImage}
          alt="MyImage"
        />
      </PositionMain>
      <Form />
    </BoxSection>
    </>
  );
};

export default Home;
