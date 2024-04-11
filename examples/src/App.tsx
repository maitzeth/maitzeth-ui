import { Switch, Container, Stack, Skeleton } from 'maitzeth-ui';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);

  return (
    <div>
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
          gap={{ small: 1.5, medium: 2, large: 10 }}
        >
          <p>Element</p>
          <p>Element</p>
          <p>Element</p>
          <p>Element</p>
        </Stack>
        <Stack
          as="section"
          direction={{ small: 'h' }}
          gap={{ small: 2 }}
        >
          <div>
            <Skeleton width={100} height={100} theme="dark" rounded />
          </div>
          <Stack
            direction={{ small: 'v' }}
            gap={{ small: 2 }}
          >
            <div>
              <Skeleton width={100} height={25} theme="dark" />
            </div>
            <div>
              <Skeleton width={100} height={25} theme="dark" />
            </div>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
