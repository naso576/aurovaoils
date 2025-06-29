import React, { useState } from 'react';

interface SlideProps {
    slides: string[];
}

const Slide: React.FC<SlideProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ marginBottom: '20px', fontSize: '24px' }}>
                {slides[currentSlide]}
            </div>
            <div>
                <button onClick={prevSlide} disabled={currentSlide === 0}>
                    Previous
                </button>
                <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slide;