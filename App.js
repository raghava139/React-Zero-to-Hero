import React, { createElement } from "react";
import ReactDOM from 'react-dom/client';
// React CreateElement => Object => Html ELement(render)
// Jsx => React createElement => object => html Element(render)
//the Babel Transpiler Converts the code Jsx to React.createElement 
// the babel is coming from Parcel

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaoyuXb1a2NG2YCtaTBYfBSyUIVBbeRJHBh2bk1OWMStJfClSCIOHbQTvdmvm9e1zJpc&usqp=CAU" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const resOBJ = {
  "info": {
    "id": "509004",
    "name": "Chinese Wok",
    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    "locality": "Serilingampally Mandal",
    "areaName": "Madhapur",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Chinese",
      "Asian",
      "Tibetan",
      "Desserts"
    ],
    "avgRating": 4,
    "parentId": "61955",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 64,
      "lastMileTravel": 1.3,
      "serviceability": "SERVICEABLE",
      "slaString": "60-65 mins",
      "lastMileTravelString": "1.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-18 23:00:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹149"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {

  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/chinese-wok-serilingampally-mandal-madhapur-hyderabad-509004",
    "type": "WEBLINK"
  }
}

const resList = [
  {
    "info": {
      "id": "509004",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Serilingampally Mandal",
      "areaName": "Madhapur",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4,
      "parentId": "61955",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 64,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-18 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-wok-serilingampally-mandal-madhapur-hyderabad-509004",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "504595",
      "name": "Wow! Momo",
      "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
      "locality": "Madhapur",
      "areaName": "Madhapur",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "1776",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 54,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Chinese.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.8",
          "ratingCount": "100+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/wow-momo-madhapur-hyderabad-504595",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "300353",
      "name": "Barbeque Nation",
      "cloudinaryImageId": "wmrvakxsd94zh5hgjrrp",
      "locality": "Jubilee Hills",
      "areaName": "Jubilee Hills",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 3.7,
      "parentId": "2438",
      "avgRatingString": "3.7",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 00:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "10K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/barbeque-nation-jubilee-hills-hyderabad-300353",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "695927",
      "name": "MOJO Pizza - 2X Toppings",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/cc816121-12a5-4fc7-a5ca-01406efd31e2_695927.JPG",
      "locality": "Madhapur",
      "areaName": "Jubilee Hills",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Fast Food",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "11329",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-madhapur-jubilee-hills-hyderabad-695927",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "750454",
      "name": "Daily Kitchen - Homely Meals",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/8a1d8aae-63c3-4033-a8b4-5d0eac490c8f_750454.JPG",
      "locality": "Venkatagiri",
      "areaName": "Madhapur",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Home Food",
        "Indian",
        "North Indian",
        "Thalis"
      ],
      "avgRating": 4.3,
      "parentId": "444382",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-venkatagiri-madhapur-hyderabad-750454",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "324362",
      "name": "Tossin Pizza",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/3e48f6ac-eac5-448d-bcfc-34e19d41a42a_324362.jpg",
      "locality": "Gachibowli",
      "areaName": "Gachibowli",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "1778",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
            "description": "gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "gourmet",
                  "imageId": "v1669879258/GFF_logo_new_xbycg6.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "500+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/tossin-pizza-gachibowli-hyderabad-324362",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "695920",
      "name": "NH1 Bowls - Highway To North",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/bbb653ed-0854-48d8-a2fc-324e0ebc4d7b_695920.JPG",
      "locality": "Madhapur",
      "areaName": "Jubilee Hills",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Punjabi",
        "Home Food"
      ],
      "avgRating": 4.6,
      "parentId": "22452",
      "avgRatingString": "4.6",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-madhapur-jubilee-hills-hyderabad-695920",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "695917",
      "name": "BOX8 - Desi Meals",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/7c25c3a0-32bb-47b5-807a-6eb67fdf791c_695917.JPG",
      "locality": "Madhapur",
      "areaName": "Jubilee Hills",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Thalis",
        "Home Food"
      ],
      "avgRating": 4.3,
      "parentId": "10655",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/box8-desi-meals-madhapur-jubilee-hills-hyderabad-695917",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "487816",
      "name": "Shoyu",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/36e77226-47ad-4312-a910-066773589323_487816.jpg",
      "locality": "Madhapur",
      "areaName": "Madhapur",
      "costForTwo": "₹1200 for two",
      "cuisines": [
        "Asian",
        "Japanese"
      ],
      "avgRating": 4.4,
      "parentId": "255090",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 51,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-18 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pan-Asian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
            "description": "gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pan-Asian.png"
                }
              },
              {
                "attributes": {
                  "description": "gourmet",
                  "imageId": "v1669879258/GFF_logo_new_xbycg6.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹175 OFF",
        "subHeader": "ABOVE ₹899",
        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
        "secondaryDiscountCallout": "+ EXTRA ₹35 OFF"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "100+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/shoyu-madhapur-hyderabad-487816",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "695921",
      "name": "ZAZA Mughal Biryani",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/e81dd56d-5b72-4267-bbc6-7bda0d637cb7_695921.JPG",
      "locality": "Madhapur",
      "areaName": "Jubilee Hills",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Awadhi"
      ],
      "avgRating": 4.2,
      "parentId": "22473",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/zaza-mughal-biryani-madhapur-jubilee-hills-hyderabad-695921",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "695925",
      "name": "GLOBO Ice Creams Of The World",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/1b2d8847-18c4-4032-8d35-27da9d59185a_695925.JPG",
      "locality": "Madhapur",
      "areaName": "Jubilee Hills",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts",
        "Bakery"
      ],
      "avgRating": 4.5,
      "parentId": "22303",
      "avgRatingString": "4.5",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 02:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/globo-ice-creams-of-the-world-madhapur-jubilee-hills-hyderabad-695925",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "740594",
      "name": "Hola Pasta - Fresh Gourmet Pasta",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/b31f5f40-c84a-4ddb-b91c-7de469c0d5d2_740594.JPG",
      "locality": "Madhapur",
      "areaName": "Jubilee Hills",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.8,
      "parentId": "418135",
      "avgRatingString": "3.8",
      "totalRatingsString": "10+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 02:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hola-pasta-fresh-gourmet-pasta-madhapur-jubilee-hills-hyderabad-740594",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "24611",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
      "locality": "Near NIFT",
      "areaName": "Hitec City",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "2456",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-18 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-near-nift-hitec-city-hyderabad-24611",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "11097",
      "name": "Karachi Bakery",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/17/465356fe-0808-45dd-99d1-90fc5e8646b0_11097.jpg",
      "locality": "Opp Raheja Mindspace",
      "areaName": "Mindspace ( Store )",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Pizzas",
        "Snacks",
        "Chinese",
        "Italian",
        "American",
        "Sweets",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "1262",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Snacks.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Snacks.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/karachi-bakery-opp-raheja-mindspace-mindspace-store-hyderabad-11097",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "509082",
      "name": "Big Bowl",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_509082.JPG",
      "locality": "Serilingampally Mandal",
      "areaName": "Madhapur",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "434792",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 68,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "65-70 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-18 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹169"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/big-bowl-serilingampally-mandal-madhapur-hyderabad-509082",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "833925",
      "name": "Olio - The Wood Fired Pizzeria",
      "cloudinaryImageId": "d2ae7deef8fe5a14d8091621b6cf4fd8",
      "locality": "ANDRA BASTI",
      "areaName": "BHAGYALAKSHMI TOWRS",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Fast Food",
        "Snacks",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "11633",
      "avgRatingString": "4.4",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 47,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
            "description": "gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "gourmet",
                  "imageId": "v1669879258/GFF_logo_new_xbycg6.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-andra-basti-bhagyalakshmi-towrs-hyderabad-833925",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "278208",
      "name": "Theobroma",
      "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
      "locality": "Madhapur",
      "areaName": "Madhapur",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-18 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
            "description": "gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "gourmet",
                  "imageId": "v1669879258/GFF_logo_new_xbycg6.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "100+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/theobroma-madhapur-hyderabad-278208",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "383041",
      "name": "Harley's Fine Baking",
      "cloudinaryImageId": "c3be1a7587dc2ece5b869adf63903a33",
      "locality": "Hitech City",
      "areaName": "Madhapur",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "11126",
      "avgRatingString": "4.6",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
            "description": "gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
            "shortDescription": "Perfect cake delivery",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "gourmet",
                  "imageId": "v1669879258/GFF_logo_new_xbycg6.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                  "shortDescription": "Perfect cake delivery"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.6",
          "ratingCount": "100+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/harleys-fine-baking-hitech-city-madhapur-hyderabad-383041",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "654897",
      "name": "Huber & Holly",
      "cloudinaryImageId": "d27a257800d31a3b25d8e620185dea8c",
      "locality": "Krithika Layout",
      "areaName": "Madhapur",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "6433",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-19 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
            "description": "gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "gourmet",
                  "imageId": "v1669879258/GFF_logo_new_xbycg6.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.4",
          "ratingCount": "100+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/huber-and-holly-krithika-layout-madhapur-hyderabad-654897",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "1205",
      "name": "Blue Fox",
      "cloudinaryImageId": "bnkzmjgbh8z0stnkqwoy",
      "locality": "Madhapur",
      "areaName": "Hitech City",
      "costForTwo": "₹1000 for two",
      "cuisines": [
        "Chinese",
        "Andhra"
      ],
      "avgRating": 4.1,
      "parentId": "48033",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-18 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.8",
          "ratingCount": "1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/blue-fox-madhapur-hitech-city-hyderabad-1205",
      "type": "WEBLINK"
    }
  }
]
const RestaruantCard = (props) => {
  console.log(`props- ${props}`)
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  const { deliveryTime } = sla;
  return (
    <div className="res-card" style={{
      backgroundColor: '#f0f0f0'
    }}>
      <img className='res-logo' alt='res-logo' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
      <h3>{name} </h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        search
      </div>
      <div className="res-container">
        {
          resList.map((restc) => (
          <RestaruantCard  key={restc.info.id} resData={restc} />
        ))
        }
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);