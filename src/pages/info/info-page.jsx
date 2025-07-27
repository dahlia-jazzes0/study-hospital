import { useEffect, useState } from 'react';
import './info-page.css';

const InfoPage = () => {
  const [activeTab, setActiveTab] = useState('진료안내');
  const [activeFloor, setActiveFloor] = useState('1');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const floorImages = {
    1: [
      {
        src: '/images/info/lobby.png',
        description: '로비',
      },
      {
        src: '/images/info/patient-waiting-room.png',
        description: '환자 대기실',
      },
      {
        src: '/images/info/lounge.png',
        description: '휴게실',
      },
      {
        src: '/images/info/restaurant.png',
        description: '식당',
      },
    ],
    2: [
      {
        src: '/images/info/walking-trails.png',
        description: '산책로',
      },
      {
        src: '/images/info/information-desk.png',
        description: '안내 데스크',
      },
      {
        src: '/images/info/x-ray.png',
        description: 'x-ray',
      },
      {
        src: '/images/info/rehabilitation.png',
        description: '재활실',
      },
    ],
    3: [
      {
        src: '/images/info/treatment.png',
        description: '치료실',
      },
      {
        src: '/images/info/hospitalization.png',
        description: '입원실',
      },
      {
        src: '/images/info/information-desk2.png',
        description: '안내 데스크',
      },
      {
        src: '/images/info/single-person-hospitalization.png',
        description: '1인 입원실',
      },
    ],
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeFloor]);

  // 지도
  useEffect(() => {
    if (activeTab === '오시는길') {
      const existingScript = document.querySelector('script[src*="kakao.com"]');
      if (existingScript) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=3bf554ce9d0c1006cdf2650f041688ab&autoload=false`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [activeTab]);

  const initializeMap = () => {
    if (!window.kakao || !window.kakao.maps) {
      console.error('Kakao maps not loaded');
      return;
    }

    window.kakao.maps.load(() => {
      const container = document.getElementById('kakaoMap');
      if (!container) {
        console.error('Map container not found');
        return;
      }

      try {
        const options = {
          center: new window.kakao.maps.LatLng(36.3516975, 127.3845509),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(36.3516975, 127.3845509),
          map,
        });
      } catch (error) {
        console.error('Map initialization error:', error);
      }
    });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFloorChange = (floor) => {
    setActiveFloor(floor);
  };

  const handlePrevImage = () => {
    const currentImages = floorImages[activeFloor];
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    const currentImages = floorImages[activeFloor];
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const getCurrentImages = () => floorImages[activeFloor];
  const getCurrentImage = () => getCurrentImages()[currentImageIndex];

  return (
    <main>
      <h2 className="sr-only">상세 정보</h2>

      <div className="header-banner">
        <div className="banner-tabs">
          {['진료안내', '층별안내', '오시는길'].map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {activeTab === '진료안내' && (
        <div className="container">
          <div className="info-section">
            <h3 className="title">진료안내</h3>

            <div className="schedule-section">
              <h4 className="section-title">진료시간</h4>

              <div className="schedule-item">
                <div className="schedule-day">평일</div>
                <div className="schedule-time">오전 9시 ~ 오후 8시</div>
              </div>
              <div className="schedule-item">
                <div className="schedule-day">토요일</div>
                <div className="schedule-time">오전 9시 ~ 오후 2시</div>
              </div>
              <div className="schedule-item">
                <div className="schedule-day">점심시간</div>
                <div className="schedule-time">오후 1시 ~ 오후 2시</div>
              </div>
              <div className="schedule-note">
                *일요일 및 공휴일 휴무
                <br />
                *토요일은 점심시간 없이 진료
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h4 className="section-title">주요진료</h4>
              <div className="departments-grid">
                {[
                  '소화장애',
                  '천식',
                  '교통사고',
                  '면역력 저하',
                  '목통증',
                  '허리통증',
                  '어깨통증',
                  '비수술 치료',
                  '체질개선',
                  '소아 성장',
                  '다이어트 한약',
                ].map((dept) => (
                  <div key={dept} className="department-tag">
                    {dept}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="image-section">
            <img
              src="/images/info/waiting.png"
              alt="병원 대기실"
              className="hospital-image"
            />
          </div>
        </div>
      )}

      {activeTab === '층별안내' && (
        <div className="floor-guide-section">
          <h3 className="title">층별안내</h3>

          <div className="floor-guide-container">
            <div className="floor-tabs">
              {['1', '2', '3'].map((floor) => (
                <div
                  key={floor}
                  className={`floor-tab ${activeFloor === floor ? 'active' : ''}`}
                  onClick={() => handleFloorChange(floor)}
                >
                  {floor}F
                </div>
              ))}
            </div>

            <div className="floor-content">
              <div className="main-image-container">
                <div className="image-navigation">
                  <button
                    className="nav-btn prev-btn"
                    onClick={handlePrevImage}
                  >
                    ❮
                  </button>
                  <button
                    className="nav-btn next-btn"
                    onClick={handleNextImage}
                  >
                    ❯
                  </button>
                </div>

                <div className="main-image-wrapper">
                  <img
                    src={getCurrentImage().src}
                    alt={getCurrentImage().description}
                    className="main-image"
                  />
                  <div className="image-description">
                    <span>{getCurrentImage().description}</span>
                  </div>
                </div>
              </div>

              <div className="thumbnail-container">
                <div className="thumbnail-wrapper">
                  <div className="thumbnail-group">
                    {getCurrentImages().map((image, index) => (
                      <div
                        key={image.src}
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                      >
                        <img src={image.src} alt={image.description} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === '오시는길' && (
        <div className="directions-section">
          <h3 className="title">오시는 길</h3>
          <div className="map-container">
            <div className="map-wrapper">
              <div
                id="kakaoMap"
                style={{ width: '100%', height: '400px' }}
              ></div>
            </div>
          </div>

          <div className="directions-info">
            <div className="transport-section">
              <h4 className="transport-title">교통수단별 이용안내</h4>

              <div className="transport-item">
                <div className="transport-icon">🚇</div>
                <div className="transport-details">
                  <strong>지하철 이용시</strong>
                  <p>- 2호선 감삼역 2번 출구(도보5분)</p>
                </div>
              </div>

              <div className="transport-item">
                <div className="transport-icon">🚌</div>
                <div className="transport-details">
                  <strong>버스 이용시</strong>
                  <p>
                    - 서남시장 정류장 하차(도보1분):간선 405, 425, 509, 527, 503
                    지선 성서2 좌석 성주왜관250
                  </p>
                </div>
              </div>

              <div className="transport-item">
                <div className="transport-icon">🚗</div>
                <div className="transport-details">
                  <strong>자가용 이용시</strong>
                  <p>
                    - 경산 시내: 달구벌대로 → 성서/성주 방향 → 감삼네거리 200m
                    진행 → 푸른방송 앞 유턴 → W(더블유)병원
                  </p>
                </div>
              </div>
            </div>

            <div className="external-directions-section">
              <h4 className="external-title">시외에서 오시는 길</h4>

              <div className="directions-table-container">
                <table className="directions-table">
                  <tbody>
                    <tr>
                      <td className="category-cell">시외고속버스</td>
                      <td className="route-cell">
                        서부정류장 → 간선 805(서부정류장)(LG전자 서비스센터) →
                        간선305(죽전네거리1) → 서남시장 건너 정류장 하차
                        <br />
                        서대구고속버스터미널 → 간선527(서대구고속버스터미널
                        건너) → 서남시장 정류장 하차
                        <br />
                        대구북부시외버스터미널 → 순환3-1(북부정류장) →
                        간선508(신평네거리2) → 서남시장 정류장 하차
                        <br />
                        대구남부시외버스터미널 → 2호선 만촌역 → 죽전역 하차
                        <br />
                        대구동부시외버스터미널 → 간선508(동부정류장(남편)) →
                        서남시장
                      </td>
                    </tr>
                    <tr>
                      <td className="category-cell">기차</td>
                      <td className="route-cell">
                        서대구역(KTX / SRT) → 택시 이용 10분
                        <br />
                        동대구역(KTX) / 대구역 → 지하철 1호선 동대구역 → 2호선
                        반월당역 문양방면 환승 → 감삼역
                      </td>
                    </tr>
                    <tr>
                      <td className="category-cell">비행기</td>
                      <td className="route-cell">
                        대구공항 → 간선401(대구국제공항 건너) → 2호선 반월당역 →
                        감삼역 하차
                      </td>
                    </tr>
                    <tr>
                      <td className="category-cell">자가용</td>
                      <td className="route-cell">
                        경부고속도로 / 중앙고속도로 / 중부내륙고속도로 →
                        서대구IC → 성서IC → 시청, 반월당네거리 방향 → 죽전네거리
                        600m 우측
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export { InfoPage };
