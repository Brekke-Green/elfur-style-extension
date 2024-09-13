import { useState } from 'react'
import './App.css'

function App() {
  const [selected, setSelected] = useState("none")

  const changeSelectedStyle = (styleName) => {
    console.log(styleName)
    console.log(selected)
    if (selected !== styleName) {
      setSelected(styleName)
      let selectedList = document.getElementsByClassName("selected")
      if (selectedList.length > 0) {
        for (let i = 0; i < selectedList.length; i++) {
          selectedList[i].classList.remove("selected")
        }
      }
      document.getElementById(styleName).classList.add("selected")
    } else {
      setSelected("none")
      let selectedList = document.getElementsByClassName("selected")
      if (selectedList.length > 0) {
        for (let i = 0; i < selectedList.length; i++) {
          selectedList[i].classList.remove("selected")
        }
      }
    }
  };

  const styleRelaxing = async () => {
    changeSelectedStyle("relaxing")

    let [tab] = await chrome.tabs.query({ active: true , currentWindow: true});

    chrome.scripting
      .executeScript({
        target : {tabId : tab.id},
        files : [ "styleRelaxing.js" ],
      })
    .then(() => console.log("change to relaxing theme - script injected"));
  }

  const styleEnergizing = async () => {
      changeSelectedStyle("energizing")
      
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
      <div id='popupContainer'>
        <div className='headerContainer'><img src='images/logo.png' id='popupLogo'/></div>
        <div className='theme-list'>
            <button className='styleButton' id='relaxing' onClick={styleRelaxing}>Relaxing</button>
            <button className='styleButton' id='energizing' onClick={styleEnergizing}>Energizing</button>
        </div>
      </div>
    </>
  )
}

export default App
