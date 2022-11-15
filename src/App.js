// import logo from './logo.svg';
import './App.css';
import ActivityCards from './components/ActivityCards.jsx';
import Body from './components/Body.jsx';
import Head from './components/Head.jsx';
import Title from './components/Title.jsx';

function App() {
  return (
    <>
      <Head />
      <Title />
      <ActivityCards />
      <Body />
    </>
  );
}

export default App;
