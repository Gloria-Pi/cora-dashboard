import "./App.css";
import Sidebar from "./components/Menus/Sidebar/Sidebar";

// import "./index.css"; // Importing Tailwind CSS and custom styles

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Autoprefixer Test</h1>
        <div className="grid-container">
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box">Box 3</div>
        </div>
        <p>Ciao!</p>
      </div>
      <Sidebar />
    </>
  );
}

export default App;
