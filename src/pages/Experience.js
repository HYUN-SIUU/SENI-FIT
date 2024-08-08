import React, { useEffect, useState } from 'react';
import './Main.css';
import './Experience.css';

function Experience() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // API에서 이미지 URL을 불러오기 (POST 방식)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ /* 필요한 경우 전송할 데이터 */ })
    })
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
      const elements = document.querySelectorAll('.lab.experience');
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
            className={`lab experience ${index === 0 ? 'visible' : ''}`}
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

export default Experience;
