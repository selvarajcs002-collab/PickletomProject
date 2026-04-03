import { Icon } from '@iconify/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFAF9] text-[#1D1A16] font-sans flex flex-col lg:flex-row">
      {/* Desktop Sidebar Navigation - Creative Expansion */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-[#E4E0DD] p-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-[#1D1A16] rounded-lg flex items-center justify-center">
            <svg data-svg-id="SVG_3" className="w-6 h-6 text-[#FBFAF9]" viewBox="0 0 16 16">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(251,250,249)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
          </div>
          <span className="font-bold text-xl tracking-tight">TourneyPro</span>
        </div>
        
        <nav className="space-y-6">
          {[
            { step: 1, label: 'Branding', active: true },
            { step: 2, label: 'Schedule', active: false },
            { step: 3, label: 'Location', active: false },
            { step: 4, label: 'Rules', active: false },
            { step: 5, label: 'Review', active: false },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-4 group cursor-pointer">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
                item.active ? 'bg-[#E83030] border-[#E83030] text-white' : 'border-[#E4E0DD] text-[#9C948B] group-hover:border-[#9C948B]'
              }`}>
                {item.step}
              </div>
              <span className={`font-semibold ${item.active ? 'text-[#1D1A16]' : 'text-[#9C948B] group-hover:text-[#1D1A16]'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-[#E4E0DD]">
          <div className="flex items-center gap-3 text-[#9C948B] hover:text-[#1D1A16] cursor-pointer transition-colors">
            <Icon icon="lucide:help-circle" className="w-5 h-5" />
            <span className="text-sm font-medium">Support Center</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Header - Mobile & Tablet */}
        <header className="sticky top-0 z-30 bg-[#FBFAF9]/80 backdrop-blur-md border-b border-[#E4E0DD]">
          {/* Status Bar (Mobile Only) */}
          <div className="flex justify-between items-center px-4 h-10 lg:hidden">
            <svg data-svg-id="SVG_1" className="w-[70px] h-[40px]" viewBox="0 0 70 40">
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
            <svg data-svg-id="SVG_2" className="w-[96px] h-[40px]" viewBox="0 0 96 40">
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
          <div className="flex items-center justify-between px-4 py-3 lg:px-8 lg:py-6">
            <div className="lg:hidden w-10 h-10 bg-[#1D1A16] rounded-md flex items-center justify-center">
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
            
            <div className="flex flex-col items-center flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#9C948B] mb-1">Step 1 of 5</span>
              <h2 className="hidden lg:block text-2xl font-serif font-bold">Tournament Branding</h2>
            </div>

            <button className="p-2 hover:bg-[#F6F5F4] rounded-full transition-colors">
              <svg data-svg-id="SVG_4" className="w-5 h-5 text-[#9C948B]" viewBox="0 0 20 20">
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
          <div className="w-full h-1 bg-[#F6F5F4]/30">
            <div className="h-full bg-[#E83030] w-1/5 transition-all duration-500"></div>
          </div>
        </header>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6 lg:px-12 lg:py-10 max-w-4xl mx-auto w-full">
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <div className="flex items-center gap-2">
              <svg data-svg-id="SVG_5" className="w-5 h-5 text-[#E83030]" viewBox="0 0 20 20">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 10 10)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 9 C 21 8.73478 20.8946 8.48051 20.707 8.29297 C 20.5429 8.12883 20.3276 8.02757 20.0986 8.00488 L 20 8 L 17 8 C 16.7033 8 16.4214 7.86856 16.2314 7.64062 L 14.0312 5 L 9.96875 5 L 7.76855 7.64062 C 7.57856 7.86856 7.29674 8 7 8 L 4 8 C 3.73478 8 3.48051 8.10543 3.29297 8.29297 C 3.10543 8.48051 3 8.73478 3 9 L 3 18 C 3 18.2652 3.10543 18.5195 3.29297 18.707 C 3.48051 18.8946 3.73478 19 4 19 L 20 19 C 20.2652 19 20.5195 18.8946 20.707 18.707 C 20.8946 18.5195 21 18.2652 21 18 L 21 9 Z M 23 18 C 23 18.7957 22.6837 19.5585 22.1211 20.1211 C 21.5585 20.6837 20.7957 21 20 21 L 4 21 C 3.20435 21 2.44152 20.6837 1.87891 20.1211 C 1.3163 19.5585 1 18.7956 1 18 L 1 9 C 1 8.20435 1.3163 7.44152 1.87891 6.87891 C 2.44152 6.3163 3.20435 6 4 6 L 6.53125 6 L 8.73145 3.35938 L 8.80762 3.2793 C 8.99282 3.10135 9.24033 3 9.5 3 L 14.5 3 L 14.6104 3.00586 C 14.8656 3.03418 15.1023 3.15991 15.2686 3.35938 L 17.4688 6 L 20 6 L 20.2969 6.01465 C 20.9835 6.08291 21.6289 6.38671 22.1211 6.87891 C 22.6837 7.44152 23 8.20435 23 9 L 23 18 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 10.83)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -13)" d="M 14 13 C 14 11.8954 13.1046 11 12 11 C 10.8954 11 10 11.8954 10 13 C 10 14.1046 10.8954 15 12 15 C 13.1046 15 14 14.1046 14 13 Z M 16 13 C 16 15.2091 14.2091 17 12 17 C 9.79086 17 8 15.2091 8 13 C 8 10.7909 9.79086 9 12 9 C 14.2091 9 16 10.7909 16 13 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
              <h1 className="text-lg font-serif font-bold">Tournament Branding</h1>
            </div>
            <span className="px-3 py-1 bg-[#F6F5F4] text-[#9C948B] text-xs rounded-full">Required</span>
          </div>

          <div className="space-y-8">
            {/* Media Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cover Photo Upload */}
              <div className="md:col-span-2 relative">
                <div className="dashed-spacing h-48 md:h-64 flex flex-col items-center justify-center bg-[#F6F5F4]/20 hover:bg-[#F6F5F4]/40 transition-colors cursor-pointer group">
                  <svg data-svg-id="SVG_6" className="w-8 h-8 text-[#9C948B] mb-3 group-hover:scale-110 transition-transform" viewBox="0 0 32 32">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(1.33 0 0 1.33 25.33 6.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-19, -5)" d="M 22 4 C 22.5523 4 23 4.44772 23 5 C 23 5.55228 22.5523 6 22 6 L 16 6 C 15.4477 6 15 5.55228 15 5 C 15 4.44772 15.4477 4 16 4 L 22 4 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(1.33 0 0 1.33 25.33 6.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-19, -5)" d="M 18 8 L 18 2 C 18 1.44772 18.4477 1 19 1 C 19.5523 1 20 1.44772 20 2 L 20 8 C 20 8.55228 19.5523 9 19 9 C 18.4477 9 18 8.55228 18 8 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(1.33 0 0 1.33 16 16)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 2 19 L 2 5 C 2 4.20435 2.3163 3.44152 2.87891 2.87891 C 3.44152 2.3163 4.20435 2 5 2 L 12.5 2 C 13.0523 2 13.5 2.44772 13.5 3 C 13.5 3.55228 13.0523 4 12.5 4 L 5 4 C 4.73478 4 4.48051 4.10543 4.29297 4.29297 C 4.10543 4.48051 4 4.73478 4 5 L 4 19 C 4 19.2652 4.10543 19.5195 4.29297 19.707 C 4.48051 19.8946 4.73478 20 5 20 L 19 20 C 19.2652 20 19.5195 19.8946 19.707 19.707 C 19.8946 19.5195 20 19.2652 20 19 L 20 11.5 C 20 10.9477 20.4477 10.5 21 10.5 C 21.5523 10.5 22 10.9477 22 11.5 L 22 19 C 22 19.7957 21.6837 20.5585 21.1211 21.1211 C 20.5585 21.6837 19.7957 22 19 22 L 5 22 C 4.20435 22 3.44152 21.6837 2.87891 21.1211 C 2.3163 20.5585 2 19.7956 2 19 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(1.33 0 0 1.33 18 21.55)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-13.5, -16.16)" d="M 16.5 10.3284 C 17.2954 10.3284 18.0585 10.6441 18.6211 11.2064 L 18.6211 11.2073 L 21.707 14.2933 L 21.7754 14.3685 C 22.0961 14.7612 22.0732 15.3411 21.707 15.7073 C 21.3409 16.0733 20.7618 16.0959 20.3691 15.7757 L 20.2929 15.7073 L 17.207 12.6214 C 17.0195 12.4339 16.7651 12.3284 16.5 12.3284 C 16.2679 12.3284 16.0441 12.4092 15.8662 12.555 L 15.7929 12.6214 L 6.707 21.7073 C 6.31652 22.0977 5.68343 22.0977 5.29294 21.7073 C 4.90247 21.3169 4.90257 20.6838 5.29294 20.2933 L 14.3789 11.2073 L 14.3789 11.2064 L 14.5986 11.0071 C 15.1324 10.5699 15.8039 10.3284 16.5 10.3284 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(1.33 0 0 1.33 12 12)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(156,148,139)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9, -9)" d="M 10 9 C 10 8.44772 9.55228 8 9 8 C 8.44772 8 8 8.44772 8 9 C 8 9.55228 8.44772 10 9 10 C 9.55228 10 10 9.55228 10 9 Z M 12 9 C 12 10.6569 10.6569 12 9 12 C 7.34315 12 6 10.6569 6 9 C 6 7.34315 7.34315 6 9 6 C 10.6569 6 12 7.34315 12 9 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                  <span className="text-sm font-semibold mb-1">Upload Cover Photo</span>
                  <span className="text-xs text-[#9C948B]">16:9 ratio recommended (JPG, PNG)</span>
                </div>
              </div>

              {/* Avatar Upload */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative group cursor-pointer">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                    <img src="./assets/IMG_1.webp" className="w-full h-full object-cover" alt="Tournament Avatar" />
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <svg data-svg-id="SVG_7" className="w-6 h-6 text-white" viewBox="0 0 24 24">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(1 0 0 1 12 17)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -17)" d="M 11 21 L 11 13 C 11 12.4477 11.4477 12 12 12 C 12.5523 12 13 12.4477 13 13 L 13 21 C 13 21.5523 12.5523 22 12 22 C 11.4477 22 11 21.5523 11 21 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(1 0 0 1 12 9.62)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -9.62)" d="M 8.36978 2.02809 C 9.57988 1.93212 10.7965 2.11279 11.9264 2.55641 C 13.0562 3.00005 14.0707 3.69509 14.8922 4.58864 C 15.5422 5.29569 16.0556 6.11344 16.4147 6.99977 L 17.4997 6.99977 L 17.7204 7.00466 C 18.8225 7.04874 19.8883 7.42274 20.777 8.08181 C 21.7247 8.78461 22.4207 9.77407 22.7633 10.9031 C 23.1059 12.0324 23.076 13.2422 22.6784 14.3533 C 22.2807 15.4643 21.5366 16.4185 20.5553 17.074 L 20.4674 17.1258 C 20.0197 17.3633 19.4562 17.2281 19.1686 16.7976 C 18.8618 16.3384 18.9857 15.7177 19.445 15.4109 L 19.6715 15.2449 C 20.1839 14.8397 20.5742 14.298 20.7956 13.6795 C 21.0486 12.9725 21.0682 12.2027 20.8502 11.4841 C 20.6323 10.7655 20.1888 10.1356 19.5856 9.68825 C 19.0579 9.29694 18.432 9.06382 17.7809 9.01149 L 17.4997 8.99977 L 15.7096 8.99977 C 15.2677 8.99961 14.8781 8.7094 14.7516 8.28591 C 14.4912 7.4137 14.0356 6.61228 13.4196 5.94216 C 12.8034 5.27193 12.0424 4.75046 11.195 4.41774 C 10.3476 4.08511 9.43545 3.94929 8.52798 4.02126 C 7.62048 4.09327 6.74104 4.37068 5.95669 4.83278 C 5.17228 5.29492 4.50347 5.93026 4.00064 6.68923 C 3.49794 7.44809 3.17405 8.31128 3.05435 9.21364 C 2.93464 10.1162 3.02261 11.0344 3.31021 11.8982 C 3.59781 12.7619 4.07774 13.5494 4.7145 14.2 C 5.10067 14.5947 5.09448 15.2278 4.69985 15.614 C 4.30522 16.0003 3.67212 15.9929 3.28579 15.5984 L 2.9772 15.2644 C 2.28054 14.4667 1.7473 13.5378 1.41177 12.53 C 1.02831 11.3783 0.912339 10.1543 1.07192 8.95095 C 1.23152 7.74768 1.66329 6.59664 2.33364 5.58474 C 3.00409 4.57277 3.89616 3.72631 4.94204 3.11013 C 5.98778 2.49406 7.15987 2.12411 8.36978 2.02809 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(1 0 0 1 12 15)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -15)" d="M 11.3691 12.2246 C 11.7619 11.9043 12.3409 11.9269 12.707 12.293 L 16.707 16.293 L 16.7754 16.3692 C 17.0957 16.7619 17.0731 17.3409 16.707 17.707 C 16.3409 18.0732 15.7619 18.0958 15.3691 17.7754 L 15.293 17.707 L 12 14.4141 L 8.70702 17.707 C 8.31649 18.0976 7.68348 18.0976 7.29295 17.707 C 6.90243 17.3165 6.90243 16.6835 7.29295 16.293 L 11.293 12.293 L 11.3691 12.2246 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                  </div>
                </div>
                <span className="mt-3 text-xs font-medium text-[#9C948B] md:hidden">Tournament Logo</span>
              </div>
            </section>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title & Tagline Card */}
              <div className="bg-white p-5 rounded-2xl soft-shadow border border-[#E4E0DD]/50 space-y-6 md:col-span-2">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg data-svg-id="SVG_8" className="w-4 h-4 text-[#E83030]" viewBox="0 0 16 16">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 3.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -5.5)" d="M 19 7 L 19 5 L 5 5 L 5 7 C 5 7.55228 4.55228 8 4 8 C 3.44772 8 3 7.55228 3 7 L 3 4 L 3.00488 3.89746 C 3.05621 3.39333 3.48232 3 4 3 L 20 3 L 20.1025 3.00488 C 20.6067 3.05621 21 3.48232 21 4 L 21 7 C 21 7.55228 20.5523 8 20 8 C 19.4477 8 19 7.55228 19 7 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 8 13.33)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -20)" d="M 15 19 C 15.5523 19 16 19.4477 16 20 C 16 20.5523 15.5523 21 15 21 L 9 21 C 8.44772 21 8 20.5523 8 20 C 8 19.4477 8.44772 19 9 19 L 15 19 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 11 20 L 11 4 C 11 3.44772 11.4477 3 12 3 C 12.5523 3 13 3.44772 13 4 L 13 20 C 13 20.5523 12.5523 21 12 21 C 11.4477 21 11 20.5523 11 20 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                    <label className="text-sm font-semibold">Tournament Title</label>
                  </div>
                  <input 
                    type="text" 
                    placeholder="e.g. The Coastal Pickleball Classic 2024"
                    className="w-full px-4 py-3 bg-[#FBFAF9] border border-[#E4E0DD] rounded-xl outline-none focus:ring-2 focus:ring-[#E83030]/20 focus:border-[#E83030] transition-all text-base"
                  />
                  <p className="mt-2 text-[10px] text-[#9C948B] italic">This will be the main name shown on all promotional materials.</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg data-svg-id="SVG_9" className="w-4 h-4 text-[#E83030]" viewBox="0 0 16 16">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 20 5 C 20 4.73478 19.8946 4.48051 19.707 4.29297 C 19.5195 4.10543 19.2652 4 19 4 L 5 4 C 4.73478 4 4.48051 4.10543 4.29297 4.29297 C 4.10543 4.48051 4 4.73478 4 5 L 4 18.5859 L 6.29297 16.293 L 6.36621 16.2266 C 6.54417 16.0807 6.76791 16 7 16 L 19 16 C 19.2652 16 19.5195 15.8946 19.707 15.707 C 19.8946 15.5195 20 15.2652 20 15 L 20 5 Z M 22 15 C 22 15.7957 21.6837 16.5585 21.1211 17.1211 C 20.5585 17.6837 19.7957 18 19 18 L 7.41406 18 L 3.70703 21.707 C 3.42103 21.993 2.99086 22.0786 2.61719 21.9238 C 2.24359 21.769 2 21.4044 2 21 L 2 5 C 2 4.20435 2.3163 3.44152 2.87891 2.87891 C 3.44152 2.3163 4.20435 2 5 2 L 19 2 C 19.7956 2 20.5585 2.3163 21.1211 2.87891 C 21.6837 3.44152 22 4.20435 22 5 L 22 15 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 6 6.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9, -10)" d="M 9 10 L 9 9 L 8 9 C 7.44772 9 7 8.55228 7 8 C 7 7.44772 7.44772 7 8 7 L 10 7 L 10.1025 7.00488 C 10.6067 7.05621 11 7.48232 11 8 L 11 10 C 11 10.7957 10.6837 11.5585 10.1211 12.1211 C 9.55849 12.6837 8.79565 13 8 13 C 7.44772 13 7 12.5523 7 12 C 7 11.4477 7.44772 11 8 11 C 8.26522 11 8.51949 10.8946 8.70703 10.707 C 8.89457 10.5195 9 10.2652 9 10 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 10 6.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15, -10)" d="M 15 10 L 15 9 L 14 9 C 13.4477 9 13 8.55228 13 8 C 13 7.44772 13.4477 7 14 7 L 16 7 L 16.1025 7.00488 C 16.6067 7.05621 17 7.48232 17 8 L 17 10 C 17 10.7957 16.6837 11.5585 16.1211 12.1211 C 15.5585 12.6837 14.7957 13 14 13 C 13.4477 13 13 12.5523 13 12 C 13 11.4477 13.4477 11 14 11 C 14.2652 11 14.5195 10.8946 14.707 10.707 C 14.8946 10.5195 15 10.2652 15 10 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                    <label className="text-sm font-semibold">Catchy Tagline</label>
                  </div>
                  <input 
                    type="text" 
                    placeholder="e.g. Where Legends Meet the Court"
                    className="w-full px-4 py-3 bg-[#FBFAF9] border border-[#E4E0DD] rounded-xl outline-none focus:ring-2 focus:ring-[#E83030]/20 focus:border-[#E83030] transition-all text-base"
                  />
                </div>
              </div>

              {/* Description Card */}
              <div className="bg-white p-5 rounded-2xl soft-shadow border border-[#E4E0DD]/50 md:col-span-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg data-svg-id="SVG_10" className="w-4 h-4 text-[#E83030]" viewBox="0 0 16 16">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 6 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9, -12)" d="M 15 11 C 15.5523 11 16 11.4477 16 12 C 16 12.5523 15.5523 13 15 13 L 3 13 C 2.44772 13 2 12.5523 2 12 C 2 11.4477 2.44772 11 3 11 L 15 11 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 6.67 12)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-10, -18)" d="M 17 17 C 17.5523 17 18 17.4477 18 18 C 18 18.5523 17.5523 19 17 19 L 3 19 C 2.44772 19 2 18.5523 2 18 C 2 17.4477 2.44772 17 3 17 L 17 17 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 8 4)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -6)" d="M 21 5 C 21.5523 5 22 5.44772 22 6 C 22 6.55228 21.5523 7 21 7 L 3 7 C 2.44772 7 2 6.55228 2 6 C 2 5.44772 2.44772 5 3 5 L 21 5 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                    <label className="text-sm font-semibold">Public Description</label>
                  </div>
                  <span className="text-[10px] font-medium text-[#9C948B]">0/300</span>
                </div>
                
                <textarea 
                  className="w-full h-32 px-4 py-3 bg-[#FBFAF9] border border-[#E4E0DD] rounded-xl outline-none focus:ring-2 focus:ring-[#E83030]/20 focus:border-[#E83030] transition-all text-sm resize-none"
                  placeholder="Briefly describe what makes your tournament special (rules, vibe, special guests)..."
                ></textarea>

                <div className="mt-4 p-3 bg-[#FBDADA]/20 border border-[#E83030]/10 rounded-xl flex gap-3">
                  <svg data-svg-id="SVG_11" className="w-4 h-4 text-[#E83030] shrink-0 mt-0.5" viewBox="0 0 16 16">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(0.67 0 0 0.67 8 8)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 12 C 21 7.02944 16.9706 3 12 3 C 7.02944 3 3 7.02944 3 12 C 3 16.9706 7.02944 21 12 21 C 16.9706 21 21 16.9706 21 12 Z M 23 12 C 23 18.0751 18.0751 23 12 23 C 5.92487 23 1 18.0751 1 12 C 1 5.92487 5.92487 1 12 1 C 18.0751 1 23 5.92487 23 12 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.67 0 0 0.67 8 9.33)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -14)" d="M 11 16 L 11 12 C 11 11.4477 11.4477 11 12 11 C 12.5523 11 13 11.4477 13 12 L 13 16 C 13 16.5523 12.5523 17 12 17 C 11.4477 17 11 16.5523 11 16 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.67 0 0 0.67 8 5.33)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(232,48,48)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8)" d="M 12.0098 7 L 12.1123 7.00488 C 12.6165 7.05611 13.0098 7.48224 13.0098 8 C 13.0098 8.51776 12.6165 8.94389 12.1123 8.99512 L 12.0098 9 L 12 9 C 11.4477 9 11 8.55228 11 8 C 11 7.44772 11.4477 7 12 7 L 12.0098 7 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
                  <p className="text-[11px] leading-relaxed text-[#450808]">
                    Pro Tip: Keep it under 3 sentences for better mobile viewing on social sharing cards.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Spacer for sticky footer */}
          <div className="h-32 lg:h-10"></div>
        </div>

        {/* Sticky Footer */}
        <footer className="sticky bottom-0 z-30 bg-[#FBFAF9]/80 backdrop-blur-md border-t border-[#E4E0DD] p-4 lg:px-12 lg:py-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse gap-3">
            <button className="w-full md:w-auto md:px-12 h-14 bg-[#E83030] text-white font-bold rounded-2xl hover:bg-[#d12b2b] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              Continue to Schedule <Icon icon="lucide:arrow-right" className="w-5 h-5" />
            </button>
            <button className="w-full md:w-auto md:px-8 h-10 md:h-14 text-[#9C948B] font-semibold text-sm hover:text-[#1D1A16] transition-colors">
              Save Progress for Later
            </button>
          </div>
        </footer>
      </main>

      {/* Desktop Right Panel - Creative Expansion */}
      <aside className="hidden xl:flex flex-col w-80 bg-white border-l border-[#E4E0DD] p-8 sticky top-0 h-screen overflow-y-auto">
        <h3 className="font-serif font-bold text-lg mb-6">Live Preview</h3>
        <div className="bg-[#FBFAF9] rounded-2xl border border-[#E4E0DD] overflow-hidden soft-shadow">
          <div className="h-32 bg-[#E4E0DD] relative">
            <div className="absolute -bottom-8 left-4 w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-white">
              <img src="./assets/IMG_1.webp" className="w-full h-full object-cover opacity-50" alt="Preview" />
            </div>
          </div>
          <div className="p-4 pt-10">
            <div className="h-4 w-3/4 bg-[#E4E0DD] rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-[#F6F5F4] rounded mb-4"></div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-[#F6F5F4] rounded"></div>
              <div className="h-2 w-full bg-[#F6F5F4] rounded"></div>
              <div className="h-2 w-2/3 bg-[#F6F5F4] rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#9C948B]">Checklist</h4>
          {[
            { label: 'High-res cover photo', done: false },
            { label: 'Tournament title', done: false },
            { label: 'Description (min 50 chars)', done: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <div className="w-5 h-5 rounded border border-[#E4E0DD] flex items-center justify-center">
                {item.done && <Icon icon="lucide:check" className="w-3 h-3 text-[#E83030]" />}
              </div>
              <span className="text-[#9C948B]">{item.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

// Note: The SVG IDs SVG_1 through SVG_11 are preserved as literal strings in the JSX 
// to ensure the post-processing step can inject the original SVG content.
// The layout uses Flexbox and Grid for a modern, responsive experience.
// Mobile view matches the 390px design exactly, while Tablet/Desktop expand the UI.