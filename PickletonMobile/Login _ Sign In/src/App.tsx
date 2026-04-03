import { Icon } from '@iconify/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#bdc1ca] font-['Inter'] flex flex-col lg:flex-row">
      {/* Desktop Left Side - Brand/Marketing (Visible only on lg+) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1e2128] flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute top-12 left-12 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
            <svg data-svg-id="SVG_3" className="w-6 h-6 text-[#000000]" viewBox="0 0 22 22">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.92 0 0 0.92 11 11)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">PICKLEBALL PRO</span>
        </div>
        
        <div className="max-w-lg z-10">
          <h1 className="text-6xl mb-6 leading-tight">Elevate Your Game.</h1>
          <p className="text-xl text-[#bdc1ca] leading-relaxed">
            Join the fastest growing community of pickleball enthusiasts. 
            Track your stats, find local courts, and connect with players in your area.
          </p>
          <div className="mt-12 flex gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#1e2128] bg-[#323743] flex items-center justify-center overflow-hidden">
                  <Icon icon="ph:user-fill" className="w-6 h-6 text-[#bdc1ca]" />
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white font-bold">10k+ Players</span>
              <span className="text-sm">Active in your region</span>
            </div>
          </div>
        </div>

        {/* Decorative large arrow from design */}
        <div className="absolute -bottom-20 -right-20 opacity-10 rotate-[-45deg]">
          <svg data-svg-id="SVG_10" className="w-[400px] h-[400px] text-[#F44725]" viewBox="0 0 60 60">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(2.5 0 0 2.5 30 30)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 11 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 L 5 13 C 4.44772 13 4 12.5523 4 12 C 4 11.4477 4.44772 11 5 11 L 19 11 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(2.5 0 0 2.5 38.75 30)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -12)" d="M 11.293 4.29297 C 11.6591 3.92685 12.2381 3.90426 12.6309 4.22461 L 12.7071 4.29297 L 19.7071 11.293 C 20.0976 11.6835 20.0976 12.3165 19.7071 12.707 L 12.7071 19.707 C 12.3166 20.0976 11.6835 20.0976 11.293 19.707 C 10.9025 19.3165 10.9025 18.6835 11.293 18.293 L 17.586 12 L 11.293 5.70703 L 11.2247 5.63086 C 10.9043 5.23809 10.9269 4.65909 11.293 4.29297 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile Header / Status Bar */}
        <header className="w-full h-[108px] flex flex-col lg:hidden">
          <div className="h-10 flex justify-between items-center px-6">
            <svg data-svg-id="SVG_1" className="w-[70px] h-10" viewBox="0 0 70 40">
            <g transform="matrix(1.03 0 0 1 -1 0)">
              <g style={{  }}>
                <g transform="matrix(1 0 0 1 35 20)">
                  <g style={{  }}>
                    <g transform="matrix(0.97 0 0 1 -2.01 2.14)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-33.93, -22.14)" d="M 33.7866 16.7856 C 31.5754 16.7856 30 18.2974 30 20.3673 L 30 20.3815 C 30 22.3171 31.3705 23.7442 33.3274 23.7442 C 34.7261 23.7442 35.6163 23.0307 35.9907 22.2253 L 36.132 22.2253 C 36.132 22.303 36.1249 22.3807 36.1249 22.4584 C 36.0472 24.4082 35.362 25.9907 33.7442 25.9907 C 32.847 25.9907 32.2183 25.5244 31.9498 24.8109 L 31.9286 24.7403 L 30.1342 24.7403 L 30.1484 24.818 C 30.4733 26.3792 31.8721 27.4884 33.7442 27.4884 C 36.3086 27.4884 37.8557 25.4538 37.8557 22.0204 L 37.8557 22.0063 C 37.8557 18.3328 35.9624 16.7856 33.7866 16.7856 Z M 33.7795 22.3454 C 32.6209 22.3454 31.7803 21.4977 31.7803 20.3179 L 31.7803 20.3038 C 31.7803 19.1664 32.6774 18.2692 33.8007 18.2692 C 34.931 18.2692 35.8141 19.1805 35.8141 20.3461 L 35.8141 20.3603 C 35.8141 21.5118 34.931 22.3454 33.7795 22.3454 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.97 0 0 1 4.58 2.13)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-40.72, -22.13)" d="M 40.7158 20.6287 C 41.3657 20.6287 41.839 20.1342 41.839 19.5125 C 41.839 18.8838 41.3657 18.3963 40.7158 18.3963 C 40.0729 18.3963 39.5925 18.8838 39.5925 19.5125 C 39.5925 20.1342 40.0729 20.6287 40.7158 20.6287 Z M 40.7158 25.8706 C 41.3657 25.8706 41.839 25.3831 41.839 24.7544 C 41.839 24.1257 41.3657 23.6382 40.7158 23.6382 C 40.0729 23.6382 39.5925 24.1257 39.5925 24.7544 C 39.5925 25.3831 40.0729 25.8706 40.7158 25.8706 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.97 0 0 1 11.26 2.14)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-47.58, -22.14)" d="M 48.521 27.234 L 50.2659 27.234 L 50.2659 25.2772 L 51.6364 25.2772 L 51.6364 23.7724 L 50.2659 23.7724 L 50.2659 17.04 L 47.6873 17.04 C 46.3027 19.1452 44.8545 21.4906 43.5334 23.7866 L 43.5334 25.2772 L 48.521 25.2772 L 48.521 27.234 Z M 45.2289 23.8148 L 45.2289 23.7088 C 46.2179 21.978 47.3977 20.0918 48.4432 18.4953 L 48.5492 18.4953 L 48.5492 23.8148 L 45.2289 23.8148 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.97 0 0 1 18.57 2.14)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-55.1, -22.14)" d="M 55.5137 27.234 L 57.3364 27.234 L 57.3364 17.04 L 55.5208 17.04 L 52.8575 18.9121 L 52.8575 20.6287 L 55.3936 18.8343 L 55.5137 18.8343 L 55.5137 27.234 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
            <svg data-svg-id="SVG_2" className="w-[96px] h-10" viewBox="0 0 96 40">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(1 0 0 1 48 20)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 17.19 1.7)">
                      <path style={{ stroke: "rgb(255,255,255)", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "none", fillRule: "nonzero", opacity: "0.35" }} transform=" translate(-65.19, -21.7)" d="M 55.0532 20.1702 C 55.0532 18.2372 56.6202 16.6702 58.5532 16.6702 L 71.8298 16.6702 C 73.7628 16.6702 75.3298 18.2372 75.3298 20.1702 L 75.3298 23.234 C 75.3298 25.167 73.7628 26.734 71.8298 26.734 L 58.5532 26.734 C 56.6202 26.734 55.0532 25.167 55.0532 23.234 L 55.0532 20.1702 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 29.28 2.22)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "0.4" }} transform=" translate(-77.28, -22.22)" d="M 76.6808 20.4255 L 76.6808 24.0173 C 77.4035 23.7131 77.8734 23.0054 77.8734 22.2214 C 77.8734 21.4374 77.4035 20.7297 76.6808 20.4255 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 17.19 1.7)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-65.19, -21.7)" d="M 56.2553 19.8723 C 56.2553 18.7677 57.1508 17.8723 58.2553 17.8723 L 72.1277 17.8723 C 73.2322 17.8723 74.1277 18.7677 74.1277 19.8723 L 74.1277 23.5319 C 74.1277 24.6364 73.2322 25.5319 72.1277 25.5319 L 58.2553 25.5319 C 57.1508 25.5319 56.2553 24.6364 56.2553 23.5319 L 56.2553 19.8723 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -6.64 2.06)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "evenodd", opacity: "1" }} transform=" translate(-41.36, -22.06)" d="M 41.3621 19.2234 C 43.4613 19.2235 45.4802 20.0468 47.0016 21.5232 C 47.1162 21.6372 47.2993 21.6357 47.4121 21.52 L 48.5072 20.3918 C 48.5644 20.3331 48.5962 20.2536 48.5957 20.1708 C 48.5953 20.0881 48.5625 20.0089 48.5047 19.9509 C 44.5116 16.0447 38.212 16.0447 34.2189 19.9509 C 34.161 20.0089 34.1282 20.088 34.1277 20.1707 C 34.1271 20.2535 34.1589 20.3331 34.216 20.3918 L 35.3115 21.52 C 35.4242 21.6359 35.6075 21.6374 35.722 21.5232 C 37.2435 20.0467 39.2627 19.2234 41.3621 19.2234 Z M 41.3923 22.6292 C 42.5456 22.6291 43.6579 23.0667 44.5128 23.857 C 44.6284 23.9691 44.8106 23.9667 44.9233 23.8515 L 46.0172 22.7233 C 46.0748 22.6642 46.1067 22.5839 46.1059 22.5005 C 46.1051 22.417 46.0715 22.3374 46.0127 22.2795 C 43.4093 19.8075 39.3775 19.8075 36.774 22.2795 C 36.7152 22.3374 36.6816 22.4171 36.6809 22.5005 C 36.6801 22.584 36.7122 22.6642 36.7699 22.7233 L 37.8634 23.8515 C 37.9762 23.9667 38.1583 23.9691 38.274 23.857 C 39.1283 23.0673 40.2397 22.6297 41.3923 22.6292 Z M 43.6166 24.8312 C 43.6183 24.9149 43.5861 24.9955 43.5276 25.0541 L 41.6354 27.0032 C 41.58 27.0605 41.5044 27.0928 41.4255 27.0928 C 41.3466 27.0928 41.2709 27.0605 41.2155 27.0032 L 39.323 25.0541 C 39.2645 24.9955 39.2324 24.9148 39.2341 24.8311 C 39.2358 24.7475 39.2713 24.6683 39.3322 24.6122 C 40.5406 23.5689 42.3104 23.5689 43.5188 24.6122 C 43.5796 24.6683 43.615 24.7475 43.6166 24.8312 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -26.21 2.98)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-21.79, -22.98)" d="M 20.5106 19.5744 C 20.5106 19.1044 20.8917 18.7234 21.3617 18.7234 L 22.2128 18.7234 C 22.6828 18.7234 23.0638 19.1044 23.0638 19.5744 L 23.0638 26.3829 C 23.0638 26.853 22.6828 27.234 22.2128 27.234 L 21.3617 27.234 C 20.8917 27.234 20.5106 26.853 20.5106 26.3829 L 20.5106 19.5744 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -21.96 2.13)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-26.04, -22.13)" d="M 24.766 17.8723 C 24.766 17.4023 25.147 17.0212 25.617 17.0212 L 26.4681 17.0212 C 26.9381 17.0212 27.3191 17.4023 27.3191 17.8723 L 27.3191 26.3829 C 27.3191 26.853 26.9381 27.234 26.4681 27.234 L 25.617 27.234 C 25.147 27.234 24.766 26.853 24.766 26.3829 L 24.766 17.8723 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -30.47 4.47)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-17.53, -24.47)" d="M 16.2553 22.5531 C 16.2553 22.0831 16.6364 21.7021 17.1064 21.7021 L 17.9574 21.7021 C 18.4275 21.7021 18.8085 22.0831 18.8085 22.5531 L 18.8085 26.3829 C 18.8085 26.853 18.4275 27.234 17.9574 27.234 L 17.1064 27.234 C 16.6364 27.234 16.2553 26.853 16.2553 26.3829 L 16.2553 22.5531 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -34.72 5.53)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-13.28, -25.53)" d="M 12 24.6808 C 12 24.2108 12.381 23.8297 12.8511 23.8297 L 13.7021 23.8297 C 14.1722 23.8297 14.5532 24.2108 14.5532 24.6808 L 14.5532 26.3829 C 14.5532 26.853 14.1722 27.234 13.7021 27.234 L 12.8511 27.234 C 12.381 27.234 12 26.853 12 26.3829 L 12 24.6808 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          </div>
          <div className="flex-1 flex items-center justify-center border-b border-[#323743]">
            <div className="w-8 h-8 bg-[#f3f4f6] rounded-md flex items-center justify-center">
              <svg data-svg-id="SVG_3" className="w-[22px] h-[22px] text-[#000000]" viewBox="0 0 22 22">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.92 0 0 0.92 11 11)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
            </div>
          </div>
        </header>

        {/* Login Form Container */}
        <main className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-[342px] md:max-w-[400px] bg-[#1e2128] rounded-[24px] p-8 shadow-2xl border border-[#323743]/50">
            <div className="text-center mb-8">
              <h2 className="text-[24px] leading-[32px] font-bold text-[#f3f4f6] tracking-[-0.6px] mb-2">
                Welcome Back
              </h2>
              <p className="text-[14px] leading-[20px] text-[#bdc1ca]">
                Sign in to catch up with your Pickleball community.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-[12px] font-semibold tracking-[0.6px] uppercase text-[#bdc1ca]">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg data-svg-id="SVG_4" className="w-[18px] h-[18px] text-[#bdc1ca]" viewBox="0 0 18 18">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.75 0 0 0.75 9 7.5)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 21.4629 6.15624 C 21.9287 5.85973 22.5471 5.99715 22.8437 6.46288 C 23.1402 6.92867 23.0028 7.54708 22.5371 7.84374 L 13.5459 13.5703 C 13.5345 13.5775 13.5233 13.585 13.5117 13.5918 C 13.1112 13.8244 12.6626 13.9608 12.2021 13.9912 L 12.0049 13.9971 C 11.4757 13.9971 10.9556 13.8575 10.498 13.5918 C 10.4864 13.585 10.4743 13.5776 10.4629 13.5703 L 1.46288 7.84374 L 1.37987 7.78417 C 0.981919 7.47025 0.878267 6.89971 1.15624 6.46288 C 1.43428 6.0261 1.99533 5.87783 2.44823 6.10546 L 2.5371 6.15624 L 11.5078 11.8652 C 11.659 11.9518 11.8306 11.9971 12.0049 11.9971 L 12.1357 11.9892 C 12.2637 11.9723 12.3872 11.9296 12.5 11.8652 L 21.4629 6.15624 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.75 0 0 0.75 9 9)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 6 C 21 5.44772 20.5523 5 20 5 L 4 5 C 3.44772 5 3 5.44772 3 6 L 3 18 C 3 18.5523 3.44772 19 4 19 L 20 19 C 20.5523 19 21 18.5523 21 18 L 21 6 Z M 23 18 C 23 19.6569 21.6569 21 20 21 L 4 21 C 2.34315 21 1 19.6569 1 18 L 1 6 C 1 4.34315 2.34315 3 4 3 L 20 3 C 21.6569 3 23 4.34315 23 6 L 23 18 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full h-12 pl-11 pr-4 bg-[#262a33]/50 border border-[#323743] rounded-[16px] text-[#bdc1ca] placeholder:text-[#bdc1ca] focus:border-[#F44725] focus:ring-1 focus:ring-[#F44725] transition-all outline-none"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-[12px] font-semibold tracking-[0.6px] uppercase text-[#bdc1ca]">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg data-svg-id="SVG_5" className="w-[18px] h-[18px] text-[#bdc1ca]" viewBox="0 0 18 18">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.75 0 0 0.75 9 12.38)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -16.5)" d="M 20 13 C 20 12.4477 19.5523 12 19 12 L 5 12 C 4.44772 12 4 12.4477 4 13 L 4 20 C 4 20.5523 4.44772 21 5 21 L 19 21 C 19.5523 21 20 20.5523 20 20 L 20 13 Z M 22 20 C 22 21.6569 20.6569 23 19 23 L 5 23 C 3.34315 23 2 21.6569 2 20 L 2 13 C 2 11.3431 3.34315 10 5 10 L 19 10 C 20.6569 10 22 11.3431 22 13 L 22 20 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.75 0 0 0.75 9 4.88)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -6.5)" d="M 16 11 L 16 7 C 16 5.93913 15.5783 4.92202 14.8281 4.17188 C 14.078 3.42173 13.0609 3 12 3 C 10.9391 3 9.92202 3.42173 9.17188 4.17188 C 8.42173 4.92202 8 5.93913 8 7 L 8 11 C 8 11.5523 7.55228 12 7 12 C 6.44772 12 6 11.5523 6 11 L 6 7 C 6 5.4087 6.63259 3.88303 7.75781 2.75781 C 8.88303 1.63259 10.4087 1 12 1 C 13.5913 1 15.117 1.63259 16.2422 2.75781 C 17.3674 3.88303 18 5.4087 18 7 L 18 11 C 18 11.5523 17.5523 12 17 12 C 16.4477 12 16 11.5523 16 11 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full h-12 pl-11 pr-12 bg-[#262a33]/50 border border-[#323743] rounded-[16px] text-[#bdc1ca] placeholder:text-[#bdc1ca] focus:border-[#F44725] focus:ring-1 focus:ring-[#F44725] transition-all outline-none"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-4 flex items-center text-[#bdc1ca] hover:text-white transition-colors"
                  >
                    <svg data-svg-id="SVG_6" className="w-[18px] h-[18px]" viewBox="0 0 18 18">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(0.75 0 0 0.75 9 9)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 12.0005 4.00061 C 14.3273 4.0007 16.6019 4.69176 18.5356 5.98596 C 20.3484 7.1993 21.7854 8.89154 22.6889 10.8707 L 22.8628 11.2711 L 22.8755 11.3043 C 23.0213 11.6972 23.0396 12.1245 22.9302 12.526 L 22.8755 12.6959 C 22.8714 12.707 22.8673 12.7182 22.8628 12.7291 C 21.9756 14.8803 20.4694 16.72 18.5356 18.0143 C 16.7228 19.2276 14.6102 19.9101 12.436 19.9908 L 12.0005 19.9996 C 9.67347 19.9996 7.39818 19.3086 5.46434 18.0143 C 3.65131 16.8008 2.21456 15.108 1.31102 13.1285 L 1.13719 12.7291 C 1.13268 12.7182 1.12861 12.707 1.12449 12.6959 C 0.957874 12.247 0.95793 11.7533 1.12449 11.3043 L 1.13719 11.2711 C 2.02437 9.11997 3.5306 7.28025 5.46434 5.98596 C 7.39818 4.69167 9.67347 4.00061 12.0005 4.00061 Z M 12.0005 6.00061 C 10.0696 6.00061 8.18132 6.57408 6.57664 7.64807 C 4.9822 8.71529 3.7384 10.2291 3.00047 11.9996 C 3.73839 13.7704 4.98196 15.2848 6.57664 16.3522 C 8.18132 17.4262 10.0696 17.9996 12.0005 17.9996 L 12.3618 17.9928 C 14.1659 17.9258 15.919 17.359 17.4233 16.3522 C 19.0179 15.2849 20.2606 13.7703 20.9985 11.9996 C 20.2606 10.2293 19.0177 8.71522 17.4233 7.64807 C 15.8188 6.57417 13.9312 6.0007 12.0005 6.00061 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.75 0 0 0.75 9 9)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 14 12 C 14 10.8954 13.1046 10 12 10 C 10.8954 10 10 10.8954 10 12 C 10 13.1046 10.8954 14 12 14 C 13.1046 14 14 13.1046 14 12 Z M 16 12 C 16 14.2091 14.2091 16 12 16 C 9.79086 16 8 14.2091 8 12 C 8 9.79086 9.79086 8 12 8 C 14.2091 8 16 9.79086 16 12 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative w-4 h-4">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-4 h-4 bg-white border border-[#565d6d] rounded-[2px] peer-checked:bg-[#F44725] peer-checked:border-[#F44725] transition-colors"></div>
                    <Icon icon="lucide:check" className="absolute inset-0 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[12px] text-[#bdc1ca] group-hover:text-white transition-colors">Remember me</span>
                </label>
                <button type="button" className="text-[12px] font-semibold text-[#F44725] hover:underline">
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full h-14 bg-[#F44725] hover:bg-[#d43d1f] text-white font-bold text-[18px] rounded-[16px] flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]"
              >
                Sign In
                <svg data-svg-id="SVG_7" className="w-5 h-5" viewBox="0 0 20 20">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(0.83 0 0 0.83 10 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 11 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 L 5 13 C 4.44772 13 4 12.5523 4 12 C 4 11.4477 4.44772 11 5 11 L 19 11 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 12.92 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -12)" d="M 11.293 4.29297 C 11.6591 3.92685 12.2381 3.90426 12.6309 4.22461 L 12.7071 4.29297 L 19.7071 11.293 C 20.0976 11.6835 20.0976 12.3165 19.7071 12.707 L 12.7071 19.707 C 12.3166 20.0976 11.6835 20.0976 11.293 19.707 C 10.9025 19.3165 10.9025 18.6835 11.293 18.293 L 17.586 12 L 11.293 5.70703 L 11.2247 5.63086 C 10.9043 5.23809 10.9269 4.65909 11.293 4.29297 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#323743]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#1e2128] px-3 text-[10px] font-bold uppercase tracking-[1px] text-[#bdc1ca]">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 h-12 bg-[#1e2128] border border-[#323743] rounded-[16px] hover:bg-[#262a33] transition-colors">
                <svg data-svg-id="SVG_8" className="w-4 h-4" viewBox="0 0 16 16">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(1 0 0 1 8 8)">
                  <g style={{  }}>
                    <g transform="matrix(0.67 0 0 0.67 3.52 2.11)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(66,133,244)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-17.28, -15.17)" d="M 22.56 12.25 C 22.56 11.47 22.49 10.72 22.36 10 L 12 10 L 12 14.26 L 17.92 14.26 C 17.66 15.629999999999999 16.880000000000003 16.79 15.71 17.57 L 15.71 20.34 L 19.28 20.34 C 21.36 18.42 22.560000000000002 15.6 22.560000000000002 12.25 z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.67 0 0 0.67 -0.85 4.37)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(52,168,83)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-10.73, -18.55)" d="M 12 23 C 14.97 23 17.46 22.02 19.28 20.34 L 15.71 17.57 C 14.73 18.23 13.48 18.63 12 18.63 C 9.14 18.63 6.71 16.7 5.84 14.099999999999998 L 2.18 14.099999999999998 L 2.18 16.939999999999998 C 3.99 20.53 7.7 23 12 23 z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.67 0 0 0.67 -5.72 0)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(251,188,5)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-3.42, -12)" d="M 5.84 14.09 C 5.62 13.43 5.49 12.73 5.49 12 C 5.49 11.27 5.62 10.57 5.84 9.91 L 5.84 7.07 L 2.18 7.07 C 1.43 8.55 1 10.22 1 12 C 1 13.78 1.43 15.45 2.1799999999999997 16.93 L 5.84 14.09 z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.67 0 0 0.67 -0.82 -4.36)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(234,67,53)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-10.77, -5.46)" d="M 12 5.38 C 13.620000000000001 5.38 15.06 5.9399999999999995 16.21 7.02 L 19.36 3.8699999999999997 C 17.45 2.09 14.97 1 12 1 C 7.7 1 3.99 3.47 2.18 7.07 L 5.84 9.91 C 6.71 7.3100000000000005 9.14 5.38 12 5.38 z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
                <span className="text-[14px] font-medium text-[#f3f4f6]">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 h-12 bg-[#1e2128] border border-[#323743] rounded-[16px] hover:bg-[#262a33] transition-colors">
                <svg data-svg-id="SVG_9" className="w-4 h-4" viewBox="0 0 16 16">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9.75, -11.72)" d="M 17.05 20.28 C 16.09 21.23 14.950000000000001 21.71 13.75 21.71 C 12.42 21.71 11.41 21.3 10.52 21.3 C 9.629999999999999 21.3 8.469999999999999 21.71 7.31 21.71 C 6.029999999999999 21.71 4.93 21.19 3.9599999999999995 20.23 C 1.9599999999999995 18.22 1.9599999999999995 14.48 3.9499999999999997 12.48 C 4.949999999999999 11.48 6.16 10.93 7.459999999999999 10.93 C 8.809999999999999 10.93 9.739999999999998 11.39 10.5 11.39 C 11.22 11.39 12.2 10.93 13.6 10.93 C 14.559999999999999 10.93 15.54 11.24 16.36 11.93 C 16.64 12.16 16.83 12.34 16.96 12.459999999999999 C 14.950000000000001 13.569999999999999 14.530000000000001 16.21 16.53 17.82 C 16.130000000000003 18.81 15.57 19.81 15.05 20.29 z M 12.740000000000002 4.880000000000001 C 12.740000000000002 3.1400000000000006 14.170000000000002 1.7300000000000009 15.920000000000002 1.7300000000000009 C 16 1.7300000000000009 16.090000000000003 1.7400000000000009 16.17 1.7400000000000009 C 16.110000000000003 3.490000000000001 14.690000000000001 4.930000000000001 12.940000000000001 4.930000000000001 C 12.870000000000001 4.930000000000001 12.790000000000001 4.930000000000001 12.740000000000002 4.880000000000001 z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                <span className="text-[14px] font-medium text-[#f3f4f6]">Apple</span>
              </button>
            </div>
          </div>

          {/* Footer Link */}
          <div className="mt-8 flex items-center gap-2 text-[14px]">
            <span className="text-[#bdc1ca]/80">New here?</span>
            <button className="text-[#F44725] font-bold hover:underline">
              Create profile
            </button>
          </div>

          {/* Decorative large arrow (Mobile only) */}
          <div className="mt-4 lg:hidden opacity-10">
            <div className="w-[76px] h-[76px] bg-[#F44725]/20 rounded-full flex items-center justify-center rotate-[-45deg]">
              <svg data-svg-id="SVG_10" className="w-[60px] h-[60px] text-[#F44725]" viewBox="0 0 60 60">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(2.5 0 0 2.5 30 30)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 11 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 L 5 13 C 4.44772 13 4 12.5523 4 12 C 4 11.4477 4.44772 11 5 11 L 19 11 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(2.5 0 0 2.5 38.75 30)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -12)" d="M 11.293 4.29297 C 11.6591 3.92685 12.2381 3.90426 12.6309 4.22461 L 12.7071 4.29297 L 19.7071 11.293 C 20.0976 11.6835 20.0976 12.3165 19.7071 12.707 L 12.7071 19.707 C 12.3166 20.0976 11.6835 20.0976 11.293 19.707 C 10.9025 19.3165 10.9025 18.6835 11.293 18.293 L 17.586 12 L 11.293 5.70703 L 11.2247 5.63086 C 10.9043 5.23809 10.9269 4.65909 11.293 4.29297 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
import React from 'react';
import { Icon } from '@iconify/react';

/**
 * App Component
 * 
 * A responsive login screen for a Pickleball community application.
 * Features:
 * - Mobile-first design matching the provided screenshot.
 * - Desktop expansion with a split-screen layout and brand messaging.
 * - Custom styled form elements with Tailwind CSS.
 * - SVG preservation for specific design assets.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#bdc1ca] font-['Inter'] flex flex-col lg:flex-row overflow-x-hidden">
      
      {/* --- DESKTOP LEFT PANEL (Visible only on lg breakpoint and up) --- */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1e2128] flex-col justify-center items-center p-16 relative overflow-hidden border-r border-[#323743]/30">
        {/* Desktop Logo */}
        <div className="absolute top-12 left-12 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#f3f4f6] rounded-xl flex items-center justify-center shadow-lg">
            <svg data-svg-id="SVG_3" className="w-7 h-7 text-[#000000]" viewBox="0 0 22 22">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.92 0 0 0.92 11 11)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight font-['Playfair_Display']">Pickleball Hub</span>
        </div>
        
        {/* Marketing Content */}
        <div className="max-w-lg z-10">
          <h1 className="text-7xl mb-8 leading-[1.1] text-white font-['Playfair_Display']">
            The Court is <br />
            <span className="text-[#F44725]">Calling.</span>
          </h1>
          <p className="text-xl text-[#bdc1ca] leading-relaxed mb-12">
            Join over 10,000 players in the ultimate community for pickleball enthusiasts. 
            Find matches, track progress, and master your dink.
          </p>
          
          {/* Social Proof / Stats */}
          <div className="flex items-center gap-6 p-6 bg-[#262a33]/40 rounded-2xl border border-[#323743]/50 backdrop-blur-sm">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#1e2128] bg-[#323743] flex items-center justify-center overflow-hidden">
                  <Icon icon="ph:user-circle-fill" className="w-10 h-10 text-[#bdc1ca]" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-white font-bold text-lg">Join the community</div>
              <div className="text-sm text-[#bdc1ca]/70">Trusted by players worldwide</div>
            </div>
          </div>
        </div>

        {/* Large Decorative Background Icon */}
        <div className="absolute -bottom-24 -right-24 opacity-5 rotate-[-45deg] pointer-events-none">
          <svg data-svg-id="SVG_10" className="w-[500px] h-[500px] text-[#F44725]" viewBox="0 0 60 60">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(2.5 0 0 2.5 30 30)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 11 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 L 5 13 C 4.44772 13 4 12.5523 4 12 C 4 11.4477 4.44772 11 5 11 L 19 11 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(2.5 0 0 2.5 38.75 30)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -12)" d="M 11.293 4.29297 C 11.6591 3.92685 12.2381 3.90426 12.6309 4.22461 L 12.7071 4.29297 L 19.7071 11.293 C 20.0976 11.6835 20.0976 12.3165 19.7071 12.707 L 12.7071 19.707 C 12.3166 20.0976 11.6835 20.0976 11.293 19.707 C 10.9025 19.3165 10.9025 18.6835 11.293 18.293 L 17.586 12 L 11.293 5.70703 L 11.2247 5.63086 C 10.9043 5.23809 10.9269 4.65909 11.293 4.29297 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA (Mobile & Desktop Right Side) --- */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <header className="w-full h-[108px] flex flex-col lg:hidden shrink-0">
          {/* Status Bar Simulation */}
          <div className="h-10 flex justify-between items-center px-6">
            <svg data-svg-id="SVG_1" className="w-[70px] h-10" viewBox="0 0 70 40">
            <g transform="matrix(1.03 0 0 1 -1 0)">
              <g style={{  }}>
                <g transform="matrix(1 0 0 1 35 20)">
                  <g style={{  }}>
                    <g transform="matrix(0.97 0 0 1 -2.01 2.14)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-33.93, -22.14)" d="M 33.7866 16.7856 C 31.5754 16.7856 30 18.2974 30 20.3673 L 30 20.3815 C 30 22.3171 31.3705 23.7442 33.3274 23.7442 C 34.7261 23.7442 35.6163 23.0307 35.9907 22.2253 L 36.132 22.2253 C 36.132 22.303 36.1249 22.3807 36.1249 22.4584 C 36.0472 24.4082 35.362 25.9907 33.7442 25.9907 C 32.847 25.9907 32.2183 25.5244 31.9498 24.8109 L 31.9286 24.7403 L 30.1342 24.7403 L 30.1484 24.818 C 30.4733 26.3792 31.8721 27.4884 33.7442 27.4884 C 36.3086 27.4884 37.8557 25.4538 37.8557 22.0204 L 37.8557 22.0063 C 37.8557 18.3328 35.9624 16.7856 33.7866 16.7856 Z M 33.7795 22.3454 C 32.6209 22.3454 31.7803 21.4977 31.7803 20.3179 L 31.7803 20.3038 C 31.7803 19.1664 32.6774 18.2692 33.8007 18.2692 C 34.931 18.2692 35.8141 19.1805 35.8141 20.3461 L 35.8141 20.3603 C 35.8141 21.5118 34.931 22.3454 33.7795 22.3454 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.97 0 0 1 4.58 2.13)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-40.72, -22.13)" d="M 40.7158 20.6287 C 41.3657 20.6287 41.839 20.1342 41.839 19.5125 C 41.839 18.8838 41.3657 18.3963 40.7158 18.3963 C 40.0729 18.3963 39.5925 18.8838 39.5925 19.5125 C 39.5925 20.1342 40.0729 20.6287 40.7158 20.6287 Z M 40.7158 25.8706 C 41.3657 25.8706 41.839 25.3831 41.839 24.7544 C 41.839 24.1257 41.3657 23.6382 40.7158 23.6382 C 40.0729 23.6382 39.5925 24.1257 39.5925 24.7544 C 39.5925 25.3831 40.0729 25.8706 40.7158 25.8706 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.97 0 0 1 11.26 2.14)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-47.58, -22.14)" d="M 48.521 27.234 L 50.2659 27.234 L 50.2659 25.2772 L 51.6364 25.2772 L 51.6364 23.7724 L 50.2659 23.7724 L 50.2659 17.04 L 47.6873 17.04 C 46.3027 19.1452 44.8545 21.4906 43.5334 23.7866 L 43.5334 25.2772 L 48.521 25.2772 L 48.521 27.234 Z M 45.2289 23.8148 L 45.2289 23.7088 C 46.2179 21.978 47.3977 20.0918 48.4432 18.4953 L 48.5492 18.4953 L 48.5492 23.8148 L 45.2289 23.8148 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.97 0 0 1 18.57 2.14)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-55.1, -22.14)" d="M 55.5137 27.234 L 57.3364 27.234 L 57.3364 17.04 L 55.5208 17.04 L 52.8575 18.9121 L 52.8575 20.6287 L 55.3936 18.8343 L 55.5137 18.8343 L 55.5137 27.234 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
            <svg data-svg-id="SVG_2" className="w-[96px] h-10" viewBox="0 0 96 40">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(1 0 0 1 48 20)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 17.19 1.7)">
                      <path style={{ stroke: "rgb(255,255,255)", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "none", fillRule: "nonzero", opacity: "0.35" }} transform=" translate(-65.19, -21.7)" d="M 55.0532 20.1702 C 55.0532 18.2372 56.6202 16.6702 58.5532 16.6702 L 71.8298 16.6702 C 73.7628 16.6702 75.3298 18.2372 75.3298 20.1702 L 75.3298 23.234 C 75.3298 25.167 73.7628 26.734 71.8298 26.734 L 58.5532 26.734 C 56.6202 26.734 55.0532 25.167 55.0532 23.234 L 55.0532 20.1702 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 29.28 2.22)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "0.4" }} transform=" translate(-77.28, -22.22)" d="M 76.6808 20.4255 L 76.6808 24.0173 C 77.4035 23.7131 77.8734 23.0054 77.8734 22.2214 C 77.8734 21.4374 77.4035 20.7297 76.6808 20.4255 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 17.19 1.7)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-65.19, -21.7)" d="M 56.2553 19.8723 C 56.2553 18.7677 57.1508 17.8723 58.2553 17.8723 L 72.1277 17.8723 C 73.2322 17.8723 74.1277 18.7677 74.1277 19.8723 L 74.1277 23.5319 C 74.1277 24.6364 73.2322 25.5319 72.1277 25.5319 L 58.2553 25.5319 C 57.1508 25.5319 56.2553 24.6364 56.2553 23.5319 L 56.2553 19.8723 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -6.64 2.06)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "evenodd", opacity: "1" }} transform=" translate(-41.36, -22.06)" d="M 41.3621 19.2234 C 43.4613 19.2235 45.4802 20.0468 47.0016 21.5232 C 47.1162 21.6372 47.2993 21.6357 47.4121 21.52 L 48.5072 20.3918 C 48.5644 20.3331 48.5962 20.2536 48.5957 20.1708 C 48.5953 20.0881 48.5625 20.0089 48.5047 19.9509 C 44.5116 16.0447 38.212 16.0447 34.2189 19.9509 C 34.161 20.0089 34.1282 20.088 34.1277 20.1707 C 34.1271 20.2535 34.1589 20.3331 34.216 20.3918 L 35.3115 21.52 C 35.4242 21.6359 35.6075 21.6374 35.722 21.5232 C 37.2435 20.0467 39.2627 19.2234 41.3621 19.2234 Z M 41.3923 22.6292 C 42.5456 22.6291 43.6579 23.0667 44.5128 23.857 C 44.6284 23.9691 44.8106 23.9667 44.9233 23.8515 L 46.0172 22.7233 C 46.0748 22.6642 46.1067 22.5839 46.1059 22.5005 C 46.1051 22.417 46.0715 22.3374 46.0127 22.2795 C 43.4093 19.8075 39.3775 19.8075 36.774 22.2795 C 36.7152 22.3374 36.6816 22.4171 36.6809 22.5005 C 36.6801 22.584 36.7122 22.6642 36.7699 22.7233 L 37.8634 23.8515 C 37.9762 23.9667 38.1583 23.9691 38.274 23.857 C 39.1283 23.0673 40.2397 22.6297 41.3923 22.6292 Z M 43.6166 24.8312 C 43.6183 24.9149 43.5861 24.9955 43.5276 25.0541 L 41.6354 27.0032 C 41.58 27.0605 41.5044 27.0928 41.4255 27.0928 C 41.3466 27.0928 41.2709 27.0605 41.2155 27.0032 L 39.323 25.0541 C 39.2645 24.9955 39.2324 24.9148 39.2341 24.8311 C 39.2358 24.7475 39.2713 24.6683 39.3322 24.6122 C 40.5406 23.5689 42.3104 23.5689 43.5188 24.6122 C 43.5796 24.6683 43.615 24.7475 43.6166 24.8312 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -26.21 2.98)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-21.79, -22.98)" d="M 20.5106 19.5744 C 20.5106 19.1044 20.8917 18.7234 21.3617 18.7234 L 22.2128 18.7234 C 22.6828 18.7234 23.0638 19.1044 23.0638 19.5744 L 23.0638 26.3829 C 23.0638 26.853 22.6828 27.234 22.2128 27.234 L 21.3617 27.234 C 20.8917 27.234 20.5106 26.853 20.5106 26.3829 L 20.5106 19.5744 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -21.96 2.13)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-26.04, -22.13)" d="M 24.766 17.8723 C 24.766 17.4023 25.147 17.0212 25.617 17.0212 L 26.4681 17.0212 C 26.9381 17.0212 27.3191 17.4023 27.3191 17.8723 L 27.3191 26.3829 C 27.3191 26.853 26.9381 27.234 26.4681 27.234 L 25.617 27.234 C 25.147 27.234 24.766 26.853 24.766 26.3829 L 24.766 17.8723 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -30.47 4.47)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-17.53, -24.47)" d="M 16.2553 22.5531 C 16.2553 22.0831 16.6364 21.7021 17.1064 21.7021 L 17.9574 21.7021 C 18.4275 21.7021 18.8085 22.0831 18.8085 22.5531 L 18.8085 26.3829 C 18.8085 26.853 18.4275 27.234 17.9574 27.234 L 17.1064 27.234 C 16.6364 27.234 16.2553 26.853 16.2553 26.3829 L 16.2553 22.5531 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 -34.72 5.53)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-13.28, -25.53)" d="M 12 24.6808 C 12 24.2108 12.381 23.8297 12.8511 23.8297 L 13.7021 23.8297 C 14.1722 23.8297 14.5532 24.2108 14.5532 24.6808 L 14.5532 26.3829 C 14.5532 26.853 14.1722 27.234 13.7021 27.234 L 12.8511 27.234 C 12.381 27.234 12 26.853 12 26.3829 L 12 24.6808 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          </div>
          {/* App Logo Bar */}
          <div className="flex-1 flex items-center justify-center border-b border-[#323743]">
            <div className="w-8 h-8 bg-[#f3f4f6] rounded-md flex items-center justify-center">
              <svg data-svg-id="SVG_3" className="w-[22px] h-[22px] text-[#000000]" viewBox="0 0 22 22">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.92 0 0 0.92 11 11)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
            </div>
          </div>
        </header>

        {/* Login Form Section */}
        <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-20">
          <div className="w-full max-w-[342px] md:max-w-[420px] bg-[#1e2128] rounded-[24px] p-8 md:p-10 shadow-[0px_8.5px_13.75px_0px_#171a1f38,_0px_0px_2px_0px_#171a1f14] border border-[#323743]/50">
            
            {/* Header Text */}
            <div className="text-center mb-10">
              <h2 className="text-[24px] md:text-[28px] leading-tight font-bold text-[#f3f4f6] tracking-[-0.6px] mb-3 font-['Playfair_Display']">
                Welcome Back
              </h2>
              <p className="text-[14px] leading-[20px] text-[#bdc1ca] max-w-[266px] mx-auto">
                Sign in to catch up with your Pickleball community.
              </p>
            </div>

            {/* Login Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Email Input Group */}
              <div className="space-y-2">
                <label className="block text-[12px] font-semibold tracking-[0.6px] uppercase text-[#bdc1ca] ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg data-svg-id="SVG_4" className="w-[18px] h-[18px] text-[#bdc1ca] group-focus-within:text-[#F44725] transition-colors" viewBox="0 0 18 18">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.75 0 0 0.75 9 7.5)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 21.4629 6.15624 C 21.9287 5.85973 22.5471 5.99715 22.8437 6.46288 C 23.1402 6.92867 23.0028 7.54708 22.5371 7.84374 L 13.5459 13.5703 C 13.5345 13.5775 13.5233 13.585 13.5117 13.5918 C 13.1112 13.8244 12.6626 13.9608 12.2021 13.9912 L 12.0049 13.9971 C 11.4757 13.9971 10.9556 13.8575 10.498 13.5918 C 10.4864 13.585 10.4743 13.5776 10.4629 13.5703 L 1.46288 7.84374 L 1.37987 7.78417 C 0.981919 7.47025 0.878267 6.89971 1.15624 6.46288 C 1.43428 6.0261 1.99533 5.87783 2.44823 6.10546 L 2.5371 6.15624 L 11.5078 11.8652 C 11.659 11.9518 11.8306 11.9971 12.0049 11.9971 L 12.1357 11.9892 C 12.2637 11.9723 12.3872 11.9296 12.5 11.8652 L 21.4629 6.15624 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.75 0 0 0.75 9 9)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 6 C 21 5.44772 20.5523 5 20 5 L 4 5 C 3.44772 5 3 5.44772 3 6 L 3 18 C 3 18.5523 3.44772 19 4 19 L 20 19 C 20.5523 19 21 18.5523 21 18 L 21 6 Z M 23 18 C 23 19.6569 21.6569 21 20 21 L 4 21 C 2.34315 21 1 19.6569 1 18 L 1 6 C 1 4.34315 2.34315 3 4 3 L 20 3 C 21.6569 3 23 4.34315 23 6 L 23 18 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full h-12 pl-11 pr-4 bg-[#262a33]/50 border border-[#323743] rounded-[16px] text-[#bdc1ca] placeholder:text-[#bdc1ca] focus:border-[#F44725] focus:ring-1 focus:ring-[#F44725] transition-all outline-none shadow-sm"
                  />
                </div>
              </div>

              {/* Password Input Group */}
              <div className="space-y-2">
                <label className="block text-[12px] font-semibold tracking-[0.6px] uppercase text-[#bdc1ca] ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg data-svg-id="SVG_5" className="w-[18px] h-[18px] text-[#bdc1ca] group-focus-within:text-[#F44725] transition-colors" viewBox="0 0 18 18">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.75 0 0 0.75 9 12.38)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -16.5)" d="M 20 13 C 20 12.4477 19.5523 12 19 12 L 5 12 C 4.44772 12 4 12.4477 4 13 L 4 20 C 4 20.5523 4.44772 21 5 21 L 19 21 C 19.5523 21 20 20.5523 20 20 L 20 13 Z M 22 20 C 22 21.6569 20.6569 23 19 23 L 5 23 C 3.34315 23 2 21.6569 2 20 L 2 13 C 2 11.3431 3.34315 10 5 10 L 19 10 C 20.6569 10 22 11.3431 22 13 L 22 20 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.75 0 0 0.75 9 4.88)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -6.5)" d="M 16 11 L 16 7 C 16 5.93913 15.5783 4.92202 14.8281 4.17188 C 14.078 3.42173 13.0609 3 12 3 C 10.9391 3 9.92202 3.42173 9.17188 4.17188 C 8.42173 4.92202 8 5.93913 8 7 L 8 11 C 8 11.5523 7.55228 12 7 12 C 6.44772 12 6 11.5523 6 11 L 6 7 C 6 5.4087 6.63259 3.88303 7.75781 2.75781 C 8.88303 1.63259 10.4087 1 12 1 C 13.5913 1 15.117 1.63259 16.2422 2.75781 C 17.3674 3.88303 18 5.4087 18 7 L 18 11 C 18 11.5523 17.5523 12 17 12 C 16.4477 12 16 11.5523 16 11 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full h-12 pl-11 pr-12 bg-[#262a33]/50 border border-[#323743] rounded-[16px] text-[#bdc1ca] placeholder:text-[#bdc1ca] focus:border-[#F44725] focus:ring-1 focus:ring-[#F44725] transition-all outline-none shadow-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-4 flex items-center text-[#bdc1ca] hover:text-white transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    <svg data-svg-id="SVG_6" className="w-[18px] h-[18px]" viewBox="0 0 18 18">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(0.75 0 0 0.75 9 9)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 12.0005 4.00061 C 14.3273 4.0007 16.6019 4.69176 18.5356 5.98596 C 20.3484 7.1993 21.7854 8.89154 22.6889 10.8707 L 22.8628 11.2711 L 22.8755 11.3043 C 23.0213 11.6972 23.0396 12.1245 22.9302 12.526 L 22.8755 12.6959 C 22.8714 12.707 22.8673 12.7182 22.8628 12.7291 C 21.9756 14.8803 20.4694 16.72 18.5356 18.0143 C 16.7228 19.2276 14.6102 19.9101 12.436 19.9908 L 12.0005 19.9996 C 9.67347 19.9996 7.39818 19.3086 5.46434 18.0143 C 3.65131 16.8008 2.21456 15.108 1.31102 13.1285 L 1.13719 12.7291 C 1.13268 12.7182 1.12861 12.707 1.12449 12.6959 C 0.957874 12.247 0.95793 11.7533 1.12449 11.3043 L 1.13719 11.2711 C 2.02437 9.11997 3.5306 7.28025 5.46434 5.98596 C 7.39818 4.69167 9.67347 4.00061 12.0005 4.00061 Z M 12.0005 6.00061 C 10.0696 6.00061 8.18132 6.57408 6.57664 7.64807 C 4.9822 8.71529 3.7384 10.2291 3.00047 11.9996 C 3.73839 13.7704 4.98196 15.2848 6.57664 16.3522 C 8.18132 17.4262 10.0696 17.9996 12.0005 17.9996 L 12.3618 17.9928 C 14.1659 17.9258 15.919 17.359 17.4233 16.3522 C 19.0179 15.2849 20.2606 13.7703 20.9985 11.9996 C 20.2606 10.2293 19.0177 8.71522 17.4233 7.64807 C 15.8188 6.57417 13.9312 6.0007 12.0005 6.00061 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.75 0 0 0.75 9 9)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 14 12 C 14 10.8954 13.1046 10 12 10 C 10.8954 10 10 10.8954 10 12 C 10 13.1046 10.8954 14 12 14 C 13.1046 14 14 13.1046 14 12 Z M 16 12 C 16 14.2091 14.2091 16 12 16 C 9.79086 16 8 14.2091 8 12 C 8 9.79086 9.79086 8 12 8 C 14.2091 8 16 9.79086 16 12 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password Row */}
              <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-2 cursor-pointer group select-none">
                  <div className="relative w-4 h-4">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-4 h-4 bg-white border border-[#565d6d] rounded-[2px] peer-checked:bg-[#F44725] peer-checked:border-[#F44725] transition-all"></div>
                    <Icon icon="lucide:check" className="absolute inset-0 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[12px] text-[#bdc1ca] group-hover:text-white transition-colors">Remember me</span>
                </label>
                <button type="button" className="text-[12px] font-semibold text-[#F44725] hover:text-[#d43d1f] transition-colors">
                  Forgot password?
                </button>
              </div>

              {/* Primary Sign In Button */}
              <button
                type="submit"
                className="w-full h-14 bg-[#F44725] hover:bg-[#d43d1f] text-white font-bold text-[18px] rounded-[16px] flex items-center justify-center gap-2 shadow-[0px_2px_4px_0px_#171a1f17,_0px_0px_2px_0px_#171a1f14] transition-all active:scale-[0.98] mt-2"
              >
                Sign In
                <svg data-svg-id="SVG_7" className="w-5 h-5" viewBox="0 0 20 20">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(0.83 0 0 0.83 10 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 11 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 L 5 13 C 4.44772 13 4 12.5523 4 12 C 4 11.4477 4.44772 11 5 11 L 19 11 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 12.92 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(255,255,255)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -12)" d="M 11.293 4.29297 C 11.6591 3.92685 12.2381 3.90426 12.6309 4.22461 L 12.7071 4.29297 L 19.7071 11.293 C 20.0976 11.6835 20.0976 12.3165 19.7071 12.707 L 12.7071 19.707 C 12.3166 20.0976 11.6835 20.0976 11.293 19.707 C 10.9025 19.3165 10.9025 18.6835 11.293 18.293 L 17.586 12 L 11.293 5.70703 L 11.2247 5.63086 C 10.9043 5.23809 10.9269 4.65909 11.293 4.29297 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
              </button>
            </form>

            {/* Social Login Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#323743]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#1e2128] px-4 text-[10px] font-bold uppercase tracking-[1px] text-[#bdc1ca]">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 h-12 bg-[#1e2128] border border-[#323743] rounded-[16px] hover:bg-[#262a33] transition-all active:scale-[0.97]">
                <svg data-svg-id="SVG_8" className="w-4 h-4" viewBox="0 0 16 16">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(1 0 0 1 8 8)">
                  <g style={{  }}>
                    <g transform="matrix(0.67 0 0 0.67 3.52 2.11)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(66,133,244)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-17.28, -15.17)" d="M 22.56 12.25 C 22.56 11.47 22.49 10.72 22.36 10 L 12 10 L 12 14.26 L 17.92 14.26 C 17.66 15.629999999999999 16.880000000000003 16.79 15.71 17.57 L 15.71 20.34 L 19.28 20.34 C 21.36 18.42 22.560000000000002 15.6 22.560000000000002 12.25 z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.67 0 0 0.67 -0.85 4.37)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(52,168,83)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-10.73, -18.55)" d="M 12 23 C 14.97 23 17.46 22.02 19.28 20.34 L 15.71 17.57 C 14.73 18.23 13.48 18.63 12 18.63 C 9.14 18.63 6.71 16.7 5.84 14.099999999999998 L 2.18 14.099999999999998 L 2.18 16.939999999999998 C 3.99 20.53 7.7 23 12 23 z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.67 0 0 0.67 -5.72 0)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(251,188,5)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-3.42, -12)" d="M 5.84 14.09 C 5.62 13.43 5.49 12.73 5.49 12 C 5.49 11.27 5.62 10.57 5.84 9.91 L 5.84 7.07 L 2.18 7.07 C 1.43 8.55 1 10.22 1 12 C 1 13.78 1.43 15.45 2.1799999999999997 16.93 L 5.84 14.09 z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.67 0 0 0.67 -0.82 -4.36)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(234,67,53)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-10.77, -5.46)" d="M 12 5.38 C 13.620000000000001 5.38 15.06 5.9399999999999995 16.21 7.02 L 19.36 3.8699999999999997 C 17.45 2.09 14.97 1 12 1 C 7.7 1 3.99 3.47 2.18 7.07 L 5.84 9.91 C 6.71 7.3100000000000005 9.14 5.38 12 5.38 z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
                <span className="text-[14px] font-medium text-[#f3f4f6]">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 h-12 bg-[#1e2128] border border-[#323743] rounded-[16px] hover:bg-[#262a33] transition-all active:scale-[0.97]">
                <svg data-svg-id="SVG_9" className="w-4 h-4" viewBox="0 0 16 16">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-9.75, -11.72)" d="M 17.05 20.28 C 16.09 21.23 14.950000000000001 21.71 13.75 21.71 C 12.42 21.71 11.41 21.3 10.52 21.3 C 9.629999999999999 21.3 8.469999999999999 21.71 7.31 21.71 C 6.029999999999999 21.71 4.93 21.19 3.9599999999999995 20.23 C 1.9599999999999995 18.22 1.9599999999999995 14.48 3.9499999999999997 12.48 C 4.949999999999999 11.48 6.16 10.93 7.459999999999999 10.93 C 8.809999999999999 10.93 9.739999999999998 11.39 10.5 11.39 C 11.22 11.39 12.2 10.93 13.6 10.93 C 14.559999999999999 10.93 15.54 11.24 16.36 11.93 C 16.64 12.16 16.83 12.34 16.96 12.459999999999999 C 14.950000000000001 13.569999999999999 14.530000000000001 16.21 16.53 17.82 C 16.130000000000003 18.81 15.57 19.81 15.05 20.29 z M 12.740000000000002 4.880000000000001 C 12.740000000000002 3.1400000000000006 14.170000000000002 1.7300000000000009 15.920000000000002 1.7300000000000009 C 16 1.7300000000000009 16.090000000000003 1.7400000000000009 16.17 1.7400000000000009 C 16.110000000000003 3.490000000000001 14.690000000000001 4.930000000000001 12.940000000000001 4.930000000000001 C 12.870000000000001 4.930000000000001 12.790000000000001 4.930000000000001 12.740000000000002 4.880000000000001 z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                <span className="text-[14px] font-medium text-[#f3f4f6]">Apple</span>
              </button>
            </div>
          </div>

          {/* Create Profile Link */}
          <div className="mt-10 flex items-center gap-2 text-[14px]">
            <span className="text-[#bdc1ca]/80">New here?</span>
            <button className="text-[#F44725] font-bold hover:text-[#d43d1f] transition-colors">
              Create profile
            </button>
          </div>

          {/* Decorative Bottom Icon (Mobile Only) */}
          <div className="mt-6 lg:hidden opacity-10">
            <div className="w-[76px] h-[76px] bg-[#F44725]/20 rounded-full flex items-center justify-center rotate-[-45deg]">
              <svg data-svg-id="SVG_10" className="w-[60px] h-[60px] text-[#F44725]" viewBox="0 0 60 60">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(2.5 0 0 2.5 30 30)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 11 C 19.5523 11 20 11.4477 20 12 C 20 12.5523 19.5523 13 19 13 L 5 13 C 4.44772 13 4 12.5523 4 12 C 4 11.4477 4.44772 11 5 11 L 19 11 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(2.5 0 0 2.5 38.75 30)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -12)" d="M 11.293 4.29297 C 11.6591 3.92685 12.2381 3.90426 12.6309 4.22461 L 12.7071 4.29297 L 19.7071 11.293 C 20.0976 11.6835 20.0976 12.3165 19.7071 12.707 L 12.7071 19.707 C 12.3166 20.0976 11.6835 20.0976 11.293 19.707 C 10.9025 19.3165 10.9025 18.6835 11.293 18.293 L 17.586 12 L 11.293 5.70703 L 11.2247 5.63086 C 10.9043 5.23809 10.9269 4.65909 11.293 4.29297 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
            </div>
          </div>
        </main>

        {/* Desktop Footer (Optional) */}
        <footer className="hidden lg:block py-8 px-12 text-center text-[12px] text-[#bdc1ca]/40">
          &copy; {new Date().getFullYear()} Pickleball Hub. All rights reserved.
        </footer>
      </div>
    </div>
  );
}