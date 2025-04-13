import { GreenBtn } from "../../common/button/GreenBtn";
import * as Styled from "./CourseData.styled";

const CourseData = () => {
  const dummyCourse = {
    mountainName: "인왕산",
    sections: [
      {
        id: 1,
        name: "돈의문터 - 창의문이었는데 길어졌음 ",
        startName: "돈의문터",
        endName: "창의문",
        level: "중",
        coordinates: [
          { lat: 37.571, lng: 126.969 },
          { lat: 37.577, lng: 126.974 },
        ],
        distance: 1.8, // km
        elevation: 328, // m
        duration: 110, // minutes
      },
    ],
  };

  const formatTime = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h > 0 ? `${h}시간 ` : ""}${m}분`;
  };

  const totalDistance = dummyCourse.sections.reduce((acc, cur) => acc + cur.distance, 0);
  const totalElevation = dummyCourse.sections.reduce((acc, cur) => acc + cur.elevation, 0);
  const totalDuration = dummyCourse.sections.reduce((acc, cur) => acc + cur.duration, 0);

  const firstSection = dummyCourse.sections[0];
  const lastSection = dummyCourse.sections[dummyCourse.sections.length - 1];
  const courseName = `${firstSection.startName} ⟷ ${lastSection.endName}`;

  const handleShare = () => {
    console.log("코스 공유 버튼 클릭");
  };

  return (
    <Styled.Wrapper>
      <Styled.CourseTitleWrapper>
        <Styled.CourseTitle>
          {dummyCourse.mountainName} {dummyCourse.sections[0].name}
        </Styled.CourseTitle>
        <Styled.CourseLevel>{dummyCourse.sections[0].level}</Styled.CourseLevel>
        <Styled.GreenBtnWrapper>
          <GreenBtn onClick={handleShare}>코스 공유하기</GreenBtn>
        </Styled.GreenBtnWrapper>
      </Styled.CourseTitleWrapper>
      <Styled.CourseMeta className="course-meta">
        <Styled.StartToEnd>{courseName}</Styled.StartToEnd>
        <Styled.CourseStats className="stats">
          <Styled.CourseStatsItem>
            <span style={{ color: "#A4A4A4" }}>소요시간</span> {formatTime(totalDuration)}
          </Styled.CourseStatsItem>
          <Styled.CourseStatsItem>
            <span style={{ color: "#A4A4A4" }}>코스길이</span> {totalDistance.toFixed(1)}km
          </Styled.CourseStatsItem>
          <Styled.CourseStatsItem>
            <span style={{ color: "#A4A4A4" }}>고도</span> {totalElevation}m
          </Styled.CourseStatsItem>
        </Styled.CourseStats>
      </Styled.CourseMeta>
    </Styled.Wrapper>
  );
};

export default CourseData;
