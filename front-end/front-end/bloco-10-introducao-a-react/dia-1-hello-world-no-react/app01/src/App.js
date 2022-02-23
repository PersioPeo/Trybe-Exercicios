import Tarefas from "./exer01/Tarefas";
import Header from "./exer01/Header";
import Footer from "./exer01/Footer";
import './App.css';

function App() {
  return (
   <>
      <Header />
      <main className="App">
        <Tarefas />
      </main>
      <Footer />
    </>

  );
}

export default App;
