import React, { useEffect, useState } from "react";
import './Main.css';
import './Home.css';

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://ec2-3-38-247-211.ap-northeast-2.compute.amazonaws.com:8080/home')
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
      const elements = document.querySelectorAll('.lab.home');
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
            className={`lab home ${index === 0 ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div>
              {index === 0 && (
                <div className="home0">
                  <p>어르신들을 위한</p>
                  <p className="home-orange">다양한 스포츠 기반의</p>
                  <p>노인 전문 종합 운동 서비스</p>
                </div>
              )}
              {index === 1 && (
                <div>
                  <div className="home1-1">
                    <p className="home-orange">의학, 스포츠융합과학, 체육교육학 등</p>
                    <p>다양한 전공자들이 만든 운동 프로그램</p>
                  </div>
                  <div className="home1-2">
                    <p>다양한 관점에서 보다 <span className="home-orange">흥미있는</span> 운동을 제공합니다</p>
                  </div>
                  <div className="home1-2">
                    <p><span className="home-orange">약 600가지</span>의 자체 제작 및 자문 완료 프로그램</p>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div>
                  <div className="home2-1">
                    <p><span className="home-orange">시니핏</span> 프로그램이란?</p>
                  </div>
                  <div className="home2-2">
                    <p>다양한 스포츠 (복싱, 태권도 등)</p>
                    <p>를 기반으로 근력 향상과 흥미를 이끕니다.</p>
                  </div>
                  <div className="home2-3">
                    <p><span className="home-orange">스포츠 시간과 근력 운동 시간</span>으로 구성되어 있습니다.</p>
                  </div>
                  <div className="home2-4">
                    <p>데이케어센터로</p>
                    <p>시니핏 지도자가 찾아갑니다.</p>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div>
                  <div className="home3-1">
                    <p><span className="home-orange">시니핏</span> 강사진</p>
                  </div>
                  <div className="home3-2">
                    <p>손자, 손녀 같은 <span className="home-orange">친숙함</span></p>
                    <p>흥미만 이끄는 것이 아닌 <span className="home-orange">근력 향상 초점</span></p>
                    <p>어르신들의 <span className="home-orange">만족도를 중점</span></p>
                  </div>
                  <div className="home3-3">
                    <p>을 보장합니다.</p>
                  </div>
                </div>
              )}
              {index === 5 && (
                <div>
                  <div className="home5-1">
                    <p>이용 방법</p>
                  </div>
                  <div className="home5-2">
                    <p>본사와 상담을 진행한 후</p>
                    <p>선생님을 매칭시켜드립니다.</p>
                  </div>
                  <div className="home5-3">
                    <p>수업 진행 결정은 <span className="home-orange">2회 시험 운영</span> 이후</p>
                    <p>결정하셔도 좋습니다.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No images available</p>
      )}
    </section>
  );
}

export default Home;
