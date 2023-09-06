import { range } from './utils';
import './index.css';
function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((rowNumx) => (
        <div key={rowNumx} className="row">
          {' '}
          {range(numCols).map((colNum) => (
            <div key={colNum} className="cell">
              {' '}
            </div>
          ))}{' '}
        </div>
      ))}
    </div>
  );
}

export default Grid;
