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

const handleCityChange = () => {
    const selectedCityValue = city.value;
    const selectedCity = cityInfo[selectedCityValue];

    weatherBox.innerHTML = `
        <h4>📍 ${selectedCity.name} 정보</h4>
        <p>위도 (Latitude): ${selectedCity.latitude}</p>
        <p>경도 (Longitude): ${selectedCity.longitude}</p>
    `;
}

city.addEventListener("change", handleCityChange);

handleCityChange();