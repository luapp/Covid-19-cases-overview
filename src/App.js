import React, {useState, useEffect} from "react"
import './App.css'
import Home from "./landing_page/Home"


function App() {


  const NovelCOVID_API__All_Countries__today = "https://corona.lmao.ninja/v2/countries?yesterday=false&sort"
  const NovelCOVID_API__All_Continents__today = "https://corona.lmao.ninja/v2/continents?yesterday=false&sort"
  const NovelCOVID_API__All_Countries__yesterday = "https://corona.lmao.ninja/v2/countries?yesterday=true&sort"
  const NovelCOVID_API__All_Continents__yesterday = "https://corona.lmao.ninja/v2/continents?yesterday=true&sort"

  const [All_Countries__today, set_All_Countries__today] = useState([])
  const [All_Countries__yesterday, set_All_Countries__yesterday] = useState([])
  const [All_Continents__display, set_All_Continents__display] = useState([])
  const [All_Countries__display, set_All_Countries__display] = useState([])


  const [Worldwide_active__today, set_Worldwide_active__today] = useState("")
  const [Worldwide_cases__today, set_Worldwide_cases__today] = useState([])
  const [Worldwide_deaths__today, set_Worldwide_deaths__today] = useState([])
  const [Worldwide_recovered__today, set_Worldwide_recovered__today] = useState([])
  const [Worldwide_todayCases__today, set_Worldwide_todayCases__today] = useState([])
  const [Worldwide_todayDeaths__today, set_Worldwide_todayDeaths__today] = useState([])

  const [Worldwide_active__yesterday, set_Worldwide_active__yesterday] = useState([])
  const [Worldwide_cases__yesterday, set_Worldwide_cases__yesterday] = useState([])
  const [Worldwide_deaths__yesterday, set_Worldwide_deaths__yesterday] = useState([])
  const [Worldwide_recovered__yesterday, set_Worldwide_recovered__yesterday] = useState([])
  const [Worldwide_todayCases__yesterday, set_Worldwide_todayCases__yesterday] = useState([])
  const [Worldwide_todayDeaths__yesterday, set_Worldwide_todayDeaths__yesterday] = useState([])


  const [Loading_Countries__today, set_Loading_Countries__today] = useState(true)
  const [Loading_Countries__yesterday, set_Loading_Countries__yesterday] = useState(true)
  const [Loading_Continents__today, set_Loading_Continents__today] = useState(true)
  const [Loading_Continents__yesterday, set_Loading_Continents__yesterday] = useState(true)


  const [Page_value, set_Page_value] = useState("home")
  const [Specific_country_data, set_Specific_country_data] = useState([])
  const [Specific_country_data__yesterday, set_Specific_country_data__yesterday] = useState([])
  const [date, set_date] = useState("today")


  const Fetch_All_Continents__today = async () => {
    const api_response = await fetch(NovelCOVID_API__All_Continents__today)
    const json = await api_response.json()

    set_Worldwide_active__today(json[0].active + json[1].active + json[2].active + json[3].active + json[4].active + json[5].active)
    set_Worldwide_cases__today(json[0].cases + json[1].cases + json[2].cases + json[3].cases + json[4].cases + json[5].cases)
    set_Worldwide_deaths__today(json[0].deaths + json[1].deaths + json[2].deaths + json[3].deaths + json[4].deaths + json[5].deaths)
    set_Worldwide_recovered__today(json[0].recovered + json[1].recovered + json[2].recovered + json[3].recovered + json[4].recovered + json[5].recovered)
    set_Worldwide_todayCases__today(json[0].todayCases + json[1].todayCases + json[2].todayCases + json[3].todayCases + json[4].todayCases + json[5].todayCases)
    set_Worldwide_todayDeaths__today(json[0].todayDeaths + json[1].todayDeaths + json[2].todayDeaths + json[3].todayDeaths + json[4].todayDeaths + json[5].todayDeaths)
  }
  const Fetch_All_Continents__yesterday = async () => {
    const api_response = await fetch(NovelCOVID_API__All_Continents__yesterday)
    const json = await api_response.json()

    set_Worldwide_active__yesterday(json[0].active + json[1].active + json[2].active + json[3].active + json[4].active + json[5].active)
    set_Worldwide_cases__yesterday(json[0].cases + json[1].cases + json[2].cases + json[3].cases + json[4].cases + json[5].cases)
    set_Worldwide_deaths__yesterday(json[0].deaths + json[1].deaths + json[2].deaths + json[3].deaths + json[4].deaths + json[5].deaths)
    set_Worldwide_recovered__yesterday(json[0].recovered + json[1].recovered + json[2].recovered + json[3].recovered + json[4].recovered + json[5].recovered)
    set_Worldwide_todayCases__yesterday(json[0].todayCases + json[1].todayCases + json[2].todayCases + json[3].todayCases + json[4].todayCases + json[5].todayCases)
    set_Worldwide_todayDeaths__yesterday(json[0].todayDeaths + json[1].todayDeaths + json[2].todayDeaths + json[3].todayDeaths + json[4].todayDeaths + json[5].todayDeaths)
  }
  const Fetch_All_Countries__today = async () => {
    const api_response = await fetch(NovelCOVID_API__All_Countries__today)
    const json = await api_response.json()
    set_All_Countries__today(json)
  }
  const Fetch_All_Countries__yesterday = async () => {
    const api_response = await fetch(NovelCOVID_API__All_Countries__yesterday)
    const json = await api_response.json()
    set_All_Countries__yesterday(json)
  }

  useEffect(() => {
    Fetch_All_Continents__today()
    Fetch_All_Continents__yesterday()
    Fetch_All_Countries__today()
    Fetch_All_Countries__yesterday()
  }, [])


  return (
    <div className="App">
      <Home Worldwide_active__today = {Worldwide_active__today}
      Worldwide_cases__today = {Worldwide_cases__today}
      Worldwide_deaths__today = {Worldwide_deaths__today}
      Worldwide_recovered__today = {Worldwide_recovered__today}
      Worldwide_todayCases__today = {Worldwide_todayCases__today}
      Worldwide_todayDeaths__today = {Worldwide_todayDeaths__today}
  
      Worldwide_active__yesterday = {Worldwide_active__yesterday}
      Worldwide_cases__yesterday = {Worldwide_cases__yesterday}
      Worldwide_deaths__yesterday = {Worldwide_deaths__yesterday}
      Worldwide_recovered__yesterday = {Worldwide_recovered__yesterday}
      Worldwide_todayCases__yesterday = {Worldwide_todayCases__yesterday}
      Worldwide_todayDeaths__yesterday = {Worldwide_todayDeaths__yesterday}
  
      All_Countries__today = {All_Countries__today}
      All_Countries__yesterday = {All_Countries__yesterday}

      set_Page_value = {set_Page_value}
      Page_value = {Page_value}

      set_Specific_country_data = {set_Specific_country_data}
      Specific_country_data = {Specific_country_data}

      date = {date}
      set_date = {set_date}

      set_Specific_country_data__yesterday = {set_Specific_country_data__yesterday}
      Specific_country_data__yesterday = {Specific_country_data__yesterday}
      />
    </div>
  )
}

export default App;
