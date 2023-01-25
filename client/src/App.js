import { css } from '@emotion/react'
// import { Route, Routes } from 'react-router-dom'
// import Layout from './components/layout'
// import Home from './components/home'


function App() {
  return (

    <div>
      <div css={css({
        margin: 10,
        padding: 10,
        backgroundColor: '#eee',
      })}>
        This is an example of <code>`css`</code> using an object.
      </div>
      <div css={css`
        margin: 10px;
        padding: 10px;
        background-color: #eee;
      `}>
        This is an example of <code>`css`</code> using a tagged template literal.
      </div>
    </div>
  );
}


export default App
