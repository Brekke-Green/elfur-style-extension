import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const styleRelaxing = async () => {
    let [tab] = await chrome.tabs.query({ active: true , currentWindow: true});

    chrome.scripting
        .executeScript({
            target : {tabId : tab.id},
            files : [ "styleRelaxing.js" ],
        })
.then(() => console.log("change to relaxing theme - script injected"));
}

const styleEnergizing = async () => {
    let [tab] = await chrome.tabs.query({ active: true , currentWindow: true});

    chrome.scripting
        .executeScript({
            target : {tabId : tab.id},
            files : [ "styleEnergizing.js" ],
        })
.then(() => console.log("change to energizing theme - script injected"));
}

  return (
    <>
        <div className='headerContainer'><img src='images/logo.png' id='popupLogo'/>
          <div> elfur </div>
          <div> SAFE HAVEN FOR THE WORKFORCE</div>
        </div>
        <div>THEME SETTINGS</div>
        <div className='theme-list'>
            <button className='styleButton' onClick={styleRelaxing}>Relaxing</button>
            <button className='styleButton' onClick={styleEnergizing}>Energizing</button>
        </div>
    </>
  )
}

export default App
