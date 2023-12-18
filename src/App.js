import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import MyNavbar from './Components/MyNavbar/MyNavbar';
import AllHotels from './pages/AllHotels/AllHotels';
import AboutUs from './pages/AboutUs/AboutUs';
import OurServices from './pages/OurServices/OurServices';

import SingleHotelPage from './pages/AllHotels/SingleHotelPage/SingleHotelPage';
import Footer from './Components/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import HomePage from './pages/HomePage/HomePage';

import hotelpic11 from './Images/Hotels/hotelpic11.webp';
import hotelpic12 from './Images/Hotels/hotelpic12.webp';
import hotelpic13 from './Images/Hotels/hotelpic13.webp';
import hotelpic14 from './Images/Hotels/hotelpic14.webp';
import bar1 from './Images/Hotels/bar1.webp';
import gym1 from './Images/Hotels/gym1.webp';
import rs1 from './Images/Hotels/rs1.jpg';
import sw1 from './Images/Hotels/sw1.webp';
import hotelpic21 from './Images/Hotels/hotelpic21.webp';
import hotelpic22 from './Images/Hotels/hotelpic22.webp';
import hotelpic23 from './Images/Hotels/hotelpic23.webp';
import hotelpic24 from './Images/Hotels/hotelpic24.webp';
import bar2 from './Images/Hotels/bar2.webp';
import gym2 from './Images/Hotels/gym2.webp';
import rs2 from './Images/Hotels/rs2f.webp';
import sw2 from './Images/Hotels/sw2.jpg';
import hotelpic31 from './Images/Hotels/hotelpic31.webp';
import hotelpic32 from './Images/Hotels/hotelpic32.webp';
import hotelpic33 from './Images/Hotels/hotelpic33.webp';
import hotelpic34 from './Images/Hotels/hotelpic34.jpg';
import bar3 from './Images/Hotels/bar3.jpg';
import gym3 from './Images/Hotels/gym3.webp';
import rs3 from './Images/Hotels/rs3.jpg';
import sw3 from './Images/Hotels/sw3.webp';
import hotelpic41 from './Images/Hotels/hotelpic41.webp';
import hotelpic42 from './Images/Hotels/hotelpic42.webp';
import hotelpic43 from './Images/Hotels/hotelpic43.webp';
import hotelpic44 from './Images/Hotels/hotelpic44.jpg';
import bar4 from './Images/Hotels/bar4.webp';
import gym4 from './Images/Hotels/gym4.webp';
import rs4 from './Images/Hotels/rs4.jpg';
import sw4 from './Images/Hotels/sw4.webp';
import hotelpic51 from './Images/Hotels/hotelpic51.webp';
import hotelpic52 from './Images/Hotels/hotelpic52.webp';
import hotelpic53 from './Images/Hotels/hotelpic53.webp';
import hotelpic54 from './Images/Hotels/hotelpic54.webp';
import bar5 from './Images/Hotels/bar5.webp';
import gym5 from './Images/Hotels/gym5.webp';
import rs5 from './Images/Hotels/rs5.jpg';
import sw5 from './Images/Hotels/sw4.webp';
import hotelpic61 from './Images/Hotels/hotelpic61.jpg';
import hotelpic62 from './Images/Hotels/hotelpic62.webp';
import hotelpic63 from './Images/Hotels/hotelpic63.webp';
import hotelpic64 from './Images/Hotels/hotelpic64.webp';
import bar6 from './Images/Hotels/bar6.webp';
import gym6 from './Images/Hotels/gym6.webp';
import rs6 from './Images/Hotels/rs6.webp';
import sw6 from './Images/Hotels/sw6.webp';
import SignUp from './pages/SignUp/SignUp';
import Reservation from './Components/Reservation/Reservation';


const imageArray = [hotelpic11, hotelpic12, hotelpic13, hotelpic14, bar1, gym1, rs1, sw1, 
                    hotelpic21, hotelpic22, hotelpic23, hotelpic24, bar2, gym2, rs2, sw2, 
                    hotelpic31, hotelpic32, hotelpic33, hotelpic34, bar3, gym3, rs3, sw3, 
                    hotelpic41, hotelpic42, hotelpic43, hotelpic44, bar4, gym4, rs4, sw4, 
                    hotelpic51, hotelpic52, hotelpic53, hotelpic54, bar5, gym5, rs5, sw5, 
                    hotelpic61, hotelpic62, hotelpic63, hotelpic64, bar6, gym6, rs6, sw6];



