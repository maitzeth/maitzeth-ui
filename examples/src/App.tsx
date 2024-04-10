import { Switch, Container, Stack } from 'maitzeth-ui';
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

        <Stack
          as="main"
          direction={{ small: 'h', medium: 'v', large: 'h' }}
          gap={{ small: '1.5', medium: '2', large: '10' }}
        >
          <p>Element</p>
          <p>Element</p>
          <p>Element</p>
          <p>Element</p>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
