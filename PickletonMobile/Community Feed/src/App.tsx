import { Icon } from '@iconify/react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#f3f4f6] font-['Inter'] selection:bg-[#F44725]/30">
      {/* Desktop Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 border-r border-[#323743] bg-black z-50 p-6">
        <div className="mb-10">
          <h1 className="text-2xl font-['Playfair_Display'] font-bold text-[#f3f4f6]">Community</h1>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          <SidebarLink icon="lucide:house" label="Home" active />
          <SidebarLink icon="lucide:search" label="Search" />
          <SidebarLink icon="lucide:circle-plus" label="Create" />
          <SidebarLink icon="lucide:bell" label="Alerts" badge="9" />
          <SidebarLink icon="lucide:user" label="Profile" />
        </nav>
        <div className="mt-auto pt-6 border-t border-[#323743]">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#1e2128] transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#fef0e2]">
              <img src="./assets/IMG_1.jpeg" className="w-full h-full object-cover" alt="User" />
            </div>
            <div>
              <p className="text-sm font-bold">Marcus Rivera</p>
              <p className="text-xs text-[#bdc1ca]">PRO Member</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lg:ml-64 xl:mr-80 min-h-screen pb-24 lg:pb-10">
        {/* Header - Mobile & Tablet */}
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-[#323743]">
          {/* Status Bar (Mobile Only) */}
          <div className="flex justify-between items-center px-6 h-10 lg:hidden">
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

          <div className="flex items-center justify-between px-6 py-4">
            <div className="lg:hidden">
              <h1 className="text-xl font-['Playfair_Display'] font-bold">Community Feed</h1>
            </div>
            <div className="hidden lg:block">
              <h2 className="text-xl font-bold">Feed</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-[#1e2128] rounded-full transition-colors">
                <svg data-svg-id="SVG_3" className="w-5 h-5 text-[#f3f4f6]">
          <g transform="matrix(1 0 0 1 0 0)">
            <g style={{  }}>
              <g transform="matrix(0.83 0 0 0.83 15.69 15.69)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-18.83, -18.83)" d="M 15.953 15.953 C 16.3191 15.5869 16.8981 15.5643 17.2909 15.8847 L 17.3671 15.953 L 21.7069 20.2929 L 21.7763 20.369 C 22.0963 20.7618 22.0729 21.3409 21.7069 21.7069 C 21.3409 22.0729 20.7618 22.0963 20.369 21.7763 L 20.2929 21.7069 L 15.953 17.3671 L 15.8847 17.2909 C 15.5643 16.8981 15.5869 16.3191 15.953 15.953 Z" strokeLinecap="round" />
              </g>
              <g transform="matrix(0.83 0 0 0.83 9.17 9.17)">
                <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(243,244,246)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-11, -11)" d="M 18 11 C 18 7.13401 14.866 4 11 4 C 7.13401 4 4 7.13401 4 11 C 4 14.866 7.13401 18 11 18 C 14.866 18 18 14.866 18 11 Z M 20 11 C 20 15.9706 15.9706 20 11 20 C 6.02944 20 2 15.9706 2 11 C 2 6.02944 6.02944 2 11 2 C 15.9706 2 20 6.02944 20 11 Z" strokeLinecap="round" />
              </g>
            </g>
          </g>
        </svg>
              </button>
              <button className="p-2 hover:bg-[#1e2128] rounded-full transition-colors">
                <svg data-svg-id="SVG_4" className="w-5 h-5 text-[#f3f4f6]">
        <g transform="matrix(1 0 0 1 0 0)">
          <g style={{  }}>
            <g transform="matrix(0.83 0 0 0.83 10 10)">
              <polygon style={{ stroke: "rgb(243,244,246)", strokeWidth: "2", strokeDasharray: "none", strokeLinecap: "round", strokeDashoffset: "0", strokeLinejoin: "round", strokeMiterlimit: "4", fill: "none", fillRule: "nonzero", opacity: "1" }} points="10,-9 -10,-9 -2,0.46 -2,7 2,9 2,0.46 10,-9 " />
            </g>
          </g>
        </g>
      </svg>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="px-6 pb-4 overflow-x-auto no-scrollbar flex gap-3">
            <Tab label="For You" active />
            <Tab label="Following" />
            <Tab label="Events" />
            <Tab label="Pro Tips" />
            <Tab label="Local" />
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          {/* Streak Card */}
          <div className="bg-[#340b03]/20 border border-[#F44725]/20 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 bg-[#F44725]/10 rounded-2xl flex items-center justify-center">
                <svg data-svg-id="SVG_5" className="w-5 h-5 text-[#F44725]">
                <g transform="matrix(1 0 0 1 0 0)">
                  <g style={{  }}>
                    <g transform="matrix(0.83 0 0 0.83 3.33 5.42)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-4, -6.5)" d="M 1 6.5 C 1 5.57174 1.36901 4.68177 2.02539 4.02539 C 2.68177 3.36901 3.57174 3 4.5 3 L 6 3 C 6.55228 3 7 3.44772 7 4 C 7 4.55228 6.55228 5 6 5 L 4.5 5 C 4.10218 5 3.72076 5.15815 3.43945 5.43945 C 3.15815 5.72076 3 6.10218 3 6.5 C 3 6.89782 3.15815 7.27924 3.43945 7.56055 C 3.72076 7.84185 4.10218 8 4.5 8 L 6 8 C 6.55228 8 7 8.44772 7 9 C 7 9.55228 6.55228 10 6 10 L 4.5 10 C 3.57174 10 2.68177 9.63099 2.02539 8.97461 C 1.36901 8.31823 1 7.42826 1 6.5 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 16.67 5.42)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-20, -6.5)" d="M 21 6.5 C 21 6.10218 20.8419 5.72076 20.5605 5.43945 C 20.3145 5.19337 19.9917 5.04195 19.6484 5.00781 L 19.5 5 L 18 5 C 17.4477 5 17 4.55228 17 4 C 17 3.44772 17.4477 3 18 3 L 19.5 3 L 19.6738 3.00391 C 20.5388 3.04688 21.3593 3.4101 21.9746 4.02539 C 22.631 4.68177 23 5.57174 23 6.5 C 23 7.42826 22.631 8.31823 21.9746 8.97461 C 21.3182 9.63099 20.4283 10 19.5 10 L 18 10 C 17.4477 10 17 9.55228 17 9 C 17 8.44772 17.4477 8 18 8 L 19.5 8 C 19.8978 8 20.2792 7.84185 20.5605 7.56055 C 20.8419 7.27924 21 6.89782 21 6.5 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 10 18.33)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -22)" d="M 20 21 C 20.5523 21 21 21.4477 21 22 C 21 22.5523 20.5523 23 20 23 L 4 23 C 3.44772 23 3 22.5523 3 22 C 3 21.4477 3.44772 21 4 21 L 20 21 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 7.08 15.27)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-8.5, -18.33)" d="M 6 21.9998 C 6.00005 19.9681 6.98141 18.0479 8.61426 17.3006 C 8.76591 17.2306 8.88359 17.1422 8.95117 17.0653 C 9.01458 16.9931 9.00006 16.9733 9 16.9998 L 9 14.66 C 9 14.1077 9.44772 13.66 10 13.66 C 10.5523 13.66 11 14.1077 11 14.66 L 11 16.9998 C 11 18.0065 10.281 18.658 9.69043 18.994 L 9.44824 19.118 L 9.44629 19.119 C 8.7192 19.4517 8.00005 20.5117 8 21.9998 C 8 22.5521 7.55228 22.9998 7 22.9998 C 6.44772 22.9998 6 22.5521 6 21.9998 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 12.92 15.27)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-15.5, -18.33)" d="M 16 21.9998 C 15.9999 20.5117 15.2808 19.4517 14.5537 19.119 L 14.5518 19.118 C 13.9385 18.8358 13 18.1498 13 16.9998 L 13 14.66 C 13 14.1077 13.4477 13.66 14 13.66 C 14.5523 13.66 15 14.1077 15 14.66 L 15 16.9998 C 14.9999 16.9733 14.9854 16.9931 15.0488 17.0653 C 15.1164 17.1422 15.2341 17.2306 15.3857 17.3006 L 15.5371 17.3739 C 17.0793 18.1677 18 20.0315 18 21.9998 C 18 22.5521 17.5523 22.9998 17 22.9998 C 16.4477 22.9998 16 22.5521 16 21.9998 Z" strokeLinecap="round" />
                    </g>
                    <g transform="matrix(0.83 0 0 0.83 10 7.08)">
                      <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(244,71,37)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8.5)" d="M 17 3 L 7 3 L 7 9 L 7.00586 9.24805 C 7.06719 10.4838 7.58579 11.6561 8.46484 12.5352 C 9.40253 13.4728 10.6739 14 12 14 C 13.3261 14 14.5975 13.4728 15.5352 12.5352 C 16.4728 11.5975 17 10.3261 17 9 L 17 3 Z M 19 9 C 19 10.8565 18.263 12.6374 16.9502 13.9502 C 15.6374 15.2629 13.8565 16 12 16 C 10.1435 16 8.36256 15.2629 7.0498 13.9502 C 5.819 12.7194 5.09452 11.077 5.00879 9.34668 L 5 9 L 5 2 L 5.00488 1.89746 C 5.05621 1.39333 5.48232 1 6 1 L 18 1 L 18.1025 1.00488 C 18.6067 1.05621 19 1.48232 19 2 L 19 9 Z" strokeLinecap="round" />
                    </g>
                  </g>
                </g>
              </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#F44725]/80 uppercase tracking-wider">Current Streak</p>
                <p className="text-sm font-bold">5 Days Active</p>
              </div>
            </div>
            <button className="bg-[#F44725] text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0px_2px_4px_0px_#F4472533] hover:bg-[#d43d1f] transition-colors">
              View Stats
            </button>
          </div>

          {/* Feed Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Post 1 */}
            <PostCard
              avatar="./assets/IMG_1.jpeg"
              name="Marcus Rivera"
              isPro
              location="Austin, TX"
              time="2h ago"
              content="Just finished a grueling 3-hour session at the Central Courts. My backhand is finally feeling consistent! 🎾🔥"
              image="./assets/IMG_2.webp"
              likes="42"
              comments="8"
              shares="3"
            />

            {/* Post 2 */}
            <PostCard
              avatar="./assets/IMG_4.jpeg"
              name="Elena Chen"
              location="Miami, FL"
              time="5h ago"
              content="Looking for a mixed doubles partner for the 'Summer Smash' tournament next weekend! Intermediate level preferred. Dm me! 🏆"
              likes="15"
              comments="24"
              shares="12"
            />

            {/* Post 3 */}
            <PostCard
              avatar="./assets/IMG_5.jpeg"
              name="PickleMaster Dan"
              isPro
              location="Seattle, WA"
              time="1d ago"
              content="Pro Tip: Focus on your 'dink' height. Keeping it low prevents the opponent from attacking with a powerful smash. Consistency > Power."
              image="./assets/IMG_6.webp"
              likes="128"
              comments="45"
              shares="56"
            />
          </div>

          {/* Caught Up Indicator */}
          <div className="flex flex-col items-center py-10 gap-3">
            <div className="w-12 h-1.5 bg-[#262a33] rounded-full"></div>
            <p className="text-xs font-medium text-[#bdc1ca]">You're all caught up!</p>
          </div>
        </div>
      </main>

      {/* Desktop Right Panel */}
      <aside className="hidden xl:block fixed right-0 top-0 h-screen w-80 border-l border-[#323743] bg-black p-6 overflow-y-auto">
        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-bold mb-4">Trending Topics</h3>
            <div className="space-y-4">
              <TrendingItem tag="#SummerSmash" posts="1.2k posts" />
              <TrendingItem tag="#BackhandDrills" posts="850 posts" />
              <TrendingItem tag="#PickleballLife" posts="2.4k posts" />
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-4">Suggested Players</h3>
            <div className="space-y-4">
              <SuggestedUser name="Sarah Jenkins" level="Advanced" avatar="./assets/IMG_3.webp" />
              <SuggestedUser name="Tom Wilson" level="Intermediate" avatar="./assets/IMG_4.jpeg" />
            </div>
          </section>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#1e2128] border-t border-[#1F2937] shadow-[0px_-2px_10px_0px_#00000033] z-50">
        <div className="flex justify-around items-center h-16">
          <MobileNavLink icon="SVG_21" label="Home" active />
          <MobileNavLink icon="SVG_22" label="Search" />
          <MobileNavLink icon="SVG_23" label="Create" />
          <MobileNavLink icon="SVG_24" label="Alerts" badge="9" />
          <MobileNavLink icon="SVG_25" label="Profile" />
        </div>
      </nav>
    </div>
  );
}

function Tab({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
        active
          ? 'bg-[#F44725] border-[#F44725] text-white shadow-sm'
          : 'bg-[#171a1f] border-[#323743] text-[#bdc1ca] hover:border-[#bdc1ca]'
      }`}
    >
      {label}
    </button>
  );
}

function PostCard({
  avatar,
  name,
  isPro = false,
  location,
  time,
  content,
  image,
  likes,
  comments,
  shares,
}: {
  avatar: string;
  name: string;
  isPro?: boolean;
  location: string;
  time: string;
  content: string;
  image?: string;
  likes: string;
  comments: string;
  shares: string;
}) {
  return (
    <div className="bg-[#1e2128] rounded-xl shadow-md overflow-hidden border border-[#323743]/20">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
              <img src={avatar} className="w-full h-full object-cover" alt={name} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#f3f4f6]">{name}</span>
                {isPro && (
                  <span className="bg-[#F44725] text-[#ffffff] text-[10px] font-semibold px-1.5 py-0.5 rounded-lg">
                    PRO
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-[#bdc1ca] text-[11px]">
                <svg data-svg-id="SVG_7" className="w-3 h-3">
            <g transform="matrix(1 0 0 1 0 0)">
              <g style={{  }}>
                <g transform="matrix(0.5 0 0 0.5 6 6)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 18.9912 9.65332 C 18.9055 7.92303 18.181 6.28061 16.9502 5.0498 C 15.7194 3.819 14.077 3.09452 12.3467 3.00879 L 12 3 C 10.1435 3 8.36256 3.73705 7.0498 5.0498 C 5.73705 6.36256 5 8.14348 5 10 C 5 12.1593 6.21679 14.4871 7.79785 16.5645 C 9.32566 18.5717 11.0795 20.1963 12 20.9951 C 12.9205 20.1963 14.6743 18.5717 16.2021 16.5645 C 17.7832 14.4871 19 12.1593 19 10 L 18.9912 9.65332 Z M 21 10 C 21 12.8337 19.4474 15.603 17.7939 17.7754 C 16.327 19.7028 14.6832 21.2859 13.6553 22.2041 L 13.2549 22.5557 C 13.2379 22.5704 13.2201 22.5851 13.2021 22.5986 C 12.899 22.8266 12.538 22.9626 12.1621 22.9932 L 12 23 C 11.6207 23 11.2504 22.8919 10.9316 22.6904 L 10.7979 22.5986 L 10.7451 22.5557 C 9.78983 21.7308 7.88248 19.978 6.20605 17.7754 C 4.55262 15.603 3 12.8337 3 10 C 3 7.61305 3.94791 5.32357 5.63574 3.63574 C 7.32357 1.94791 9.61305 1 12 1 C 14.3869 1 16.6764 1.94791 18.3643 3.63574 C 20.0521 5.32357 21 7.61305 21 10 Z" strokeLinecap="round" />
                </g>
                <g transform="matrix(0.5 0 0 0.5 6 5)">
                  <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -10)" d="M 14 10 C 14 8.89543 13.1046 8 12 8 C 10.8954 8 10 8.89543 10 10 C 10 11.1046 10.8954 12 12 12 C 13.1046 12 14 11.1046 14 10 Z M 16 10 C 16 12.2091 14.2091 14 12 14 C 9.79086 14 8 12.2091 8 10 C 8 7.79086 9.79086 6 12 6 C 14.2091 6 16 7.79086 16 10 Z" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </svg>
                <span>{location}</span>
                <span>•</span>
                <span>{time}</span>
              </div>
            </div>
          </div>
          <button className="p-1.5 hover:bg-black/20 rounded-lg transition-colors">
            <svg data-svg-id="SVG_6" className="w-5 h-5 text-[#bdc1ca]">
              <g transform="matrix(1 0 0 1 0 0)">
                <g style={{  }}>
                  <g transform="matrix(0.83 0 0 0.83 10 10)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 10 12 C 10 10.8954 10.8954 10 12 10 C 13.1046 10 14 10.8954 14 12 C 14 13.1046 13.1046 14 12 14 C 10.8954 14 10 13.1046 10 12 Z" strokeLinecap="round" />
                  </g>
                  <g transform="matrix(0.83 0 0 0.83 15.83 10)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-19, -12)" d="M 17 12 C 17 10.8954 17.8954 10 19 10 C 20.1046 10 21 10.8954 21 12 C 21 13.1046 20.1046 14 19 14 C 17.8954 14 17 13.1046 17 12 Z" strokeLinecap="round" />
                  </g>
                  <g transform="matrix(0.83 0 0 0.83 4.17 10)">
                    <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-5, -12)" d="M 3 12 C 3 10.8954 3.89543 10 5 10 C 6.10457 10 7 10.8954 7 12 C 7 13.1046 6.10457 14 5 14 C 3.89543 14 3 13.1046 3 12 Z" strokeLinecap="round" />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>

        <p className="text-sm leading-relaxed text-[#f3f4f6]/90 mb-4">{content}</p>

        {image && (
          <div className="rounded-2xl overflow-hidden mb-4 bg-black/20 aspect-video">
            <img src={image} className="w-full h-full object-cover" alt="Post content" />
          </div>
        )}
      </div>

      <div className="px-4 py-3 border-t border-[#323743]/20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-[#bdc1ca] hover:text-[#F44725] transition-colors">
            <svg data-svg-id="SVG_8" className="w-5 h-5">
                  <g transform="matrix(1 0 0 1 0 0)">
                    <g style={{  }}>
                      <g transform="matrix(0.83 0 0 0.83 10 10)">
                        <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -12)" d="M 21 8.5 C 21 7.30653 20.5256 6.16227 19.6816 5.31836 C 18.8377 4.47445 17.6935 4 16.5 4 C 15.7202 4 15.1131 4.10999 14.5518 4.35449 C 13.984 4.60181 13.4 5.01407 12.707 5.70703 C 12.3165 6.09756 11.6835 6.09756 11.293 5.70703 C 10.6 5.01407 10.016 4.60181 9.44824 4.35449 C 8.88687 4.10999 8.27982 4 7.5 4 C 6.30653 4 5.16227 4.47445 4.31836 5.31836 C 3.47445 6.16227 3 7.30653 3 8.5 C 3 10.116 3.91951 11.4583 5.15039 12.7363 L 12 19.5859 L 18.2998 13.2861 L 18.8447 12.7354 C 20.0754 11.446 21 10.1064 21 8.5 Z M 23 8.5 C 23 11.2396 21.1925 13.2488 19.7061 14.7061 L 19.707 14.707 L 12.707 21.707 C 12.3165 22.0976 11.6835 22.0976 11.293 21.707 L 4.30469 14.7188 L 3.73047 14.1465 C 2.37747 12.749 1 10.9088 1 8.5 C 1 6.77609 1.68433 5.12231 2.90332 3.90332 C 4.12231 2.68433 5.77609 2 7.5 2 C 8.48018 2 9.37344 2.14001 10.2471 2.52051 C 10.8603 2.78761 11.4318 3.16121 12 3.6416 C 12.5682 3.16121 13.1397 2.78761 13.7529 2.52051 C 14.6266 2.14001 15.5198 2 16.5 2 C 18.2239 2 19.8777 2.68433 21.0967 3.90332 C 22.3157 5.12231 23 6.77609 23 8.5 Z" strokeLinecap="round" />
                      </g>
                    </g>
                  </g>
                </svg>
            <span className="text-xs font-medium">{likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-[#bdc1ca] hover:text-white transition-colors">
            <svg data-svg-id="SVG_9" className="w-5 h-5">
                  <g transform="matrix(1 0 0 1 0 0)">
                    <g style={{  }}>
                      <g transform="matrix(0.83 0 0 0.83 9.59 10.41)">
                        <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-11.5, -12.5)" d="M 6.11915 3.91012 C 8.04529 2.5067 10.4092 1.83718 12.7852 2.02242 C 15.1613 2.20779 17.3938 3.23557 19.0791 4.92086 C 20.7644 6.60617 21.7922 8.83864 21.9776 11.2148 C 22.1628 13.5908 21.4933 15.9547 20.0899 17.8808 C 18.6863 19.8071 16.6409 21.169 14.3223 21.7207 C 12.1442 22.2388 9.85988 22.0095 7.83302 21.0781 L 2.3213 22.9472 C 1.96085 23.0694 1.56211 22.9761 1.29298 22.707 C 1.02387 22.4379 0.930563 22.0391 1.05275 21.6787 L 2.92091 16.166 C 1.99002 14.1394 1.76124 11.8554 2.27931 9.6777 C 2.83094 7.35903 4.19287 5.31367 6.11915 3.91012 Z M 12.6299 4.01656 C 10.7291 3.86831 8.83784 4.4036 7.29689 5.52633 C 5.75586 6.64917 4.66593 8.28565 4.22462 10.1406 C 3.78336 11.9955 4.01945 13.9471 4.88966 15.6435 C 5.01312 15.8842 5.03405 16.1647 4.94728 16.4209 L 3.59767 20.4013 L 7.57911 19.0527 L 7.67579 19.0254 C 7.90451 18.9727 8.14574 19.0022 8.35646 19.1103 C 10.0529 19.9805 12.0045 20.2166 13.8594 19.7754 C 15.7143 19.334 17.3508 18.2441 18.4736 16.7031 C 19.5964 15.1621 20.1317 13.2709 19.9834 11.3701 C 19.8351 9.46915 19.0133 7.68317 17.6651 6.33492 C 16.3168 4.98669 14.5308 4.16486 12.6299 4.01656 Z" strokeLinecap="round" />
                      </g>
                    </g>
                  </g>
                </svg>
            <span className="text-xs font-medium">{comments}</span>
          </button>
          <button className="flex items-center gap-1.5 text-[#bdc1ca] hover:text-white transition-colors">
            <svg data-svg-id="SVG_10" className="w-5 h-5">
                  <g transform="matrix(1 0 0 1 0 0)">
                    <g style={{  }}>
                      <g transform="matrix(0.83 0 0 0.83 15 4.17)">
                        <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-18, -5)" d="M 20 5 C 20 3.89543 19.1046 3 18 3 C 16.8954 3 16 3.89543 16 5 C 16 6.10457 16.8954 7 18 7 C 19.1046 7 20 6.10457 20 5 Z M 22 5 C 22 7.20914 20.2091 9 18 9 C 15.7909 9 14 7.20914 14 5 C 14 2.79086 15.7909 1 18 1 C 20.2091 1 22 2.79086 22 5 Z" strokeLinecap="round" />
                      </g>
                      <g transform="matrix(0.83 0 0 0.83 5 10)">
                        <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-6, -12)" d="M 8 12 C 8 10.8954 7.10457 10 6 10 C 4.89543 10 4 10.8954 4 12 C 4 13.1046 4.89543 14 6 14 C 7.10457 14 8 13.1046 8 12 Z M 10 12 C 10 14.2091 8.20914 16 6 16 C 3.79086 16 2 14.2091 2 12 C 2 9.79086 3.79086 8 6 8 C 8.20914 8 10 9.79086 10 12 Z" strokeLinecap="round" />
                      </g>
                      <g transform="matrix(0.83 0 0 0.83 15 15.83)">
                        <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-18, -19)" d="M 20 19 C 20 17.8954 19.1046 17 18 17 C 16.8954 17 16 17.8954 16 19 C 16 20.1046 16.8954 21 18 21 C 19.1046 21 20 20.1046 20 19 Z M 22 19 C 22 21.2091 20.2091 23 18 23 C 15.7909 23 14 21.2091 14 19 C 14 16.7909 15.7909 15 18 15 C 20.2091 15 22 16.7909 22 19 Z" strokeLinecap="round" />
                      </g>
                      <g transform="matrix(0.83 0 0 0.83 10 12.92)">
                        <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12.01, -15.5)" d="M 7.72574 13.0061 C 7.9864 12.559 8.54079 12.3895 9.00211 12.5989 L 9.0939 12.6457 L 15.923 16.6262 L 16.0089 16.6819 C 16.4189 16.9799 16.5449 17.546 16.2843 17.9934 C 16.0235 18.4409 15.4686 18.6106 15.007 18.4006 L 14.9162 18.3537 L 8.08609 14.3743 L 8.00113 14.3176 C 7.59122 14.0195 7.46505 13.4535 7.72574 13.0061 Z" strokeLinecap="round" />
                      </g>
                      <g transform="matrix(0.83 0 0 0.83 10 7.08)">
                        <path style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", strokeMiterlimit: "4", fill: "rgb(189,193,202)", fillRule: "nonzero", opacity: "1" }} transform=" translate(-12, -8.5)" d="M 14.9972 5.59887 C 15.4585 5.38924 16.0127 5.55904 16.2736 6.00609 C 16.5345 6.45316 16.4096 7.01918 16.0002 7.31762 L 15.9142 7.37328 L 9.09392 11.3537 L 9.0031 11.4006 C 8.54191 11.6105 7.98781 11.4412 7.72673 10.9944 C 7.44836 10.5174 7.6091 9.90458 8.0861 9.62621 L 14.9064 5.64672 L 14.9972 5.59887 Z" strokeLinecap="round" />
                      </g>
                    </g>
                  </g>
                </svg>
            <span className="text-xs font-medium">{shares}</span>
          </button>
        </div>
        <div className="flex -space-x-2">
          <div className="w-5 h-5 rounded-full border-2 border-[#1e2128] overflow-hidden bg-[#f0e3fc]">
            <img src="./assets/IMG_3.webp" className="w-full h-full object-cover" alt="User" />
          </div>
          <div className="w-5 h-5 rounded-full border-2 border-[#1e2128] overflow-hidden bg-[#f0e3fc]">
            <img src="./assets/IMG_3.webp" className="w-full h-full object-cover" alt="User" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ icon, label, active = false, badge }: { icon: string; label: string; active?: boolean; badge?: string }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
        active ? 'bg-[#F44725] text-white' : 'text-[#bdc1ca] hover:bg-[#1e2128] hover:text-white'
      }`}
    >
      <div className="relative">
        <Icon icon={icon} className="w-6 h-6" />
        {badge && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D92626] text-white text-[8px] font-bold flex items-center justify-center rounded-full ring-2 ring-black">
            {badge}
          </span>
        )}
      </div>
      <span className="font-bold text-sm">{label}</span>
    </a>
  );
}

