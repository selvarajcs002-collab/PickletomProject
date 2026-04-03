import { Icon } from '@iconify/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFAF9] font-sans text-[#1D1A16] flex flex-col lg:flex-row">
      {/* Desktop Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col w-80 bg-white border-r border-[#E4E0DD] p-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-[#1D1A16] rounded-lg flex items-center justify-center">
            <svg data-svg-id="SVG_3" className="w-6 h-6 text-[#FBFAF9]">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(251,250,249)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
          </div>
          <span className="font-serif text-2xl font-bold">ProTourney</span>
        </div>
        
        <nav className="space-y-6">
          {[
            { step: 1, label: 'Basic Info', status: 'completed' },
            { step: 2, label: 'Tournament Timing', status: 'active' },
            { step: 3, label: 'Bracket Setup', status: 'pending' },
            { step: 4, label: 'Rules & Scoring', status: 'pending' },
            { step: 5, label: 'Review & Publish', status: 'pending' },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-4 group cursor-pointer">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors
                ${item.status === 'active' ? 'border-[#E83030] bg-[#E83030] text-white' : 
                  item.status === 'completed' ? 'border-[#E83030] text-[#E83030]' : 'border-[#E4E0DD] text-[#9C948B]'}`}>
                {item.status === 'completed' ? <Icon icon="lucide:check" className="w-4 h-4" /> : item.step}
              </div>
              <span className={`font-semibold transition-colors ${item.status === 'active' ? 'text-[#1D1A16]' : 'text-[#9C948B] group-hover:text-[#1D1A16]'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-[#E4E0DD]">
          <button className="flex items-center gap-2 text-[#9C948B] hover:text-[#1D1A16] transition-colors font-medium">
            <Icon icon="lucide:help-circle" className="w-5 h-5" />
            Support Center
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col relative">
        {/* Header - Mobile & Desktop */}
        <header className="sticky top-0 z-50 bg-[#FBFAF9]/80 backdrop-blur-md border-b border-[#E4E0DD]">
          {/* Mobile Status Bar Placeholder */}
          <div className="h-10 flex justify-between items-center px-6 lg:hidden">
            <svg data-svg-id="SVG_1" className="w-[70px] h-10">
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
            <svg data-svg-id="SVG_2" className="w-[96px] h-10">
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

          <div className="px-4 py-3 flex items-center justify-between max-w-4xl mx-auto w-full">
            <button className="p-2 hover:bg-[#F6F5F4] rounded-full transition-colors">
              <svg data-svg-id="SVG_4" className="w-6 h-6 text-[#1D1A16]">
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
              <div className="w-6 h-6 bg-[#1D1A16] rounded-md flex items-center justify-center mb-1 lg:hidden">
                <svg data-svg-id="SVG_3" className="w-4 h-4 text-[#FBFAF9]">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(251,250,249)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#9C948B]">Step 2 of 5</span>
            </div>

            <button className="p-2 hover:bg-[#F6F5F4] rounded-full transition-colors">
              <svg data-svg-id="SVG_5" className="w-5 h-5 text-[#9C948B]">
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
            <div className="h-full bg-[#E83030] transition-all duration-500" style={{ width: '40%' }}></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pb-32">
          <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
            
            {/* Tournament Timing Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <svg data-svg-id="SVG_6" className="w-5 h-5 text-[#E83030]">
    <g transform="matrix(1 0 0 1 0 0)">
      <g style={{  }}>
        <g transform="matrix(0.83 0 0 0.83 6.67 3.33)">
          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-8, -4)" d="M 7 6 L 7 2 C 7 1.44772 7.44772 1 8 1 C 8.55228 1 9 1.44772 9 2 L 9 6 C 9 6.55228 8.55228 7 8 7 C 7.44772 7 7 6.55228 7 6 Z" strokeLinecap="round" />
        </g>
        <g transform="matrix(0.83 0 0 0.83 13.33 3.33)">
          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-16, -4)" d="M 15 6 L 15 2 C 15 1.44772 15.4477 1 16 1 C 16.5523 1 17 1.44772 17 2 L 17 6 C 17 6.55228 16.5523 7 16 7 C 15.4477 7 15 6.55228 15 6 Z" strokeLinecap="round" />
        </g>
        <g transform="matrix(0.83 0 0 0.83 10 10.83)">
          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -13)" d="M 20 6 C 20 5.44772 19.5523 5 19 5 L 5 5 C 4.44772 5 4 5.44772 4 6 L 4 20 C 4 20.5523 4.44772 21 5 21 L 19 21 C 19.5523 21 20 20.5523 20 20 L 20 6 Z M 22 20 C 22 21.6569 20.6569 23 19 23 L 5 23 C 3.34315 23 2 21.6569 2 20 L 2 6 C 2 4.34315 3.34315 3 5 3 L 19 3 C 20.6569 3 22 4.34315 22 6 L 22 20 Z" strokeLinecap="round" />
        </g>
        <g transform="matrix(0.83 0 0 0.83 10 8.33)">
          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 21 9 C 21.5523 9 22 9.44772 22 10 C 22 10.5523 21.5523 11 21 11 L 3 11 C 2.44772 11 2 10.5523 2 10 C 2 9.44772 2.44772 9 3 9 L 21 9 Z" strokeLinecap="round" />
        </g>
      </g>
    </g>
  </svg>
                <h2 className="text-lg font-serif font-bold">Tournament Timing</h2>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-soft border border-[#E4E0DD]/50 space-y-4">
                {/* Start Date & Time */}
                <div className="bg-[#F6F5F4]/50 rounded-2xl p-4 border border-[#E4E0DD]/50">
                  <span className="text-[10px] font-bold uppercase tracking-tight text-[#9C948B] block mb-3">Start Date & Time</span>
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg data-svg-id="SVG_8" className="w-4 h-4 text-[#E83030]">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 5.33 2.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-8, -4)" d="M 7 6 L 7 2 C 7 1.44772 7.44772 1 8 1 C 8.55228 1 9 1.44772 9 2 L 9 6 C 9 6.55228 8.55228 7 8 7 C 7.44772 7 7 6.55228 7 6 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 10.67 2.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-16, -4)" d="M 15 6 L 15 2 C 15 1.44772 15.4477 1 16 1 C 16.5523 1 17 1.44772 17 2 L 17 6 C 17 6.55228 16.5523 7 16 7 C 15.4477 7 15 6.55228 15 6 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 8 8.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -13)" d="M 20 6 C 20 5.44772 19.5523 5 19 5 L 5 5 C 4.44772 5 4 5.44772 4 6 L 4 20 C 4 20.5523 4.44772 21 5 21 L 19 21 C 19.5523 21 20 20.5523 20 20 L 20 6 Z M 22 20 C 22 21.6569 20.6569 23 19 23 L 5 23 C 3.34315 23 2 21.6569 2 20 L 2 6 C 2 4.34315 3.34315 3 5 3 L 19 3 C 20.6569 3 22 4.34315 22 6 L 22 20 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 8 6.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 21 9 C 21.5523 9 22 9.44772 22 10 C 22 10.5523 21.5523 11 21 11 L 3 11 C 2.44772 11 2 10.5523 2 10 C 2 9.44772 2.44772 9 3 9 L 21 9 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                      <span className="text-sm font-medium">Oct 14, 2024</span>
                    </div>
                    <div className="bg-white px-3 py-1.5 rounded-xl shadow-sm border border-[#E4E0DD]/40 flex items-center gap-2">
                      <svg data-svg-id="SVG_7" className="w-4 h-4 text-[#E83030]">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(0.67 0 0 0.67 8 8)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 12 C 21 7.02944 16.9706 3 12 3 C 7.02944 3 3 7.02944 3 12 C 3 16.9706 7.02944 21 12 21 C 16.9706 21 21 16.9706 21 12 Z M 23 12 C 23 18.0751 18.0751 23 12 23 C 5.92487 23 1 18.0751 1 12 C 1 5.92487 5.92487 1 12 1 C 18.0751 1 23 5.92487 23 12 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.67 0 0 0.67 9.33 6.67)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-14, -10)" d="M 11 6 C 11 5.44772 11.4477 5 12 5 C 12.5523 5 13 5.44772 13 6 L 13 11.3818 L 16.4473 13.1055 L 16.5361 13.1562 C 16.9643 13.4276 17.1261 13.9842 16.8945 14.4473 C 16.663 14.9104 16.1204 15.1153 15.6465 14.9355 L 15.5527 14.8945 L 11.5527 12.8945 C 11.214 12.7251 11 12.3788 11 12 L 11 6 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
                      <span className="text-sm font-bold">08:00 AM</span>
                    </div>
                  </div>
                </div>

                {/* End Date & Time */}
                <div className="bg-[#F6F5F4]/50 rounded-2xl p-4 border border-[#E4E0DD]/50">
                  <span className="text-[10px] font-bold uppercase tracking-tight text-[#9C948B] block mb-3">End Date & Time</span>
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg data-svg-id="SVG_10" className="w-4 h-4 text-[#E83030]">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 5.33 2.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-8, -4)" d="M 7 6 L 7 2 C 7 1.44772 7.44772 1 8 1 C 8.55228 1 9 1.44772 9 2 L 9 6 C 9 6.55228 8.55228 7 8 7 C 7.44772 7 7 6.55228 7 6 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 10.67 2.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-16, -4)" d="M 15 6 L 15 2 C 15 1.44772 15.4477 1 16 1 C 16.5523 1 17 1.44772 17 2 L 17 6 C 17 6.55228 16.5523 7 16 7 C 15.4477 7 15 6.55228 15 6 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 8 8.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -13)" d="M 20 6 C 20 5.44772 19.5523 5 19 5 L 5 5 C 4.44772 5 4 5.44772 4 6 L 4 20 C 4 20.5523 4.44772 21 5 21 L 19 21 C 19.5523 21 20 20.5523 20 20 L 20 6 Z M 22 20 C 22 21.6569 20.6569 23 19 23 L 5 23 C 3.34315 23 2 21.6569 2 20 L 2 6 C 2 4.34315 3.34315 3 5 3 L 19 3 C 20.6569 3 22 4.34315 22 6 L 22 20 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 8 6.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 21 9 C 21.5523 9 22 9.44772 22 10 C 22 10.5523 21.5523 11 21 11 L 3 11 C 2.44772 11 2 10.5523 2 10 C 2 9.44772 2.44772 9 3 9 L 21 9 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                      <span className="text-sm font-medium">Oct 16, 2024</span>
                    </div>
                    <div className="bg-white px-3 py-1.5 rounded-xl shadow-sm border border-[#E4E0DD]/40 flex items-center gap-2">
                      <svg data-svg-id="SVG_9" className="w-4 h-4 text-[#E83030]">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(0.67 0 0 0.67 8 8)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 12 C 21 7.02944 16.9706 3 12 3 C 7.02944 3 3 7.02944 3 12 C 3 16.9706 7.02944 21 12 21 C 16.9706 21 21 16.9706 21 12 Z M 23 12 C 23 18.0751 18.0751 23 12 23 C 5.92487 23 1 18.0751 1 12 C 1 5.92487 5.92487 1 12 1 C 18.0751 1 23 5.92487 23 12 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.67 0 0 0.67 9.33 6.67)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-14, -10)" d="M 11 6 C 11 5.44772 11.4477 5 12 5 C 12.5523 5 13 5.44772 13 6 L 13 11.3818 L 16.4473 13.1055 L 16.5361 13.1562 C 16.9643 13.4276 17.1261 13.9842 16.8945 14.4473 C 16.663 14.9104 16.1204 15.1153 15.6465 14.9355 L 15.5527 14.8945 L 11.5527 12.8945 C 11.214 12.7251 11 12.3788 11 12 L 11 6 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
                      <span className="text-sm font-bold">06:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Timezone */}
                <div className="bg-[#E83030]/5 rounded-2xl p-4 border border-[#E83030]/20 flex items-start gap-3 relative cursor-pointer hover:bg-[#E83030]/10 transition-colors">
                  <svg data-svg-id="SVG_11" className="w-5 h-5 text-[#E83030] mt-1">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.83 0 0 0.83 10 10)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 12 C 21 7.02944 16.9706 3 12 3 C 7.02944 3 3 7.02944 3 12 C 3 16.9706 7.02944 21 12 21 C 16.9706 21 21 16.9706 21 12 Z M 23 12 C 23 18.0751 18.0751 23 12 23 C 5.92487 23 1 18.0751 1 12 C 1 5.92487 5.92487 1 12 1 C 18.0751 1 23 5.92487 23 12 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.83 0 0 0.83 10 10)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 14.9961 11.6758 C 14.9245 8.69287 13.8664 5.82525 12 3.51562 C 10.0661 5.90881 9 8.90114 9 12 L 9.00391 12.3242 C 9.07549 15.3069 10.1339 18.1739 12 20.4834 C 13.9336 18.0903 15 15.0986 15 12 L 14.9961 11.6758 Z M 16.9951 12.373 C 16.9026 16.2184 15.3834 19.8976 12.7246 22.6895 C 12.5359 22.8876 12.2737 23 12 23 C 11.7263 23 11.4641 22.8876 11.2754 22.6895 C 8.61661 19.8976 7.09737 16.2184 7.00488 12.373 L 7 12 C 7 8.02012 8.53074 4.1926 11.2754 1.31055 L 11.3496 1.24023 C 11.5299 1.08586 11.7604 1 12 1 C 12.2737 1 12.5359 1.11237 12.7246 1.31055 C 15.4693 4.1926 17 8.02012 17 12 L 16.9951 12.373 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.83 0 0 0.83 10 10)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 22 11 C 22.5523 11 23 11.4477 23 12 C 23 12.5523 22.5523 13 22 13 L 2 13 C 1.44772 13 1 12.5523 1 12 C 1 11.4477 1.44772 11 2 11 L 22 11 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-[#E83030] block mb-0.5">Timezone</span>
                    <p className="text-sm font-medium leading-tight">Eastern Standard Time (EST) - New York</p>
                  </div>
                  <svg data-svg-id="SVG_12" className="w-4 h-4 text-[#E83030]/40 self-center">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 8.29295 5.29298 C 8.65907 4.92686 9.23807 4.90427 9.63084 5.22462 L 9.70702 5.29298 L 15.707 11.293 C 16.0975 11.6835 16.0975 12.3165 15.707 12.707 L 9.70702 18.707 C 9.31649 19.0976 8.68348 19.0976 8.29295 18.707 C 7.90243 18.3165 7.90243 17.6835 8.29295 17.293 L 13.5859 12 L 8.29295 6.70704 L 8.22459 6.63087 C 7.90424 6.2381 7.92684 5.65909 8.29295 5.29298 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                </div>
              </div>
            </section>

            {/* Venue Details Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <svg data-svg-id="SVG_14" className="w-5 h-5 text-[#E83030]">
    <g transform="matrix(1 0 0 1 0 0)">
      <g style={{  }}>
        <g transform="matrix(0.83 0 0 0.83 10 10)">
          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 18.9912 9.65332 C 18.9055 7.92303 18.181 6.28061 16.9502 5.0498 C 15.7194 3.819 14.077 3.09452 12.3467 3.00879 L 12 3 C 10.1435 3 8.36256 3.73705 7.0498 5.0498 C 5.73705 6.36256 5 8.14348 5 10 C 5 12.1593 6.21679 14.4871 7.79785 16.5645 C 9.32566 18.5717 11.0795 20.1963 12 20.9951 C 12.9205 20.1963 14.6743 18.5717 16.2021 16.5645 C 17.7832 14.4871 19 12.1593 19 10 L 18.9912 9.65332 Z M 21 10 C 21 12.8337 19.4474 15.603 17.7939 17.7754 C 16.327 19.7028 14.6832 21.2859 13.6553 22.2041 L 13.2549 22.5557 C 13.2379 22.5704 13.2201 22.5851 13.2021 22.5986 C 12.899 22.8266 12.538 22.9626 12.1621 22.9932 L 12 23 C 11.6207 23 11.2504 22.8919 10.9316 22.6904 L 10.7979 22.5986 L 10.7451 22.5557 C 9.78983 21.7308 7.88248 19.978 6.20605 17.7754 C 4.55262 15.603 3 12.8337 3 10 C 3 7.61305 3.94791 5.32357 5.63574 3.63574 C 7.32357 1.94791 9.61305 1 12 1 C 14.3869 1 16.6764 1.94791 18.3643 3.63574 C 20.0521 5.32357 21 7.61305 21 10 Z" strokeLinecap="round" />
        </g>
        <g transform="matrix(0.83 0 0 0.83 10 8.33)">
          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 14 10 C 14 8.89543 13.1046 8 12 8 C 10.8954 8 10 8.89543 10 10 C 10 11.1046 10.8954 12 12 12 C 13.1046 12 14 11.1046 14 10 Z M 16 10 C 16 12.2091 14.2091 14 12 14 C 9.79086 14 8 12.2091 8 10 C 8 7.79086 9.79086 6 12 6 C 14.2091 6 16 7.79086 16 10 Z" strokeLinecap="round" />
        </g>
      </g>
    </g>
  </svg>
                  <h2 className="text-lg font-serif font-bold">Venue Details</h2>
                </div>
                <button className="flex items-center gap-1.5 bg-[#E83030]/10 px-3 py-1 rounded-full hover:bg-[#E83030]/20 transition-colors">
                  <svg data-svg-id="SVG_13" className="w-3 h-3 text-[#E83030]">
      <g transform="matrix(1 0 0 1 0 0)">
        <g style={{  }}>
          <g transform="matrix(0.5 0 0 0.5 6.25 5.75)">
            <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12.5, -11.5)" d="M 21.7178 1.04003 C 22.0647 0.937902 22.4455 1.03144 22.707 1.29296 C 23.0058 1.59176 23.0842 2.04582 22.9033 2.42772 L 13.9033 21.4277 C 13.7225 21.8094 13.3217 22.0367 12.9014 21.9951 C 12.4811 21.9534 12.1327 21.6519 12.0303 21.2422 L 10.1758 13.8242 L 2.75782 11.9697 C 2.34808 11.8673 2.04654 11.5189 2.00489 11.0986 C 1.96327 10.6783 2.19055 10.2775 2.57227 10.0967 L 21.5723 1.09667 L 21.7178 1.04003 Z M 5.95117 10.707 L 11.2422 12.0303 L 11.373 12.0723 C 11.6678 12.1907 11.8914 12.4443 11.9697 12.7578 L 13.292 18.0478 L 19.8984 4.10057 L 5.95117 10.707 Z" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
                  <span className="text-[11px] font-bold text-[#E83030]">Current Location</span>
                </button>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-soft border border-[#E4E0DD]/50 space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <svg data-svg-id="SVG_15" className="w-4 h-4 text-[#9C948B]">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.67 0 0 0.67 8 8)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 18.9912 9.65332 C 18.9055 7.92303 18.181 6.28061 16.9502 5.0498 C 15.7194 3.819 14.077 3.09452 12.3467 3.00879 L 12 3 C 10.1435 3 8.36256 3.73705 7.0498 5.0498 C 5.73705 6.36256 5 8.14348 5 10 C 5 12.1593 6.21679 14.4871 7.79785 16.5645 C 9.32566 18.5717 11.0795 20.1963 12 20.9951 C 12.9205 20.1963 14.6743 18.5717 16.2021 16.5645 C 17.7832 14.4871 19 12.1593 19 10 L 18.9912 9.65332 Z M 21 10 C 21 12.8337 19.4474 15.603 17.7939 17.7754 C 16.327 19.7028 14.6832 21.2859 13.6553 22.2041 L 13.2549 22.5557 C 13.2379 22.5704 13.2201 22.5851 13.2021 22.5986 C 12.899 22.8266 12.538 22.9626 12.1621 22.9932 L 12 23 C 11.6207 23 11.2504 22.8919 10.9316 22.6904 L 10.7979 22.5986 L 10.7451 22.5557 C 9.78983 21.7308 7.88248 19.978 6.20605 17.7754 C 4.55262 15.603 3 12.8337 3 10 C 3 7.61305 3.94791 5.32357 5.63574 3.63574 C 7.32357 1.94791 9.61305 1 12 1 C 14.3869 1 16.6764 1.94791 18.3643 3.63574 C 20.0521 5.32357 21 7.61305 21 10 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.67 0 0 0.67 8 6.67)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 14 10 C 14 8.89543 13.1046 8 12 8 C 10.8954 8 10 8.89543 10 10 C 10 11.1046 10.8954 12 12 12 C 13.1046 12 14 11.1046 14 10 Z M 16 10 C 16 12.2091 14.2091 14 12 14 C 9.79086 14 8 12.2091 8 10 C 8 7.79086 9.79086 6 12 6 C 14.2091 6 16 7.79086 16 10 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
                  </div>
                  <input 
                    type="text" 
                    readOnly 
                    value="Central Park Pickleball Complex, NY"
                    className="w-full bg-[#F6F5F4]/20 border border-[#E4E0DD] rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none"
                  />
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[#E4E0DD] group cursor-pointer">
                  <img src="./assets/IMG_1.webp" alt="Map" className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                      <span className="text-[12px] font-semibold text-[#E83030]">View Large Map</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Two Column Layout for Tablet/Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Court Settings Section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <svg data-svg-id="SVG_16" className="w-5 h-5 text-[#E83030]">
    <g transform="matrix(1 0 0 1 0 0)">
      <g style={{  }}>
        <g transform="matrix(0.83 0 0 0.83 10 10)">
          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 12 C 21 7.02944 16.9706 3 12 3 C 7.02944 3 3 7.02944 3 12 C 3 16.9706 7.02944 21 12 21 C 16.9706 21 21 16.9706 21 12 Z M 23 12 C 23 18.0751 18.0751 23 12 23 C 5.92487 23 1 18.0751 1 12 C 1 5.92487 5.92487 1 12 1 C 18.0751 1 23 5.92487 23 12 Z" strokeLinecap="round" />
        </g>
        <g transform="matrix(0.83 0 0 0.83 10 11.67)">
          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -14)" d="M 11 16 L 11 12 C 11 11.4477 11.4477 11 12 11 C 12.5523 11 13 11.4477 13 12 L 13 16 C 13 16.5523 12.5523 17 12 17 C 11.4477 17 11 16.5523 11 16 Z" strokeLinecap="round" />
        </g>
        <g transform="matrix(0.83 0 0 0.83 10 6.67)">
          <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8)" d="M 12.0098 7 L 12.1123 7.00488 C 12.6165 7.05611 13.0098 7.48224 13.0098 8 C 13.0098 8.51776 12.6165 8.94389 12.1123 8.99512 L 12.0098 9 L 12 9 C 11.4477 9 11 8.55228 11 8 C 11 7.44772 11.4477 7 12 7 L 12.0098 7 Z" strokeLinecap="round" />
        </g>
      </g>
    </g>
  </svg>
                  <h2 className="text-lg font-serif font-bold">Court Settings</h2>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-soft border border-[#E4E0DD]/50 space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9C948B] block mb-3">Environment</span>
                    <div className="bg-[#F6F5F4]/40 p-1 rounded-2xl flex">
                      <button className="flex-1 py-2 text-sm font-semibold text-[#9C948B] rounded-xl transition-all">Indoor</button>
                      <button className="flex-1 py-2 text-sm font-semibold text-[#E83030] bg-white rounded-xl shadow-soft border border-[#E4E0DD]/20">Outdoor</button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9C948B] block mb-3">Surface Type</span>
                    <div className="bg-[#F6F5F4]/40 p-1 rounded-2xl flex">
                      <button className="flex-1 py-2 text-sm font-semibold text-[#E83030] bg-white rounded-xl shadow-soft border border-[#E4E0DD]/20">Hard Court</button>
                      <button className="flex-1 py-2 text-sm font-semibold text-[#9C948B] rounded-xl transition-all">Clay/Grass</button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Registration Rules Section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <svg data-svg-id="SVG_17" className="w-5 h-5 text-[#E83030]">
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
                  <h2 className="text-lg font-serif font-bold">Registration Rules</h2>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-soft border border-[#E4E0DD]/50 space-y-4">
                  <div className="bg-[#F6F5F4]/30 rounded-2xl p-4 border border-[#E4E0DD]/50 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold">Total Capacity</p>
                      <p className="text-[12px] text-[#9C948B]">Maximum teams allowed</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="w-10 h-10 rounded-full bg-white border border-[#E4E0DD] shadow-sm flex items-center justify-center hover:bg-[#F6F5F4] transition-colors">
                        <svg data-svg-id="SVG_18" className="w-5 h-5 text-[#1D1A16]">
              <g transform="matrix(1 0 0 1 0 0)">
                <g style={{  }}>
                  <g transform="matrix(0.83 0 0 0.83 10 10)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(29,26,22)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 11 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 L 5 13 C 4.44772 13 4 12.5523 4 12 C 4 11.4477 4.44772 11 5 11 L 19 11 Z" strokeLinecap="round" />
                  </g>
                </g>
              </g>
            </svg>
                      </button>
                      <span className="font-serif text-xl font-black">32</span>
                      <button className="w-10 h-10 rounded-full bg-[#E83030] shadow-md flex items-center justify-center hover:bg-[#d12b2b] transition-colors">
                        <svg data-svg-id="SVG_19" className="w-5 h-5 text-white">
              <g transform="matrix(1 0 0 1 0 0)">
                <g style={{  }}>
                  <g transform="matrix(0.83 0 0 0.83 10 10)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 11 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 L 5 13 C 4.44772 13 4 12.5523 4 12 C 4 11.4477 4.44772 11 5 11 L 19 11 Z" strokeLinecap="round" />
                  </g>
                  <g transform="matrix(0.83 0 0 0.83 10 10)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 11 19 L 11 5 C 11 4.44772 11.4477 4 12 4 C 12.5523 4 13 4.44772 13 5 L 13 19 C 13 19.5523 12.5523 20 12 20 C 11.4477 20 11 19.5523 11 19 Z" strokeLinecap="round" />
                  </g>
                </g>
              </g>
            </svg>
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#FBDADA]/30 rounded-2xl p-4 border border-[#E83030]/10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#E83030] block mb-4">Registration Window</span>
                    <div className="flex justify-between relative">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-8 bg-[#E83030]/20"></div>
                      <div>
                        <p className="text-[12px] text-[#9C948B] mb-1">Opens</p>
                        <p className="text-sm font-bold">Aug 01, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[12px] text-[#9C948B] mb-1">Closes</p>
                        <p className="text-sm font-bold">Oct 10, 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <svg data-svg-id="SVG_20" className="w-5 h-5 text-[#1D1A16] shrink-0 mt-0.5">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 10 10)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(29,26,22)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 12 C 21 7.02944 16.9706 3 12 3 C 7.02944 3 3 7.02944 3 12 C 3 16.9706 7.02944 21 12 21 C 16.9706 21 21 16.9706 21 12 Z M 23 12 C 23 18.0751 18.0751 23 12 23 C 5.92487 23 1 18.0751 1 12 C 1 5.92487 5.92487 1 12 1 C 18.0751 1 23 5.92487 23 12 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 10)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(29,26,22)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 14.3692 9.22462 C 14.7619 8.90427 15.3409 8.92686 15.707 9.29298 C 16.0732 9.65909 16.0958 10.2381 15.7754 10.6309 L 15.707 10.707 L 11.707 14.707 C 11.3409 15.0732 10.7619 15.0958 10.3692 14.7754 L 10.293 14.707 L 8.29298 12.707 L 8.22462 12.6309 C 7.90427 12.2381 7.92686 11.6591 8.29298 11.293 C 8.65909 10.9269 9.2381 10.9043 9.63087 11.2246 L 9.70704 11.293 L 11 12.5859 L 14.293 9.29298 L 14.3692 9.22462 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
                    <p className="text-[12px] leading-relaxed text-[#9C948B]">
                      Registration will automatically close once the <span className="text-[#1D1A16] font-bold">32 team</span> limit is reached or the window expires.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Actions */}
        <footer className="fixed bottom-0 left-0 right-0 lg:left-80 bg-[#FBFAF9]/80 backdrop-blur-xl border-t border-[#E4E0DD] p-4 z-50">
          <div className="max-w-4xl mx-auto space-y-3">
            <button className="w-full bg-[#E83030] text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-[#E83030]/20 hover:bg-[#d12b2b] transition-all active:scale-[0.98]">
              Continue to Registration →
            </button>
            <button className="w-full py-2 text-sm font-medium text-[#9C948B] hover:text-[#1D1A16] transition-colors">
              Back to Basic Info
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}