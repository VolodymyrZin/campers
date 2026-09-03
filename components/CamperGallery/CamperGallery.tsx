'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

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
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {gallery.map(image => (
          <SwiperSlide key={image.id}>
            <Image
              className={css.mainImage}
              src={image.original}
              alt={camperName}
              width={638}
              height={505}
              loading="eager"
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
            <Image
              className={css.thumbnail}
              src={image.thumb}
              alt={camperName}
              width={136}
              height={144}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
