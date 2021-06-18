import { svgIconFactory } from './icon-factory';

function Earth() {
  return (
    <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="DVM" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="主页" transform="translate(-1365.000000, -854.000000)" fill="#302B3C" fillRule="nonzero">
          <g id="编组" transform="translate(1355.000000, 850.000000)">
            <path
              d="M21,4 C27.05,4 32,8.95 32,15 C32,21.05 27.05,26 21,26 C14.95,26 10,21.05 10,15 C10,8.95 14.95,4 21,4 Z M14.9999942,13.4999889 C14.2642198,12.7644137 13.4042217,12.6044174 12.42,13.02 C12.31,13.681375 12.2,14.34 12.2,15 C12.2,19.4 15.61,23.14 19.9,23.69 L19.9,23.69 L19.9,22.198125 C19.8998732,21.8757498 19.6757633,21.5967578 19.361,21.527125 C18.31875,21.2975 17.764625,20.589375 17.701375,19.4 L17.701375,19.4 L17.701375,18.584625 C17.7013363,18.401967 17.6286109,18.2268319 17.49925,18.097875 C16.0121859,18.0562706 15.1791006,17.8569737 14.9999942,17.4999843 C14.2212145,15.9477447 15.2921541,13.7920698 14.9999942,13.4999889 Z M24.3,6.86000021 L24.3,7.30000021 C24.3,8.51000021 23.31,9.50000021 22.1,9.50000021 L22.1,9.50000021 L21.275,9.50000021 C20.515609,9.50000021 19.8999999,10.1156092 19.9,10.8750002 L19.9,10.8750002 L19.9,11.7 C19.9,12.361375 19.461375,12.8 18.8,12.8 L18.8,12.8 L17.7,12.8 C17.0924863,12.8 16.6,13.2924863 16.6,13.9 C16.6,14.5075137 17.0924863,15 17.7,15 L17.7,15 L23.2,15 C23.86,15 24.3,15.441375 24.3,16.101375 L24.3,16.101375 L24.3,18.301375 C24.3007584,18.9083516 24.7930234,19.4000005 25.4,19.4 L25.4,19.4 L25.4,19.4 C26.39,19.4000002 27.16,20.0600002 27.49,20.9400002 C28.92,19.4000002 29.8,17.3113752 29.8,15.0000002 C29.8,11.3700002 27.49,8.18000021 24.3,6.86000021 L24.3,6.86000021 Z"
              id="形状结合"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export const EarthIcon = svgIconFactory(Earth);
