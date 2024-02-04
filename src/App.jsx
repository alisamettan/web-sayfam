import DarkModeContextProvider from "./context/DarkModeContext";
import LanguageContextProvider from "./context/LanguageContext";
import Main from "./pages/Main";

function App() {
  return (
    <LanguageContextProvider>
      <DarkModeContextProvider>
        <Main />
      </DarkModeContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
