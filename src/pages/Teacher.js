import React, { useEffect, useState } from 'react';
import './Main.css';
import './Teacher.css';

function Teacher() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/apply')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.path) {
          setImages(data.path);
        } else {
          console.error('No images found in the response data');
        }
      })
      .catch(error => console.error('Error fetching images:', error));

    const handleScroll = () => {
      const elements = document.querySelectorAll('.lab.teacher');
      elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section>
      {images && images.length > 0 ? (
        images.map((image, index) => (
          <div
            key={index}
            className={`lab teacher ${index === 0 ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {index + 1}
          </div>
        ))
      ) : (
        <p>No images available</p>
      )}
    </section>
  );
}

export default Teacher;
