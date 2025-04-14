import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Chatbot from '../components/Chatbot'
import FileUpload from '../components/FileUpload'
import MultimediaSearch from '../components/MultimediaSearch'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Chatbot />}></Route>
        <Route path='/file_upload' element={<FileUpload />}></Route>
        <Route path='/multimedia_search' element={<MultimediaSearch />}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes