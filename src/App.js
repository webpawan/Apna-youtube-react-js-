import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChannelDetails,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetails,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid ">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="video/:id" element={<VideoDetails />} />
          <Route path="channel/:id" element={<ChannelDetails />} />
          <Route path="search/:searchTerm" element={<SearchFeed />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
