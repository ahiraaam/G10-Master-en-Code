import './App.css';
import User from "./User";
import WithUser from "./withUser";

function App() {

  //HOC
  const CurrentUser = WithUser(User);


  return (
    <>
      <CurrentUser />
    </>
  );
}

export default App;
