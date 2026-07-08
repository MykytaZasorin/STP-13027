import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import cardOneRetina from '../img/gallery/desktop/Card-one-desktop@2x.webp';
import cardTwoRetina from '../img/gallery/desktop/Card-two-desktop@2x.webp';
import cardThreeRetina from '../img/gallery/desktop/Card-three-desktop@2x.webp';
import cardFourRetina from '../img/gallery/desktop/Card-four-desktop@2x.webp';

const galleryImages = {
  'card-1': cardOneRetina,
  'card-2': cardTwoRetina,
  'card-3': cardThreeRetina,
  'card-4': cardFourRetina,
};

document.querySelectorAll("[data-fancybox='gallery']").forEach(link => {
  const id = link.getAttribute('data-id');
  const imageAsset = galleryImages[id];

  const finalPath =
    typeof imageAsset === 'object' ? imageAsset.default : imageAsset;

  if (finalPath) {
    link.setAttribute('href', finalPath);
  }
});

Fancybox.bind("[data-fancybox='gallery']", {
  loop: true,
});
