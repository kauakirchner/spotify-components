import React, { useState } from "react";
import { SongCard } from "./components/shared/SongCard"
import './styles/App.css'

function App() {
  const musics = [
    {title: 'Lofi Sleep Beats', subtitle: "115.110.111", id: new Date().getTime(), imageUrl: "src/assets/lofi.jpg" },
    {title: 'Lofi Sleep Beats', subtitle: "115.110.111", id: new Date().getTime(), imageUrl: "src/assets/lofi.jpg" },
    {title: 'Lofi Sleep Beats', subtitle: "115.110.111", id: new Date().getTime(), imageUrl: "src/assets/lofi.jpg" },
  ]
  return (
    <div className="app-container">
      {musics.map(music => (
        <div key={music.id} className="musics-container">
          <SongCard imageUrl={music.imageUrl} title={music.title} subtitle={music.subtitle} />
        </div>
      ))}
    </div>
  )
}

export  { App }
