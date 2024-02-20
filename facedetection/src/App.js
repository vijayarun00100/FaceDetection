import './App.css';
import Navigation from './navigation/navigation';
import Logo from './logo/logo';
import Link from './imagelink/imagelink';
import Rank from './rank/rank';
import 'tachyons';
function App() {
  return (
    <div className="App">

      <Navigation />
      <Logo />
      <Rank />
      <Link />
    </div>
  );
}

export default App;
