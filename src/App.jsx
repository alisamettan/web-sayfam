import DarkModeContextProvider from "./context/DarkModeContext";
import Main from "./pages/Main";

function App() {
  return (
    <DarkModeContextProvider>
      <Main />
    </DarkModeContextProvider>
  );
}

export default App;