const fakeData = {
  hotelData: [
    {
      id: 1,
      name: "Sea Shell Hotel",
      location: "Cox's Bazar, Bangladesh",
      price: 1000,
      image: imageArray[0],
      freeRoomsWithTypes: [
        { roomType: "Single Room", roomNumber: 1 },
        { roomType: "Single Room", roomNumber: 2 },
        { roomType: "Single Room", roomNumber: 3 },
        { roomType: "Double Room", roomNumber: 4 },
        { roomType: "Double Room", roomNumber: 5 },
        { roomType: "Double Room", roomNumber: 6 },
        { roomType: "Suite", roomNumber: 7 },
        { roomType: "Suite", roomNumber: 8 },
        { roomType: "Suite", roomNumber: 9 },
      ],
      bookedRoomsWithDates: [],
      details: {
        welcomeMessage:
          "Welcome to Sea Shell Hotel, your haven of tranquility amidst the vibrant shores of Cox's Bazar. Experience the epitome of luxury and comfort as you immerse yourself in the breathtaking beauty of the Bay of Bengal.",
        services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
        serviceImages: imageArray.slice(4, 8),
        roomImages: imageArray.slice(0, 3),
        accommodation: [
          { roomType: "Single Room", price: 500, capacity: 1 },
          { roomType: "Double Room", price: 700, capacity: 2 },
          { roomType: "Suite", price: 1000, capacity: 3 },
        ],
        others: "Free Wi-Fi, Air Conditioning, Breakfast",
      },
    },
    {
      id: 2,
      name: "Radisson Blu Resort Cox's Bazar",
      location: "Cox's Bazar, Bangladesh",
      price: 800,
      image: imageArray[8],
      freeRoomsWithTypes: [
        { roomType: "Single Room", roomNumber: 1 },
        { roomType: "Single Room", roomNumber: 2 },
        { roomType: "Single Room", roomNumber: 3 },
        { roomType: "Double Room", roomNumber: 4 },
        { roomType: "Double Room", roomNumber: 5 },
        { roomType: "Double Room", roomNumber: 6 },
        { roomType: "Suite", roomNumber: 7 },
        { roomType: "Suite", roomNumber: 8 },
        { roomType: "Suite", roomNumber: 9 },
      ],
      bookedRoomsWithDates: [],
      details: {
        welcomeMessage:
          "Embrace endless indulgence at Radisson Blu Resort Cox's Bazar, where opulence meets the serenity of the golden sands. Indulge in unparalleled comfort and personalized service as you create unforgettable memories along the Bay of Bengal.",
        services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
        serviceImages: imageArray.slice(8, 12),
        roomImages: imageArray.slice(3, 6),
        accommodation: [
          { roomType: "Single Room", price: 400, capacity: 1 },
          { roomType: "Double Room", price: 600, capacity: 2 },
          { roomType: "Suite", price: 800, capacity: 3 },
        ],
        others: "Free Wi-Fi, Air Conditioning, Breakfast",
      },
    },
    {
      id: 3,
      name: "Sayeman Beach Resort",
      location: "Cox's Bazar, Bangladesh",
      price: 600,
      image: imageArray[16],
      freeRoomsWithTypes: [
        { roomType: "Single Room", roomNumber: 1 },
        { roomType: "Single Room", roomNumber: 2 },
        { roomType: "Single Room", roomNumber: 3 },
        { roomType: "Double Room", roomNumber: 4 },
        { roomType: "Double Room", roomNumber: 5 },
        { roomType: "Double Room", roomNumber: 6 },
        { roomType: "Suite", roomNumber: 7 },
        { roomType: "Suite", roomNumber: 8 },
        { roomType: "Suite", roomNumber: 9 },
      ],
      bookedRoomsWithDates: [],
      details: {
        welcomeMessage:
          "Escape to Sayeman Beach Resort, where the turquoise waters of the Bay of Bengal and the warmth of Bangladeshi hospitality await. Discover a harmonious blend of comfort, convenience, and affordability nestled amidst the tranquil shores of Cox's Bazar.",
        services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
        serviceImages: imageArray.slice(12, 16),
        roomImages: imageArray.slice(6, 9),
        accommodation: [
          { roomType: "Single Room", price: 300, capacity: 1 },
          { roomType: "Double Room", price: 500, capacity: 2 },
          { roomType: "Suite", price: 700, capacity: 3 },
        ],
        others: "Free Wi-Fi, Air Conditioning, Breakfast",
      },
    },
    {
      id: 4,
      name: "Long Beach Hotel",
      location: "Cox's Bazar, Bangladesh",
      price: 1200,
      image: imageArray[24],
      freeRoomsWithTypes: [
        { roomType: "Single Room", roomNumber: 1 },
        { roomType: "Single Room", roomNumber: 2 },
        { roomType: "Single Room", roomNumber: 3 },
        { roomType: "Double Room", roomNumber: 4 },
        { roomType: "Double Room", roomNumber: 5 },
        { roomType: "Double Room", roomNumber: 6 },
        { roomType: "Suite", roomNumber: 7 },
        { roomType: "Suite", roomNumber: 8 },
        { roomType: "Suite", roomNumber: 9 },
      ],
      bookedRoomsWithDates: [],
      details: {
        welcomeMessage:
          "Experience the epitome of luxury at Long Beach Hotel, where elegance meets the breathtaking panorama of the Bay of Bengal. Unwind in lavish accommodations, pamper yourself at our world-class Bar, and savor culinary delights as you create unforgettable memories in Cox's Bazar.",
        services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
        serviceImages: imageArray.slice(16, 20),
        roomImages: imageArray.slice(9, 12),
        accommodation: [
          { roomType: "Deluxe Room", price: 800, capacity: 2 },
          { roomType: "Executive Room", price: 1000, capacity: 2 },
          { roomType: "Sea View Suite", price: 1200, capacity: 3 },
        ],
        others: "Free Wi-Fi, Air Conditioning, Breakfast, Private Beach Access",
      },
    },
    {
      id: 5,
      name: "Golden Sands Resort",
      location: "Cox's Bazar, Bangladesh",
      price: 900,
      image: imageArray[32],
      freeRoomsWithTypes: [
        { roomType: "Single Room", roomNumber: 1 },
        { roomType: "Single Room", roomNumber: 2 },
        { roomType: "Single Room", roomNumber: 3 },
        { roomType: "Double Room", roomNumber: 4 },
        { roomType: "Double Room", roomNumber: 5 },
        { roomType: "Double Room", roomNumber: 6 },
        { roomType: "Suite", roomNumber: 7 },
        { roomType: "Suite", roomNumber: 8 },
        { roomType: "Suite", roomNumber: 9 },
      ],
      bookedRoomsWithDates: [],
      details: {
        welcomeMessage:
          "Discover paradise at Golden Sands Resort, where the sun-kissed beaches meet luxurious comfort. Immerse yourself in the beauty of Cox's Bazar while enjoying top-notch amenities and services.",
        services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
        serviceImages: imageArray.slice(20, 24),
        roomImages: imageArray.slice(12, 15),
        accommodation: [
          { roomType: "Standard Room", price: 600, capacity: 1 },
          { roomType: "Deluxe Room", price: 800, capacity: 2 },
          { roomType: "Ocean View Suite", price: 1000, capacity: 3 },
        ],
        others: "Free Wi-Fi, Air Conditioning, Breakfast",
      },
    },
    {
      id: 6,
      name: "Pristine Paradise Resort",
      location: "Cox's Bazar, Bangladesh",
      price: 700,
      image: imageArray[40],
      freeRoomsWithTypes: [
        { roomType: "Single Room", roomNumber: 1 },
        { roomType: "Single Room", roomNumber: 2 },
        { roomType: "Single Room", roomNumber: 3 },
        { roomType: "Double Room", roomNumber: 4 },
        { roomType: "Double Room", roomNumber: 5 },
        { roomType: "Double Room", roomNumber: 6 },
        { roomType: "Suite", roomNumber: 7 },
        { roomType: "Suite", roomNumber: 8 },
        { roomType: "Suite", roomNumber: 9 },
      ],
      bookedRoomsWithDates: [],
      details: {
        welcomeMessage:
          "Escape to Pristine Paradise Resort, where serenity meets sophistication. Experience the perfect blend of nature and luxury along the shores of Cox's Bazar, making your stay truly memorable.",
        services: ["Bar", "Gym", "Restaurant", "Swimming Pool"],
        serviceImages: imageArray.slice(24, 28),
        roomImages: imageArray.slice(15, 18),
        accommodation: [
          { roomType: "Garden View Room", price: 500, capacity: 2 },
          { roomType: "Sea View Room", price: 600, capacity: 2 },
          { roomType: "Luxury Suite", price: 700, capacity: 3 },
        ],
        others: "Free Wi-Fi, Air Conditioning, Breakfast",
      },
    },
  ],
};
function App() {
  const fetchHotelData = async () => {
    
  }
  const [loggedIn, setLoggedIn] = useState(false)
  const checkUserLogin = async () => {
    const clientDetails = JSON.parse(localStorage.getItem('user'));
    const user = {email: clientDetails?.email, password: clientDetails?.password};
    // console.log(user)
    const response = await axios.post('http://localhost:3001/api/users/login', user);
    if(response.data!==null)
      setLoggedIn(true)
  }
  // checkUserLogin();
  // setTimeout(()=>{
  //   checkUserLogin()
  // },500
  // )
  useEffect(()=>{
    checkUserLogin()
  },[])
  return (
    <div className="App">
      {/* <GoogleOAuthProvider clientId='798735281199-i7ofg4uvb8dpuq1q640fc84sv11svjnc.apps.googleusercontent.com' > */}
      <BrowserRouter>
        <MyNavbar logginStatus={loggedIn} />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<AllHotels data={fakeData.hotelData} />} />
          <Route path="/hotels" element={<AllHotels data={fakeData.hotelData} />} />
          <Route path="/hotels/:hotelId" element={<SingleHotelPage data={fakeData.hotelData} />} />

          <Route path="/contact" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </GoogleOAuthProvider> */}
    </div>
  );
}

export default App;
