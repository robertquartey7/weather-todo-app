import axios from "axios";
import cookie from "js-cookie";
import { useState } from "react";
const backendurl = import.meta.env.VITE_BACKEND_URL;
export function weatherIconUrl(weatherIconCode) {
  return `https://openweathermap.org/img/wn/${weatherIconCode}.png`;
}

export async function signUp({ fullName, email, password }) {
  /**
   * signing up a new user
   */
  try {
    console.log(backendurl);
    const newUser = await axios.post(`${backendurl}/auth/signup`, {
      email,
      password,
      fullName,
    });

    if (newUser) {
      return newUser;
    }
  } catch (error) {
    return error;
  }
}

export async function login({ email, password }) {
  /**
   * logging in a new User
   */
  try {
    const user = await axios.post(`${backendurl}/auth/login`, {
      email,
      password,
    });

    if (user) {
      return user;
    }
  } catch (error) {
    return error;
  }
}

export async function getCurrentUser() {
  /**
   * getting the current User
   */
  try {
    const user = await axios.get(`${backendurl}/auth`, {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    });

    if (user) {
      return user;
    }
  } catch (error) {
    return error;
  }
}
// weather info

export async function getCurrentWeatherInfo({ lat, lng }) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }&units=imperial`;
  try {
    const weathedata = await axios.get(url);
    console.log(url);

    if (weathedata) return weathedata;
  } catch (error) {
    return error;
  }
}
export async function getWeeklyWeatherInfo({ lat, lng }) {
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
  //   import.meta.env.VITE_WEATHER_API_KEY
  // }&units=imperial`;

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }&units=imperial&exclude=current,minutely,alerts`;
  try {
    const weathedata = await axios.get(url);
    console.log(url);

    if (weathedata) return weathedata;
  } catch (error) {
    return error;
  }
}

export async function createList({ title }) {
  try {
    const task = await axios.post(
      `${backendurl}/list`,
      {
        title,
      },
      {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      }
    );
    if (task) return task;
  } catch (error) {
    return error;
  }
}
// creating task
export async function createTask({ title, description, datetime, taskId }) {
  try {
    const task = await axios.post(
      `${backendurl}/list/${taskId}/task`,
      {
        title,
        description,
        datetime,
      },
      {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      }
    );
    if (task) return task;
  } catch (error) {
    return error;
  }
}

export async function getAllList() {
  try {
    const task = await axios.get(
      `${backendurl}/list`,

      {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      }
    );
    if (task) return task;
  } catch (error) {
    return error;
  }
}

// getting a specfic list
export async function getAlltask({ id }) {
  try {
    const task = await axios.get(
      `${backendurl}/list/${id}/task`,

      {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      }
    );
    if (task) return task;
  } catch (error) {
    return error;
  }
}

// deleting list

export async function deleteList({ id }) {
  try {
    const task = await axios.delete(
      `${backendurl}/list/${id}`,

      {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      }
    );
    if (task) return task;
  } catch (error) {
    return error;
  }
}

// deleting task
export async function deleteTask({ id }) {
  try {
    const task = await axios.delete(
      `${backendurl}/task/${id}`,

      {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      }
    );
    if (task) return task;
  } catch (error) {
    return error;
  }
}
export async function getAllStatus({query}) {
  try {
    const task = await axios.get(
      `${backendurl}/task?query=${query}`,

      {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      }
    );
    if (task) return task;
  } catch (error) {
    return error;
  }
}
