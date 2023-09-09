import { range } from './utils';
import './index.css';
function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((they) => (
        <div key={they} className="row">
          {' '}
          {range(numCols).map((them) => (
            <div key={them} className="cell">
              {' '}
            </div>
          ))}{' '}
        </div>
      ))}
    </div>
  );
}

export default Grid;
