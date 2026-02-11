import React from 'react';
import './activities.css';
import experiencesImage from '../assets/images/imagesmarari/Experiences.jpg';
import cyclingImage from '../assets/images/activities/cycling.jpg';
import fishFeedingImage from '../assets/images/activities/fish-feeding.jpg';
import naturalistWalkImage from '../assets/images/activities/naturalist-walk.jpg';
import butterflyGardenImage from '../assets/images/activities/butterfly-garden.jpg';
import kiteFlyingImage from '../assets/images/activities/kite-flying.jpg';
import yogaImage from '../assets/images/activities/yoga.jpg';
import cookingDemoImage from '../assets/images/activities/cooking-demo.jpg';
import fishLandingImage from '../assets/images/activities/fish-landing.jpg';
import owlSpottingImage from '../assets/images/activities/owl-spotting.jpg';
import ecoWalkImage from '../assets/images/activities/eco-walk.jpg';

type ActivitiesProps = {
  onBack?: () => void;
};

const Activities: React.FC<ActivitiesProps> = ({ onBack }) => {
  const activities = [
    {
      title: 'Cycling',
      description: `You can hop on to a bicycle and visit the fishing villages around Marari Beach Resort, which you will find both fascinating and endearing. It can be a revealing experience to spend some time on your holiday exploring these villages and the ways of life they represent.`,
      image: cyclingImage
    },
    {
      title: 'Fish Feeding',
      description: `The natural ponds at Marari Beach are filled with different fishes, who eagerly await their routine interaction with excited guests, by way of fish feeding.`,
      image: fishFeedingImage
    },
    {
      title: 'Naturalist led walk',
      description: `Marari is a nature lover's paradise and a morning stroll with one of our naturalists in tow is a fine way to introduce yourself to the Malabar coasts unique ecosystem and explore its myriad charms.`,
      image: naturalistWalkImage
    },
    {
      title: 'Butterfly Garden Visit',
      description: `A space with natural moisture, sunlight and wild flowers, our butterfly garden is amok with the fluttering of colourful, gossamer wings. Scientifically designed with ponds, fountains and a collection of larvae host and nectarine plants, it hosts over 90 species of butterflies such as the Blue Tiger, Common Indian Crow, Crimson Rose, and so much more.`,
      image: butterflyGardenImage
    },
    {
      title: 'Kite Flying',
      description: `Enjoy some quality time flying a kite, it can be a very enjoyable activity for children and adults alike. No better way to get your daily dose of vitamin D.`,
      image: kiteFlyingImage
    },
    {
      title: 'Yoga',
      description: `Meet the yoga master at the Yoga Centre in Marari Beach, and begin a journey to wellness, amidst a gentle breeze and chirping birds. The practice of yoga reveals to you the depth of the self and what lies at the core of physical wellbeing.`,
      image: yogaImage
    },
    {
      title: 'Cooking Demonstration',
      description: `You can explore the distinct flavours in our food by participating in our cooking demonstrations that are held everyday. At the end of your stay you can carry with you your favourite recipes to try out back home.`,
      image: cookingDemoImage
    },
    {
      title: 'Fish landing',
      description: `Take an early morning walk with our naturalist to the fish-landing harbour to be jolted out of your waking hours. Fresh catch being brought in from the sea, middlemen bargaining for their stock, to a sea of baskets being hurried away inland with the freshest of fish, a visit to the harbour gives every guest the pulse of this small fishing hamlet.`,
      image: fishLandingImage
    },
    {
      title: 'Owl Spotting',
      description: `Owls are elusive creatures, and this is what makes this activity one of its kind. With a little quiet and some patience you will be rewarded with some of the best sights.`,
      image: owlSpottingImage
    },
    {
      title: 'Eco Walk',
      description: `Take a walk accompanied by our naturalist and learn all about our core values and efforts in renewable energy, sustainable eco practices and responsible tourism.`,
      image: ecoWalkImage
    }
  ];

  return (
    <div className="activities-page">
      <div className="activities-background" />
      <div className="activities-overlay" />
      
      <div className="activities-topbar">
        <button className="activities-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="activities-title">Activities</h1>
        <button className="activities-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="activities-content">
        

        <div className="activities-list">
          {activities.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-image-container">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="activity-image"
                />
              </div>
              <div className="activity-content">
                <h2 className="activity-title">{activity.title}</h2>
                <p className="activity-description">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
