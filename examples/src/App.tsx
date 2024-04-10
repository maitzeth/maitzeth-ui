import { Switch, Container } from 'maitzeth-ui';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-gray-500 p-10">
      <Container as="main" aria-label="Main container">
        {/* Switch Component */}
        <Switch
          active={active}
          onChange={() => {
            setActive(prev => !prev);
          }}
        />
      </Container>
    </div>
  );
}

export default App;
