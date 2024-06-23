export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Spinner() {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 1544 1543" width="32" height="32">
      <title>Zurich_Insurance_Group_logo-svg</title>
      <g id="Layer">
        <path id="Layer" fill="#2b73c2" d="M771.8 0.28C345.43 0.28 0.17 345.89 0.17 771.54C0.17 947.33 58.99 1109.52 158.09 1239.61L799.57 397.11L662.33 397.11C589.37 397.11 520.74 402 471.19 411.8C441.24 417.78 414.57 428.66 392.8 443.91C367.19 461.85 335.06 499.98 314.38 537.51C312.21 541.88 308.37 548.42 304.02 557.1L266.44 548.95L329.08 306.76L1132.86 306.76L493.55 1160.15C534.95 1156.34 551.82 1155.25 585.59 1155.25C611.17 1155.25 650.39 1156.89 703.76 1160.15L817.03 1166.69C857.87 1169.41 892.17 1170.5 918.3 1170.5C977.1 1170.5 1015.23 1166.13 1052.79 1154.17C1082.21 1144.9 1109.97 1131.85 1135.57 1114.43C1180.75 1083.41 1223.76 1033.88 1249.91 983.8C1252.64 978.9 1256.45 971.27 1261.35 960.95L1295.12 969.66C1284.23 1011.57 1278.25 1027.9 1261.35 1065.99C1227.05 1142.73 1188.39 1193.9 1135.02 1233.08C1080.57 1273.37 1019.58 1293.52 948.26 1294.6L937.34 1294.6C883.98 1294.6 843.14 1290.23 716.28 1270.64C587.22 1251.06 521.33 1243.96 456.52 1243.96C412.95 1243.96 372.67 1247.24 330.75 1254.31C275.18 1263.58 253.41 1269.56 203.3 1292.4C344.33 1446.44 546.91 1542.77 771.81 1542.77C1198.18 1542.77 1543.97 1197.72 1543.97 770.99C1543.44 345.91 1198.19 0.33 771.81 0.33"/>
      </g>
    </svg>
  );
}

export function VercelLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-label="Vercel logomark"
      height="64"
      role="img"
      viewBox="0 0 74 64"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
