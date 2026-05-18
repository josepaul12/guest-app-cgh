import welcomeImage from '../assets/images/imagesmarari/welcome.png';
import galleryImage from '../assets/images/imagesmarari/gallery.png';
import offerImage from '../assets/images/imagesmarari/offer.jpg';
import experiencesImage from '../assets/images/imagesmarari/Experiences.jpg';
import foodDrinksImage from '../assets/images/imagesmarari/Food & drinks.jpg';
import aboutImage from '../assets/images/imagesmarari/about.jpg';
import guestServicesImage from '../assets/images/imagesmarari/guest services.jpg';
import facilitiesImage from '../assets/images/imagesmarari/facilities.jpg';
import ayurvedaImage from '../assets/images/imagesmarari/Ayurveda.jpg';
import roomsImage from '../assets/images/imagesmarari/rooms.jpg';
import housekeepingImage from '../assets/images/imagesmarari/housekeeping.jpg';
import storiesImage from '../assets/images/imagesmarari/stories.jpg';
import otherDestinationImage from '../assets/images/imagesmarari/Other Destination.jpg';
import wellnessHealthcareImage from '../assets/images/imagesmarari/Wellness & Healthcare.jpg';

const HOME_IMAGE_URLS = [
  welcomeImage,
  galleryImage,
  offerImage,
  experiencesImage,
  foodDrinksImage,
  aboutImage,
  guestServicesImage,
  facilitiesImage,
  ayurvedaImage,
  roomsImage,
  housekeepingImage,
  storiesImage,
  otherDestinationImage,
  wellnessHealthcareImage,
];

let preloaded = false;

/** Warm the browser cache while the user is on the landing page. */
export function preloadHomeImages(): void {
  if (preloaded || typeof window === 'undefined') return;
  preloaded = true;

  HOME_IMAGE_URLS.forEach((src) => {
    const img = new Image();
    img.decoding = 'async';
    img.src = src;
  });
}
