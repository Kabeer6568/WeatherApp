// function fetchData(callBack) {
//     fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=14de2ba7c0609d66270494f77bca3945")
//       // .then((res) => res.json())
//       .then((res) => {
//         callBack(res);
//       })
//       .catch((err) => {
//         console.log("Error==>", err);
//       });
//   }
  
//   function foo(data) {
//     console.log(data);
//   }
  
//   function meraWada() {
//       return new Promise((resolve, reject) => {
//         fetch("https://jsonplaceholder.typicode.com/photos")
//           .then((res) => res.json())
//           .then((res) => {
//             resolve(res);
//           })
//           .catch((err) => {
//             reject(err);
//           });
//       });
//     }



//   async function abc() {
//       try {
//         const data = await meraWada();
//         console.log(data);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     abc();
    
//     async function foo() {
//         try {
//           const data = await meraWada();
//           console.log(data);
//         } catch (err) {
//           console.log(err);
//         }
//       }
//       foo();
//     meraWada()
//       .then((result) => {
//         console.log("Result==>", result);
//       })
//       .catch((err) => {
//         console.log("Error=>", err);
//       });

const API_KEY = '14de2ba7c0609d66270494f77bca3945';

let cityNmae = document.getElementById("cityName");
let temp = document.getElementById("temp");
let weatherType = document.getElementById("weatherType");
let tomorrow = document.getElementById("tomorrow");
let dayAfter = document.getElementById("dayAfter");
let search = document.getElementById("search");
let form = document.querySelector("form");
let main = document.getElementById("mainContainer")
let searching = search.value



const getWeather = async (city) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    const response = await fetch(url)
    console.log(response);
    const data = await response.json()
    console.log(data)
    return showWeather(data)


}

const showWeather = (data)=>{
    main.innerHTML = `
    <div class="container">
            <div class="box h-md-100" style="background: linear-gradient(112.14deg, #00D2FF 0%, #3A7BD5 100%);margin: 5% auto;">
                <!--begin::Body-->
                <div class="card-body">
                    
                    <!--begin::Row-->
                    <div class="row  h-100">
                        <!--begin::Col-->
                        <div class="col-7 ps-xl-13">
                            <!--begin::Title-->
                            <div class="text-white mb-6 pt-6">
                                <span class="fs-4 fw-bold me-2 d-block lh-1 pb-2 opacity-75 weather-now">Weather in <span id="cityName">${search.value}</span> Right Now</span>
                                <h1 class="weather-city" id="temp">${data.main.temp}</h1>
                            </div>
                            <!--end::Title-->
                            <!--begin::Text-->
                            <span class="fw-bold text-white fs-6 mb-8 d-block opacity-75 weather-type">
                                It is <span id="weatherType">${data.weather[0].main}</span>  right now in ${search.value}
                            </span>
                            <!--end::Text-->
                            <!--begin::Items-->
                            <div class="d-flex align-items-center flex-wrap d-grid gap-2 mb-10 mb-xl-20">
                                <!--begin::Item-->
                                <div class="d-flex align-items-center me-5 me-xl-13">
                                    <!--begin::Symbol-->
                                    <div class="symbol symbol-30px symbol-circle me-3">
                                        <span class="symbol-label" style="background: #35C7FF">
                                            <!--begin::Svg Icon | path: icons/duotune/abstract/abs042.svg-->
                                            <span class="svg-icon svg-icon-5 svg-icon-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z"
                                                        fill="currentColor"></path>
                                                    <path opacity="0.3"
                                                        d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            <!--end::Svg Icon-->
                                        </span>
                                    </div>
                                    <!--end::Symbol-->
                                    <!--begin::Info-->
                                    <div class="text-white">
                                        <span class="fw-bold d-block fs-8 opacity-75">Tomorrow</span>
                                        <span class="fw-bolder fs-7" id="tomorrow">Weather</span>
                                    </div>
                                    <!--end::Info-->
                                </div>
                                <!--end::Item-->
                                <!--begin::Item-->
                                <div class="d-flex align-items-center">
                                    <!--begin::Symbol-->
                                    <div class="symbol symbol-30px symbol-circle me-3">
                                        <span class="symbol-label" style="background: #35C7FF">
                                            <!--begin::Svg Icon | path: icons/duotune/abstract/abs042.svg-->
                                            <span class="svg-icon svg-icon-5 svg-icon-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z"
                                                        fill="currentColor"></path>
                                                    <path opacity="0.3"
                                                        d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            <!--end::Svg Icon-->
                                        </span>
                                    </div>
                                    <!--end::Symbol-->
                                    <!--begin::Info-->
                                    <div class="text-white">
                                        <span class="fw-bold opacity-75 d-block fs-8" id="dayAfter">Day After Tomorrow</span>
                                        <span class="fw-bolder fs-7">Weather</span>
                                    </div>
                                    <!--end::Info-->
                                </div>
                                <!--end::Item-->
                            </div>
                            <!--end::Items-->
                           
                        </div>
                        <!--end::Col-->
                        <!--begin::Col-->
                        <div class="col-5 pt-10">
                            <!--begin::Illustration-->
                            <div class="bgi-no-repeat bgi-size-contain h-225px"
                                style="background-image:url('https://cdn-icons-png.flaticon.com/512/1197/1197102.png');"></div>
                            <!--end::Illustration-->
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Row-->
                </div>
                <!--end::Body-->
            </div>

        </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault()
    }
)

console.log(search.value);