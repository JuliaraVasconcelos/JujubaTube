import styled from "styled-components";
import Search from "./components/Search";
import DarkModeSwitch from './components/DarkModeSwitch'

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu({ filterValue, setfilterValue }) {
    return (
        <StyledMenu>
            <div>
                <Logo />
            </div>
        <Search filterValue={filterValue} setfilterValue={setfilterValue} />
        <DarkModeSwitch/>
        </StyledMenu>
    );
}

function Logo() {
    return (
        <svg className="logo" viewBox="0 0 454 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120.721 14.1896C119.307 8.94024 115.168 4.80134 109.919 3.38805C100.329 0.763382 61.9683 0.763382 61.9683 0.763382C61.9683 0.763382 23.6077 0.763382 14.0176 3.2871C8.86917 4.70039 4.62931 8.94024 3.21603 14.1896C0.692307 23.7797 0.692307 43.6667 0.692307 43.6667C0.692307 43.6667 0.692307 63.6546 3.21603 73.1438C4.62931 78.3931 8.76822 82.532 14.0176 83.9453C23.7087 86.57 61.9683 86.57 61.9683 86.57C61.9683 86.57 100.329 86.57 109.919 84.0462C115.168 82.633 119.307 78.4941 120.721 73.2447C123.244 63.6546 123.244 43.7676 123.244 43.7676C123.244 43.7676 123.345 23.7797 120.721 14.1896V14.1896Z" fill="#FF0000" />
            <path d="M49.7535 25.294V62.0394L81.6533 43.6667L49.7535 25.294Z" fill="white" />
            <path className="text" d="M433.558 63.2285C433.558 66.6608 433.659 69.2855 433.861 71.0016C434.063 72.7177 434.466 74.0301 435.173 74.7367C435.779 75.5443 436.788 75.9481 438.202 75.9481C440.019 75.9481 441.23 75.2415 441.937 73.8282C442.643 72.4149 442.946 70.0931 443.047 66.7618L453.445 67.3675C453.546 67.8722 453.546 68.4779 453.546 69.2855C453.546 74.232 452.233 77.9671 449.508 80.3899C446.782 82.8126 442.946 84.024 438 84.024C432.044 84.024 427.905 82.106 425.482 78.3709C423.059 74.6358 421.848 68.8817 421.848 61.0077V51.6194C421.848 43.5435 423.059 37.6885 425.583 33.9534C428.107 30.2183 432.347 28.4012 438.302 28.4012C442.441 28.4012 445.672 29.2088 447.893 30.723C450.114 32.2372 451.628 34.66 452.536 37.7894C453.445 41.0198 453.849 45.4615 453.849 51.1147V60.301H433.558V63.2285ZM435.072 37.8904C434.466 38.698 434.063 39.9093 433.861 41.6255C433.659 43.3416 433.558 45.9663 433.558 49.4995V53.3356H442.441V49.4995C442.441 46.0672 442.34 43.4426 442.139 41.6255C441.937 39.8084 441.432 38.597 440.826 37.8904C440.221 37.1837 439.211 36.7799 438 36.7799C436.586 36.679 435.678 37.0828 435.072 37.8904Z" fill="#282828" />
            <path className="text" d="M375.209 29.6126V83.4183H365.72L364.711 76.8567H364.408C361.884 81.8031 357.947 84.3269 352.799 84.3269C349.266 84.3269 346.641 83.1155 344.925 80.7937C343.209 78.4718 342.401 74.8377 342.401 69.7902V29.6126H354.515V69.0836C354.515 71.5064 354.818 73.2225 355.322 74.232C355.827 75.2415 356.736 75.7462 357.947 75.7462C358.957 75.7462 359.966 75.4434 360.976 74.7367C361.985 74.131 362.692 73.3234 363.096 72.3139V29.6126H375.209Z" fill="#282828" />
            <path className="text" d="M346.035 19.5177H334.022V83.3174H322.211V19.5177H310.198V9.72562H346.035V19.5177Z" fill="#282828" />
            <path className="text" d="M415.286 38.1932C414.579 34.761 413.368 32.3382 411.753 30.8239C410.138 29.3097 407.816 28.5021 404.989 28.5021C402.768 28.5021 400.648 29.1078 398.73 30.4202C396.812 31.6315 395.298 33.3477 394.289 35.3666H394.188V7H382.478V83.3174H392.472L393.683 78.2699H393.986C394.894 80.087 396.308 81.5003 398.226 82.6107C400.144 83.6202 402.163 84.2259 404.485 84.2259C408.623 84.2259 411.551 82.3079 413.469 78.5728C415.387 74.8377 416.397 68.8817 416.397 60.9067V52.427C416.296 46.2691 415.993 41.5245 415.286 38.1932ZM404.182 60.0991C404.182 64.0361 403.98 67.0646 403.677 69.2855C403.374 71.5064 402.768 73.1215 402.062 74.0301C401.254 74.9386 400.245 75.4434 399.033 75.4434C398.024 75.4434 397.115 75.2415 396.308 74.7367C395.5 74.232 394.793 73.5253 394.289 72.6168V42.1302C394.693 40.7169 395.399 39.5056 396.409 38.4961C397.418 37.5875 398.529 37.0828 399.639 37.0828C400.85 37.0828 401.86 37.5875 402.466 38.4961C403.172 39.5056 403.576 41.1207 403.879 43.3416C404.182 45.6634 404.283 48.8938 404.283 53.0327V60.0991H404.182Z" fill="#282828" />
            <path className="text" fillRule="evenodd" clipRule="evenodd" d="M169.493 55.1486C169.442 55.4719 169.318 55.7796 169.13 56.0486C168.941 56.3176 168.694 56.541 168.406 56.702C167.826 57.0724 167.318 57.2577 166.805 57.4429C165.711 57.8163 164.56 58.1897 163.342 58.6229C162.058 59.056 160.907 59.4892 159.88 59.8028C158.599 60.236 157.381 60.6094 156.224 61.0426C155.353 61.4109 154.536 61.891 153.792 62.4705C153.1 63.0902 152.497 63.7996 151.997 64.5795C151.484 65.4459 151.16 66.5631 151.16 67.8656C151.16 70.4735 151.801 72.4571 153.085 73.6968C154.366 75.0022 156.741 75.6206 160.26 75.6206C163.85 75.6206 166.285 74.9395 167.572 73.5743C168.85 72.2091 169.49 70.2883 169.49 67.8088V55.1486H169.493ZM160.263 27.6654C166.548 27.6654 171.161 28.8454 174.107 31.2651C177.056 33.6251 178.53 36.6602 178.53 40.2569V70.9067C178.53 72.1464 178.276 73.5116 177.829 74.9993C177.376 76.4929 176.482 77.8551 175.071 79.0919C173.726 80.3376 171.868 81.3921 169.496 82.1987C167.125 83.0052 164.049 83.4384 160.267 83.4384C156.49 83.4384 153.408 83.0052 151.04 82.1987C148.671 81.3921 146.81 80.3376 145.465 79.0919C144.215 77.9774 143.267 76.5701 142.71 74.9993C142.257 73.5146 142 72.1494 142 70.9096V66.0105C142 63.4025 142.704 60.9828 144.115 58.8708C145.526 56.702 147.511 55.2143 150.076 54.2823C151.357 53.8491 152.831 53.416 154.496 52.8574C156.164 52.2957 157.698 51.7371 159.239 51.2442C160.78 50.7453 162.125 50.2465 163.276 49.8103C163.97 49.5355 164.676 49.2883 165.391 49.0695L166.545 48.5108C166.998 48.2629 167.442 47.8895 167.892 47.3936C168.339 46.9007 168.723 46.342 169.046 45.7207C169.388 45.0478 169.564 44.3047 169.56 43.5519V41.5653C169.565 40.8373 169.41 40.1168 169.107 39.4533C168.853 38.7065 168.339 38.0254 167.635 37.407C166.931 36.7857 165.968 36.2898 164.817 35.9134C163.662 35.5459 162.128 35.3577 160.393 35.3577C156.804 35.3577 154.432 36.0448 153.151 37.4668C152.064 38.7095 151.423 40.2599 151.296 41.9955C151.296 42.3689 150.976 42.6169 150.589 42.6169L142.773 42.7423C142.588 42.7431 142.409 42.6714 142.277 42.5427C142.144 42.414 142.069 42.2388 142.066 42.0553V40.2629C142.066 38.5213 142.39 36.9081 143.094 35.3577C143.801 33.8043 144.891 32.5049 146.363 31.3846C147.837 30.2704 149.762 29.3413 152.067 28.7199C154.312 27.9731 157.067 27.6654 160.27 27.6654H160.263ZM301.96 55.1486C301.909 55.4719 301.785 55.7796 301.597 56.0486C301.408 56.3176 301.161 56.541 300.873 56.702C300.299 57.0724 299.785 57.2577 299.271 57.4429C298.184 57.8163 297.027 58.1897 295.809 58.6229C294.525 59.056 293.371 59.4892 292.347 59.8028C291.063 60.236 289.845 60.6094 288.691 61.0426C287.819 61.4107 287.001 61.8908 286.256 62.4705C285.565 63.0904 284.963 63.7998 284.464 64.5795C283.951 65.4459 283.63 66.5631 283.63 67.8656C283.63 70.4735 284.265 72.4571 285.549 73.6968C286.83 75.0022 289.205 75.6206 292.727 75.6206C296.323 75.6206 298.755 74.9395 300.039 73.5743C301.317 72.2091 301.957 70.2883 301.957 67.8088V55.1486H301.96ZM292.733 27.6654C299.018 27.6654 303.631 28.8454 306.58 31.2651C309.526 33.6251 311 36.6602 311 40.2569V70.9067C311 72.1464 310.746 73.5116 310.296 74.9993C309.849 76.4929 308.952 77.8551 307.541 79.0919C306.196 80.3376 304.338 81.3921 301.966 82.1987C299.598 83.0052 296.519 83.4384 292.74 83.4384C288.963 83.4384 285.881 83.0052 283.513 82.1987C281.144 81.3921 279.283 80.3376 277.938 79.0919C276.69 77.9768 275.744 76.5696 275.189 74.9993C274.736 73.5116 274.479 72.1464 274.479 70.9067V66.0075C274.479 63.3995 275.186 60.9798 276.594 58.8678C278.005 56.699 279.993 55.2114 282.555 54.2793C283.836 53.8462 285.31 53.413 286.978 52.8544C288.64 52.2928 290.181 51.7341 291.721 51.2412C293.262 50.7423 294.604 50.2435 295.758 49.8073C296.452 49.5325 297.158 49.2854 297.873 49.0665L299.027 48.5078C299.474 48.2599 299.924 47.8865 300.371 47.3906C300.83 46.8865 301.218 46.3238 301.525 45.7177C301.867 45.0449 302.043 44.3017 302.039 43.5489V41.5624C302.044 40.8343 301.889 40.1138 301.586 39.4503C301.332 38.7035 300.821 38.0224 300.114 37.404C299.41 36.7827 298.453 36.2868 297.296 35.9104C296.141 35.5429 294.607 35.3547 292.872 35.3547C289.283 35.3547 286.915 36.0418 285.631 37.4638C284.543 38.7065 283.902 40.2569 283.772 41.9925C283.772 42.3659 283.455 42.6139 283.072 42.6139H275.298C275.114 42.6132 274.938 42.5415 274.807 42.4143C274.676 42.2871 274.601 42.1143 274.597 41.9328V40.1314C274.597 38.3988 274.917 36.7857 275.624 35.2323C276.328 33.6848 277.416 32.3794 278.887 31.2651C280.367 30.1479 282.286 29.2158 284.597 28.5975C286.773 27.9701 289.528 27.6624 292.733 27.6624V27.6654ZM265.24 27.9134H270.37C270.817 27.9134 271.138 28.3495 271.011 28.7797L269.279 35.2323C269.219 35.5459 268.896 35.7311 268.639 35.7311H265.05C263.128 35.7311 261.59 35.9791 260.373 36.478C259.216 36.9709 258.258 37.5295 257.614 38.2106C256.974 38.8977 256.587 39.5758 256.397 40.2599C256.224 40.9286 256.138 41.6161 256.14 42.3062V82.1987C256.136 82.3817 256.059 82.5558 255.926 82.6833C255.794 82.8108 255.615 82.8814 255.43 82.8798H247.744C247.56 82.8798 247.383 82.8085 247.251 82.6812C247.12 82.5539 247.044 82.3807 247.04 82.1987V40.5049C247.04 39.764 247.167 38.6468 247.487 37.2188C247.744 35.7939 248.514 34.4287 249.732 33.0007C250.95 31.6355 252.744 30.3958 255.179 29.404C257.617 28.4063 260.95 27.9104 265.24 27.9104V27.9134ZM239.348 69.5415V71.4025C239.348 72.2091 239.227 73.3264 238.904 74.7543C238.647 76.1165 237.877 77.5444 236.659 78.9066C235.441 80.2748 233.647 81.5146 231.212 82.5063C228.777 83.5011 225.441 84 221.151 84C216.861 84 213.525 83.5011 211.09 82.5063C208.655 81.5146 206.86 80.3376 205.643 78.9096C204.425 77.5474 203.655 76.1195 203.398 74.6975C203.144 73.2636 202.954 72.2121 202.954 71.4055V29.652C202.954 29.2786 203.274 28.9649 203.658 28.9649H211.283C211.67 28.9649 211.99 29.2786 211.99 29.652V68.7349C211.99 70.0373 212.181 70.9694 212.374 71.7132C212.57 72.46 212.954 73.2009 213.531 73.8223C214.105 74.5034 215.006 75.062 216.22 75.4951C217.374 75.9313 218.979 76.1822 220.964 76.1822C223.018 76.1822 224.68 75.9313 225.9 75.4951C227.118 75.062 228.015 74.5034 228.656 73.882C229.29 73.2636 229.743 72.5825 229.934 71.8357C230.127 71.0889 230.387 70.4735 230.387 68.6692V29.5922C230.387 29.2218 230.704 28.9111 231.088 28.9111H238.713C239.094 28.9111 239.414 29.2218 239.414 29.5982V69.5474H239.354L239.348 69.5415ZM186.866 8.00299H194.494C194.878 8.00299 195.198 8.31068 195.198 8.68111V82.5691C195.196 82.7521 195.121 82.9269 194.989 83.0555C194.857 83.1841 194.679 83.2562 194.494 83.2562H186.866C186.681 83.2562 186.503 83.1841 186.371 83.0555C186.239 82.9269 186.164 82.7521 186.162 82.5691V8.68111C186.222 8.31068 186.482 8 186.866 8V8.00299Z" fill="#282828" />
        </svg>
    )
}