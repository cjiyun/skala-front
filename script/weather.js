const cityInfo = {
  seoul: {
    name: "대한민국 서울 KR",
    latitude: 37.57,
    longitude: 126.98,
  },
  tokyo: {
    name: "일본 도쿄 JP",
    latitude: 35.68,
    longitude: 139.69,
  },
  paris: {
    name: "프랑스 파리 FR",
    latitude: 48.85,
    longitude: 2.35,
  },
  newyork: {
    name: "미국 뉴욕 US",
    latitude: 40.71,
    longitude: -74.01,
  },
};

const city = document.getElementById("city");
const weatherBox = document.getElementById("weather-box");

const handleCityChange = async () => {
  const selectedCityValue = city.value;
  const selectedCity = cityInfo[selectedCityValue];

  const lat = selectedCity.latitude;
  const lon = selectedCity.longitude;

  weatherBox.innerHTML = `<p>실시간 날씨 로딩 중... ⏳</p>`;

  try {
    const apiUrl =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${lat}` +
      `&longitude=${lon}` +
      `&current=temperature_2m,relative_humidity_2m`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("날씨 데이터를 불러오지 못했습니다.");
    }

    const data = await response.json();

    const temperature = data.current.temperature_2m;
    const humidity = data.current.relative_humidity_2m;

    weatherBox.innerHTML = `
      <h4>📍 ${selectedCity.name} 정보</h4>
      <p>🌡️ 현재 기온: ${temperature}℃</p>
      <p>💧 현재 습도: ${humidity}%</p>
    `;
  } catch (error) {
    console.error(error);
    weatherBox.innerHTML = `<p>날씨 정보를 불러올 수 없습니다.</p>`;
  }
};

city.addEventListener("change", handleCityChange);

handleCityChange();
