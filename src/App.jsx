import React, { useEffect, useState } from "react";
import { SongCard } from "./components/shared/SongCard"
import './styles/App.css'

function App() {
  const [search, setSearch] = useState('');

  const musics = [
    {title: 'Lofi Sleep Beats', subtitle: "115.110.111", id: setTimeout(() => new Date().getTime(), 1000), imageUrl: "src/assets/lofi.jpg" },
    {title: 'Lofi Sleep Beats', subtitle: "115.110.111", id: setTimeout(() => new Date().getTime(), 1000), imageUrl: "src/assets/lofi.jpg" },
    {title: 'Lofi GetUp Beats', subtitle: "115.110.111", id: setTimeout(() => new Date().getTime(), 1000), imageUrl: "src/assets/lofi.jpg" },
  ]
  
  const filteredMusics = search.length > 0 
    ? musics.filter(music => music.title.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div className="musics-container">
      <input type="text" className="inpt-field" value={search} onChange={event => setSearch(event.target.value)} placeholder="Filtrar músicas"/>
      {search.length > 0 ? (
        filteredMusics.map(music => (
          <div className="" key={music.id}>
            <SongCard imageUrl={music.imageUrl} title={music.title} subtitle={music.subtitle} />
          </div>
        ))
      ) : (
        musics.map(music => (
          <div className="musics-container" key={music.id}>
            <SongCard imageUrl={music.imageUrl} title={music.title} subtitle={music.subtitle} />
          </div>
        ))
      )}
    </div>
  )
}

export  { App }
