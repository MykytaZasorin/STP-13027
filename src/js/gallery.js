// gallery.js
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind("[data-fancybox='gallery']", {
  loop: true,
  Images: {
    protected: false,
  },
});
