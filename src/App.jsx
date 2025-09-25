import { Global, css } from '@emotion/react';
import Router from './router';

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-image: linear-gradient(
                to right,
                #ebebeb 1px,
                transparent 1px
              ),
              linear-gradient(to bottom, #ebebeb 1px, transparent 1px);
            background-size: 25px 25px;
          }
        `}
      />
      <Router />
    </>
  );
}

export default App;
