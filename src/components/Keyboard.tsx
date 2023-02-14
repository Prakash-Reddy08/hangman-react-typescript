import styled from 'styled-components';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
type KeyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  disabled: boolean;
  addGuessedLetter: (letter: string) => void;
};
const Keyboard = ({
  activeLetter,
  inactiveLetters,
  disabled = false,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <Letters>
      {KEYS.map((key, index) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <Button
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            disabled={isActive || isInactive || disabled}
            onClick={() => addGuessedLetter(key)}
            className={`${isActive ? ' active' : ''}${isInactive ? ' inactive' : ''}`}
            type="button"
          >
            {key}
          </Button>
        );
      })}
    </Letters>
  );
};
const Button = styled.button`
  width: 100%;
  border: 3px solid black;
  background: none;
  aspect-ratio: 1 / 1;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: black;
  :disabled {
    opacity: 0.65;
    cursor: no-drop;
  }
  :hover:not(:disabled),
  focus:not(:disabled) {
    background-color: hsl(200, 100%, 75%);
  }
`;
const Letters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
  .active {
    background-color: hsl(200, 100%, 50%);
    color: white;
  }
  .inactive {
    opacity: 0.3;
  }
`;
export default Keyboard;
