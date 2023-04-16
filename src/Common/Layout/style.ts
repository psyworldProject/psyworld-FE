import styled from 'styled-components'

// 모바일 버전 기준
export const Wrapper = styled.div`
  @font-face {
    font-family: 'Godo';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff2') format('woff2'),
      url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff') format('woff');
  }

  @font-face {
    font-family: 'Godo';
    font-style: normal;
    font-weight: 700;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'),
      url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff');
  }

  * {
    font-family: 'Godo', sans-serif;
  }

  width: 425px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: aqua;
`
