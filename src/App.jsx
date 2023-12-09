import "./styles/App.css";
import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
    return (
        <div className="border">
            <Information />
            <hr />
            <Education />
            <hr />
            <Experience />
        </div>
    );
}

export default App;
