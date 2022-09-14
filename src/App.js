import Page from "./pages/Page";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <h1>
              Hiiiii Lisle
            </h1>
            <Category/>
            <Page/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
