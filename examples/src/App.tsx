import { Switch, cn } from 'maitzeth-ui';

function App() {
  return (
    <div className={cn("bg-gray-500 p-10")}>

      {/* Switch Component */}
      <Switch
        onChange={(enabled: boolean) => {
          console.log('Enabled switch', enabled);
          document.documentElement.classList.toggle('dark');
        }}
      />
    </div>
  );
}

export default App;
