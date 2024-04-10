import { Switch, Container } from 'maitzeth-ui';

function App() {
  return (
    <div className="bg-gray-500 p-10">
      <Container as="main" aria-label="Main container">
        {/* Switch Component */}
        <Switch
          onChange={(enabled: boolean) => {
            console.log('Enabled switch', enabled);
            document.documentElement.classList.toggle('dark');
          }}
        />
      </Container>
    </div>
  );
}

export default App;
