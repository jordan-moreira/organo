import styled from "styled-components";

const BannerContainer = styled.header`
  background-color: #6278f7;
  text-aling: center;

  img {
    max-width: 100%;
  }
`;

function Banner() {
  return (
    <BannerContainer>
      <img src="/imagens/banner.png" alt="banner principal do site" />
    </BannerContainer>
  );
}

export default Banner;
