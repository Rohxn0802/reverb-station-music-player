"use client"
import React from 'react'
import AlbumCarousel from '../AlbumCarousel/AlbumCarousel'
import SongsList from '../SongsList/SongsList'
import { useSelector } from 'react-redux'

function RecentlyPlayed() {
    const {RecentlyPlayedSongs} = useSelector((store)=> store.recent)
  return (
    <div className='page-Wrap'>
    <AlbumCarousel />
      <SongsList what={RecentlyPlayedSongs} title={"Recently Played Tracks"}  />
    </div>
  )
}

export default RecentlyPlayed