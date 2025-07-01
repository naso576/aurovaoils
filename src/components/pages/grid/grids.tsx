import React, { useState } from 'react';
import './grids.css'; // Import a CSS file for styling

interface GridItem {
    id: number;
    image: string;
    content: string;
}

const gridData: GridItem[] = [
    { id: 1, image: '/src/assets/1.png', content: 'Content 1' },
    { id: 2, image: '/src/assets/2.png', content: 'Content 2' },
    { id: 3, image: '/src/assets/3.png', content: 'Content 3' },
    { id: 4, image: '/src/assets/4.png', content: 'Content 4' },
    { id: 5, image: '/src/assets/5.png', content: 'Content 5' },
    { id: 6, image: '/src/assets/6.png', content: 'Content 6' },
    // Add more items as needed
];

const Grids: React.FC = () => {
    const [activeImage, setActiveImage] = useState<number | null>(null);

    const handleLongPress = (id: number) => {
        setActiveImage(id);
    };

    const handleRelease = () => {
        setActiveImage(null);
    };

    return (
        <div className="grid-container">
            {gridData.map((item) => (
                <div
                    key={item.id}
                    className={`grid-item ${activeImage === item.id ? 'active' : ''}`}
                    onMouseDown={() => handleLongPress(item.id)}
                    onMouseUp={handleRelease}
                    onTouchStart={() => handleLongPress(item.id)}
                    onTouchEnd={handleRelease}
                >
                    <img src={item.image} alt={`Grid ${item.id}`} />
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Grids;