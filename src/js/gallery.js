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

const playlist = Object.keys(galleryImages).map(id => ({
  src:
    typeof galleryImages[id] === 'object'
      ? galleryImages[id].default
      : galleryImages[id],
  type: 'image',
  caption:
    document.querySelector(`[data-id="${id}"]`)?.getAttribute('data-caption') ||
    '',
}));

document
  .querySelectorAll("a[data-fancybox='gallery'][data-id]")
  .forEach((link, index) => {
    const id = link.getAttribute('data-id');
    const imageAsset = galleryImages[id];
    const finalPath =
      typeof imageAsset === 'object' ? imageAsset.default : imageAsset;

    if (finalPath) {
      link.setAttribute('href', finalPath);
    }

    link.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();

      Fancybox.show(playlist, {
        startIndex: index,
        loop: true,
        Hash: false,
      });
    });
  });
