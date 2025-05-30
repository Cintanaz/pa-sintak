import "./App.css";
import HomeSection from "./components/home-section";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomeSection/>}/> 
             </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
