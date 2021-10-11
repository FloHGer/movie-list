
import MovieProvider from './contexts/MovieContext.jsx';
import Input from './components/Input.jsx'
import Output from './components/Output.jsx'
import './App.css';


export default function App() {
  
  return (
    <MovieProvider>
      <Input></Input>
      <Output></Output>
    </MovieProvider>
  );
}

