import styled from 'styled-components';

type HangmanDrawingProps = {
  numberOfGuesses: number;
};
const Head = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 10px solid black;
  position: absolute;
  top: 50px;
  right: -30px;
`;
const Body = styled.div`
  width: 10px;
  height: 100px;
  background: black;
  position: absolute;
  top: 120px;
  right: 0px;
`;
const Arm = styled.div<{ right_arm?: boolean }>`
  width: 100px;
  height: 10px;
  background: black;
  position: absolute;
  top: 150px;
  right: ${({ right_arm }) => (right_arm ? '-100px' : '10px')};
  rotate: ${({ right_arm }) => (right_arm ? '-30deg' : '30deg')};
  transform-origin: ${({ right_arm }) => (right_arm ? 'left bottom' : 'right bottom')};
`;

const Leg = styled.div<{ right_leg?: boolean }>`
  width: 100px;
  height: 10px;
  background: black;
  position: absolute;
  top: 210px;
  right: ${({ right_leg }) => (right_leg ? '-90px' : '0')};
  rotate: ${({ right_leg }) => (right_leg ? '60deg' : '-60deg')};
  transform-origin: ${({ right_leg }) => (right_leg ? 'left bottom' : 'right bottom')};
`;

const BODY_PARTS = [
  <Head key="head" />,
  <Body key="body" />,
  <Arm right_arm key="r_arm" />,
  <Arm key="l_arm" />,
  <Leg right_leg key="r_leg" />,
  <Leg key="l_leg" />,
];

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <Hangman>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="vertical_top" />
      <div className="horizontal_top" />
      <div className="vertical_rod" />
      <div className="horizontal_down" />
    </Hangman>
  );
};

const Hangman = styled.div`
  position: relative;
  .vertical_rod,
  .horizontal_top,
  .vertical_top {
    height: 400px;
    width: 10px;
    background: black;
    margin-left: 120px;
  }
  .vertical_top {
    position: absolute;
    height: 50px;
    background: black;
    top: 0;
    right: 0;
  }
  .horizontal_top {
    height: 10px;
    width: 200px;
  }
  .horizontal_down {
    height: 10px;
    width: 250px;
    background: black;
  }
`;
export default HangmanDrawing;
