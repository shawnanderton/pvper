import React, { useState } from 'react';
import RadioIconButtonGroup from '../components/RadioIconButtonGroup';

function Home() {
  const [items, setItems] = useState([
    { key: 1, selected: true, icon: { name: 'horde', size: 24 } },
    { key: 2, selected: true, icon: { name: 'alliance', size: 24 } },
  ]);

  function handleChange(items) {
    setItems([...items]);
  }

  return <RadioIconButtonGroup onChange={handleChange} items={items} />;
}

export default Home;
