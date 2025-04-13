import * as Styled from "./styled";
import { ShareBtn } from "../button/ShareBtn";

interface ModalProps {
  title: string;
  onClose: () => void;
  onKakaoShare: () => void;
  onLinkShare: () => void;
}

export const Modal = ({ title, onClose, onKakaoShare, onLinkShare }: ModalProps) => {
  return (
    <Styled.ModalOverlay onClick={onClose}>
      <Styled.ModalContent onClick={(e) => e.stopPropagation()}>
        <Styled.ModalHeader>
          <Styled.ModalTitle>코스 공유하기</Styled.ModalTitle>
          <Styled.CloseButton onClick={onClose}>×</Styled.CloseButton>
        </Styled.ModalHeader>
        <Styled.ModalBody>
          <Styled.ShareText>
            <Styled.Bold>{title}</Styled.Bold>를
          </Styled.ShareText>
          <Styled.ShareText>친구와 공유해보세요</Styled.ShareText>
          <Styled.ShareButtonsWrapper>
            <ShareBtn onClick={onKakaoShare} bgColor="#FAE100" color="#3B3B3B">
              카카오톡 공유
            </ShareBtn>
            <ShareBtn onClick={onLinkShare} bgColor="#349989" color="#F6F6F6">
              링크 공유
            </ShareBtn>
          </Styled.ShareButtonsWrapper>
        </Styled.ModalBody>
      </Styled.ModalContent>
    </Styled.ModalOverlay>
  );
};
