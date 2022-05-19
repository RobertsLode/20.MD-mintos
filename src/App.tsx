import { useState } from 'react';
import './App.scss';
import './styles/reset.scss';
import './styles/flexboxgrid.scss';
import data, { NewArray } from './components/data';

const App = () => {
  const [newArray, setNewArray] = useState<NewArray[]>(data);

  const toggleStatus = (curr: NewArray) => {
    setNewArray(newArray.map((c) => {
      if (c.id === curr.id) {
        return { ...c, status: !c.status };
      }
      return c;
    }));
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="map--wrapper-x">
          { newArray.filter((e) => e.status).map((el) => (
            <div key={el.id} className="mapped--box">
              <div className="button--dad">
                <span>
                  {' '}
                  {el.title}
                  {' '}
                </span>
                <button
                  className="mapped--button"
                  onClick={() => {
                    toggleStatus(el);
                  }}
                >
                  <span className="span--x"> x</span>

                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="map--wrapper">
          {newArray.map((el) => (
            <button
              key={el.id}
              className={`${el.status && 'selected'} mapped--buttons`}
              onClick={() => {
                toggleStatus(el);
              }}
            >
              <div className="check--box">
                {el.status && 'X'}
              </div>
              <span className="butt--text">
                {' '}
                {el.title}
                {' '}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
