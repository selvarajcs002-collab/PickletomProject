import { Icon } from '@iconify/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#4A0E0E] font-sans text-[#1D1A16] selection:bg-red-100">
      {/* Background Decorative Gradient */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_71%_71%_at_50%_50%,_#ffffff_0%,_transparent_100%)] opacity-10 z-0" />

      {/* Header - Sticky */}
      <header className="sticky top-0 z-50 bg-[#FBFAF9] border-b border-[#E4E0DD] shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Status Bar Area (Mobile Only) */}
          <div className="h-10 flex justify-between items-center px-4 md:hidden">
            <svg data-svg-id="SVG_1" viewBox="0 0 70 40" className="w-[70px] h-10">
            <g transform="matrix(1.03 0 0 1 -1 0)">
              <g style={{  }}>
                <g transform="matrix(1 0 0 1 35 20)">
                  <g style={{  }}>
                    <g transform="matrix(0.97 0 0 1 -2.01 2.14)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-33.93, -22.14)" d="M 33.7866 16.7856 C 31.5754 16.7856 30 18.2974 30 20.3673 L 30 20.3815 C 30 22.3171 31.3705 23.7442 33.3274 23.7442 C 34.7261 23.7442 35.6163 23.0307 35.9907 22.2253 L 36.132 22.2253 C 36.132 22.303 36.1249 22.3807 36.1249 22.4584 C 36.0472 24.4082 35.362 25.9907 33.7442 25.9907 C 32.847 25.9907 32.2183 25.5244 31.9498 24.8109 L 31.9286 24.7403 L 30.1342 24.7403 L 30.1484 24.818 C 30.4733 26.3792 31.8721 27.4884 33.7442 27.4884 C 36.3086 27.4884 37.8557 25.4538 37.8557 22.0204 L 37.8557 22.0063 C 37.8557 18.3328 35.9624 16.7856 33.7866 16.7856 Z M 33.7795 22.3454 C 32.6209 22.3454 31.7803 21.4977 31.7803 20.3179 L 31.7803 20.3038 C 31.7803 19.1664 32.6774 18.2692 33.8007 18.2692 C 34.931 18.2692 35.8141 19.1805 35.8141 20.3461 L 35.8141 20.3603 C 35.8141 21.5118 34.931 22.3454 33.7795 22.3454 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.97 0 0 1 4.58 2.13)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-40.72, -22.13)" d="M 40.7158 20.6287 C 41.3657 20.6287 41.839 20.1342 41.839 19.5125 C 41.839 18.8838 41.3657 18.3963 40.7158 18.3963 C 40.0729 18.3963 39.5925 18.8838 39.5925 19.5125 C 39.5925 20.1342 40.0729 20.6287 40.7158 20.6287 Z M 40.7158 25.8706 C 41.3657 25.8706 41.839 25.3831 41.839 24.7544 C 41.839 24.1257 41.3657 23.6382 40.7158 23.6382 C 40.0729 23.6382 39.5925 24.1257 39.5925 24.7544 C 39.5925 25.3831 40.0729 25.8706 40.7158 25.8706 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.97 0 0 1 11.26 2.14)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-47.58, -22.14)" d="M 48.521 27.234 L 50.2659 27.234 L 50.2659 25.2772 L 51.6364 25.2772 L 51.6364 23.7724 L 50.2659 23.7724 L 50.2659 17.04 L 47.6873 17.04 C 46.3027 19.1452 44.8545 21.4906 43.5334 23.7866 L 43.5334 25.2772 L 48.521 25.2772 L 48.521 27.234 Z M 45.2289 23.8148 L 45.2289 23.7088 C 46.2179 21.978 47.3977 20.0918 48.4432 18.4953 L 48.5492 18.4953 L 48.5492 23.8148 L 45.2289 23.8148 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.97 0 0 1 18.57 2.14)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-55.1, -22.14)" d="M 55.5137 27.234 L 57.3364 27.234 L 57.3364 17.04 L 55.5208 17.04 L 52.8575 18.9121 L 52.8575 20.6287 L 55.3936 18.8343 L 55.5137 18.8343 L 55.5137 27.234 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
            <svg data-svg-id="SVG_2" viewBox="0 0 96 40" className="w-[96px] h-10">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(1 0 0 1 48 20)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 17.19 1.7)">
                      <path style={{ stroke: "rgb(23,26,31)", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "none", fillRule: "nonzero", opacity: "0.35" }} transform=" translate(-65.19, -21.7)" d="M 55.0532 20.1702 C 55.0532 18.2372 56.6202 16.6702 58.5532 16.6702 L 71.8298 16.6702 C 73.7628 16.6702 75.3298 18.2372 75.3298 20.1702 L 75.3298 23.234 C 75.3298 25.167 73.7628 26.734 71.8298 26.734 L 58.5532 26.734 C 56.6202 26.734 55.0532 25.167 55.0532 23.234 L 55.0532 20.1702 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 29.28 2.22)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "nonzero", opacity: "0.4" }} transform=" translate(-77.28, -22.22)" d="M 76.6808 20.4255 L 76.6808 24.0173 C 77.4035 23.7131 77.8734 23.0054 77.8734 22.2214 C 77.8734 21.4374 77.4035 20.7297 76.6808 20.4255 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 17.19 1.7)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-65.19, -21.7)" d="M 56.2553 19.8723 C 56.2553 18.7677 57.1508 17.8723 58.2553 17.8723 L 72.1277 17.8723 C 73.2322 17.8723 74.1277 18.7677 74.1277 19.8723 L 74.1277 23.5319 C 74.1277 24.6364 73.2322 25.5319 72.1277 25.5319 L 58.2553 25.5319 C 57.1508 25.5319 56.2553 24.6364 56.2553 23.5319 L 56.2553 19.8723 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -6.64 2.06)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "evenodd", opacity: "1" }} transform=" translate(-41.36, -22.06)" d="M 41.3621 19.2234 C 43.4613 19.2235 45.4802 20.0468 47.0016 21.5232 C 47.1162 21.6372 47.2993 21.6357 47.4121 21.52 L 48.5072 20.3918 C 48.5644 20.3331 48.5962 20.2536 48.5957 20.1708 C 48.5953 20.0881 48.5625 20.0089 48.5047 19.9509 C 44.5116 16.0447 38.212 16.0447 34.2189 19.9509 C 34.161 20.0089 34.1282 20.088 34.1277 20.1707 C 34.1271 20.2535 34.1589 20.3331 34.216 20.3918 L 35.3115 21.52 C 35.4242 21.6359 35.6075 21.6374 35.722 21.5232 C 37.2435 20.0467 39.2627 19.2234 41.3621 19.2234 Z M 41.3923 22.6292 C 42.5456 22.6291 43.6579 23.0667 44.5128 23.857 C 44.6284 23.9691 44.8106 23.9667 44.9233 23.8515 L 46.0172 22.7233 C 46.0748 22.6642 46.1067 22.5839 46.1059 22.5005 C 46.1051 22.417 46.0715 22.3374 46.0127 22.2795 C 43.4093 19.8075 39.3775 19.8075 36.774 22.2795 C 36.7152 22.3374 36.6816 22.4171 36.6809 22.5005 C 36.6801 22.584 36.7122 22.6642 36.7699 22.7233 L 37.8634 23.8515 C 37.9762 23.9667 38.1583 23.9691 38.274 23.857 C 39.1283 23.0673 40.2397 22.6297 41.3923 22.6292 Z M 43.6166 24.8312 C 43.6183 24.9149 43.5861 24.9955 43.5276 25.0541 L 41.6354 27.0032 C 41.58 27.0605 41.5044 27.0928 41.4255 27.0928 C 41.3466 27.0928 41.2709 27.0605 41.2155 27.0032 L 39.323 25.0541 C 39.2645 24.9955 39.2324 24.9148 39.2341 24.8311 C 39.2358 24.7475 39.2713 24.6683 39.3322 24.6122 C 40.5406 23.5689 42.3104 23.5689 43.5188 24.6122 C 43.5796 24.6683 43.615 24.7475 43.6166 24.8312 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -26.21 2.98)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-21.79, -22.98)" d="M 20.5106 19.5744 C 20.5106 19.1044 20.8917 18.7234 21.3617 18.7234 L 22.2128 18.7234 C 22.6828 18.7234 23.0638 19.1044 23.0638 19.5744 L 23.0638 26.3829 C 23.0638 26.853 22.6828 27.234 22.2128 27.234 L 21.3617 27.234 C 20.8917 27.234 20.5106 26.853 20.5106 26.3829 L 20.5106 19.5744 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -21.96 2.13)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-26.04, -22.13)" d="M 24.766 17.8723 C 24.766 17.4023 25.147 17.0212 25.617 17.0212 L 26.4681 17.0212 C 26.9381 17.0212 27.3191 17.4023 27.3191 17.8723 L 27.3191 26.3829 C 27.3191 26.853 26.9381 27.234 26.4681 27.234 L 25.617 27.234 C 25.147 27.234 24.766 26.853 24.766 26.3829 L 24.766 17.8723 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -30.47 4.47)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-17.53, -24.47)" d="M 16.2553 22.5531 C 16.2553 22.0831 16.6364 21.7021 17.1064 21.7021 L 17.9574 21.7021 C 18.4275 21.7021 18.8085 22.0831 18.8085 22.5531 L 18.8085 26.3829 C 18.8085 26.853 18.4275 27.234 17.9574 27.234 L 17.1064 27.234 C 16.6364 27.234 16.2553 26.853 16.2553 26.3829 L 16.2553 22.5531 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -34.72 5.53)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(23,26,31)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-13.28, -25.53)" d="M 12 24.6808 C 12 24.2108 12.381 23.8297 12.8511 23.8297 L 13.7021 23.8297 C 14.1722 23.8297 14.5532 24.2108 14.5532 24.6808 L 14.5532 26.3829 C 14.5532 26.853 14.1722 27.234 13.7021 27.234 L 12.8511 27.234 C 12.381 27.234 12 26.853 12 26.3829 L 12 24.6808 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          </div>

          {/* Navigation Bar */}
          <div className="h-16 flex items-center justify-between px-4 relative">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg data-svg-id="SVG_4" className="w-6 h-6 text-[#1D1A16]" viewBox="0 0 24 24">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(1 0 0 1 12 12)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(29,26,22)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 14.293 5.29295 C 14.6835 4.90243 15.3165 4.90243 15.707 5.29295 C 16.0976 5.68348 16.0976 6.31649 15.707 6.70702 L 10.4141 12 L 15.707 17.293 L 15.7754 17.3691 C 16.0957 17.7619 16.0731 18.3409 15.707 18.707 C 15.3409 19.0731 14.7619 19.0957 14.3691 18.7754 L 14.293 18.707 L 8.29297 12.707 C 7.90245 12.3165 7.90245 11.6835 8.29297 11.293 L 14.293 5.29295 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
            </button>

            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-[#1D1A16] rounded-[5px] flex items-center justify-center mb-1">
                <svg data-svg-id="SVG_3" className="w-4 h-4 text-[#FBFAF9]" viewBox="0 0 16 16">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(251,250,249)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
              </div>
              <span className="text-[10px] font-bold tracking-[0.5px] uppercase text-[#9C948B]">Step 4 of 5</span>
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg data-svg-id="SVG_5" className="w-5 h-5 text-[#9C948B]" viewBox="0 0 20 20">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(0.83 0 0 0.83 10 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 10 12 C 10 10.8954 10.8954 10 12 10 C 13.1046 10 14 10.8954 14 12 C 14 13.1046 13.1046 14 12 14 C 10.8954 14 10 13.1046 10 12 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 15.83 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-19, -12)" d="M 17 12 C 17 10.8954 17.8954 10 19 10 C 20.1046 10 21 10.8954 21 12 C 21 13.1046 20.1046 14 19 14 C 17.8954 14 17 13.1046 17 12 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 4.17 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-5, -12)" d="M 3 12 C 3 10.8954 3.89543 10 5 10 C 6.10457 10 7 10.8954 7 12 C 7 13.1046 6.10457 14 5 14 C 3.89543 14 3 13.1046 3 12 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-[#F6F5F4]/30 w-full">
            <div className="h-full bg-[#E83030] w-[80%]" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 pb-40 lg:flex lg:gap-12">
        
        {/* Desktop Sidebar Navigation (Creative Expansion) */}
        <aside className="hidden lg:block w-64 shrink-0">
          <nav className="space-y-4 sticky top-32">
            {['Tournament Info', 'Registration', 'Categories', 'Logistics', 'Review'].map((step, i) => (
              <div key={step} className="flex items-center gap-4 group cursor-pointer">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${i === 3 ? 'bg-[#E83030] border-[#E83030] text-white' : 'border-white/20 text-white/40 group-hover:border-white/60'}`}>
                  {i + 1}
                </div>
                <span className={`font-medium transition-colors ${i === 3 ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>{step}</span>
              </div>
            ))}
          </nav>
        </aside>

        <div className="flex-1 space-y-10">
          {/* Prize Pool Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <svg data-svg-id="SVG_6" className="w-5 h-5 text-white/80" viewBox="0 0 20 20">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 3.33 5.42)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-4, -6.5)" d="M 1 6.5 C 1 5.57174 1.36901 4.68177 2.02539 4.02539 C 2.68177 3.36901 3.57174 3 4.5 3 L 6 3 C 6.55228 3 7 3.44772 7 4 C 7 4.55228 6.55228 5 6 5 L 4.5 5 C 4.10218 5 3.72076 5.15815 3.43945 5.43945 C 3.15815 5.72076 3 6.10218 3 6.5 C 3 6.89782 3.15815 7.27924 3.43945 7.56055 C 3.72076 7.84185 4.10218 8 4.5 8 L 6 8 C 6.55228 8 7 8.44772 7 9 C 7 9.55228 6.55228 10 6 10 L 4.5 10 C 3.57174 10 2.68177 9.63099 2.02539 8.97461 C 1.36901 8.31823 1 7.42826 1 6.5 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 16.67 5.42)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-20, -6.5)" d="M 21 6.5 C 21 6.10218 20.8419 5.72076 20.5605 5.43945 C 20.3145 5.19337 19.9917 5.04195 19.6484 5.00781 L 19.5 5 L 18 5 C 17.4477 5 17 4.55228 17 4 C 17 3.44772 17.4477 3 18 3 L 19.5 3 L 19.6738 3.00391 C 20.5388 3.04688 21.3593 3.4101 21.9746 4.02539 C 22.631 4.68177 23 5.57174 23 6.5 C 23 7.42826 22.631 8.31823 21.9746 8.97461 C 21.3182 9.63099 20.4283 10 19.5 10 L 18 10 C 17.4477 10 17 9.55228 17 9 C 17 8.44772 17.4477 8 18 8 L 19.5 8 C 19.8978 8 20.2792 7.84185 20.5605 7.56055 C 20.8419 7.27924 21 6.89782 21 6.5 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 18.33)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -22)" d="M 20 21 C 20.5523 21 21 21.4477 21 22 C 21 22.5523 20.5523 23 20 23 L 4 23 C 3.44772 23 3 22.5523 3 22 C 3 21.4477 3.44772 21 4 21 L 20 21 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 7.08 15.27)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-8.5, -18.33)" d="M 6 21.9998 C 6.00005 19.9681 6.98141 18.0479 8.61426 17.3006 C 8.76591 17.2306 8.88359 17.1422 8.95117 17.0653 C 9.01458 16.9931 9.00006 16.9733 9 16.9998 L 9 14.66 C 9 14.1077 9.44772 13.66 10 13.66 C 10.5523 13.66 11 14.1077 11 14.66 L 11 16.9998 C 11 18.0065 10.281 18.658 9.69043 18.994 L 9.44824 19.118 L 9.44629 19.119 C 8.7192 19.4517 8.00005 20.5117 8 21.9998 C 8 22.5521 7.55228 22.9998 7 22.9998 C 6.44772 22.9998 6 22.5521 6 21.9998 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 12.92 15.27)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -18.33)" d="M 16 21.9998 C 15.9999 20.5117 15.2808 19.4517 14.5537 19.119 L 14.5518 19.118 C 13.9385 18.8358 13 18.1498 13 16.9998 L 13 14.66 C 13 14.1077 13.4477 13.66 14 13.66 C 14.5523 13.66 15 14.1077 15 14.66 L 15 16.9998 C 14.9999 16.9733 14.9854 16.9931 15.0488 17.0653 C 15.1164 17.1422 15.2341 17.2306 15.3857 17.3006 L 15.5371 17.3739 C 17.0793 18.1677 18 20.0315 18 21.9998 C 18 22.5521 17.5523 22.9998 17 22.9998 C 16.4477 22.9998 16 22.5521 16 21.9998 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 7.08)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8.5)" d="M 17 3 L 7 3 L 7 9 L 7.00586 9.24805 C 7.06719 10.4838 7.58579 11.6561 8.46484 12.5352 C 9.40253 13.4728 10.6739 14 12 14 C 13.3261 14 14.5975 13.4728 15.5352 12.5352 C 16.4728 11.5975 17 10.3261 17 9 L 17 3 Z M 19 9 C 19 10.8565 18.263 12.6374 16.9502 13.9502 C 15.6374 15.2629 13.8565 16 12 16 C 10.1435 16 8.36256 15.2629 7.0498 13.9502 C 5.819 12.7194 5.09452 11.077 5.00879 9.34668 L 5 9 L 5 2 L 5.00488 1.89746 C 5.05621 1.39333 5.48232 1 6 1 L 18 1 L 18.1025 1.00488 C 18.6067 1.05621 19 1.48232 19 2 L 19 9 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
              <h2 className="text-lg font-bold text-white font-serif">Prize Pool</h2>
            </div>
            <div className="bg-white rounded-[14px] p-4 md:p-6 shadow-[0px_2px_4px_0px_#00000012] border border-[#E4E0DD]/50">
              <div className="space-y-4">
                {[
                  { rank: '1st', value: '500' },
                  { rank: '2nd', value: '250' },
                  { rank: '3rd', value: '100' },
                ].map((prize, idx) => (
                  <div key={prize.rank} className="flex items-center gap-4 pb-4 border-b border-[#E4E0DD]/40 last:border-0 last:pb-0">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#FBDADA] border border-[#E83030]/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#E83030]">{prize.rank}</span>
                    </div>
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9C948B] font-medium">$</span>
                      <input 
                        type="text" 
                        defaultValue={prize.value}
                        className="w-full bg-[#FBFAF9] border border-[#E4E0DD]/60 rounded-[10px] py-2.5 pl-8 pr-3 text-base outline-none focus:border-[#E83030]/40 transition-colors"
                      />
                    </div>
                  </div>
                ))}
                <button className="w-full h-11 flex items-center justify-center gap-2 bg-[#FBFAF9] border border-dashed border-[#E83030]/40 rounded-[10px] text-[#E83030] font-medium text-sm hover:bg-red-50 transition-colors">
                  <svg data-svg-id="SVG_7" className="w-4 h-4" viewBox="0 0 16 16">
              <g transform="matrix(1 0 0 1 0 0)">
                <g style={{  }}>
                  <g transform="matrix(0.67 0 0 0.67 8 8)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 12 C 21 7.02944 16.9706 3 12 3 C 7.02944 3 3 7.02944 3 12 C 3 16.9706 7.02944 21 12 21 C 16.9706 21 21 16.9706 21 12 Z M 23 12 C 23 18.0751 18.0751 23 12 23 C 5.92487 23 1 18.0751 1 12 C 1 5.92487 5.92487 1 12 1 C 18.0751 1 23 5.92487 23 12 Z" strokeLinecap="round" />
                  </g>
                  <g transform="matrix(0.67 0 0 0.67 8 8)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 16 11 C 16.5523 11 17 11.4477 17 12 C 17 12.5523 16.5523 13 16 13 L 8 13 C 7.44772 13 7 12.5523 7 12 C 7 11.4477 7.44772 11 8 11 L 16 11 Z" strokeLinecap="round" />
                  </g>
                  <g transform="matrix(0.67 0 0 0.67 8 8)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 11 16 L 11 8 C 11 7.44772 11.4477 7 12 7 C 12.5523 7 13 7.44772 13 8 L 13 16 C 13 16.5523 12.5523 17 12 17 C 11.4477 17 11 16.5523 11 16 Z" strokeLinecap="round" />
                  </g>
                </g>
              </g>
            </svg>
                  Add Prize Row
                </button>
              </div>
            </div>
          </section>

          {/* Sponsors Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <svg data-svg-id="SVG_8" className="w-5 h-5 text-white/80" viewBox="0 0 20 20">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 7.5 15)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9, -18)" d="M 15 21 L 15 19 C 15 18.2044 14.6837 17.4415 14.1211 16.8789 C 13.6289 16.3867 12.9835 16.0829 12.2969 16.0146 L 12 16 L 6 16 C 5.20435 16 4.44152 16.3163 3.87891 16.8789 C 3.3163 17.4415 3 18.2044 3 19 L 3 21 C 3 21.5523 2.55228 22 2 22 C 1.44772 22 1 21.5523 1 21 L 1 19 C 1 17.6739 1.52716 16.4025 2.46484 15.4648 C 3.40253 14.5272 4.67392 14 6 14 L 12 14 L 12.248 14.0059 C 13.4838 14.0672 14.6561 14.5858 15.5352 15.4648 C 16.4728 16.4025 17 17.6739 17 19 L 17 21 C 17 21.5523 16.5523 22 16 22 C 15.4477 22 15 21.5523 15 21 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 14.58 5.83)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-17.5, -7)" d="M 17.9961 7.00008 C 17.9961 6.33559 17.7757 5.6897 17.3691 5.16415 C 17.0132 4.70415 16.5321 4.35885 15.9863 4.16805 L 15.749 4.09579 L 15.6514 4.06551 C 15.1761 3.88941 14.9023 3.37825 15.0322 2.87704 C 15.1622 2.37596 15.6495 2.06289 16.1504 2.13973 L 16.251 2.16024 L 16.4502 2.2159 C 17.4406 2.51689 18.3146 3.11916 18.9502 3.94051 C 19.628 4.81649 19.9961 5.89248 19.9961 7.00008 C 19.9961 8.10769 19.628 9.18367 18.9502 10.0597 C 18.2723 10.9356 17.3232 11.562 16.251 11.8399 C 15.7164 11.9785 15.1709 11.6576 15.0322 11.1231 C 14.8936 10.5886 15.2145 10.043 15.749 9.90438 C 16.3923 9.7376 16.9624 9.36162 17.3691 8.83602 C 17.7758 8.31046 17.9961 7.66459 17.9961 7.00008 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 17.08 15.05)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-20.5, -18.06)" d="M 21 21.0001 L 21 19.0011 L 20.9893 18.7531 C 20.9411 18.1769 20.7275 17.6249 20.3711 17.1652 C 20.0147 16.7054 19.5334 16.3604 18.9873 16.1701 L 18.75 16.0978 L 18.6523 16.0675 C 18.1769 15.8919 17.9028 15.3813 18.0322 14.88 C 18.1617 14.3789 18.6485 14.0645 19.1494 14.1408 L 19.25 14.1622 L 19.4492 14.2179 C 20.4401 14.518 21.3158 15.1186 21.9521 15.9396 C 22.6308 16.8151 22.9991 17.8914 23 18.9992 L 23 21.0001 C 22.9999 21.5524 22.5522 22.0001 22 22.0001 C 21.4478 22.0001 21.0001 21.5524 21 21.0001 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 7.5 5.83)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9, -7)" d="M 12 7 C 12 5.34315 10.6569 4 9 4 C 7.34315 4 6 5.34315 6 7 C 6 8.65685 7.34315 10 9 10 C 10.6569 10 12 8.65685 12 7 Z M 14 7 C 14 9.76142 11.7614 12 9 12 C 6.23858 12 4 9.76142 4 7 C 4 4.23858 6.23858 2 9 2 C 11.7614 2 14 4.23858 14 7 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
              <h2 className="text-lg font-bold text-white font-serif">Sponsors</h2>
            </div>
            <div className="bg-white rounded-[14px] p-4 md:p-6 shadow-[0px_2px_4px_0px_#00000012] border border-[#E4E0DD]/50">
              <p className="text-sm text-[#9C948B] mb-6">Feature partner logos on the tournament landing page.</p>
              <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <button className="w-16 h-16 rounded-full border-2 border-dashed border-[#E4E0DD] bg-[#F6F5F4]/20 flex items-center justify-center group hover:border-[#E83030]/40 transition-colors">
                    <svg data-svg-id="SVG_9" className="w-6 h-6 text-[#9C948B] group-hover:text-[#E83030]" viewBox="0 0 24 24">
                    <g transform="matrix(1 0 0 1 0 0)">
                      <g style={{  }}>
                        <g transform="matrix(1 0 0 1 12 12)">
                          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 11 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 L 5 13 C 4.44772 13 4 12.5523 4 12 C 4 11.4477 4.44772 11 5 11 L 19 11 Z" strokeLinecap="round" />
                        </g>
                        <g transform="matrix(1 0 0 1 12 12)">
                          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 11 19 L 11 5 C 11 4.44772 11.4477 4 12 4 C 12.5523 4 13 4.44772 13 5 L 13 19 C 13 19.5523 12.5523 20 12 20 C 11.4477 20 11 19.5523 11 19 Z" strokeLinecap="round" />
                        </g>
                      </g>
                    </g>
                  </svg>
                  </button>
                  <span className="text-[10px] font-medium text-[#9C948B]">Add New</span>
                </div>
                {[
                  { name: 'PicklePro', img: './assets/IMG_1.jpg', bg: 'bg-[#dcfede]' },
                  { name: 'NetMasters', img: './assets/IMG_2.jpeg', bg: 'bg-[#e0fbec]' },
                  { name: 'Dink Nation', img: './assets/IMG_3.jpeg', bg: 'bg-[#eff8e4]' },
                ].map((sponsor) => (
                  <div key={sponsor.name} className="flex flex-col items-center gap-2 shrink-0">
                    <div className={`w-16 h-16 rounded-full overflow-hidden ${sponsor.bg} border border-gray-100`}>
                      <img src={sponsor.img} alt={sponsor.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-medium text-[#1D1A16]">{sponsor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Event Schedule Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <svg data-svg-id="SVG_10" className="w-5 h-5 text-white/80" viewBox="0 0 20 20">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 6.67 3.33)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-8, -4)" d="M 7 6 L 7 2 C 7 1.44772 7.44772 1 8 1 C 8.55228 1 9 1.44772 9 2 L 9 6 C 9 6.55228 8.55228 7 8 7 C 7.44772 7 7 6.55228 7 6 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 13.33 3.33)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-16, -4)" d="M 15 6 L 15 2 C 15 1.44772 15.4477 1 16 1 C 16.5523 1 17 1.44772 17 2 L 17 6 C 17 6.55228 16.5523 7 16 7 C 15.4477 7 15 6.55228 15 6 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 10.83)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -13)" d="M 20 6 C 20 5.44772 19.5523 5 19 5 L 5 5 C 4.44772 5 4 5.44772 4 6 L 4 20 C 4 20.5523 4.44772 21 5 21 L 19 21 C 19.5523 21 20 20.5523 20 20 L 20 6 Z M 22 20 C 22 21.6569 20.6569 23 19 23 L 5 23 C 3.34315 23 2 21.6569 2 20 L 2 6 C 2 4.34315 3.34315 3 5 3 L 19 3 C 20.6569 3 22 4.34315 22 6 L 22 20 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 8.33)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 21 9 C 21.5523 9 22 9.44772 22 10 C 22 10.5523 21.5523 11 21 11 L 3 11 C 2.44772 11 2 10.5523 2 10 C 2 9.44772 2.44772 9 3 9 L 21 9 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
              <h2 className="text-lg font-bold text-white font-serif">Event Schedule</h2>
            </div>
            <div className="bg-white rounded-[14px] p-4 md:p-6 shadow-[0px_2px_4px_0px_#00000012] border border-[#E4E0DD]/50">
              <div className="flex justify-between items-center mb-6">
                <div className="bg-[#E83030]/10 px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-[#E83030]">Saturday, June 24</span>
                </div>
                <button className="text-xs font-bold text-[#E83030] hover:underline">Manage Dates</button>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { time: '08:00 AM', title: 'Check-in & Warm-up', loc: 'All Courts (1-12)', svgClock: 'SVG_11', svgPin: 'SVG_12' },
                  { time: '09:00 AM', title: "Men's Doubles Round Robin", loc: 'Courts 1-6', svgClock: 'SVG_13', svgPin: 'SVG_14' },
                  { time: '01:30 PM', title: 'Championship Finals', loc: 'Showcase Court 1', svgClock: 'SVG_15', svgPin: 'SVG_16' },
                ].map((item) => (
                  <div key={item.title} className="flex bg-[#F6F5F4]/50 rounded-[14px] border border-[#E4E0DD]/30 overflow-hidden">
                    <div className="w-24 shrink-0 flex flex-col items-center justify-center py-3 border-r border-[#E4E0DD]/50">
                      <svg data-svg-id={item.svgClock} className="w-4 h-4 text-[#E83030] mb-1" viewBox="0 0 16 16"></svg>
                      <span className="text-[11px] font-bold">{item.time}</span>
                    </div>
                    <div className="flex-1 p-3 flex flex-col justify-center">
                      <h4 className="text-sm font-semibold font-serif mb-1">{item.title}</h4>
                      <div className="flex items-center gap-1.5 text-[#9C948B]">
                        <svg data-svg-id={item.svgPin} className="w-3 h-3" viewBox="0 0 12 12"></svg>
                        <span className="text-[12px]">{item.loc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full h-11 flex items-center justify-center gap-2 bg-[#FBFAF9] border border-[#E4E0DD]/60 rounded-[10px] text-[#1D1A16] font-medium text-sm shadow-[0px_2px_4px_0px_#00000012] hover:bg-gray-50 transition-colors">
                <svg data-svg-id="SVG_17" className="w-4 h-4" viewBox="0 0 16 16">
              <g transform="matrix(1 0 0 1 0 0)">
                <g style={{  }}>
                  <g transform="matrix(0.67 0 0 0.67 8 8)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(29,26,22)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 11 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 L 5 13 C 4.44772 13 4 12.5523 4 12 C 4 11.4477 4.44772 11 5 11 L 19 11 Z" strokeLinecap="round" />
                  </g>
                  <g transform="matrix(0.67 0 0 0.67 8 8)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(29,26,22)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 11 19 L 11 5 C 11 4.44772 11.4477 4 12 4 C 12.5523 4 13 4.44772 13 5 L 13 19 C 13 19.5523 12.5523 20 12 20 C 11.4477 20 11 19.5523 11 19 Z" strokeLinecap="round" />
                  </g>
                </g>
              </g>
            </svg>
                Add Time Block
              </button>
            </div>
          </section>

          {/* Rules & Eligibility Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <svg data-svg-id="SVG_18" className="w-5 h-5 text-white/80" viewBox="0 0 20 20">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 10 10)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 5.99957 C 16.6805 5.99957 13.9706 4.66298 12.1104 3.03961 L 12.1104 3.04059 C 12.0796 3.01429 12.0405 2.99957 12 2.99957 C 11.9595 2.99957 11.9204 3.01429 11.8896 3.04059 L 11.8887 3.03961 C 10.0971 4.60159 7.48931 5.91508 5.21875 5.99567 L 5 5.99957 L 5 12.9996 L 5.00879 13.4117 C 5.09782 15.4371 5.8465 16.9385 6.98633 18.106 C 8.07404 19.22 9.55305 20.0641 11.2539 20.7232 L 11.9961 20.9947 L 12.0186 21.0015 C 14.0236 20.3018 15.7728 19.3811 17.0137 18.108 C 18.229 16.8611 19 15.2354 19 12.9996 L 19 5.99957 Z M 21 12.9996 C 21 15.7637 20.021 17.8889 18.4463 19.5045 C 16.8988 21.0921 14.8204 22.1442 12.6689 22.8941 L 12.6611 22.897 C 12.233 23.0421 11.7688 23.0369 11.3438 22.8843 L 11.3438 22.8853 C 11.3379 22.8833 11.3321 22.8805 11.3262 22.8785 C 11.3246 22.8779 11.3228 22.8781 11.3213 22.8775 L 11.3213 22.8765 C 9.17204 22.132 7.09956 21.0847 5.55566 19.5035 C 4.07782 17.9899 3.12517 16.0279 3.01172 13.5113 L 3 12.9996 L 3 5.99957 C 3.00012 5.4693 3.21097 4.96048 3.58594 4.58551 C 3.96099 4.21058 4.46967 3.99957 5 3.99957 L 5.32129 3.98785 C 6.95847 3.86733 9.05353 2.86215 10.582 1.52692 L 10.5908 1.52008 L 10.7422 1.40094 C 11.1082 1.14062 11.5477 0.999573 12 0.999573 C 12.4523 0.999573 12.8918 1.14062 13.2578 1.40094 L 13.4092 1.52008 L 13.418 1.52692 L 13.7324 1.79156 C 15.3383 3.08683 17.4277 3.99957 19 3.99957 C 19.5303 3.99957 20.039 4.21058 20.4141 4.58551 C 20.789 4.96048 20.9999 5.4693 21 5.99957 L 21 12.9996 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 8.33)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 11 12 L 11 8 C 11 7.44772 11.4477 7 12 7 C 12.5523 7 13 7.44772 13 8 L 13 12 C 13 12.5523 12.5523 13 12 13 C 11.4477 13 11 12.5523 11 12 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 13.33)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -16)" d="M 12.0098 15 L 12.1123 15.0049 C 12.6165 15.0561 13.0098 15.4822 13.0098 16 C 13.0098 16.5178 12.6165 16.9439 12.1123 16.9951 L 12.0098 17 L 12 17 C 11.4477 17 11 16.5523 11 16 C 11 15.4477 11.4477 15 12 15 L 12.0098 15 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
              <h2 className="text-lg font-bold text-white font-serif">Rules & Eligibility</h2>
            </div>
            <div className="bg-white rounded-[14px] p-4 md:p-6 shadow-[0px_2px_4px_0px_#00000012] border border-[#E4E0DD]/50">
              <h3 className="text-sm font-semibold mb-3">Tournament Terms</h3>
              <div className="bg-[#F6F5F4]/30 border border-[#E4E0DD]/60 rounded-[10px] p-3 mb-3">
                <p className="text-sm leading-[23px] text-[#1D1A16]">
                  1. All players must be at their court 10 minutes prior to match time.<br />
                  2. Standard USAPA rules apply.<br />
                  3. Refund policy: 100% refund up to 7 days prior to start date.
                </p>
              </div>
              <p className="text-[11px] text-[#9C948B] italic">* These rules will be visible to all registered players.</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer - Sticky Glass Effect */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 glass-footer pb-safe">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
          <button className="w-full h-14 bg-[#E83030] text-white font-bold rounded-[14px] shadow-lg hover:bg-[#d12b2b] transition-all active:scale-[0.98]">
            Continue to Final Preview →
          </button>
          <button className="w-full py-2 text-sm font-medium text-[#9C948B] hover:text-white transition-colors">
            Back to Step 3
          </button>
        </div>
      </footer>

      {/* Custom Styles for specific design elements */}
      <style>{`
        .glass-footer {
          background: linear-gradient(to top, #4a1010 0%, #4a1010 80%, rgba(74, 16, 16, 0) 100%);
          backdrop-filter: blur(4px);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (min-width: 1024px) {
          .glass-footer {
            background: #4a1010;
            border-top: 1px solid rgba(255,255,255,0.1);
          }
        }
      `}</style>
    </div>
  );
}