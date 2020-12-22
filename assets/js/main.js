const surfReportBtn = document.getElementById("surf-report-btn");

surfReportBtn.addEventListener("click", getSurfReport);

function getSurfReport() {
  console.log("In the surf report function");
  //   const lat = 32.8667137;
  //   const lng = -117.2546;
  //   const params =
  //     "airTemperature,waterTemperature,windSpeed,windDirection,waveHeight,waveDirection";

  //   fetch(
  //     `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
  //     {
  //       headers: {
  //         Authorization:
  //           "92c843ba-ef2a-11ea-9d9b-0242ac130002-92c84464-ef2a-11ea-9d9b-0242ac130002",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       // Do something with response data.
  //       console.log("Here is the data returned from storm glass: ", jsonData);
  //     });
}
