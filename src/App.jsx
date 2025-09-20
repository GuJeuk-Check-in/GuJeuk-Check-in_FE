import { Global, css } from '@emotion/react';
import UpdatePassword from './pages/UpdateAdminPassword';

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
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
      <UpdatePassword />
    </>
  );
}

export default App;
