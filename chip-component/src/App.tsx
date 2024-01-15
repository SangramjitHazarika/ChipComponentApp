// src/App.tsx
import React from 'react';
import AutoCompleteInput from './components/AutoCompleteInput';

const App: React.FC = () => {
  const items = ['Nick Giannopoulos', 'Marina Augustine', 'Narayana Garner', 'Anita Gros', 'Megan Smith'];

  return (
    <div className="App">
      <h1>Chip Component App</h1>
      <AutoCompleteInput items={items} />
    </div>
  );
};

export default App;
