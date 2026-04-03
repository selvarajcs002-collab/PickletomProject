import { Icon } from '@iconify/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f3f4f6] font-sans selection:bg-[#F44725]/30 flex flex-col lg:flex-row">
      
      {/* Desktop Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 border-r border-[#1F2937] bg-[#000000] p-6 z-50">
        <div className="mb-10 px-2">
          <h1 className="text-2xl font-bold text-[#F44725] font-serif">PickleOn</h1>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          <SidebarLink icon="lucide:house" label="Home" />
          <SidebarLink icon="lucide:search" label="Search" />
          <SidebarLink icon="lucide:circle-plus" label="Create" />
          <SidebarLink icon="lucide:bell" label="Alerts" />
          <SidebarLink icon="lucide:user" label="Profile" active />
        </nav>
        <div className="mt-auto pt-6 border-t border-[#1F2937]">
          <SidebarLink icon="lucide:settings" label="Settings" />
          <SidebarLink icon="lucide:log-out" label="Logout" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative pb-24 lg:pb-10">
        
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-40 bg-[#000000] border-b border-[#323743] h-[108px] flex flex-col">
          {/* Status Bar Placeholder */}
          <div className="h-10 flex justify-between items-center px-4">
            <svg data-svg-id="SVG_1" className="w-[70px] h-[40px]">
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
            <svg data-svg-id="SVG_2" className="w-[96px] h-[40px]">
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
          {/* Navigation Bar */}
          <div className="flex-1 flex items-center justify-between px-4">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <svg data-svg-id="SVG_5" className="w-6 h-6 text-[#f3f4f6]">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(1 0 0 1 12 12)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 14.293 5.29295 C 14.6835 4.90243 15.3165 4.90243 15.707 5.29295 C 16.0976 5.68348 16.0976 6.31649 15.707 6.70702 L 10.4141 12 L 15.707 17.293 L 15.7754 17.3691 C 16.0957 17.7619 16.0731 18.3409 15.707 18.707 C 15.3409 19.0731 14.7619 19.0957 14.3691 18.7754 L 14.293 18.707 L 8.29297 12.707 C 7.90245 12.3165 7.90245 11.6835 8.29297 11.293 L 14.293 5.29295 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
            </button>
            <h2 className="font-serif text-lg font-bold">Player Profile</h2>
            <div className="flex gap-1">
              <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <svg data-svg-id="SVG_3" className="w-5 h-5 text-[#f3f4f6]">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(0.83 0 0 0.83 15 4.17)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-18, -5)" d="M 20 5 C 20 3.89543 19.1046 3 18 3 C 16.8954 3 16 3.89543 16 5 C 16 6.10457 16.8954 7 18 7 C 19.1046 7 20 6.10457 20 5 Z M 22 5 C 22 7.20914 20.2091 9 18 9 C 15.7909 9 14 7.20914 14 5 C 14 2.79086 15.7909 1 18 1 C 20.2091 1 22 2.79086 22 5 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 5 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-6, -12)" d="M 8 12 C 8 10.8954 7.10457 10 6 10 C 4.89543 10 4 10.8954 4 12 C 4 13.1046 4.89543 14 6 14 C 7.10457 14 8 13.1046 8 12 Z M 10 12 C 10 14.2091 8.20914 16 6 16 C 3.79086 16 2 14.2091 2 12 C 2 9.79086 3.79086 8 6 8 C 8.20914 8 10 9.79086 10 12 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 15 15.83)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-18, -19)" d="M 20 19 C 20 17.8954 19.1046 17 18 17 C 16.8954 17 16 17.8954 16 19 C 16 20.1046 16.8954 21 18 21 C 19.1046 21 20 20.1046 20 19 Z M 22 19 C 22 21.2091 20.2091 23 18 23 C 15.7909 23 14 21.2091 14 19 C 14 16.7909 15.7909 15 18 15 C 20.2091 15 22 16.7909 22 19 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 10 12.92)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12.01, -15.5)" d="M 7.72574 13.0061 C 7.9864 12.559 8.54079 12.3895 9.00211 12.5989 L 9.0939 12.6457 L 15.923 16.6262 L 16.0089 16.6819 C 16.4189 16.9799 16.5449 17.546 16.2843 17.9934 C 16.0235 18.4409 15.4686 18.6106 15.007 18.4006 L 14.9162 18.3537 L 8.08609 14.3743 L 8.00113 14.3176 C 7.59122 14.0195 7.46505 13.4535 7.72574 13.0061 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 10 7.08)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8.5)" d="M 14.9972 5.59887 C 15.4585 5.38924 16.0127 5.55904 16.2736 6.00609 C 16.5345 6.45316 16.4096 7.01918 16.0002 7.31762 L 15.9142 7.37328 L 9.09392 11.3537 L 9.0031 11.4006 C 8.54191 11.6105 7.98781 11.4412 7.72673 10.9944 C 7.44836 10.5174 7.6091 9.90458 8.0861 9.62621 L 14.9064 5.64672 L 14.9972 5.59887 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
              </button>
              <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <svg data-svg-id="SVG_4" className="w-5 h-5 text-[#f3f4f6]">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(0.83 0 0 0.83 10 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 10 12 C 10 10.8954 10.8954 10 12 10 C 13.1046 10 14 10.8954 14 12 C 14 13.1046 13.1046 14 12 14 C 10.8954 14 10 13.1046 10 12 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 10 4.17)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -5)" d="M 10 5 C 10 3.89543 10.8954 3 12 3 C 13.1046 3 14 3.89543 14 5 C 14 6.10457 13.1046 7 12 7 C 10.8954 7 10 6.10457 10 5 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 10 15.83)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -19)" d="M 10 19 C 10 17.8954 10.8954 17 12 17 C 13.1046 17 14 17.8954 14 19 C 14 20.1046 13.1046 21 12 21 C 10.8954 21 10 20.1046 10 19 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Desktop Header (Simplified) */}
        <header className="hidden lg:flex sticky top-0 z-40 bg-[#000000]/80 backdrop-blur-md border-b border-[#323743] h-16 items-center justify-between px-8">
          <h2 className="font-serif text-xl font-bold">Player Profile</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#262a33]/50 border border-[#323743] rounded-xl text-sm font-semibold hover:bg-[#262a33] transition-colors">
              <Icon icon="lucide:share-2" className="w-4 h-4" />
              Share
            </button>
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <Icon icon="lucide:ellipsis-vertical" className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Profile Hero Section */}
        <section className="relative pt-8 lg:pt-12 px-6 max-w-4xl mx-auto">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] header-glow pointer-events-none opacity-60 lg:opacity-100"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-[#F44725]/50 to-transparent rounded-full blur-md -m-1 opacity-50"></div>
              <div className="w-[110px] h-[110px] lg:w-[140px] lg:h-[140px] rounded-full overflow-hidden border-2 border-[#1e2128] shadow-2xl">
                <img src="./assets/IMG_1.jpeg" alt="Marcus Thompson" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-1 right-1 w-8 h-8 bg-[#000000] border-2 border-[#1e2128] rounded-full flex items-center justify-center shadow-lg">
                <svg data-svg-id="SVG_6" className="w-4 h-4 text-[#f3f4f6]">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 5.99957 C 16.6805 5.99957 13.9706 4.66298 12.1104 3.03961 L 12.1104 3.04059 C 12.0796 3.01429 12.0405 2.99957 12 2.99957 C 11.9595 2.99957 11.9204 3.01429 11.8896 3.04059 L 11.8887 3.03961 C 10.0971 4.60159 7.48931 5.91508 5.21875 5.99567 L 5 5.99957 L 5 12.9996 L 5.00879 13.4117 C 5.09782 15.4371 5.8465 16.9385 6.98633 18.106 C 8.07404 19.22 9.55305 20.0641 11.2539 20.7232 L 11.9961 20.9947 L 12.0186 21.0015 C 14.0236 20.3018 15.7728 19.3811 17.0137 18.108 C 18.229 16.8611 19 15.2354 19 12.9996 L 19 5.99957 Z M 21 12.9996 C 21 15.7637 20.021 17.8889 18.4463 19.5045 C 16.8988 21.0921 14.8204 22.1442 12.6689 22.8941 L 12.6611 22.897 C 12.233 23.0421 11.7688 23.0369 11.3438 22.8843 L 11.3438 22.8853 C 11.3379 22.8833 11.3321 22.8805 11.3262 22.8785 C 11.3246 22.8779 11.3228 22.8781 11.3213 22.8775 L 11.3213 22.8765 C 9.17204 22.132 7.09956 21.0847 5.55566 19.5035 C 4.07782 17.9899 3.12517 16.0279 3.01172 13.5113 L 3 12.9996 L 3 5.99957 C 3.00012 5.4693 3.21097 4.96048 3.58594 4.58551 C 3.96099 4.21058 4.46967 3.99957 5 3.99957 L 5.32129 3.98785 C 6.95847 3.86733 9.05353 2.86215 10.582 1.52692 L 10.5908 1.52008 L 10.7422 1.40094 C 11.1082 1.14062 11.5477 0.999573 12 0.999573 C 12.4523 0.999573 12.8918 1.14062 13.2578 1.40094 L 13.4092 1.52008 L 13.418 1.52692 L 13.7324 1.79156 C 15.3383 3.08683 17.4277 3.99957 19 3.99957 C 19.5303 3.99957 20.039 4.21058 20.4141 4.58551 C 20.789 4.96048 20.9999 5.4693 21 5.99957 L 21 12.9996 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 14.3692 9.22462 C 14.7619 8.90427 15.3409 8.92686 15.707 9.29298 C 16.0732 9.65909 16.0958 10.2381 15.7754 10.6309 L 15.707 10.707 L 11.707 14.707 C 11.3409 15.0732 10.7619 15.0958 10.3692 14.7754 L 10.293 14.707 L 8.29298 12.707 L 8.22462 12.6309 C 7.90427 12.2381 7.92686 11.6591 8.29298 11.293 C 8.65909 10.9269 9.2381 10.9043 9.63087 11.2246 L 9.70704 11.293 L 11 12.5859 L 14.293 9.29298 L 14.3692 9.22462 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
              </div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-2">Marcus Thompson</h1>
            <div className="flex items-center gap-1 text-[#bdc1ca] text-sm lg:text-base font-medium mb-8">
              <svg data-svg-id="SVG_7" className="w-3.5 h-3.5">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.58 0 0 0.58 7 7)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 18.9912 9.65332 C 18.9055 7.92303 18.181 6.28061 16.9502 5.0498 C 15.7194 3.819 14.077 3.09452 12.3467 3.00879 L 12 3 C 10.1435 3 8.36256 3.73705 7.0498 5.0498 C 5.73705 6.36256 5 8.14348 5 10 C 5 12.1593 6.21679 14.4871 7.79785 16.5645 C 9.32566 18.5717 11.0795 20.1963 12 20.9951 C 12.9205 20.1963 14.6743 18.5717 16.2021 16.5645 C 17.7832 14.4871 19 12.1593 19 10 L 18.9912 9.65332 Z M 21 10 C 21 12.8337 19.4474 15.603 17.7939 17.7754 C 16.327 19.7028 14.6832 21.2859 13.6553 22.2041 L 13.2549 22.5557 C 13.2379 22.5704 13.2201 22.5851 13.2021 22.5986 C 12.899 22.8266 12.538 22.9626 12.1621 22.9932 L 12 23 C 11.6207 23 11.2504 22.8919 10.9316 22.6904 L 10.7979 22.5986 L 10.7451 22.5557 C 9.78983 21.7308 7.88248 19.978 6.20605 17.7754 C 4.55262 15.603 3 12.8337 3 10 C 3 7.61305 3.94791 5.32357 5.63574 3.63574 C 7.32357 1.94791 9.61305 1 12 1 C 14.3869 1 16.6764 1.94791 18.3643 3.63574 C 20.0521 5.32357 21 7.61305 21 10 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.58 0 0 0.58 7 5.83)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 14 10 C 14 8.89543 13.1046 8 12 8 C 10.8954 8 10 8.89543 10 10 C 10 11.1046 10.8954 12 12 12 C 13.1046 12 14 11.1046 14 10 Z M 16 10 C 16 12.2091 14.2091 14 12 14 C 9.79086 14 8 12.2091 8 10 C 8 7.79086 9.79086 6 12 6 C 14.2091 6 16 7.79086 16 10 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
              <span>Austin, Texas • Pro Circuit</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-12">
              <button className="flex-1 h-12 bg-[#F44725] hover:bg-[#d63a1b] text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95">
                Follow Player
              </button>
              <button className="flex-1 h-12 bg-[#262a33]/30 border border-[#323743] hover:bg-[#262a33]/50 text-[#f3f4f6] font-bold rounded-2xl transition-all active:scale-95">
                Message
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 w-full mb-12">
              <StatCard 
                iconId="SVG_8" 
                label="DUPR Score" 
                value="5.82" 
                accent 
              />
              <StatCard 
                iconId="SVG_9" 
                label="Power Hand" 
                value="Right" 
              />
              <StatCard 
                iconId="SVG_10" 
                label="Backhand" 
                value="Two-Hand" 
              />
            </div>
          </div>

          {/* About Section */}
          <div className="mb-12">
            <h3 className="text-xl font-serif font-bold mb-4">About Marcus</h3>
            <p className="text-[#bdc1ca] leading-relaxed text-sm lg:text-base">
              Aggressive baseline player with a focus on high-topspin drives. Currently competing in the PPA Tour across the Southern US. Sponsored by PickleMasters.
            </p>
          </div>

          {/* Highlights Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-serif font-bold">Highlights</h3>
              <button className="text-[#F44725] text-xs font-bold hover:underline">View All</button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 pb-2">
              <HighlightCard src="./assets/IMG_2.webp" />
              <HighlightCard src="./assets/IMG_3.webp" />
              <HighlightCard src="./assets/IMG_4.webp" />
            </div>
          </div>

          {/* Recent Records Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <svg data-svg-id="SVG_11" className="w-5 h-5">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 3.33 5.42)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-4, -6.5)" d="M 1 6.5 C 1 5.57174 1.36901 4.68177 2.02539 4.02539 C 2.68177 3.36901 3.57174 3 4.5 3 L 6 3 C 6.55228 3 7 3.44772 7 4 C 7 4.55228 6.55228 5 6 5 L 4.5 5 C 4.10218 5 3.72076 5.15815 3.43945 5.43945 C 3.15815 5.72076 3 6.10218 3 6.5 C 3 6.89782 3.15815 7.27924 3.43945 7.56055 C 3.72076 7.84185 4.10218 8 4.5 8 L 6 8 C 6.55228 8 7 8.44772 7 9 C 7 9.55228 6.55228 10 6 10 L 4.5 10 C 3.57174 10 2.68177 9.63099 2.02539 8.97461 C 1.36901 8.31823 1 7.42826 1 6.5 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 16.67 5.42)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-20, -6.5)" d="M 21 6.5 C 21 6.10218 20.8419 5.72076 20.5605 5.43945 C 20.3145 5.19337 19.9917 5.04195 19.6484 5.00781 L 19.5 5 L 18 5 C 17.4477 5 17 4.55228 17 4 C 17 3.44772 17.4477 3 18 3 L 19.5 3 L 19.6738 3.00391 C 20.5388 3.04688 21.3593 3.4101 21.9746 4.02539 C 22.631 4.68177 23 5.57174 23 6.5 C 23 7.42826 22.631 8.31823 21.9746 8.97461 C 21.3182 9.63099 20.4283 10 19.5 10 L 18 10 C 17.4477 10 17 9.55228 17 9 C 17 8.44772 17.4477 8 18 8 L 19.5 8 C 19.8978 8 20.2792 7.84185 20.5605 7.56055 C 20.8419 7.27924 21 6.89782 21 6.5 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 18.33)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -22)" d="M 20 21 C 20.5523 21 21 21.4477 21 22 C 21 22.5523 20.5523 23 20 23 L 4 23 C 3.44772 23 3 22.5523 3 22 C 3 21.4477 3.44772 21 4 21 L 20 21 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 7.08 15.27)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-8.5, -18.33)" d="M 6 21.9998 C 6.00005 19.9681 6.98141 18.0479 8.61426 17.3006 C 8.76591 17.2306 8.88359 17.1422 8.95117 17.0653 C 9.01458 16.9931 9.00006 16.9733 9 16.9998 L 9 14.66 C 9 14.1077 9.44772 13.66 10 13.66 C 10.5523 13.66 11 14.1077 11 14.66 L 11 16.9998 C 11 18.0065 10.281 18.658 9.69043 18.994 L 9.44824 19.118 L 9.44629 19.119 C 8.7192 19.4517 8.00005 20.5117 8 21.9998 C 8 22.5521 7.55228 22.9998 7 22.9998 C 6.44772 22.9998 6 22.5521 6 21.9998 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 12.92 15.27)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -18.33)" d="M 16 21.9998 C 15.9999 20.5117 15.2808 19.4517 14.5537 19.119 L 14.5518 19.118 C 13.9385 18.8358 13 18.1498 13 16.9998 L 13 14.66 C 13 14.1077 13.4477 13.66 14 13.66 C 14.5523 13.66 15 14.1077 15 14.66 L 15 16.9998 C 14.9999 16.9733 14.9854 16.9931 15.0488 17.0653 C 15.1164 17.1422 15.2341 17.2306 15.3857 17.3006 L 15.5371 17.3739 C 17.0793 18.1677 18 20.0315 18 21.9998 C 18 22.5521 17.5523 22.9998 17 22.9998 C 16.4477 22.9998 16 22.5521 16 21.9998 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 7.08)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8.5)" d="M 17 3 L 7 3 L 7 9 L 7.00586 9.24805 C 7.06719 10.4838 7.58579 11.6561 8.46484 12.5352 C 9.40253 13.4728 10.6739 14 12 14 C 13.3261 14 14.5975 13.4728 15.5352 12.5352 C 16.4728 11.5975 17 10.3261 17 9 L 17 3 Z M 19 9 C 19 10.8565 18.263 12.6374 16.9502 13.9502 C 15.6374 15.2629 13.8565 16 12 16 C 10.1435 16 8.36256 15.2629 7.0498 13.9502 C 5.819 12.7194 5.09452 11.077 5.00879 9.34668 L 5 9 L 5 2 L 5.00488 1.89746 C 5.05621 1.39333 5.48232 1 6 1 L 18 1 L 18.1025 1.00488 C 18.6067 1.05621 19 1.48232 19 2 L 19 9 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
              <h3 className="text-xl font-serif font-bold">Recent Records</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              <RecordCard 
                iconId="SVG_12"
                title="Texas Open Championship"
                badge="Finalist"
                date="Oct 2023"
                category="Men's Singles 5.0"
                chevronId="SVG_13"
              />
              <RecordCard 
                iconId="SVG_14"
                title="Austin Winter Classic"
                badge="1st Place"
                date="Dec 2023"
                category="Men's Doubles"
                chevronId="SVG_15"
              />
              <RecordCard 
                iconId="SVG_16"
                title="Sunbelt Pro Series"
                badge="Semi-Final"
                date="Jan 2024"
                category="Mixed Doubles"
                chevronId="SVG_17"
              />
            </div>
            
            <div className="mt-8 text-center">
              <button className="text-[#F44725] text-sm font-semibold hover:underline mb-4">
                View Full Match History
              </button>
              <p className="text-[#bdc1ca] text-[10px] font-bold tracking-widest uppercase">
                Joined PickleOn Feb 2022
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#000000] border-t border-[#1F2937] h-16 flex items-center justify-around px-2 z-50 shadow-[0px_-2px_10px_0px_#00000033]">
        <MobileNavLink iconId="SVG_18" label="Home" />
        <MobileNavLink iconId="SVG_19" label="Search" />
        <MobileNavLink iconId="SVG_20" label="Create" />
        <MobileNavLink iconId="SVG_21" label="Alerts" />
        <MobileNavLink iconId="SVG_22" label="Profile" active />
      </nav>
    </div>
  );
}

// --- Helper Components ---

function SidebarLink({ icon, label, active = false }: { icon: string, label: string, active?: boolean }) {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
        active 
          ? 'bg-[#F44725]/10 text-[#F44725] font-bold' 
          : 'text-[#bdc1ca] hover:bg-white/5 hover:text-white'
      }`}
    >
      <Icon icon={icon} className="w-6 h-6" />
      <span className="text-sm">{label}</span>
    </a>
  );
}

function StatCard({ iconId, label, value, accent = false }: { iconId: string, label: string, value: string, accent?: boolean }) {
  return (
    <div className="bg-[#1e2128] border border-[#323743]/50 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:border-[#F44725]/30 transition-colors">
      <svg data-svg-id={iconId} className={`w-5 h-5 mb-2 ${accent ? 'text-[#F44725]' : 'text-[#f3f4f6]'}`}></svg>
      <span className="text-[#bdc1ca] text-[10px] font-bold uppercase tracking-tight mb-1">{label}</span>
      <span className="text-[#f3f4f6] text-sm font-bold">{value}</span>
    </div>
  );
}

function HighlightCard({ src }: { src: string }) {
  return (
    <div className="flex-shrink-0 w-[192px] h-[144px] rounded-2xl overflow-hidden border border-[#323743]/20 shadow-md group cursor-pointer">
      <img 
        src={src} 
        alt="Highlight" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
  );
}

function RecordCard({ iconId, title, badge, date, category, chevronId }: { 
  iconId: string, 
  title: string, 
  badge: string, 
  date: string, 
  category: string,
  chevronId: string
}) {
  return (
    <div className="bg-[#1e2128] border border-[#323743]/40 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:bg-[#262a33]/50 transition-colors cursor-pointer group">
      <div className="w-12 h-12 bg-[#F44725]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
        <svg data-svg-id={iconId} className="w-6 h-6 text-[#F44725]"></svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-serif font-bold text-sm truncate">{title}</h4>
          <span className="flex-shrink-0 px-2 py-0.5 bg-[#000000] border border-[#F44725]/30 rounded-full text-[9px] font-semibold text-[#F44725]">
            {badge}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[#bdc1ca] text-xs font-medium">
          <span>{date}</span>
          <span className="opacity-50">•</span>
          <span>{category}</span>
        </div>
      </div>
      <svg data-svg-id={chevronId} className="w-4 h-4 text-[#bdc1ca] opacity-40 group-hover:opacity-100 transition-opacity"></svg>
    </div>
  );
}

function MobileNavLink({ iconId, label, active = false }: { iconId: string, label: string, active?: boolean }) {
  return (
    <a href="#" className="flex flex-col items-center justify-center gap-1 flex-1 h-full">
      <svg data-svg-id={iconId} className={`w-6 h-6 ${active ? 'text-[#F44725]' : 'text-[#bdc1ca]'}`}></svg>
      <span className={`text-[10px] ${active ? 'text-[#F44725] font-bold' : 'text-[#bdc1ca] font-normal'}`}>
        {label}
      </span>
    </a>
  );
}

// SVG Placeholders for post-processing
const SVG_Placeholders = () => (
  <div className="hidden">
    <svg data-svg-id="SVG_1">
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
    <svg data-svg-id="SVG_2">
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
    <svg data-svg-id="SVG_3">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(0.83 0 0 0.83 15 4.17)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-18, -5)" d="M 20 5 C 20 3.89543 19.1046 3 18 3 C 16.8954 3 16 3.89543 16 5 C 16 6.10457 16.8954 7 18 7 C 19.1046 7 20 6.10457 20 5 Z M 22 5 C 22 7.20914 20.2091 9 18 9 C 15.7909 9 14 7.20914 14 5 C 14 2.79086 15.7909 1 18 1 C 20.2091 1 22 2.79086 22 5 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 5 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-6, -12)" d="M 8 12 C 8 10.8954 7.10457 10 6 10 C 4.89543 10 4 10.8954 4 12 C 4 13.1046 4.89543 14 6 14 C 7.10457 14 8 13.1046 8 12 Z M 10 12 C 10 14.2091 8.20914 16 6 16 C 3.79086 16 2 14.2091 2 12 C 2 9.79086 3.79086 8 6 8 C 8.20914 8 10 9.79086 10 12 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 15 15.83)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-18, -19)" d="M 20 19 C 20 17.8954 19.1046 17 18 17 C 16.8954 17 16 17.8954 16 19 C 16 20.1046 16.8954 21 18 21 C 19.1046 21 20 20.1046 20 19 Z M 22 19 C 22 21.2091 20.2091 23 18 23 C 15.7909 23 14 21.2091 14 19 C 14 16.7909 15.7909 15 18 15 C 20.2091 15 22 16.7909 22 19 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 10 12.92)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12.01, -15.5)" d="M 7.72574 13.0061 C 7.9864 12.559 8.54079 12.3895 9.00211 12.5989 L 9.0939 12.6457 L 15.923 16.6262 L 16.0089 16.6819 C 16.4189 16.9799 16.5449 17.546 16.2843 17.9934 C 16.0235 18.4409 15.4686 18.6106 15.007 18.4006 L 14.9162 18.3537 L 8.08609 14.3743 L 8.00113 14.3176 C 7.59122 14.0195 7.46505 13.4535 7.72574 13.0061 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 10 7.08)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8.5)" d="M 14.9972 5.59887 C 15.4585 5.38924 16.0127 5.55904 16.2736 6.00609 C 16.5345 6.45316 16.4096 7.01918 16.0002 7.31762 L 15.9142 7.37328 L 9.09392 11.3537 L 9.0031 11.4006 C 8.54191 11.6105 7.98781 11.4412 7.72673 10.9944 C 7.44836 10.5174 7.6091 9.90458 8.0861 9.62621 L 14.9064 5.64672 L 14.9972 5.59887 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
    <svg data-svg-id="SVG_4">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(0.83 0 0 0.83 10 10)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 10 12 C 10 10.8954 10.8954 10 12 10 C 13.1046 10 14 10.8954 14 12 C 14 13.1046 13.1046 14 12 14 C 10.8954 14 10 13.1046 10 12 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 10 4.17)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -5)" d="M 10 5 C 10 3.89543 10.8954 3 12 3 C 13.1046 3 14 3.89543 14 5 C 14 6.10457 13.1046 7 12 7 C 10.8954 7 10 6.10457 10 5 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 10 15.83)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -19)" d="M 10 19 C 10 17.8954 10.8954 17 12 17 C 13.1046 17 14 17.8954 14 19 C 14 20.1046 13.1046 21 12 21 C 10.8954 21 10 20.1046 10 19 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
    <svg data-svg-id="SVG_5">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(1 0 0 1 12 12)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 14.293 5.29295 C 14.6835 4.90243 15.3165 4.90243 15.707 5.29295 C 16.0976 5.68348 16.0976 6.31649 15.707 6.70702 L 10.4141 12 L 15.707 17.293 L 15.7754 17.3691 C 16.0957 17.7619 16.0731 18.3409 15.707 18.707 C 15.3409 19.0731 14.7619 19.0957 14.3691 18.7754 L 14.293 18.707 L 8.29297 12.707 C 7.90245 12.3165 7.90245 11.6835 8.29297 11.293 L 14.293 5.29295 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
    <svg data-svg-id="SVG_6">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 19 5.99957 C 16.6805 5.99957 13.9706 4.66298 12.1104 3.03961 L 12.1104 3.04059 C 12.0796 3.01429 12.0405 2.99957 12 2.99957 C 11.9595 2.99957 11.9204 3.01429 11.8896 3.04059 L 11.8887 3.03961 C 10.0971 4.60159 7.48931 5.91508 5.21875 5.99567 L 5 5.99957 L 5 12.9996 L 5.00879 13.4117 C 5.09782 15.4371 5.8465 16.9385 6.98633 18.106 C 8.07404 19.22 9.55305 20.0641 11.2539 20.7232 L 11.9961 20.9947 L 12.0186 21.0015 C 14.0236 20.3018 15.7728 19.3811 17.0137 18.108 C 18.229 16.8611 19 15.2354 19 12.9996 L 19 5.99957 Z M 21 12.9996 C 21 15.7637 20.021 17.8889 18.4463 19.5045 C 16.8988 21.0921 14.8204 22.1442 12.6689 22.8941 L 12.6611 22.897 C 12.233 23.0421 11.7688 23.0369 11.3438 22.8843 L 11.3438 22.8853 C 11.3379 22.8833 11.3321 22.8805 11.3262 22.8785 C 11.3246 22.8779 11.3228 22.8781 11.3213 22.8775 L 11.3213 22.8765 C 9.17204 22.132 7.09956 21.0847 5.55566 19.5035 C 4.07782 17.9899 3.12517 16.0279 3.01172 13.5113 L 3 12.9996 L 3 5.99957 C 3.00012 5.4693 3.21097 4.96048 3.58594 4.58551 C 3.96099 4.21058 4.46967 3.99957 5 3.99957 L 5.32129 3.98785 C 6.95847 3.86733 9.05353 2.86215 10.582 1.52692 L 10.5908 1.52008 L 10.7422 1.40094 C 11.1082 1.14062 11.5477 0.999573 12 0.999573 C 12.4523 0.999573 12.8918 1.14062 13.2578 1.40094 L 13.4092 1.52008 L 13.418 1.52692 L 13.7324 1.79156 C 15.3383 3.08683 17.4277 3.99957 19 3.99957 C 19.5303 3.99957 20.039 4.21058 20.4141 4.58551 C 20.789 4.96048 20.9999 5.4693 21 5.99957 L 21 12.9996 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 14.3692 9.22462 C 14.7619 8.90427 15.3409 8.92686 15.707 9.29298 C 16.0732 9.65909 16.0958 10.2381 15.7754 10.6309 L 15.707 10.707 L 11.707 14.707 C 11.3409 15.0732 10.7619 15.0958 10.3692 14.7754 L 10.293 14.707 L 8.29298 12.707 L 8.22462 12.6309 C 7.90427 12.2381 7.92686 11.6591 8.29298 11.293 C 8.65909 10.9269 9.2381 10.9043 9.63087 11.2246 L 9.70704 11.293 L 11 12.5859 L 14.293 9.29298 L 14.3692 9.22462 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
    <svg data-svg-id="SVG_7">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.58 0 0 0.58 7 7)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 18.9912 9.65332 C 18.9055 7.92303 18.181 6.28061 16.9502 5.0498 C 15.7194 3.819 14.077 3.09452 12.3467 3.00879 L 12 3 C 10.1435 3 8.36256 3.73705 7.0498 5.0498 C 5.73705 6.36256 5 8.14348 5 10 C 5 12.1593 6.21679 14.4871 7.79785 16.5645 C 9.32566 18.5717 11.0795 20.1963 12 20.9951 C 12.9205 20.1963 14.6743 18.5717 16.2021 16.5645 C 17.7832 14.4871 19 12.1593 19 10 L 18.9912 9.65332 Z M 21 10 C 21 12.8337 19.4474 15.603 17.7939 17.7754 C 16.327 19.7028 14.6832 21.2859 13.6553 22.2041 L 13.2549 22.5557 C 13.2379 22.5704 13.2201 22.5851 13.2021 22.5986 C 12.899 22.8266 12.538 22.9626 12.1621 22.9932 L 12 23 C 11.6207 23 11.2504 22.8919 10.9316 22.6904 L 10.7979 22.5986 L 10.7451 22.5557 C 9.78983 21.7308 7.88248 19.978 6.20605 17.7754 C 4.55262 15.603 3 12.8337 3 10 C 3 7.61305 3.94791 5.32357 5.63574 3.63574 C 7.32357 1.94791 9.61305 1 12 1 C 14.3869 1 16.6764 1.94791 18.3643 3.63574 C 20.0521 5.32357 21 7.61305 21 10 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.58 0 0 0.58 7 5.83)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 14 10 C 14 8.89543 13.1046 8 12 8 C 10.8954 8 10 8.89543 10 10 C 10 11.1046 10.8954 12 12 12 C 13.1046 12 14 11.1046 14 10 Z M 16 10 C 16 12.2091 14.2091 14 12 14 C 9.79086 14 8 12.2091 8 10 C 8 7.79086 9.79086 6 12 6 C 14.2091 6 16 7.79086 16 10 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
    <svg data-svg-id="SVG_8">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.83 0 0 0.83 10 10)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 9.10059 1.00391 C 9.30178 1.02014 9.49627 1.08471 9.66699 1.19238 L 9.75 1.25 L 9.82812 1.31348 C 9.97922 1.44708 10.096 1.61531 10.168 1.80371 L 10.2031 1.90918 L 15 18.9775 L 16.627 13.1895 C 16.804 12.5584 17.1834 12.0028 17.7061 11.6074 C 18.2281 11.2125 18.865 10.9992 19.5195 11 L 22 11 C 22.5523 11 23 11.4477 23 12 C 23 12.5523 22.5523 13 22 13 L 19.5176 13 C 19.2992 12.9996 19.0863 13.0704 18.9121 13.2021 C 18.7815 13.301 18.6779 13.4302 18.6094 13.5771 L 18.5527 13.7305 L 16.2031 22.0908 L 16.168 22.1963 C 16.084 22.416 15.9392 22.6081 15.75 22.75 C 15.5336 22.9123 15.2705 23 15 23 C 14.7295 23 14.4664 22.9123 14.25 22.75 C 14.0608 22.6081 13.916 22.416 13.832 22.1963 L 13.7969 22.0908 L 8.99902 5.02148 L 7.37305 10.8105 C 7.19669 11.4391 6.81945 11.9925 6.2998 12.3877 C 5.78012 12.7828 5.14601 12.9981 4.49316 13 L 2 13 C 1.44772 13 1 12.5523 1 12 C 1 11.4477 1.44772 11 2 11 L 4.4873 11 C 4.70491 10.9993 4.91663 10.9276 5.08984 10.7959 C 5.26298 10.6642 5.38852 10.479 5.44727 10.2695 L 7.79688 1.90918 L 7.83203 1.80371 C 7.91597 1.58404 8.06078 1.39192 8.25 1.25 L 8.33301 1.19238 C 8.53204 1.06686 8.76332 1 9 1 L 9.10059 1.00391 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
    <svg data-svg-id="SVG_9">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.83 0 0 0.83 13.33 6.25)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-16, -7.5)" d="M 17 11 L 17 6 C 17 5.73478 16.8946 5.48051 16.707 5.29297 C 16.5429 5.12883 16.3276 5.02757 16.0986 5.00488 L 16 5 C 15.7348 5 15.4805 5.10543 15.293 5.29297 C 15.1054 5.48051 15 5.73478 15 6 C 15 6.55228 14.5523 7 14 7 C 13.4477 7 13 6.55228 13 6 C 13 5.20435 13.3163 4.44152 13.8789 3.87891 C 14.4415 3.3163 15.2044 3 16 3 L 16.2969 3.01465 C 16.9835 3.08291 17.6289 3.38671 18.1211 3.87891 C 18.6837 4.44152 19 5.20435 19 6 L 19 11 C 19 11.5523 18.5523 12 18 12 C 17.4477 12 17 11.5523 17 11 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.83 0 0 0.83 10 5)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -6)" d="M 13 10 L 13 4 C 13 3.73478 12.8946 3.48051 12.707 3.29297 C 12.5429 3.12883 12.3276 3.02757 12.0986 3.00488 L 12 3 C 11.7348 3 11.4805 3.10543 11.293 3.29297 C 11.1054 3.48051 11 3.73478 11 4 L 11 6 C 11 6.55228 10.5523 7 10 7 C 9.44772 7 9 6.55228 9 6 L 9 4 C 9 3.20435 9.3163 2.44152 9.87891 1.87891 C 10.4415 1.3163 11.2044 1 12 1 L 12.2969 1.01465 C 12.9835 1.08291 13.6289 1.38671 14.1211 1.87891 C 14.6837 2.44152 15 3.20435 15 4 L 15 10 C 15 10.5523 14.5523 11 14 11 C 13.4477 11 13 10.5523 13 10 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.83 0 0 0.83 6.67 7.5)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-8, -9)" d="M 9 10.5 L 9 6 C 9 5.73478 8.89457 5.48051 8.70703 5.29297 C 8.54289 5.12883 8.32763 5.02757 8.09863 5.00488 L 8 5 C 7.73478 5 7.48051 5.10543 7.29297 5.29297 C 7.10543 5.48051 7 5.73478 7 6 L 7 14 C 7 14.5523 6.55228 15 6 15 C 5.44772 15 5 14.5523 5 14 L 5 6 C 5 5.20435 5.3163 4.44152 5.87891 3.87891 C 6.44152 3.3163 7.20435 3 8 3 L 8.29688 3.01465 C 8.98351 3.08291 9.6289 3.38671 10.1211 3.87891 C 10.6837 4.44152 11 5.20435 11 6 L 11 10.5 C 11 11.0523 10.5523 11.5 10 11.5 C 9.44772 11.5 9 11.0523 9 10.5 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.83 0 0 0.83 9.96 11.67)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-11.95, -14)" d="M 3.82607 11.7207 C 4.49979 11.7053 5.15606 11.917 5.6913 12.3174 L 5.91298 12.5 L 5.94716 12.5332 L 7.70693 14.293 L 7.77529 14.3691 C 8.09568 14.7619 8.07306 15.3409 7.70693 15.707 C 7.34079 16.0731 6.76179 16.0958 6.36904 15.7754 L 6.29287 15.707 L 4.55654 13.9707 C 4.36808 13.8041 4.12379 13.7141 3.87197 13.7197 C 3.61533 13.7256 3.37021 13.8305 3.18837 14.0117 C 3.00672 14.1929 2.90119 14.4369 2.89443 14.6934 C 2.8878 14.9453 2.97742 15.1898 3.14345 15.3789 L 6.71377 18.9502 L 6.71474 18.9502 C 8.02079 20.2475 9.46877 21 11.9999 21 L 13.9999 21 L 14.3476 20.9912 C 16.0775 20.9053 17.7195 20.1808 18.9501 18.9502 C 20.1809 17.7194 20.9054 16.077 20.9911 14.3467 L 20.9999 14 L 20.9999 8 C 20.9999 7.73478 20.8945 7.48051 20.7069 7.29297 C 20.5194 7.10546 20.2651 7 19.9999 7 C 19.7347 7.00003 19.4804 7.10546 19.2929 7.29297 C 19.1054 7.4805 18.9999 7.73481 18.9999 8 C 18.9999 8.55228 18.5522 9 17.9999 9 C 17.4477 8.99994 16.9999 8.55225 16.9999 8 C 16.9999 7.20437 17.3162 6.44151 17.8788 5.87891 C 18.4414 5.31632 19.2043 5.00003 19.9999 5 C 20.7955 5 21.5584 5.31633 22.121 5.87891 C 22.6836 6.44152 22.9999 7.20435 22.9999 8 L 22.9999 14 L 22.9892 14.4463 C 22.8788 16.6708 21.9465 18.7819 20.3642 20.3643 C 18.7818 21.9466 16.6707 22.8789 14.4462 22.9893 L 13.9999 23 L 11.9999 23 C 8.93115 23 6.97948 22.0318 5.30556 20.3691 L 5.30263 20.3672 L 1.70302 16.7676 C 1.69107 16.7556 1.67919 16.743 1.66787 16.7305 C 1.15178 16.1589 0.875114 15.4104 0.895406 14.6406 C 0.915711 13.8708 1.23173 13.1383 1.77724 12.5947 C 2.32274 12.0512 3.05622 11.7383 3.82607 11.7207 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
    <svg data-svg-id="SVG_10">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.83 0 0 0.83 10 10)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 13.3511 1.00426 C 13.6035 0.979434 13.8584 1.01916 14.0913 1.11949 L 14.2056 1.17516 L 14.315 1.23961 C 14.5276 1.37773 14.7014 1.56768 14.8208 1.79137 L 14.8765 1.90563 L 14.9214 2.02477 C 15.0012 2.26511 15.0193 2.52186 14.9732 2.77086 L 14.9439 2.89488 C 14.9403 2.90782 14.9372 2.92116 14.9331 2.93395 L 13.0132 8.95348 L 12.9966 9.00035 L 19.9995 9.00035 C 20.377 8.99962 20.7472 9.10533 21.0669 9.30602 C 21.3874 9.50722 21.6438 9.79572 21.8072 10.1371 C 21.9705 10.4784 22.0342 10.8589 21.9898 11.2347 C 21.9509 11.5635 21.8311 11.8768 21.6421 12.1468 L 21.5562 12.2601 L 21.4976 12.3265 L 11.5972 22.5267 L 11.5962 22.5257 C 11.3775 22.7596 11.0908 22.9195 10.7749 22.9779 C 10.4404 23.0398 10.0945 22.986 9.79446 22.8255 C 9.49446 22.6651 9.25781 22.4067 9.12356 22.0941 C 8.98947 21.7816 8.96599 21.4328 9.05618 21.1048 L 9.06692 21.0658 L 10.9868 15.0463 L 11.0034 15.0004 L 3.99954 15.0004 L 3.99954 14.9994 C 3.62242 14.9999 3.25259 14.8942 2.93313 14.6937 C 2.61282 14.4926 2.35623 14.2048 2.1929 13.8636 C 2.02953 13.5222 1.96587 13.1409 2.01028 12.765 C 2.05474 12.3893 2.2055 12.0334 2.44388 11.7396 L 2.50247 11.6732 L 12.4029 1.47399 C 12.6216 1.23994 12.9092 1.08127 13.2251 1.02281 L 13.3511 1.00426 Z M 4.00247 13.0004 L 10.9995 13.0004 C 11.3221 12.9998 11.6401 13.0771 11.9263 13.2259 C 12.2132 13.3752 12.4602 13.5914 12.645 13.8568 C 12.8299 14.1223 12.9474 14.4294 12.9878 14.7504 C 13.0261 15.055 12.9904 15.363 12.8902 15.6527 L 12.8931 15.6537 L 11.6265 19.6244 L 19.9976 11.0004 L 12.9995 11.0004 L 12.9995 10.9994 C 12.6774 10.9998 12.3596 10.9234 12.0738 10.7748 C 11.7868 10.6255 11.5399 10.4084 11.355 10.1429 C 11.1703 9.87756 11.0527 9.57115 11.0122 9.25035 C 10.9738 8.94533 11.0084 8.63614 11.1089 8.34606 L 11.107 8.34606 L 12.3726 4.37438 L 4.00247 13.0004 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
    <svg data-svg-id="SVG_11">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 3.33 5.42)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-4, -6.5)" d="M 1 6.5 C 1 5.57174 1.36901 4.68177 2.02539 4.02539 C 2.68177 3.36901 3.57174 3 4.5 3 L 6 3 C 6.55228 3 7 3.44772 7 4 C 7 4.55228 6.55228 5 6 5 L 4.5 5 C 4.10218 5 3.72076 5.15815 3.43945 5.43945 C 3.15815 5.72076 3 6.10218 3 6.5 C 3 6.89782 3.15815 7.27924 3.43945 7.56055 C 3.72076 7.84185 4.10218 8 4.5 8 L 6 8 C 6.55228 8 7 8.44772 7 9 C 7 9.55228 6.55228 10 6 10 L 4.5 10 C 3.57174 10 2.68177 9.63099 2.02539 8.97461 C 1.36901 8.31823 1 7.42826 1 6.5 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 16.67 5.42)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-20, -6.5)" d="M 21 6.5 C 21 6.10218 20.8419 5.72076 20.5605 5.43945 C 20.3145 5.19337 19.9917 5.04195 19.6484 5.00781 L 19.5 5 L 18 5 C 17.4477 5 17 4.55228 17 4 C 17 3.44772 17.4477 3 18 3 L 19.5 3 L 19.6738 3.00391 C 20.5388 3.04688 21.3593 3.4101 21.9746 4.02539 C 22.631 4.68177 23 5.57174 23 6.5 C 23 7.42826 22.631 8.31823 21.9746 8.97461 C 21.3182 9.63099 20.4283 10 19.5 10 L 18 10 C 17.4477 10 17 9.55228 17 9 C 17 8.44772 17.4477 8 18 8 L 19.5 8 C 19.8978 8 20.2792 7.84185 20.5605 7.56055 C 20.8419 7.27924 21 6.89782 21 6.5 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 18.33)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -22)" d="M 20 21 C 20.5523 21 21 21.4477 21 22 C 21 22.5523 20.5523 23 20 23 L 4 23 C 3.44772 23 3 22.5523 3 22 C 3 21.4477 3.44772 21 4 21 L 20 21 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 7.08 15.27)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-8.5, -18.33)" d="M 6 21.9998 C 6.00005 19.9681 6.98141 18.0479 8.61426 17.3006 C 8.76591 17.2306 8.88359 17.1422 8.95117 17.0653 C 9.01458 16.9931 9.00006 16.9733 9 16.9998 L 9 14.66 C 9 14.1077 9.44772 13.66 10 13.66 C 10.5523 13.66 11 14.1077 11 14.66 L 11 16.9998 C 11 18.0065 10.281 18.658 9.69043 18.994 L 9.44824 19.118 L 9.44629 19.119 C 8.7192 19.4517 8.00005 20.5117 8 21.9998 C 8 22.5521 7.55228 22.9998 7 22.9998 C 6.44772 22.9998 6 22.5521 6 21.9998 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 12.92 15.27)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -18.33)" d="M 16 21.9998 C 15.9999 20.5117 15.2808 19.4517 14.5537 19.119 L 14.5518 19.118 C 13.9385 18.8358 13 18.1498 13 16.9998 L 13 14.66 C 13 14.1077 13.4477 13.66 14 13.66 C 14.5523 13.66 15 14.1077 15 14.66 L 15 16.9998 C 14.9999 16.9733 14.9854 16.9931 15.0488 17.0653 C 15.1164 17.1422 15.2341 17.2306 15.3857 17.3006 L 15.5371 17.3739 C 17.0793 18.1677 18 20.0315 18 21.9998 C 18 22.5521 17.5523 22.9998 17 22.9998 C 16.4477 22.9998 16 22.5521 16 21.9998 Z" strokeLinecap="round" />
            </g>
            <g transform="matrix(0.83 0 0 0.83 10 7.08)">
              <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8.5)" d="M 17 3 L 7 3 L 7 9 L 7.00586 9.24805 C 7.06719 10.4838 7.58579 11.6561 8.46484 12.5352 C 9.40253 13.4728 10.6739 14 12 14 C 13.3261 14 14.5975 13.4728 15.5352 12.5352 C 16.4728 11.5975 17 10.3261 17 9 L 17 3 Z M 19 9 C 19 10.8565 18.263 12.6374 16.9502 13.9502 C 15.6374 15.2629 13.8565 16 12 16 C 10.1435 16 8.36256 15.2629 7.0498 13.9502 C 5.819 12.7194 5.09452 11.077 5.00879 9.34668 L 5 9 L 5 2 L 5.00488 1.89746 C 5.05621 1.39333 5.48232 1 6 1 L 18 1 L 18.1025 1.00488 C 18.6067 1.05621 19 1.48232 19 2 L 19 9 Z" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
    <svg data-svg-id="SVG_12">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 12 17.44)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -17.44)" d="M 15.302 11.9056 C 15.8118 11.815 16.3002 12.1279 16.4387 12.6156 L 16.4611 12.7152 L 17.9768 21.2406 L 17.9777 21.2494 L 17.9924 21.3626 C 18.0166 21.6274 17.9702 21.8951 17.8566 22.1371 C 17.7269 22.4132 17.516 22.643 17.2522 22.7962 C 16.9879 22.9495 16.6826 23.019 16.3781 22.9945 C 16.0877 22.971 15.8112 22.8629 15.5813 22.6849 L 15.5813 22.6859 L 12.0031 19.9994 L 8.41817 22.6849 C 8.18862 22.8621 7.91289 22.97 7.62325 22.9935 C 7.31914 23.0181 7.01422 22.9491 6.7502 22.7962 C 6.48645 22.6435 6.27576 22.4137 6.14571 22.138 C 6.01564 21.8621 5.97252 21.5523 6.02266 21.2513 L 6.02461 21.2416 L 7.53829 12.7152 L 7.56172 12.6156 C 7.70026 12.1281 8.18775 11.8152 8.69747 11.9056 C 9.24121 12.0022 9.6045 12.5211 9.50801 13.0648 L 8.21504 20.3382 L 10.8059 18.3988 L 10.8068 18.3978 L 10.9397 18.307 C 11.2574 18.1073 11.6257 18.0004 12.0031 18.0003 C 12.3807 18.0003 12.7497 18.1072 13.0676 18.307 L 13.2004 18.3978 L 13.2023 18.3988 L 15.7834 20.3363 L 14.4924 13.0648 L 14.4797 12.9632 C 14.442 12.4579 14.7923 11.9962 15.302 11.9056 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 12 8)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8)" d="M 17 8 C 17 5.23858 14.7614 3 12 3 C 9.23858 3 7 5.23858 7 8 C 7 10.7614 9.23858 13 12 13 C 14.7614 13 17 10.7614 17 8 Z M 19 8 C 19 11.866 15.866 15 12 15 C 8.13401 15 5 11.866 5 8 C 5 4.13401 8.13401 1 12 1 C 15.866 1 19 4.13401 19 8 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
    <svg data-svg-id="SVG_13">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 8.29295 5.29298 C 8.65907 4.92686 9.23807 4.90427 9.63084 5.22462 L 9.70702 5.29298 L 15.707 11.293 C 16.0975 11.6835 16.0975 12.3165 15.707 12.707 L 9.70702 18.707 C 9.31649 19.0976 8.68348 19.0976 8.29295 18.707 C 7.90243 18.3165 7.90243 17.6835 8.29295 17.293 L 13.5859 12 L 8.29295 6.70704 L 8.22459 6.63087 C 7.90424 6.2381 7.92684 5.65909 8.29295 5.29298 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
    <svg data-svg-id="SVG_14">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 12 17.44)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -17.44)" d="M 15.302 11.9056 C 15.8118 11.815 16.3002 12.1279 16.4387 12.6156 L 16.4611 12.7152 L 17.9768 21.2406 L 17.9777 21.2494 L 17.9924 21.3626 C 18.0166 21.6274 17.9702 21.8951 17.8566 22.1371 C 17.7269 22.4132 17.516 22.643 17.2522 22.7962 C 16.9879 22.9495 16.6826 23.019 16.3781 22.9945 C 16.0877 22.971 15.8112 22.8629 15.5813 22.6849 L 15.5813 22.6859 L 12.0031 19.9994 L 8.41817 22.6849 C 8.18862 22.8621 7.91289 22.97 7.62325 22.9935 C 7.31914 23.0181 7.01422 22.9491 6.7502 22.7962 C 6.48645 22.6435 6.27576 22.4137 6.14571 22.138 C 6.01564 21.8621 5.97252 21.5523 6.02266 21.2513 L 6.02461 21.2416 L 7.53829 12.7152 L 7.56172 12.6156 C 7.70026 12.1281 8.18775 11.8152 8.69747 11.9056 C 9.24121 12.0022 9.6045 12.5211 9.50801 13.0648 L 8.21504 20.3382 L 10.8059 18.3988 L 10.8068 18.3978 L 10.9397 18.307 C 11.2574 18.1073 11.6257 18.0004 12.0031 18.0003 C 12.3807 18.0003 12.7497 18.1072 13.0676 18.307 L 13.2004 18.3978 L 13.2023 18.3988 L 15.7834 20.3363 L 14.4924 13.0648 L 14.4797 12.9632 C 14.442 12.4579 14.7923 11.9962 15.302 11.9056 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 12 8)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8)" d="M 17 8 C 17 5.23858 14.7614 3 12 3 C 9.23858 3 7 5.23858 7 8 C 7 10.7614 9.23858 13 12 13 C 14.7614 13 17 10.7614 17 8 Z M 19 8 C 19 11.866 15.866 15 12 15 C 8.13401 15 5 11.866 5 8 C 5 4.13401 8.13401 1 12 1 C 15.866 1 19 4.13401 19 8 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
    <svg data-svg-id="SVG_15">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 8.29295 5.29298 C 8.65907 4.92686 9.23807 4.90427 9.63084 5.22462 L 9.70702 5.29298 L 15.707 11.293 C 16.0975 11.6835 16.0975 12.3165 15.707 12.707 L 9.70702 18.707 C 9.31649 19.0976 8.68348 19.0976 8.29295 18.707 C 7.90243 18.3165 7.90243 17.6835 8.29295 17.293 L 13.5859 12 L 8.29295 6.70704 L 8.22459 6.63087 C 7.90424 6.2381 7.92684 5.65909 8.29295 5.29298 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
    <svg data-svg-id="SVG_16">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 12 17.44)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -17.44)" d="M 15.302 11.9056 C 15.8118 11.815 16.3002 12.1279 16.4387 12.6156 L 16.4611 12.7152 L 17.9768 21.2406 L 17.9777 21.2494 L 17.9924 21.3626 C 18.0166 21.6274 17.9702 21.8951 17.8566 22.1371 C 17.7269 22.4132 17.516 22.643 17.2522 22.7962 C 16.9879 22.9495 16.6826 23.019 16.3781 22.9945 C 16.0877 22.971 15.8112 22.8629 15.5813 22.6849 L 15.5813 22.6859 L 12.0031 19.9994 L 8.41817 22.6849 C 8.18862 22.8621 7.91289 22.97 7.62325 22.9935 C 7.31914 23.0181 7.01422 22.9491 6.7502 22.7962 C 6.48645 22.6435 6.27576 22.4137 6.14571 22.138 C 6.01564 21.8621 5.97252 21.5523 6.02266 21.2513 L 6.02461 21.2416 L 7.53829 12.7152 L 7.56172 12.6156 C 7.70026 12.1281 8.18775 11.8152 8.69747 11.9056 C 9.24121 12.0022 9.6045 12.5211 9.50801 13.0648 L 8.21504 20.3382 L 10.8059 18.3988 L 10.8068 18.3978 L 10.9397 18.307 C 11.2574 18.1073 11.6257 18.0004 12.0031 18.0003 C 12.3807 18.0003 12.7497 18.1072 13.0676 18.307 L 13.2004 18.3978 L 13.2023 18.3988 L 15.7834 20.3363 L 14.4924 13.0648 L 14.4797 12.9632 C 14.442 12.4579 14.7923 11.9962 15.302 11.9056 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 12 8)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8)" d="M 17 8 C 17 5.23858 14.7614 3 12 3 C 9.23858 3 7 5.23858 7 8 C 7 10.7614 9.23858 13 12 13 C 14.7614 13 17 10.7614 17 8 Z M 19 8 C 19 11.866 15.866 15 12 15 C 8.13401 15 5 11.866 5 8 C 5 4.13401 8.13401 1 12 1 C 15.866 1 19 4.13401 19 8 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
    <svg data-svg-id="SVG_17">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.67 0 0 0.67 8 8)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 8.29295 5.29298 C 8.65907 4.92686 9.23807 4.90427 9.63084 5.22462 L 9.70702 5.29298 L 15.707 11.293 C 16.0975 11.6835 16.0975 12.3165 15.707 12.707 L 9.70702 18.707 C 9.31649 19.0976 8.68348 19.0976 8.29295 18.707 C 7.90243 18.3165 7.90243 17.6835 8.29295 17.293 L 13.5859 12 L 8.29295 6.70704 L 8.22459 6.63087 C 7.90424 6.2381 7.92684 5.65909 8.29295 5.29298 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
    <svg data-svg-id="SVG_18">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 12 16.5)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -16.5)" d="M 14 21 L 14 13 L 10 13 L 10 21 C 10 21.5523 9.55228 22 9 22 C 8.44772 22 8 21.5523 8 21 L 8 13 C 8 12.4696 8.21087 11.961 8.58594 11.5859 C 8.96101 11.2109 9.46957 11 10 11 L 14 11 C 14.5304 11 15.039 11.2109 15.4141 11.5859 C 15.7891 11.961 16 12.4696 16 13 L 16 21 C 16 21.5523 15.5523 22 15 22 C 14.4477 22 14 21.5523 14 21 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 12 11.5)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -11.5)" d="M 20 9.99957 L 19.9941 9.89117 C 19.9824 9.78322 19.9531 9.67762 19.9072 9.57867 C 19.846 9.44674 19.7566 9.32979 19.6455 9.2359 L 19.6406 9.23102 L 12.6455 3.2359 L 12.6455 3.23688 C 12.4875 3.10334 12.2926 3.02251 12.0879 3.00446 L 12 3.00055 C 11.7637 3.00055 11.535 3.08433 11.3545 3.23688 L 11.3535 3.2359 L 4.35938 9.23102 L 4.35449 9.2359 C 4.24342 9.32979 4.15399 9.44674 4.09277 9.57867 C 4.0316 9.71054 4 9.85421 4 9.99957 L 4 18.9996 C 4 19.2648 4.10543 19.52 4.29297 19.7076 C 4.48048 19.895 4.73491 19.9996 5 19.9996 L 19 19.9996 C 19.2651 19.9996 19.5195 19.895 19.707 19.7076 C 19.8946 19.52 20 19.2648 20 18.9996 L 20 9.99957 Z M 22 18.9996 C 22 19.7952 21.6837 20.559 21.1211 21.1216 C 20.5585 21.6841 19.7955 21.9996 19 21.9996 L 5 21.9996 C 4.20447 21.9996 3.44149 21.6841 2.87891 21.1216 C 2.3163 20.559 2 19.7952 2 18.9996 L 2 9.99957 C 2 9.56347 2.09479 9.13248 2.27832 8.73688 C 2.46197 8.34108 2.73025 7.99023 3.06348 7.70856 L 10.0586 1.71344 L 10.0635 1.70953 L 10.2734 1.54742 C 10.7771 1.19289 11.3798 1.00055 12 1.00055 L 12.2646 1.01227 C 12.7905 1.05883 13.2948 1.24356 13.7266 1.54742 L 13.9365 1.70953 L 13.9414 1.71344 L 20.9365 7.70856 L 21.0586 7.81696 C 21.3356 8.07826 21.561 8.39052 21.7217 8.73688 C 21.9052 9.13248 22 9.56347 22 9.99957 L 22 18.9996 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
    <svg data-svg-id="SVG_19">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 18.83 18.83)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-18.83, -18.83)" d="M 15.953 15.953 C 16.3191 15.5869 16.8981 15.5643 17.2909 15.8847 L 17.3671 15.953 L 21.7069 20.2929 L 21.7763 20.369 C 22.0963 20.7618 22.0729 21.3409 21.7069 21.7069 C 21.3409 22.0729 20.7618 22.0963 20.369 21.7763 L 20.2929 21.7069 L 15.953 17.3671 L 15.8847 17.2909 C 15.5643 16.8981 15.5869 16.3191 15.953 15.953 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 11 11)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-11, -11)" d="M 18 11 C 18 7.13401 14.866 4 11 4 C 7.13401 4 4 7.13401 4 11 C 4 14.866 7.13401 18 11 18 C 14.866 18 18 14.866 18 11 Z M 20 11 C 20 15.9706 15.9706 20 11 20 C 6.02944 20 2 15.9706 2 11 C 2 6.02944 6.02944 2 11 2 C 15.9706 2 20 6.02944 20 11 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
    <svg data-svg-id="SVG_20">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 12 12)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 12 C 21 7.02944 16.9706 3 12 3 C 7.02944 3 3 7.02944 3 12 C 3 16.9706 7.02944 21 12 21 C 16.9706 21 21 16.9706 21 12 Z M 23 12 C 23 18.0751 18.0751 23 12 23 C 5.92487 23 1 18.0751 1 12 C 1 5.92487 5.92487 1 12 1 C 18.0751 1 23 5.92487 23 12 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 12 12)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 16 11 C 16.5523 11 17 11.4477 17 12 C 17 12.5523 16.5523 13 16 13 L 8 13 C 7.44772 13 7 12.5523 7 12 C 7 11.4477 7.44772 11 8 11 L 16 11 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 12 12)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 11 16 L 11 8 C 11 7.44772 11.4477 7 12 7 C 12.5523 7 13 7.44772 13 8 L 13 16 C 13 16.5523 12.5523 17 12 17 C 11.4477 17 11 16.5523 11 16 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
    <svg data-svg-id="SVG_21">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 12 21.5)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -21.5)" d="M 12.9213 20.4141 C 13.2177 20.0029 13.7834 19.875 14.2318 20.1338 C 14.6803 20.3927 14.8528 20.9469 14.6449 21.4092 L 14.5981 21.5 C 14.3348 21.9559 13.9562 22.3344 13.5004 22.5977 C 13.0445 22.8609 12.5268 22.9999 12.0004 23 C 11.4739 23 10.9564 22.8609 10.5004 22.5977 C 10.1013 22.3673 9.7614 22.0486 9.50626 21.667 L 9.40177 21.5 L 9.35489 21.4092 C 9.14705 20.9469 9.31958 20.3927 9.76798 20.1338 C 10.2164 19.875 10.7821 20.0029 11.0785 20.4141 L 11.1342 20.5 L 11.2065 20.6094 C 11.2861 20.7131 11.3864 20.8004 11.5004 20.8662 C 11.6523 20.9538 11.825 21 12.0004 21 C 12.1758 20.9999 12.3485 20.9539 12.5004 20.8662 C 12.6523 20.7785 12.7779 20.6519 12.8656 20.5 L 12.9213 20.4141 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 12 9.5)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -9.5)" d="M 16.9998 8 C 16.9998 6.67409 16.4734 5.40249 15.5359 4.46484 C 14.5982 3.52716 13.3259 3 11.9998 3 C 10.6738 3.00007 9.40224 3.52722 8.46462 4.46484 C 7.52702 5.40251 6.99978 6.67398 6.99978 8 L 6.99587 8.43359 C 6.95306 10.5585 6.59338 12.0774 6.03298 13.2637 C 5.44252 14.5136 4.65897 15.3205 4.00075 16 L 19.9998 16 C 19.3402 15.3201 18.5577 14.5128 17.9676 13.2637 C 17.3696 11.998 16.9998 10.3541 16.9998 8 Z M 18.9998 8 C 18.9998 10.1447 19.3357 11.4789 19.7752 12.4092 C 20.1056 13.1086 20.5128 13.6223 20.9763 14.125 L 21.4578 14.6309 L 21.4793 14.6543 C 21.7401 14.941 21.9123 15.2971 21.9744 15.6797 C 22.0364 16.0621 21.9865 16.4543 21.8299 16.8086 C 21.6731 17.1629 21.4163 17.4644 21.0916 17.6758 C 20.8073 17.8608 20.4811 17.9708 20.1443 17.9951 L 19.9998 18 L 3.99978 18 C 3.61216 17.9997 3.23261 17.8866 2.90798 17.6748 C 2.58334 17.463 2.32705 17.1613 2.17068 16.8066 C 2.01435 16.452 1.96453 16.0593 2.02712 15.6768 C 2.08974 15.2944 2.26212 14.9386 2.52321 14.6523 L 2.54372 14.6299 L 3.02517 14.125 C 3.48799 13.6225 3.894 13.1086 4.22439 12.4092 C 4.63638 11.537 4.95735 10.3099 4.99587 8.39258 L 4.99978 8 C 4.99978 6.14348 5.7378 4.36256 7.05056 3.0498 C 8.36322 1.73734 10.1435 1.00007 11.9998 1 C 13.8562 1 15.6372 1.73713 16.95 3.0498 C 18.2627 4.36256 18.9998 6.14348 18.9998 8 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
    <svg data-svg-id="SVG_22">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(1 0 0 1 12 18)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -18)" d="M 18 21 L 18 19 C 18 18.2044 17.6837 17.4415 17.1211 16.8789 C 16.6289 16.3867 15.9835 16.0829 15.2969 16.0146 L 15 16 L 9 16 C 8.20435 16 7.44152 16.3163 6.87891 16.8789 C 6.3163 17.4415 6 18.2044 6 19 L 6 21 C 6 21.5523 5.55228 22 5 22 C 4.44772 22 4 21.5523 4 21 L 4 19 C 4 17.6739 4.52716 16.4025 5.46484 15.4648 C 6.40253 14.5272 7.67392 14 9 14 L 15 14 L 15.248 14.0059 C 16.4838 14.0672 17.6561 14.5858 18.5352 15.4648 C 19.4728 16.4025 20 17.6739 20 19 L 20 21 C 20 21.5523 19.5523 22 19 22 C 18.4477 22 18 21.5523 18 21 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(1 0 0 1 12 7)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -7)" d="M 15 7 C 15 5.34315 13.6569 4 12 4 C 10.3431 4 9 5.34315 9 7 C 9 8.65685 10.3431 10 12 10 C 13.6569 10 15 8.65685 15 7 Z M 17 7 C 17 9.76142 14.7614 12 12 12 C 9.23858 12 7 9.76142 7 7 C 7 4.23858 9.23858 2 12 2 C 14.7614 2 17 4.23858 17 7 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
  </div>
);