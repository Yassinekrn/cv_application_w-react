import "./styles/App.css";
import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
    return (
        <div className="">
            <Information />
            <hr className="border-t-4 border-gray-300 mx-5" />

            <Education />
            <hr />
            <Experience />
        </div>
    );
}

export default App;
