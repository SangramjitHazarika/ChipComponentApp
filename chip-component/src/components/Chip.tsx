// src/components/Chip.tsx
import React from 'react';

interface ChipProps {
  label: string;
  onDelete: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onDelete }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3498db', color: 'white', borderRadius: '20px', padding: '8px', margin: '4px' }}>
      <span style={{ marginRight: '8px' }}>{label}</span>
      <button onClick={onDelete} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'white' }}>
        X
      </button>
    </div>
  );
};

export default Chip;