function MobileNavLink({ icon, label, active = false, badge }: { icon: string; label: string; active?: boolean; badge?: string }) {
  return (
    <a href="#" className="flex flex-col items-center justify-center gap-1 relative w-full h-full">
      <div className="relative">
        <svg data-svg-id={icon} className={`w-6 h-6 ${active ? 'text-[#F44725]' : 'text-[#bdc1ca]'}`}></svg>
        {badge && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D92626] text-white text-[8px] font-bold flex items-center justify-center rounded-full ring-2 ring-[#ffffff] ring-inset">
            {badge}
          </span>
        )}
      </div>
      <span className={`text-[10px] font-bold ${active ? 'text-[#F44725]' : 'text-[#bdc1ca]'}`}>{label}</span>
    </a>
  );
}

function TrendingItem({ tag, posts }: { tag: string; posts: string }) {
  return (
    <div className="p-3 rounded-xl hover:bg-[#1e2128] transition-colors cursor-pointer group">
      <p className="text-sm font-bold text-[#f3f4f6] group-hover:text-[#F44725] transition-colors">{tag}</p>
      <p className="text-xs text-[#bdc1ca]">{posts}</p>
    </div>
  );
}

function SuggestedUser({ name, level, avatar }: { name: string; level: string; avatar: string }) {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
          <img src={avatar} className="w-full h-full object-cover" alt={name} />
        </div>
        <div>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs text-[#bdc1ca]">{level}</p>
        </div>
      </div>
      <button className="text-xs font-bold text-[#F44725] hover:underline">Follow</button>
    </div>
  );
}

// Note: The SVG IDs used in data-svg-id are hardcoded as string literals to satisfy the preservation rules.
// SVG_1, SVG_2: Status bar
// SVG_3: Search
// SVG_4: Filter
// SVG_5: Trophy
// SVG_6: Ellipsis
// SVG_7: Map Pin
// SVG_8: Heart
// SVG_9: Message
// SVG_10: Share
// SVG_21-25: Nav Icons
// These will be injected by the post-processing step.