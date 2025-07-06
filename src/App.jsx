import Header from "./components/Header";
import Home from "./components/Home";
import Progress from "./components/Progress";

function App() {
  return (
    <>
      <Header />
      <div className="pt-[100px]">
        <Home />
      </div>
    </>
  );
}

export default App;
