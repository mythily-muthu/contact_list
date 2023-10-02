
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import Contactlist from "./components/Contactlist";

function App() {
  return (
    <div className='w-full h-full flex'>
      <Header />
      <AddContact />
      <Contactlist />
    </div>
  );
}

export default App;
