import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import MyNavbar from './Components/MyNavbar/MyNavbar';
import AllHotels from './pages/AllHotels/AllHotels';
import AboutUs from './pages/AboutUs/AboutUs';
import OurServices from './pages/OurServices/OurServices';
import hotelPic1 from './Images/Hotels/hotel-pic-1.jpg';
import hotelPic2 from './Images/Hotels/hotel-pic-2.jpg';
import hotelPic3 from './Images/Hotels/hotel-pic-3.jpg';
import hotelPic4 from './Images/Hotels/hotel-pic-4.jpg';
import hotelPic5 from './Images/Hotels/hotel-pic-5.jpg';
import hotelPic6 from './Images/Hotels/hotel-pic-6.jpg';
import SingleHotelPage from './pages/AllHotels/SingleHotelPage/SingleHotelPage';
import Footer from './Components/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
const fakeData = {
  hotelData : [
    {
      "id": 1,
      "name": "Sea Shell Hotel",
      "location": "Cox's Bazar, Bangladesh",
      "price": 1000,
      "image": hotelPic1,
      "details": {
        "welcomeMessage": "Welcome to Sea Shell Hotel, your haven of tranquility amidst the vibrant shores of Cox's Bazar. Experience the epitome of luxury and comfort as you immerse yourself in the breathtaking beauty of the Bay of Bengal.",
        "services": ["Spa", "Gym", "Restaurant", "Swimming Pool"],
        "accommodation": [
          {
            "roomType": "Single Room",
            "price": 500,
            "capacity": 1,
          },
          {
            "roomType": "Double Room",
            "price": 700,
            "capacity" : 2,
          },
          {
            "roomType": "Suite",
            "price": 1000,
            "capacity" : 3,
          }
        ],
        "others": "Free Wi-Fi, Air Conditioning, Breakfast"
      }
    },
    {
      "id": 2,
      "name": "Radisson Blu Resort Cox's Bazar",
      "location": "Cox's Bazar, Bangladesh",
      "price": 800,
      "image": hotelPic2,
      "details": {
        "welcomeMessage": "Embrace endless indulgence at Radisson Blu Resort Cox's Bazar, where opulence meets the serenity of the golden sands. Indulge in unparalleled comfort and personalized service as you create unforgettable memories along the Bay of Bengal.",
        "services": ["Spa", "Gym", "Restaurant", "Swimming Pool"],
        "accommodation": [
          {
            "roomType": "Single Room",
            "price": 400,
            "capacity": 1,
          },
          {
            "roomType": "Double Room",
            "price": 600,
            "capacity" : 2,
          },
          {
            "roomType": "Suite",
            "price": 800,
            "capacity" : 3,
          }
        ],
        "others": "Free Wi-Fi, Air Conditioning, Breakfast"
      }
    },
    {
      "id": 3,
      "name": "Sayeman Beach Resort",
      "location": "Cox's Bazar, Bangladesh",
      "price": 600,
      "image": hotelPic3,
      "details": {
        "welcomeMessage": "Escape to Sayeman Beach Resort, where the turquoise waters of the Bay of Bengal and the warmth of Bangladeshi hospitality await. Discover a harmonious blend of comfort, convenience, and affordability nestled amidst the tranquil shores of Cox's Bazar.",
        "services": ["Gym", "Restaurant", "Swimming Pool"],
        "accommodation": [
          {
            "roomType": "Single Room",//sigle person stay
            "price": 300,
            "capacity": 1,
          },
          {
            "roomType": "Double Room", //2 person stay
            "price": 500,
            "capacity": 2,
          },
          {
            "roomType": "Suite", //3 person stay
            "price": 700,
            "capacity": 3,
          }
        ],
        "others": "Free Wi-Fi, Air Conditioning, Breakfast"
      }
    },
    {
      "id": 4,
      "name": "Long Beach Hotel",
      "location": "Cox's Bazar, Bangladesh",
      "price": 1200,
      "image": hotelPic4,
      "details": {
        "welcomeMessage": "Experience the epitome of luxury at Long Beach Hotel, where elegance meets the breathtaking panorama of the Bay of Bengal. Unwind in lavish accommodations, pamper yourself at our world-class spa, and savor culinary delights as you create unforgettable memories in Cox's Bazar.",
        "services": ["Spa", "Gym", "Multiple Restaurants", "Swimming Pool", "Kids Club"],
        "accommodation": [
          {
            "roomType": "Deluxe Room",
            "price": 800,
            "capacity" : 2,
          },
          {
            "roomType": "Executive Room",
            "price": 1000,
            "capacity" : 2,
          },
          {
            "roomType": "Sea View Suite",
            "price": 1200,
            "capacity" : 3,
          }
        ],
        "others": "Free Wi-Fi, Air Conditioning, Breakfast, Private Beach Access"
      }
    },
    {
      "id": 5,
      "name": "Golden Sands Resort",
      "location": "Cox's Bazar, Bangladesh",
      "price": 900,
      "image": hotelPic5,
      "details": {
        "welcomeMessage": "Discover paradise at Golden Sands Resort, where the sun-kissed beaches meet luxurious comfort. Immerse yourself in the beauty of Cox's Bazar while enjoying top-notch amenities and services.",
        "services": ["Spa", "Gym", "Restaurant", "Swimming Pool"],
        "accommodation": [
          {
            "roomType": "Standard Room",
            "price": 600,
            "capacity": 1,
          },
          {
            "roomType": "Deluxe Room",
            "price": 800,
            "capacity" : 2,
          },
          {
            "roomType": "Ocean View Suite",
            "price": 1000,
            "capacity" : 3,
          }
        ],
        "others": "Free Wi-Fi, Air Conditioning, Breakfast"
      }
    },
    {
      "id": 6,
      "name": "Pristine Paradise Resort",
      "location": "Cox's Bazar, Bangladesh",
      "price": 700,
      "image": hotelPic6,
      "details": {
        "welcomeMessage": "Escape to Pristine Paradise Resort, where serenity meets sophistication. Experience the perfect blend of nature and luxury along the shores of Cox's Bazar, making your stay truly memorable.",
        "services": ["Spa", "Gym", "Restaurant", "Swimming Pool"],
        "accommodation": [
          {
            "roomType": "Garden View Room",
            "price": 500,
            "capacity" : 2,
          },
          {
            "roomType": "Sea View Room",
            "price": 600,
            "capacity" : 2,
          },
          {
            "roomType": "Luxury Suite",
            "price": 700,
            "capacity" : 3,
          }
        ],
        "others": "Free Wi-Fi, Air Conditioning, Breakfast"
      }
    }
  ]
  
}
function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId='798735281199-i7ofg4uvb8dpuq1q640fc84sv11svjnc.apps.googleusercontent.com' >
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<AllHotels data={fakeData.hotelData} />} />
          <Route path="/hotels" element={<AllHotels data={fakeData.hotelData} />} />
          <Route path="/hotels/:hotelId" element={<SingleHotelPage data={fakeData.hotelData} />} />

          <Route path="/contact" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
