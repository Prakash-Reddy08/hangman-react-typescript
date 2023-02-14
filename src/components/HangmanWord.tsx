import styled from 'styled-components';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal: boolean;
};
const HangmanWord = ({ wordToGuess, guessedLetters, reveal = false }: HangmanWordProps) => {
  return (
    <Words>
      {wordToGuess.split('').map((letter, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <span style={{ borderBottom: '.1em solid black' }} key={index}>
            <span
              style={{
                visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
                color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </Words>
  );
};
const Words = styled.div`
  display: flex;
  gap: 0.25em;
  font-size: 6rem;
  font-weight: 'bold';
  text-transform: uppercase;
  font-family: monospace;
`;
export default HangmanWord;
