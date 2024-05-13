import axios from "axios";
import { useState } from "react";
import moment from "moment";
import {capitalizeFirstCharacter} from "../utlis"

function Home() {
  const [city, setCity] = useState(null);
  const [search, SetSearch] = useState("");

  const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${search.trim()},punjab,+91&units=metric&appid=d826c957beaed2c2d62874a6a9d94746`;

  async function getWeatherRequest() {
    if (!search.length) {
      alert("Please enter valid city");
    } else {
      await axios
        .get(apiKey)
        .then((res) => {
          console.log(res.data);
          setCity(res.data);
        })
        .catch((error) => {
          alert("City is not found", error);
        });
    }
  }

  return (
    <>
      <div>
        <div class="grid h-screen w-full place-items-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
          <section class="grid min-h-[600px] w-full max-w-md rounded-2xl bg-white bg-gradient-to-tl from-purple-800 via-violet-900 to-purple-800 p-6">
            {/* <!-- Wrapper --> */}
            <div class="flex h-full flex-col gap-y-5 rounded-2xl text-violet-100">
              <div class="relative flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-search absolute left-4 h-5 w-5 text-violet-800"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>

                {/* Search Box */}
                <input
                  onChange={(e) => {
                    SetSearch(e.target.value);
                  }}
                  class="w-full rounded-full bg-purple-300 placeholder:text-violet-800/50 py-3 pl-11 pr-4 text-violet-800 outline-none focus:ring-0"
                  placeholder="Enter your city name"
                  value={search}
                />
                <button
                  onClick={getWeatherRequest}
                  class="grid aspect-square h-12 w-12 place-items-center rounded-full bg-violet-600 outline-none transition-colors duration-200 ease-in-out hover:bg-violet-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-right h-5 w-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Date & Time */}
              <header class="date space-y-2 text-xl font-medium tracking-tighter">
                <h1>{moment().format("MMMM Do YYYY")}</h1>
                <p class="text-5xl font-extrabold">
                  <time class="time">{moment().format("LT")}</time>
                </p>
              </header>
              <main class="b relative flex-1">
                <div
                  id="weather"
                  className="weather w-full flex flex-col justify-center items-center mx-auto my-4 h-28 max-w-xs"
                >
                  <img
                    src={`https://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
                    alt="weather"
                    className="w-30 h-40 object-contain"
                  />
                  <h3>
                    {capitalizeFirstCharacter(city?.weather[0].description)}
                  </h3>
                </div>
                <div class="text-center space-y-4 pt-5">
                  <h2 class="font-bold text-3xl">{city?.name}</h2>
                  <h3 class="font-extrabold text-5xl">{city?.main.temp}°C</h3>
                </div>
                <div class="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-violet-500 pt-3 text-violet-300">
                  <div class="wave flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-waves h-12 w-12"
                    >
                      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                    </svg>

                    {/* Humidity */}
                    <div class="humidity">
                      <p class="text-sm font-extrabold">{city?.wind?.deg}°</p>
                      <p class="text-sm font-medium">Humidity</p>
                    </div>
                  </div>
                  <div class="wave flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-waves h-12 w-12"
                    >
                      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                    </svg>

                    {/* windSpeed */}
                    <div class="windSpeed">
                      <p class="text-sm font-extrabold">{city?.wind?.speed}</p>
                      <p class="text-sm font-medium">Wind Speed</p>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
