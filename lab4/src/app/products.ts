export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: string;
    image: string;
    link: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
      price: 231500,
      description:
      'поддержка платформ: iOS; материал корпуса: алюминий; цвет корпуса: черный; технология экрана: OLED; объем встроенной памяти: 32 Гб; интерфейсы: Bluetooth, ,Wi-Fi, ,NFC; время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    },
    {
      id: 2,
      name: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм золотистый',
      price: 169880,
      description:
        'поддержка платформ: iOS;материал корпуса: алюминий;цвет корпуса: золотистый;технология экрана: OLED;объем встроенной памяти: 32 Гб;интерфейсы: Bluetooth, ,Wi-Fi, ,NFC',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    },
    {
      id: 3,
      name: 'Смарт-часы Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 мм черный-черный',
      price: 95699,
      description:
       'поддержка платформ: Android;материал корпуса: алюминий;цвет корпуса: черный;интерфейсы: Bluetooth, ,NFC',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h96/49939925139486/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item',
    },
    {
      id: 4,
      name: 'Смарт-часы Xiaomi Redmi Watch 2 Lite GL черный',
      price: 31700,
      description:
        'поддержка платформ: Android, ,iOS;материал корпуса: пластик;цвет корпуса: черный;технология экрана: TFT;интерфейсы: Bluetooth;время работы: в активном режиме: 120 ч, в режиме ожидания: 240 ч',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-2-lite-gl-chernyi-103246651/?c=750000000#!/item',
    },
    {
      id: 5,
      name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum золотистый',
      price: 232990,
      description:
       'поддержка платформ: iOS;материал корпуса: алюминий;цвет корпуса: starlight;технология экрана: OLED;объем встроенной памяти: 32 Гб;интерфейсы: Bluetooth, ,Wi-Fi, ,NFC;время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h23/63158668492830/apple-watch-series-8-45-mm-aluminum-zolotistyj-106585021-1.jpg,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-zolotistyi-106585021/?c=750000000#!/item',
    },
    {
      id: 6,
      name: 'Смарт-часы Apple Watch SE 2nd Gen 44 мм черный',
      price: 171240,
      description:
       'поддержка платформ: iOS;материал корпуса: алюминий;цвет корпуса: черный;технология экрана: OLED;объем встроенной памяти: 32 Гб;интерфейсы: Bluetooth, ,Wi-Fi, ,NFC',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hde/h0e/62711071146014/apple-watch-se-2nd-generation-40-mm-cernyj-106362757-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-44-mm-chernyi-106362757/?c=750000000#!/item',
    },
    {
      id: 7,
      name: 'Смарт-часы Apple Watch Series 8 41 мм Aluminum золотистый',
      price: 232100,
      description:
        'поддержка платформ: iOS;материал корпуса: алюминий;цвет корпуса: starlight;технология экрана: OLED;объем встроенной памяти: 32 Гб;интерфейсы: Bluetooth, ,Wi-Fi, ,NFC;время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
      rating: '4.5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/hfa/63158666461214/apple-watch-series-8-41-mm-aluminum-zolotistyj-106585035-1.jpg',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-zolotistyi-106585035/?c=750000000#!/item',
    },
    {
      id: 8,
      name: 'Смарт-часы Kieslect Smart Calling Whatch Kr черный',
      price: 34988,
      description:
       'поддержка платформ: Android, ,iOS;материал корпуса: металл;цвет корпуса: черный;интерфейсы: Bluetooth;время работы: 9 дней/ при активном режиме - до 2 дней',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h83/62047586975774/xiaomi-kieslect-smart-calling-whatch-kr-chernyi-105772460-1.jpg',
      link: 'https://kaspi.kz/shop/p/kieslect-smart-calling-whatch-kr-chernyi-105772460/?c=750000000#!/item',
    },
    {
      id: 9,
      name: 'Смарт-часы Aimoto Element розовый',
      price: 10442,
      description:
       'поддержка платформ: Android, ,iOS;материал корпуса: пластик;цвет корпуса: розовый;технология экрана: IPS;объем оперативной памяти: 32 Мб;интерфейсы: Bluetooth, ,Wi-Fi;время работы: до 4 дней',
      rating: '4.4 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h5e/33034415833118/aimoto-element-pink-100828444-1-Container.jpg',
      link: 'https://kaspi.kz/shop/p/aimoto-element-rozovyi-100828444/?c=750000000#!/item',
    },
    {
      id: 10,
      name: 'Смарт-часы Huawei WATCH Fit 2 Active черный',
      price: 61191,
      description:
       'поддержка платформ: Android, ,iOS;материал корпуса: пластик;цвет корпуса: черный;технология экрана: AMOLED;интерфейсы: Bluetooth;время работы: в активном режиме: 168 ч , в режиме ожидания: 240 ч',
      rating: '5 / 5',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9a/hc4/62048109756446/huawei-watch-fit-2-cernyj-105632660-1.jpg',
      link: 'https://kaspi.kz/shop/p/huawei-watch-fit-2-active-chernyi-105632660/?c=750000000#!/item',
    },
  ];
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
