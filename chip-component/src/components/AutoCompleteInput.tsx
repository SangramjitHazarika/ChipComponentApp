// src/components/AutoCompleteInput.tsx
import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import Chip from './Chip';

interface AutoCompleteInputProps {
  items: string[];
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({ items }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFilteredItems(
      items.filter(
        (item) => !selectedItems.includes(item) && item.toLowerCase().startsWith(inputValue.toLowerCase())
      )
    );
  }, [inputValue, selectedItems, items]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleItemClick = (item: string) => {
    setSelectedItems([...selectedItems, item]);
    setInputValue('');
  };

  const handleChipDelete = (item: string) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
    setSelectedItems(updatedItems);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && inputValue === '' && selectedItems.length > 0) {
      inputRef.current?.blur();
      const lastChip = selectedItems[selectedItems.length - 1];
      handleChipDelete(lastChip);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {selectedItems.map((item) => (
          <Chip key={item} label={item} onDelete={() => handleChipDelete(item)} />
        ))}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="w-full p-3 border border-gray-300 rounded"
        placeholder="Type to search..."
      />
      <ul className="w-full mt-2">
        {filteredItems.map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            className="p-3 border border-gray-300 rounded mb-1 hover:bg-gray-100"
            style={{ cursor: 'pointer' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoCompleteInput;