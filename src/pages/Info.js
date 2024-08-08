import React, { useEffect, useState } from 'react';
import './Main.css';
import './Info.css';

function Info() {
  const [images, setImages] = useState([]); // 초기 상태값을 빈 배열로 설정

  useEffect(() => {
    // API에서 이미지 URL을 불러오기
    fetch('/api/company')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.path) { // data.path가 정의되었는지 확인
          setImages(data.path);
        } else {
          console.error('No images found in the response data');
        }
      })
      .catch(error => console.error('Error fetching images:', error));

    // 스크롤 시 애니메이션 효과
    const handleScroll = () => {
      const elements = document.querySelectorAll('.lab.info');
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
            className={`lab info ${index === 0 ? 'visible' : ''}`} // 첫 번째 div에 visible 클래스 추가
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

export default Info;
