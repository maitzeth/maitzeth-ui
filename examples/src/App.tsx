import { Switch } from 'maitzeth-ui';

function App() {
  const handleSwitchChange = (enabled: boolean) => {
    console.log('Enabled switch', enabled);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className="bg-gray-500 p-10">
      <Switch onChange={handleSwitchChange} />
    </div>
  );
}

export default App
