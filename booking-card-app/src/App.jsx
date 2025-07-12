import React, { useState, useEffect } from 'react';
import {
  Star, MapPin, Clock, Users, Heart, Calendar, Gift, Check, Percent, 
  Sun, Moon, ChevronDown, ChevronLeft, ChevronRight, Images, Plus, Minus
} from 'lucide-react';

const BookingCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponMessage, setCouponMessage] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('mumbai');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [nights, setNights] = useState(1);
  const [days, setDays] = useState(2);
  const [backgroundTransition, setBackgroundTransition] = useState(false);


  const hotelData = {
    mumbai: {
      serviceName: "The Taj Mahal Palace",
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2340&q=80"
      ],
      provider: "Taj Hotels",
      basePricePerNight: 25000,
      originalPricePerNight: 35000,
      rating: 4.8,
      reviews: 2847,
      capacity: "Up to 2 guests",
      location: "Mumbai, Maharashtra",
      discount: 29,
      tags: ["Luxury", "Heritage", "Sea View"],
      description: "Iconic luxury hotel overlooking the Gateway of India",
      backgroundImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2340&q=80",
      backgroundGradient: "from-blue-600/20 via-cyan-500/10 to-teal-400/20",
      videoUrl: "https://player.vimeo.com/external/370467553.sd.mp4?s=e90dcaba73c19994eb67d576c1d999c14ed3c6c4&profile_id=165"
    },
    delhi: {
      serviceName: "The Imperial New Delhi",
      images: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2340&q=80"
      ],
      provider: "Imperial Hotels",
      basePricePerNight: 20000,
      originalPricePerNight: 28000,
      rating: 4.7,
      reviews: 1923,
      capacity: "Up to 2 guests",
      location: "New Delhi, Delhi",
      discount: 29,
      tags: ["Heritage", "Central", "Premium"],
      description: "Colonial grandeur in the heart of New Delhi",
      backgroundImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2340&q=80",
      backgroundGradient: "from-amber-600/20 via-orange-500/10 to-red-400/20",
      videoUrl: "https://player.vimeo.com/external/370467553.sd.mp4?s=e90dcaba73c19994eb67d576c1d999c14ed3c6c4&profile_id=165"
    },
    goa: {
      serviceName: "Taj Exotica Resort & Spa",
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2340&q=80"
      ],
      provider: "Taj Hotels",
      basePricePerNight: 18000,
      originalPricePerNight: 25000,
      rating: 4.9,
      reviews: 3156,
      capacity: "Up to 2 guests",
      location: "Goa, India",
      discount: 28,
      tags: ["Beach Resort", "Spa", "Tropical"],
      description: "Beachfront luxury resort in South Goa",
      backgroundImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=2340&q=80",
      backgroundGradient: "from-emerald-600/20 via-teal-500/10 to-cyan-400/20",
      videoUrl: "https://player.vimeo.com/external/370467553.sd.mp4?s=e90dcaba73c19994eb67d576c1d999c14ed3c6c4&profile_id=165"
    },
    rajasthan: {
      serviceName: "Umaid Bhawan Palace",
      images: [
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2340&q=80"
      ],
      provider: "Taj Hotels",
      basePricePerNight: 45000,
      originalPricePerNight: 65000,
      rating: 4.9,
      reviews: 1456,
      capacity: "Up to 2 guests",
      location: "Jodhpur, Rajasthan",
      discount: 31,
      tags: ["Palace", "Royal", "Heritage"],
      description: "World's largest private residence turned luxury hotel",
      backgroundImage: "https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=2340&q=80",
      backgroundGradient: "from-purple-600/20 via-pink-500/10 to-rose-400/20",
      videoUrl: "https://player.vimeo.com/external/370467553.sd.mp4?s=e90dcaba73c19994eb67d576c1d999c14ed3c6c4&profile_id=165"
    },
    kerala: {
      serviceName: "Kumarakom Lake Resort",
      images: [
        "https://images.unsplash.com/photo-1520637836862-4d197d17c955?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2340&q=80"
      ],
      provider: "CGH Earth",
      basePricePerNight: 15000,
      originalPricePerNight: 22000,
      rating: 4.6,
      reviews: 2134,
      capacity: "Up to 2 guests",
      location: "Kumarakom, Kerala",
      discount: 32,
      tags: ["Backwater", "Ayurveda", "Nature"],
      description: "Luxury backwater resort with traditional Kerala architecture",
      backgroundImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2340&q=80",
      backgroundGradient: "from-green-600/20 via-emerald-500/10 to-lime-400/20",
      videoUrl: "https://player.vimeo.com/external/370467553.sd.mp4?s=e90dcaba73c19994eb67d576c1d999c14ed3c6c4&profile_id=165"
    }
  };

  const currentHotel = hotelData[selectedLocation];
  const basePrice = currentHotel.basePricePerNight * nights;
  const originalPrice = currentHotel.originalPricePerNight * nights;
  const [currentPrice, setCurrentPrice] = useState(basePrice);
  const [additionalDiscount, setAdditionalDiscount] = useState(0);

  useEffect(() => {
    setCurrentPrice(basePrice - additionalDiscount);
  }, [basePrice, additionalDiscount]);

  const validCoupons = {
    'SAVE20': { discount: 20, description: '20% off' },
    'WELCOME10': { discount: 10, description: '10% off' },
    'FIRST1000': { discount: 1000, description: '₹1000 off' },
    'LUXURY15': { discount: 15, description: '15% off' },
    'INDIA25': { discount: 25, description: '25% off' }
  };

  const handleLocationChange = (location) => {
    setBackgroundTransition(true);
    setSelectedLocation(location);
    setCurrentImageIndex(0);
    setAdditionalDiscount(0);
    setCouponApplied(false);
    setCouponCode('');
    setCouponMessage('');
    setIsDropdownOpen(false);
    
    // Reset background transition after animation
    setTimeout(() => setBackgroundTransition(false), 500);
  };

  const handleNightsChange = (increment) => {
    const newNights = Math.max(1, nights + increment);
    setNights(newNights);
    setDays(newNights + 1);
    
    // Reset coupon when changing nights
    if (couponApplied) {
      setCouponApplied(false);
      setCouponCode('');
      setCouponMessage('');
      setAdditionalDiscount(0);
    }
  };

  const handleCouponApply = () => {
    const coupon = validCoupons[couponCode.toUpperCase()];
    if (coupon) {
      if (couponApplied) {
        setCouponMessage('Coupon already applied!');
        return;
      }
      let discount = coupon.discount;
      let savedAmount;
      
      if (couponCode.toUpperCase() === 'FIRST1000') {
        savedAmount = Math.min(discount, basePrice);
        setAdditionalDiscount(savedAmount);
      } else {
        savedAmount = basePrice * (discount / 100);
        setAdditionalDiscount(savedAmount);
      }
      
      setCouponApplied(true);
      setCouponMessage(`✅ Coupon applied! You saved ₹${savedAmount.toFixed(0)}`);
    } else {
      setCouponMessage('❌ Invalid coupon code');
    }
  };

  const createSparkle = () => {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkle 2s ease-out forwards';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
    }, 2000);
  };

  const handleBookNow = () => {
    setIsBooked(true);
    setShowConfetti(true);
    
    // Create sparkles effect
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createSparkle(), i * 100);
    }
    
    setTimeout(() => setShowConfetti(false), 3000);
    setTimeout(() => setIsBooked(false), 4000);
  };

  const totalSavings = (originalPrice - currentPrice).toFixed(0);

  const themeClasses = {
    card: isDarkMode ? 'bg-gray-800/90 border-gray-700/50' : 'bg-white/90 border-white/20',
    text: {
      primary: isDarkMode ? 'text-white' : 'text-gray-900',
      secondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
      tertiary: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    },
    surface: isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50/50',
    surfaceHover: isDarkMode ? 'hover:bg-gray-600/50' : 'hover:bg-gray-100/50',
    input: isDarkMode ? 'bg-gray-700/50 border-gray-600/50 text-white' : 'bg-white/50 border-gray-300/50 text-gray-900',
    couponBg: isDarkMode ? 'bg-yellow-900/20 border-yellow-700/50' : 'bg-yellow-50/50 border-yellow-200/50',
    priceBg: isDarkMode ? 'bg-gray-700/30' : 'bg-gray-50/30',
    dropdown: isDarkMode ? 'bg-gray-800/95 border-gray-600/50' : 'bg-white/95 border-gray-300/50',
    dropdownItem: isDarkMode ? 'hover:bg-gray-700/70' : 'hover:bg-gray-100/70',
    modal: isDarkMode ? 'bg-gray-800' : 'bg-white',
  };

  useEffect(() => {
    if (showConfetti) {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes sparkle {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slideIn {
          0% { transform: translateY(-10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .dropdown-enter {
          animation: slideIn 0.3s ease-out forwards;
        }
        .card-enter {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `;
      document.head.appendChild(style);
      return () => document.head.removeChild(style);
    }
  }, [showConfetti]);

  // Create animated background style
  const backgroundStyle = {
    backgroundImage: `linear-gradient(135deg, ${currentHotel.backgroundGradient}), url(${currentHotel.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-1000 ease-in-out p-4 flex items-center justify-center relative overflow-hidden ${backgroundTransition ? 'scale-105' : 'scale-100'}`}
      style={backgroundStyle}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-r ${currentHotel.backgroundGradient} opacity-10 floating`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + i}s`
            }}
          />
        ))}
      </div>

      {/* Background Video Overlay (subtle) */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-black/20 to-transparent" />
      </div>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 left-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 transform backdrop-blur-sm ${
          isDarkMode ? 'bg-yellow-500/80 text-gray-900 hover:shadow-yellow-500/25' : 'bg-gray-800/80 text-white hover:shadow-gray-800/25'
        }`}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <div className="max-w-md w-full relative z-10 card-enter">
        <div className={`${themeClasses.card} rounded-2xl shadow-2xl overflow-hidden border backdrop-blur-lg transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]`}>
          <div className="relative z-10">
            {/* Location Dropdown - Enhanced */}
            <div className="p-4 pb-2">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full flex items-center justify-between p-4 border rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm ${themeClasses.dropdown} ${
                    isDropdownOpen ? 'shadow-lg scale-[1.02]' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-600/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-left">
                      <div className={`font-semibold ${themeClasses.text.primary}`}>
                        {currentHotel.location}
                      </div>
                      <div className={`text-sm ${themeClasses.text.secondary}`}>
                        {currentHotel.serviceName}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-all duration-300 ${isDropdownOpen ? 'rotate-180 text-orange-600' : themeClasses.text.secondary}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className={`absolute top-full left-0 right-0 mt-2 border rounded-xl shadow-xl z-50 overflow-hidden backdrop-blur-lg dropdown-enter ${themeClasses.dropdown}`}>
                    {Object.entries(hotelData).map(([key, hotel], index) => (
                      <button
                        key={key}
                        onClick={() => handleLocationChange(key)}
                        className={`w-full p-4 text-left transition-all duration-300 hover:scale-[1.02] transform ${themeClasses.dropdownItem} ${
                          selectedLocation === key ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border-l-4 border-orange-500' : ''
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={hotel.images[0]} 
                            alt={hotel.serviceName}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <div className={`font-semibold ${selectedLocation === key ? 'text-orange-600' : themeClasses.text.primary}`}>
                              {hotel.serviceName}
                            </div>
                            <div className={`text-sm ${themeClasses.text.secondary}`}>
                              {hotel.location}
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-yellow-600 font-medium">{hotel.rating}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Image Section - Enhanced */}
            <div className="relative">
              <div className="absolute top-3 left-3 z-10 flex gap-2">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                  -{currentHotel.discount}% OFF
                </div>
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg floating">
                  BEST DEAL
                </div>
              </div>
              
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`absolute top-3 right-3 z-10 p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 backdrop-blur-sm ${
                  isDarkMode ? 'bg-gray-700/70 hover:bg-gray-600/70' : 'bg-white/70 hover:bg-gray-50/70'
                }`}
              >
                <Heart className={`w-5 h-5 transition-all duration-300 ${
                  isLiked ? 'fill-red-500 text-red-500 animate-pulse' : `${themeClasses.text.tertiary} hover:text-red-400`
                }`} />
              </button>

              {/* See More Images Button */}
              <button
                onClick={() => setShowImageModal(true)}
                className={`absolute bottom-3 right-3 z-10 flex items-center gap-1 px-3 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                  isDarkMode ? 'bg-gray-700/70 hover:bg-gray-600/70' : 'bg-white/70 hover:bg-gray-50/70'
                }`}
              >
                <Images className="w-4 h-4 text-orange-600" />
                <span className={`text-xs font-medium ${themeClasses.text.primary}`}>
                  +{currentHotel.images.length}
                </span>
              </button>
              
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={currentHotel.images[currentImageIndex]}
                  alt={currentHotel.serviceName}
                  className="w-full h-48 object-cover transition-all duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-sm font-medium">{currentHotel.rating}</span>
                  <span className="text-gray-300 text-sm">({currentHotel.reviews})</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-1`}>{currentHotel.serviceName}</h3>
              <p className={`text-sm ${themeClasses.text.secondary} mb-3`}>{currentHotel.description}</p>
              
              <div className="flex gap-2 mb-4">
                {currentHotel.tags.map((tag, index) => (
                  <span key={index} className={`px-3 py-1 ${themeClasses.surface} ${themeClasses.text.secondary} rounded-full text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Nights/Days Selection - Enhanced */}
              <div className={`mb-4 p-4 ${themeClasses.surface} rounded-xl backdrop-blur-sm`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-semibold ${themeClasses.text.primary}`}>Duration</p>
                    <p className={`text-xs ${themeClasses.text.secondary}`}>{nights} night{nights > 1 ? 's' : ''}, {days} day{days > 1 ? 's' : ''}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleNightsChange(-1)}
                      disabled={nights <= 1}
                      className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                        nights <= 1 
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                          : 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg'
                      }`}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className={`font-bold text-lg ${themeClasses.text.primary} min-w-[2rem] text-center`}>{nights}</span>
                    <button
                      onClick={() => handleNightsChange(1)}
                      className="p-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Coupon Section - Enhanced */}
              <div className={`mb-4 p-4 ${themeClasses.couponBg} rounded-xl border backdrop-blur-sm`}>
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="w-5 h-5 text-yellow-600" />
                  <span className={`text-sm font-semibold ${themeClasses.text.primary}`}>Have a coupon?</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className={`flex-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 backdrop-blur-sm ${themeClasses.input}`}
                    disabled={couponApplied}
                  />
                  <button
                    onClick={handleCouponApply}
                    disabled={!couponCode || couponApplied}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      couponApplied
                        ? 'bg-green-500 text-white cursor-not-allowed'
                        : 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg'
                    }`}
                  >
                    {couponApplied ? <Check className="w-4 h-4" /> : 'Apply'}
                  </button>
                </div>
                {couponMessage && (
                  <p className={`text-sm mt-2 font-medium ${couponMessage.includes('❌') ? 'text-red-500' : 'text-green-600'}`}>
                    {couponMessage}
                  </p>
                )}
                <div className="mt-2 text-xs text-gray-500">
                  Try: SAVE20, WELCOME10, FIRST1000, LUXURY15, INDIA25
                         <p>submission by arpit nigam</p>
                </div>
              </div>

              {/* Pricing - Enhanced */}
              <div className={`mb-4 p-4 ${themeClasses.priceBg} rounded-xl backdrop-blur-sm`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-bold ${themeClasses.text.primary}`}>
                      ₹{currentPrice.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-lg line-through ${themeClasses.text.tertiary}`}>
                      ₹{originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 bg-green-100/80 px-3 py-2 rounded-full">
                    <Percent className="w-4 h-4" />
                    <span className="text-sm font-semibold">SAVE ₹{totalSavings}</span>
                  </div>
                </div>
                <p className={`${themeClasses.text.secondary} text-sm`}>total for {nights} night{nights > 1 ? 's' : ''}</p>
                {couponApplied && (
                  <div className="mt-2 p-2 bg-green-100/80 rounded-lg text-sm text-green-700">
                    Coupon savings: ₹{additionalDiscount.toLocaleString('en-IN')}
             
                  </div>
                  
                )}
              </div>

              {/* Book Button - Enhanced */}
              <button
                onClick={handleBookNow}
                disabled={isBooked}
                className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  isBooked
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-orange-500/25'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  {isBooked ? (
                    <>
                      <Check className="w-6 h-6 animate-bounce" />
                      <span className="text-lg">BOOKED SUCCESSFULLY!</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-6 h-6" />
                      <span className="text-lg">BOOK NOW</span>
                      
                    </>
                    
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal - Enhanced */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className={`${themeClasses.modal} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl`}>
            <div className="relative">
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute top-4 right-4 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
              >
                ✕
              </button>
              <img
                src={currentHotel.images[currentImageIndex]}
                alt={currentHotel.serviceName}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h4 className="font-bold text-xl">{currentHotel.serviceName}</h4>
                    <p className="text-sm opacity-90">{currentImageIndex + 1} of {currentHotel.images.length}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + currentHotel.images.length) % currentHotel.images.length)}
                      className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % currentHotel.images.length)}
                      className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-4 gap-3">
                {currentHotel.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${
                      index === currentImageIndex ? 'ring-4 ring-orange-500 shadow-lg' : 'hover:shadow-md'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${currentHotel.serviceName} ${index + 1}`}
                      className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;