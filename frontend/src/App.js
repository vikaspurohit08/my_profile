import "./App.css";
import AuthBox from "./components/AuthBox";
import AuthForm from "./pages/AuthForm";

function App() {
  return (
    <div>
      <header></header>
      <main>
        <AuthBox>
          <AuthForm></AuthForm>
        </AuthBox>
      </main>
    </div>
  );
}

export default App;
