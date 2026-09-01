// import type { CamperDetails } from '@/types/camper';
// import css from './CamperGallery.module.css';

// interface CamperGalleryProps {
//   gallery: CamperDetails['gallery'];
//   camperName: string;
// }

// export default function CamperGallery({
//   gallery,
//   camperName,
// }: CamperGalleryProps) {
//   return (
//     <div className={css.gallery}>
//       <img
//         className={css.mainImage}
//         src={gallery[0].original}
//         alt={camperName}
//         width={638}
//         height={505}
//       />

//       <div className={css.thumbnails}>
//         {gallery.map(image => (
//           <img
//             key={image.id}
//             className={css.thumbnail}
//             src={image.original}
//             alt={camperName}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import type { CamperDetails } from '@/types/camper';
import css from './CamperGallery.module.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface CamperGalleryProps {
  gallery: CamperDetails['gallery'];
  camperName: string;
}

export default function CamperGallery({
  gallery,
  camperName,
}: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.gallery}>
      <Swiper
        className={css.mainSwiper}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {gallery.map(image => (
          <SwiperSlide key={image.id}>
            <img
              className={css.mainImage}
              src={image.original}
              alt={camperName}
              width={638}
              height={505}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className={css.thumbnails}
        onSwiper={setThumbsSwiper}
        spaceBetween={32}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        slideToClickedSlide
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {gallery.map(image => (
          <SwiperSlide key={image.id}>
            <img className={css.thumbnail} src={image.thumb} alt={camperName} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
