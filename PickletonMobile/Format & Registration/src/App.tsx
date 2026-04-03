import { Icon } from '@iconify/react';

export default function App() {
  return (
    <div className="min-h-screen bg-mesh-gradient font-sans text-[#1D1A16] selection:bg-red-100">
      {/* Desktop Sidebar Navigation (Visible only on lg+) */}
      <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-[#E4E0DD] bg-white/50 backdrop-blur-md lg:block">
        <div className="flex h-full flex-col p-6">
          <div className="mb-10 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1D1A16]">
              <svg data-svg-id="SVG_3" className="h-4 w-4 text-[#FBFAF9]" viewBox="0 0 16 16">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(0.67 0 0 0.67 8 8)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(251,250,249)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <span className="font-serif text-xl font-bold">Tournament Pro</span>
          </div>
          
          <nav className="flex-1 space-y-2">
            {['Basic Info', 'Location & Dates', 'Competition Format', 'Prizes & Sponsors', 'Review & Publish'].map((step, idx) => (
              <div 
                key={step} 
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${idx === 2 ? 'bg-[#E83030] text-white' : 'text-[#9C948B] hover:bg-black/5'}`}
              >
                <span className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs ${idx === 2 ? 'border-white/30 bg-white/20' : 'border-[#E4E0DD]'}`}>
                  {idx + 1}
                </span>
                {step}
              </div>
            ))}
          </nav>
          
          <div className="mt-auto rounded-xl bg-[#FBDADA]/30 p-4">
            <div className="flex items-center gap-2 text-[#E83030]">
              <svg data-svg-id="SVG_15" className="h-5 w-5" viewBox="0 0 20 20">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.83 0 0 0.83 10 10)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 12 C 21 7.02944 16.9706 3 12 3 C 7.02944 3 3 7.02944 3 12 C 3 16.9706 7.02944 21 12 21 C 16.9706 21 21 16.9706 21 12 Z M 23 12 C 23 18.0751 18.0751 23 12 23 C 5.92487 23 1 18.0751 1 12 C 1 5.92487 5.92487 1 12 1 C 18.0751 1 23 5.92487 23 12 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.83 0 0 0.83 10 8.33)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 11 12 L 11 8 C 11 7.44772 11.4477 7 12 7 C 12.5523 7 13 7.44772 13 8 L 13 12 C 13 12.5523 12.5523 13 12 13 C 11.4477 13 11 12.5523 11 12 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.83 0 0 0.83 10 13.33)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -16)" d="M 12.0098 15 L 12.1123 15.0049 C 12.6165 15.0561 13.0098 15.4822 13.0098 16 C 13.0098 16.5178 12.6165 16.9439 12.1123 16.9951 L 12.0098 17 L 12 17 C 11.4477 17 11 16.5523 11 16 C 11 15.4477 11.4477 15 12 15 L 12.0098 15 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
              <span className="text-xs font-bold uppercase tracking-wider">Pro Tip</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#450808]/80">
              Manual Approval helps ensure players meet the required skill level (DUPR).
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="mx-auto max-w-[390px] pb-32 md:max-w-2xl lg:ml-64 lg:max-w-4xl xl:max-w-5xl">
        
        {/* Mobile Header */}
        <header className="sticky top-0 z-50 bg-[#FBFAF9]/95 backdrop-blur-sm lg:hidden">
          <div className="relative flex h-[105px] flex-col items-center justify-center px-4">
            {/* Status Bar Placeholder */}
            <div className="flex w-full items-center justify-between py-2">
              <svg data-svg-id="SVG_1" className="h-10 w-[70px]" viewBox="0 0 70 40">
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
              <svg data-svg-id="SVG_2" className="h-10 w-[96px]" viewBox="0 0 96 40">
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
            
            <div className="flex w-full items-center justify-between pb-4">
              <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-black/5">
                <svg data-svg-id="SVG_4" className="h-6 w-6 text-[#1D1A16]" viewBox="0 0 24 24">
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
                <div className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#1D1A16]">
                  <svg data-svg-id="SVG_3" className="h-4 w-4 text-[#FBFAF9]" viewBox="0 0 16 16">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(0.67 0 0 0.67 8 8)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(251,250,249)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
                </div>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.5px] text-[#9C948B]">Step 3 of 5</span>
              </div>

              <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-black/5">
                <svg data-svg-id="SVG_5" className="h-5 w-5 text-[#9C948B]" viewBox="0 0 20 20">
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
            <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[#F6F5F4]/30">
              <div className="h-full w-[60%] bg-[#E83030]"></div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#E4E0DD]"></div>
        </header>

        {/* Desktop Header (Visible only on lg+) */}
        <header className="hidden items-center justify-between p-8 lg:flex">
          <div>
            <h1 className="font-serif text-3xl font-bold text-[#1D1A16]">Competition Format</h1>
            <p className="text-[#9C948B]">Configure how your tournament will be played and managed.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-xl border border-[#E4E0DD] px-6 py-2.5 font-bold text-[#9C948B] hover:bg-black/5">Save Draft</button>
            <button className="rounded-xl bg-[#E83030] px-6 py-2.5 font-bold text-white shadow-lg shadow-red-200 hover:bg-red-600">Next Step</button>
          </div>
        </header>

        <div className="space-y-8 p-4 md:p-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          
          {/* Section 1: Competition Format */}
          <section className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 px-1">
              <svg data-svg-id="SVG_6" className="h-5 w-5 text-[#E83030]" viewBox="0 0 20 20">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 3.33 5.42)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-4, -6.5)" d="M 1 6.5 C 1 5.57174 1.36901 4.68177 2.02539 4.02539 C 2.68177 3.36901 3.57174 3 4.5 3 L 6 3 C 6.55228 3 7 3.44772 7 4 C 7 4.55228 6.55228 5 6 5 L 4.5 5 C 4.10218 5 3.72076 5.15815 3.43945 5.43945 C 3.15815 5.72076 3 6.10218 3 6.5 C 3 6.89782 3.15815 7.27924 3.43945 7.56055 C 3.72076 7.84185 4.10218 8 4.5 8 L 6 8 C 6.55228 8 7 8.44772 7 9 C 7 9.55228 6.55228 10 6 10 L 4.5 10 C 3.57174 10 2.68177 9.63099 2.02539 8.97461 C 1.36901 8.31823 1 7.42826 1 6.5 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 16.67 5.42)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-20, -6.5)" d="M 21 6.5 C 21 6.10218 20.8419 5.72076 20.5605 5.43945 C 20.3145 5.19337 19.9917 5.04195 19.6484 5.00781 L 19.5 5 L 18 5 C 17.4477 5 17 4.55228 17 4 C 17 3.44772 17.4477 3 18 3 L 19.5 3 L 19.6738 3.00391 C 20.5388 3.04688 21.3593 3.4101 21.9746 4.02539 C 22.631 4.68177 23 5.57174 23 6.5 C 23 7.42826 22.631 8.31823 21.9746 8.97461 C 21.3182 9.63099 20.4283 10 19.5 10 L 18 10 C 17.4477 10 17 9.55228 17 9 C 17 8.44772 17.4477 8 18 8 L 19.5 8 C 19.8978 8 20.2792 7.84185 20.5605 7.56055 C 20.8419 7.27924 21 6.89782 21 6.5 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 18.33)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -22)" d="M 20 21 C 20.5523 21 21 21.4477 21 22 C 21 22.5523 20.5523 23 20 23 L 4 23 C 3.44772 23 3 22.5523 3 22 C 3 21.4477 3.44772 21 4 21 L 20 21 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 7.08 15.27)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-8.5, -18.33)" d="M 6 21.9998 C 6.00005 19.9681 6.98141 18.0479 8.61426 17.3006 C 8.76591 17.2306 8.88359 17.1422 8.95117 17.0653 C 9.01458 16.9931 9.00006 16.9733 9 16.9998 L 9 14.66 C 9 14.1077 9.44772 13.66 10 13.66 C 10.5523 13.66 11 14.1077 11 14.66 L 11 16.9998 C 11 18.0065 10.281 18.658 9.69043 18.994 L 9.44824 19.118 L 9.44629 19.119 C 8.7192 19.4517 8.00005 20.5117 8 21.9998 C 8 22.5521 7.55228 22.9998 7 22.9998 C 6.44772 22.9998 6 22.5521 6 21.9998 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 12.92 15.27)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -18.33)" d="M 16 21.9998 C 15.9999 20.5117 15.2808 19.4517 14.5537 19.119 L 14.5518 19.118 C 13.9385 18.8358 13 18.1498 13 16.9998 L 13 14.66 C 13 14.1077 13.4477 13.66 14 13.66 C 14.5523 13.66 15 14.1077 15 14.66 L 15 16.9998 C 14.9999 16.9733 14.9854 16.9931 15.0488 17.0653 C 15.1164 17.1422 15.2341 17.2306 15.3857 17.3006 L 15.5371 17.3739 C 17.0793 18.1677 18 20.0315 18 21.9998 C 18 22.5521 17.5523 22.9998 17 22.9998 C 16.4477 22.9998 16 22.5521 16 21.9998 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 7.08)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8.5)" d="M 17 3 L 7 3 L 7 9 L 7.00586 9.24805 C 7.06719 10.4838 7.58579 11.6561 8.46484 12.5352 C 9.40253 13.4728 10.6739 14 12 14 C 13.3261 14 14.5975 13.4728 15.5352 12.5352 C 16.4728 11.5975 17 10.3261 17 9 L 17 3 Z M 19 9 C 19 10.8565 18.263 12.6374 16.9502 13.9502 C 15.6374 15.2629 13.8565 16 12 16 C 10.1435 16 8.36256 15.2629 7.0498 13.9502 C 5.819 12.7194 5.09452 11.077 5.00879 9.34668 L 5 9 L 5 2 L 5.00488 1.89746 C 5.05621 1.39333 5.48232 1 6 1 L 18 1 L 18.1025 1.00488 C 18.6067 1.05621 19 1.48232 19 2 L 19 9 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
              <h2 className="font-serif text-lg font-bold md:text-xl">Competition Format</h2>
            </div>
            
            <div className="rounded-[14px] border border-[#E4E0DD]/50 bg-white p-4 shadow-sm md:p-6">
              <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.6px] text-[#9C948B]">Select Game Type</h3>
              
              <div className="grid grid-cols-3 gap-3 md:gap-6">
                <button className="flex flex-col items-center justify-center rounded-[14px] bg-[#F6F5F4]/50 py-4 transition-all hover:bg-[#F6F5F4]">
                  <svg data-svg-id="SVG_7" className="mb-2 h-5 w-5 text-[#9C948B]" viewBox="0 0 20 20">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(0.83 0 0 0.83 10 15)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -18)" d="M 18 21 L 18 19 C 18 18.2044 17.6837 17.4415 17.1211 16.8789 C 16.6289 16.3867 15.9835 16.0829 15.2969 16.0146 L 15 16 L 9 16 C 8.20435 16 7.44152 16.3163 6.87891 16.8789 C 6.3163 17.4415 6 18.2044 6 19 L 6 21 C 6 21.5523 5.55228 22 5 22 C 4.44772 22 4 21.5523 4 21 L 4 19 C 4 17.6739 4.52716 16.4025 5.46484 15.4648 C 6.40253 14.5272 7.67392 14 9 14 L 15 14 L 15.248 14.0059 C 16.4838 14.0672 17.6561 14.5858 18.5352 15.4648 C 19.4728 16.4025 20 17.6739 20 19 L 20 21 C 20 21.5523 19.5523 22 19 22 C 18.4477 22 18 21.5523 18 21 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 10 5.83)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -7)" d="M 15 7 C 15 5.34315 13.6569 4 12 4 C 10.3431 4 9 5.34315 9 7 C 9 8.65685 10.3431 10 12 10 C 13.6569 10 15 8.65685 15 7 Z M 17 7 C 17 9.76142 14.7614 12 12 12 C 9.23858 12 7 9.76142 7 7 C 7 4.23858 9.23858 2 12 2 C 14.7614 2 17 4.23858 17 7 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
                  <span className="text-[12px] font-bold text-[#9C948B]">Singles</span>
                </button>
                
                <button className="flex flex-col items-center justify-center rounded-[14px] border-2 border-[#E83030] bg-[#F9D2DF] py-4 shadow-sm">
                  <svg data-svg-id="SVG_8" className="mb-2 h-5 w-5 text-[#E83030]" viewBox="0 0 20 20">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(0.83 0 0 0.83 7.5 15)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9, -18)" d="M 15 21 L 15 19 C 15 18.2044 14.6837 17.4415 14.1211 16.8789 C 13.6289 16.3867 12.9835 16.0829 12.2969 16.0146 L 12 16 L 6 16 C 5.20435 16 4.44152 16.3163 3.87891 16.8789 C 3.3163 17.4415 3 18.2044 3 19 L 3 21 C 3 21.5523 2.55228 22 2 22 C 1.44772 22 1 21.5523 1 21 L 1 19 C 1 17.6739 1.52716 16.4025 2.46484 15.4648 C 3.40253 14.5272 4.67392 14 6 14 L 12 14 L 12.248 14.0059 C 13.4838 14.0672 14.6561 14.5858 15.5352 15.4648 C 16.4728 16.4025 17 17.6739 17 19 L 17 21 C 17 21.5523 16.5523 22 16 22 C 15.4477 22 15 21.5523 15 21 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 14.58 5.83)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-17.5, -7)" d="M 17.9961 7.00008 C 17.9961 6.33559 17.7757 5.6897 17.3691 5.16415 C 17.0132 4.70415 16.5321 4.35885 15.9863 4.16805 L 15.749 4.09579 L 15.6514 4.06551 C 15.1761 3.88941 14.9023 3.37825 15.0322 2.87704 C 15.1622 2.37596 15.6495 2.06289 16.1504 2.13973 L 16.251 2.16024 L 16.4502 2.2159 C 17.4406 2.51689 18.3146 3.11916 18.9502 3.94051 C 19.628 4.81649 19.9961 5.89248 19.9961 7.00008 C 19.9961 8.10769 19.628 9.18367 18.9502 10.0597 C 18.2723 10.9356 17.3232 11.562 16.251 11.8399 C 15.7164 11.9785 15.1709 11.6576 15.0322 11.1231 C 14.8936 10.5886 15.2145 10.043 15.749 9.90438 C 16.3923 9.7376 16.9624 9.36162 17.3691 8.83602 C 17.7758 8.31046 17.9961 7.66459 17.9961 7.00008 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 17.08 15.05)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-20.5, -18.06)" d="M 21 21.0001 L 21 19.0011 L 20.9893 18.7531 C 20.9411 18.1769 20.7275 17.6249 20.3711 17.1652 C 20.0147 16.7054 19.5334 16.3604 18.9873 16.1701 L 18.75 16.0978 L 18.6523 16.0675 C 18.1769 15.8919 17.9028 15.3813 18.0322 14.88 C 18.1617 14.3789 18.6485 14.0645 19.1494 14.1408 L 19.25 14.1622 L 19.4492 14.2179 C 20.4401 14.518 21.3158 15.1186 21.9521 15.9396 C 22.6308 16.8151 22.9991 17.8914 23 18.9992 L 23 21.0001 C 22.9999 21.5524 22.5522 22.0001 22 22.0001 C 21.4478 22.0001 21.0001 21.5524 21 21.0001 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 7.5 5.83)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9, -7)" d="M 12 7 C 12 5.34315 10.6569 4 9 4 C 7.34315 4 6 5.34315 6 7 C 6 8.65685 7.34315 10 9 10 C 10.6569 10 12 8.65685 12 7 Z M 14 7 C 14 9.76142 11.7614 12 9 12 C 6.23858 12 4 9.76142 4 7 C 4 4.23858 6.23858 2 9 2 C 11.7614 2 14 4.23858 14 7 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
                  <span className="text-[12px] font-bold text-[#E83030]">Doubles</span>
                </button>
                
                <button className="flex flex-col items-center justify-center rounded-[14px] bg-[#F6F5F4]/50 py-4 transition-all hover:bg-[#F6F5F4]">
                  <svg data-svg-id="SVG_9" className="mb-2 h-5 w-5 text-[#9C948B]" viewBox="0 0 20 20">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(0.83 0 0 0.83 8.33 14.17)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-10, -17)" d="M 17 21 C 17 19.1435 16.2629 17.3626 14.9502 16.0498 C 13.7194 14.819 12.077 14.0945 10.3467 14.0088 L 10 14 C 8.14348 14 6.36256 14.7371 5.0498 16.0498 C 3.73705 17.3626 3 19.1435 3 21 C 3 21.5523 2.55228 22 2 22 C 1.44772 22 1 21.5523 1 21 C 1 18.6131 1.94791 16.3236 3.63574 14.6357 C 5.32357 12.9479 7.61305 12 10 12 C 12.3869 12 14.6764 12.9479 16.3643 14.6357 C 18.0521 16.3236 19 18.6131 19 21 C 19 21.5523 18.5523 22 18 22 C 17.4477 22 17 21.5523 17 21 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 8.33 6.67)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-10, -8)" d="M 14 8 C 14 5.79086 12.2091 4 10 4 C 7.79086 4 6 5.79086 6 8 C 6 10.2091 7.79086 12 10 12 C 12.2091 12 14 10.2091 14 8 Z M 16 8 C 16 11.3137 13.3137 14 10 14 C 6.68629 14 4 11.3137 4 8 C 4 4.68629 6.68629 2 10 2 C 13.3137 2 16 4.68629 16 8 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 16.48 9.87)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-19.77, -11.85)" d="M 21.0002 19.9998 C 21.0001 16.9891 19.1856 14.1391 17.3996 12.7996 C 17.1481 12.6108 17.0002 12.3144 17.0002 11.9998 C 17.0003 11.6853 17.148 11.3889 17.3996 11.2 C 17.9256 10.8054 18.3463 10.2871 18.6242 9.69124 C 18.9021 9.09545 19.029 8.44046 18.9934 7.78401 C 18.9578 7.12748 18.7609 6.48988 18.4201 5.92757 C 18.1219 5.43549 17.7216 5.01451 17.2473 4.69222 L 17.0402 4.56038 L 16.9543 4.50374 C 16.5469 4.20253 16.4258 3.63551 16.6897 3.19026 C 16.9538 2.74489 17.5101 2.57853 17.9699 2.79183 L 18.0598 2.83968 L 18.3713 3.03792 C 19.0828 3.52136 19.6838 4.15331 20.1311 4.89144 C 20.642 5.73476 20.937 6.69104 20.9904 7.67562 C 21.0438 8.6604 20.8537 9.64318 20.4367 10.5369 C 20.1928 11.0599 19.8736 11.5412 19.4943 11.9705 C 21.3667 13.7934 23.0001 16.7771 23.0002 19.9998 C 23.0002 20.5521 22.5524 20.9997 22.0002 20.9998 C 21.4479 20.9998 21.0002 20.5521 21.0002 19.9998 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
                  <span className="text-[12px] font-bold text-[#9C948B]">Mixed</span>
                </button>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-[#9C948B]">Draw Size</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-[10px] border border-[#E4E0DD] bg-[#F6F5F4]/30 px-3 py-2.5 text-sm focus:border-[#E83030] focus:ring-1 focus:ring-[#E83030]">
                      <option>32 Players</option>
                      <option>16 Players</option>
                      <option>64 Players</option>
                    </select>
                    <svg data-svg-id="SVG_10" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1D1A16]" viewBox="0 0 16 16">
                    <g transform="matrix(1 0 0 1 0 0)">
                      <g style={{  }}>
                        <g transform="matrix(0.67 0 0 0.67 8 8)">
                          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(29,26,22)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 17.293 8.29302 C 17.6835 7.90249 18.3165 7.90249 18.707 8.29302 C 19.0976 8.68354 19.0976 9.31655 18.707 9.70708 L 12.707 15.7071 C 12.3165 16.0976 11.6835 16.0976 11.293 15.7071 L 5.29298 9.70708 L 5.22462 9.63091 C 4.90427 9.23813 4.92686 8.65913 5.29298 8.29302 C 5.65909 7.9269 6.2381 7.90431 6.63087 8.22466 L 6.70704 8.29302 L 12 13.586 L 17.293 8.29302 Z" strokeLinecap="round" />
                        </g>
                      </g>
                    </g>
                  </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-[#9C948B]">Match Format</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-[10px] border border-[#E4E0DD] bg-[#F6F5F4]/30 px-3 py-2.5 text-sm focus:border-[#E83030] focus:ring-1 focus:ring-[#E83030]">
                      <option>Best of 3</option>
                      <option>Pro Set to 8</option>
                      <option>Single Set to 6</option>
                    </select>
                    <svg data-svg-id="SVG_11" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1D1A16]" viewBox="0 0 16 16">
                    <g transform="matrix(1 0 0 1 0 0)">
                      <g style={{  }}>
                        <g transform="matrix(0.67 0 0 0.67 8 8)">
                          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(29,26,22)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 17.293 8.29302 C 17.6835 7.90249 18.3165 7.90249 18.707 8.29302 C 19.0976 8.68354 19.0976 9.31655 18.707 9.70708 L 12.707 15.7071 C 12.3165 16.0976 11.6835 16.0976 11.293 15.7071 L 5.29298 9.70708 L 5.22462 9.63091 C 4.90427 9.23813 4.92686 8.65913 5.29298 8.29302 C 5.65909 7.9269 6.2381 7.90431 6.63087 8.22466 L 6.70704 8.29302 L 12 13.586 L 17.293 8.29302 Z" strokeLinecap="round" />
                        </g>
                      </g>
                    </g>
                  </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Entry & Payments */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <svg data-svg-id="SVG_12" className="h-5 w-5 text-[#E83030]" viewBox="0 0 20 20">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 10 10)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 11 22 L 11 2 C 11 1.44772 11.4477 1 12 1 C 12.5523 1 13 1.44772 13 2 L 13 22 C 13 22.5523 12.5523 23 12 23 C 11.4477 23 11 22.5523 11 22 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 10)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 17 15.5 C 17 14.837 16.7364 14.2013 16.2676 13.7324 C 15.8573 13.3222 15.3194 13.0695 14.7471 13.0127 L 14.5 13 L 9.5 13 C 8.30653 13 7.16227 12.5256 6.31836 11.6816 C 5.52708 10.8904 5.06093 9.83506 5.00586 8.72266 L 5 8.5 C 5 7.30653 5.47445 6.16227 6.31836 5.31836 C 7.16227 4.47445 8.30653 4 9.5 4 L 17 4 C 17.5523 4 18 4.44772 18 5 C 18 5.55228 17.5523 6 17 6 L 9.5 6 C 8.83696 6 8.20126 6.26358 7.73242 6.73242 C 7.26358 7.20126 7 7.83696 7 8.5 L 7.0127 8.74707 C 7.06952 9.31937 7.32219 9.85735 7.73242 10.2676 C 8.20126 10.7364 8.83696 11 9.5 11 L 14.5 11 L 14.7227 11.0059 C 15.8351 11.0609 16.8904 11.5271 17.6816 12.3184 C 18.5256 13.1623 19 14.3065 19 15.5 C 19 16.6935 18.5256 17.8377 17.6816 18.6816 C 16.8904 19.4729 15.8351 19.9391 14.7227 19.9941 L 14.5 20 L 6 20 C 5.44772 20 5 19.5523 5 19 C 5 18.4477 5.44772 18 6 18 L 14.5 18 L 14.7471 17.9873 C 15.3194 17.9305 15.8573 17.6778 16.2676 17.2676 C 16.7364 16.7987 17 16.163 17 15.5 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
              <h2 className="font-serif text-lg font-bold md:text-xl">Entry & Payments</h2>
            </div>
            
            <div className="rounded-[14px] border border-[#E4E0DD]/50 bg-white p-4 shadow-sm md:p-6">
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-[#9C948B]">Entry Fee (Per Player)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base font-medium text-[#9C948B]">$</span>
                  <input 
                    type="text" 
                    defaultValue="45" 
                    className="w-full rounded-[10px] border border-[#E4E0DD] bg-[#F6F5F4]/30 py-3 pl-8 pr-4 text-lg font-bold focus:border-[#E83030] focus:ring-1 focus:ring-[#E83030]"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <label className="text-[12px] font-semibold text-[#9C948B]">Accepted Payment Methods</label>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#E83030] bg-[#E83030] px-5 py-2 text-sm font-medium text-white">Stripe</span>
                  <span className="rounded-full border border-[#E4E0DD] px-5 py-2 text-sm font-medium text-[#9C948B] hover:bg-black/5">PayPal</span>
                  <span className="rounded-full border border-[#E4E0DD] px-5 py-2 text-sm font-medium text-[#9C948B] hover:bg-black/5">Venmo</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Registration Rules */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <svg data-svg-id="SVG_13" className="h-5 w-5 text-[#E83030]" viewBox="0 0 20 20">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 12.92 5.83)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -7)" d="M 20 6 C 20.5523 6 21 6.44772 21 7 C 21 7.55228 20.5523 8 20 8 L 11 8 C 10.4477 8 10 7.55228 10 7 C 10 6.44772 10.4477 6 11 6 L 20 6 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 7.92 14.17)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9.5, -17)" d="M 14 16 C 14.5523 16 15 16.4477 15 17 C 15 17.5523 14.5523 18 14 18 L 5 18 C 4.44772 18 4 17.5523 4 17 C 4 16.4477 4.44772 16 5 16 L 14 16 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 14.17 14.17)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-17, -17)" d="M 19 17 C 19 15.8954 18.1046 15 17 15 C 15.8954 15 15 15.8954 15 17 C 15 18.1046 15.8954 19 17 19 C 18.1046 19 19 18.1046 19 17 Z M 21 17 C 21 19.2091 19.2091 21 17 21 C 14.7909 21 13 19.2091 13 17 C 13 14.7909 14.7909 13 17 13 C 19.2091 13 21 14.7909 21 17 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 5.83 5.83)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-7, -7)" d="M 9 7 C 9 5.89543 8.10457 5 7 5 C 5.89543 5 5 5.89543 5 7 C 5 8.10457 5.89543 9 7 9 C 8.10457 9 9 8.10457 9 7 Z M 11 7 C 11 9.20914 9.20914 11 7 11 C 4.79086 11 3 9.20914 3 7 C 3 4.79086 4.79086 3 7 3 C 9.20914 3 11 4.79086 11 7 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
              <h2 className="font-serif text-lg font-bold md:text-xl">Registration Rules</h2>
            </div>
            
            <div className="rounded-[14px] border border-[#E4E0DD]/50 bg-white p-4 shadow-sm md:p-6">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold">Manual Approval</h4>
                    <p className="text-[12px] leading-relaxed text-[#9C948B]">Organizers must review and approve each entry before they are officially in the draw.</p>
                  </div>
                  <button className="relative h-6 w-11 flex-shrink-0 rounded-full bg-[#bdc1ca] transition-colors">
                    <span className="absolute left-0.5 top-0.5 h-[20px] w-[20px] rounded-full bg-white shadow-sm transition-transform"></span>
                  </button>
                </div>

                <div className="h-[1px] w-full bg-[#E4E0DD]/50"></div>

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold">Automatic Waitlist</h4>
                    <p className="text-[12px] leading-relaxed text-[#9C948B]">When the draw size is reached, new registrants are placed in a queue.</p>
                  </div>
                  <button className="relative h-6 w-11 flex-shrink-0 rounded-full bg-[#E83030] transition-colors">
                    <span className="absolute right-0.5 top-0.5 h-[20px] w-[20px] rounded-full bg-white shadow-sm transition-transform"></span>
                  </button>
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-[14px] border border-[#E83030] bg-[#FBFAF9] py-3.5 text-sm font-bold text-[#E83030] transition-all hover:bg-red-50">
                  <svg data-svg-id="SVG_14" className="h-4 w-4" viewBox="0 0 16 16">
              <g transform="matrix(1 0 0 1 0 0)">
                <g style={{  }}>
                  <g transform="matrix(0.67 0 0 0.67 6 12)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9, -18)" d="M 15 21 L 15 19 C 15 18.2044 14.6837 17.4415 14.1211 16.8789 C 13.6289 16.3867 12.9835 16.0829 12.2969 16.0146 L 12 16 L 6 16 C 5.20435 16 4.44152 16.3163 3.87891 16.8789 C 3.3163 17.4415 3 18.2044 3 19 L 3 21 C 3 21.5523 2.55228 22 2 22 C 1.44772 22 1 21.5523 1 21 L 1 19 C 1 17.6739 1.52716 16.4025 2.46484 15.4648 C 3.40253 14.5272 4.67392 14 6 14 L 12 14 L 12.248 14.0059 C 13.4838 14.0672 14.6561 14.5858 15.5352 15.4648 C 16.4728 16.4025 17 17.6739 17 19 L 17 21 C 17 21.5523 16.5523 22 16 22 C 15.4477 22 15 21.5523 15 21 Z" strokeLinecap="round" />
                  </g>
                  <g transform="matrix(0.67 0 0 0.67 11.67 4.67)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-17.5, -7)" d="M 17.9961 7.00008 C 17.9961 6.33559 17.7757 5.6897 17.3691 5.16415 C 17.0132 4.70415 16.5321 4.35885 15.9863 4.16805 L 15.749 4.09579 L 15.6514 4.06551 C 15.1761 3.88941 14.9023 3.37825 15.0322 2.87704 C 15.1622 2.37596 15.6495 2.06289 16.1504 2.13973 L 16.251 2.16024 L 16.4502 2.2159 C 17.4406 2.51689 18.3146 3.11916 18.9502 3.94051 C 19.628 4.81649 19.9961 5.89248 19.9961 7.00008 C 19.9961 8.10769 19.628 9.18367 18.9502 10.0597 C 18.2723 10.9356 17.3232 11.562 16.251 11.8399 C 15.7164 11.9785 15.1709 11.6576 15.0322 11.1231 C 14.8936 10.5886 15.2145 10.043 15.749 9.90438 C 16.3923 9.7376 16.9624 9.36162 17.3691 8.83602 C 17.7758 8.31046 17.9961 7.66459 17.9961 7.00008 Z" strokeLinecap="round" />
                  </g>
                  <g transform="matrix(0.67 0 0 0.67 13.67 12.04)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-20.5, -18.06)" d="M 21 21.0001 L 21 19.0011 L 20.9893 18.7531 C 20.9411 18.1769 20.7275 17.6249 20.3711 17.1652 C 20.0147 16.7054 19.5334 16.3604 18.9873 16.1701 L 18.75 16.0978 L 18.6523 16.0675 C 18.1769 15.8919 17.9028 15.3813 18.0322 14.88 C 18.1617 14.3789 18.6485 14.0645 19.1494 14.1408 L 19.25 14.1622 L 19.4492 14.2179 C 20.4401 14.518 21.3158 15.1186 21.9521 15.9396 C 22.6308 16.8151 22.9991 17.8914 23 18.9992 L 23 21.0001 C 22.9999 21.5524 22.5522 22.0001 22 22.0001 C 21.4478 22.0001 21.0001 21.5524 21 21.0001 Z" strokeLinecap="round" />
                  </g>
                  <g transform="matrix(0.67 0 0 0.67 6 4.67)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9, -7)" d="M 12 7 C 12 5.34315 10.6569 4 9 4 C 7.34315 4 6 5.34315 6 7 C 6 8.65685 7.34315 10 9 10 C 10.6569 10 12 8.65685 12 7 Z M 14 7 C 14 9.76142 11.7614 12 9 12 C 6.23858 12 4 9.76142 4 7 C 4 4.23858 6.23858 2 9 2 C 11.7614 2 14 4.23858 14 7 Z" strokeLinecap="round" />
                  </g>
                </g>
              </g>
            </svg>
                  Manage Participants
                </button>
              </div>
            </div>
          </section>

          {/* Pro Tip Alert (Mobile/Tablet) */}
          <div className="rounded-[14px] border border-[#E83030]/20 bg-[#FBDADA]/50 p-4 lg:hidden">
            <div className="flex gap-3">
              <svg data-svg-id="SVG_15" className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#E83030]" viewBox="0 0 20 20">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.83 0 0 0.83 10 10)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 12 C 21 7.02944 16.9706 3 12 3 C 7.02944 3 3 7.02944 3 12 C 3 16.9706 7.02944 21 12 21 C 16.9706 21 21 16.9706 21 12 Z M 23 12 C 23 18.0751 18.0751 23 12 23 C 5.92487 23 1 18.0751 1 12 C 1 5.92487 5.92487 1 12 1 C 18.0751 1 23 5.92487 23 12 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.83 0 0 0.83 10 8.33)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 11 12 L 11 8 C 11 7.44772 11.4477 7 12 7 C 12.5523 7 13 7.44772 13 8 L 13 12 C 13 12.5523 12.5523 13 12 13 C 11.4477 13 11 12.5523 11 12 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.83 0 0 0.83 10 13.33)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -16)" d="M 12.0098 15 L 12.1123 15.0049 C 12.6165 15.0561 13.0098 15.4822 13.0098 16 C 13.0098 16.5178 12.6165 16.9439 12.1123 16.9951 L 12.0098 17 L 12 17 C 11.4477 17 11 16.5523 11 16 C 11 15.4477 11.4477 15 12 15 L 12.0098 15 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
              <p className="text-[12px] font-medium leading-relaxed text-[#450808]/80">
                Pro Tip: Setting "Manual Approval" helps ensure players meet the required skill level (DUPR) before paying the fee.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation (Mobile/Tablet) */}
        <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-[#E4E0DD] bg-[#FBFAF9]/80 px-4 pb-8 pt-4 backdrop-blur-md lg:hidden">
          <div className="mx-auto max-w-md space-y-3">
            <button className="w-full rounded-[14px] bg-[#E83030] py-4 text-base font-bold text-white shadow-lg shadow-red-200 active:scale-[0.98] transition-transform">
              Continue to Prizes & Sponsors →
            </button>
            <button className="w-full py-2 text-sm font-medium text-[#9C948B] hover:text-[#1D1A16]">
              Back
            </button>
          </div>
        </footer>

        {/* Desktop Footer Spacer */}
        <div className="hidden h-20 lg:block"></div>
      </main>
    </div>
  );
}

// Note: The SVG IDs SVG_1 to SVG_15 are preserved as literal strings in the JSX.
// Post-processing will inject the original SVG content based on these IDs.