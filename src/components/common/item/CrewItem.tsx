import * as Styled from "./styled";
import squareBaseImg from "../../../assets/squareBaseImg.svg";

type CrewItemProps = {
  title: string;
  content: string;
};

export default function CrewItem({ title, content }: CrewItemProps) {
  return (
    <Styled.ItemWrapper>
      <img src={squareBaseImg} alt="squareBaseImg" />
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>
          <Styled.TitleText>{title}</Styled.TitleText>
        </Styled.TitleWrapper>
        <Styled.CrewContentText>{content}</Styled.CrewContentText>
      </Styled.InfoWrapper>
    </Styled.ItemWrapper>
  );
}
