import React, { LegacyRef, MutableRefObject, Ref, useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import logo from './logo.svg';
import { ColumnsType } from 'antd/lib/table/Table'
import './App.css';
import { Server } from 'http';
import axios from 'axios'



type FormResult = {
  name: string
  username: string
}

type ServerData = {
  base: string
  clouds: any
  cod: number
  coord: any
  dt: number
  id: number
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  name: string
  sys: any
  timezone: number
  visibility: number
  weather: any[]
  wind: any
}

function App() {
  const [ServerData, SetServerData] = useState<ServerData>()
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  useEffect(() => {
    (async () => {
      const weather = await axios.get<ServerData>('https://api.openweathermap.org/data/2.5/weather?q=tehran')
      const weather2 = await axios.request<ServerData>({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=tehran',
        headers: {
          'Authorization':''
        }
      })

      
      SetServerData(weather.data)
    })()
    
    // weather.then((data) => {
    //   return data.json()
    // }).then(data => {
    //   SetServerData(data)
    //   console.log(data)
    // })
    
  }, [ServerData])

  return (
    <div className="app">
      <h1>{ServerData?.main?.temp}</h1>
    </div>
  );
}

export default App;
