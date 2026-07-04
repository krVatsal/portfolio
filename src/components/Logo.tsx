export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="34"
      height="18"
      viewBox="0 0 169 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M159.5 52C164.747 52 169 47.7467 169 42.5C169 37.2533 164.747 33 159.5 33H148.5V52H159.5Z" fill="#1ABCFD"/>
      <path d="M9.5 54C4.25329 54 0 49.7467 0 44.5C0 39.2533 4.2533 35 9.5 35H20.5V54H9.5Z" fill="#1ABCFD"/>
      <circle cx="10" cy="10" r="10" transform="matrix(-1 0 0 1 159 19)" fill="#0ACE82"/>
      <circle cx="20" cy="31" r="10" fill="#0ACE82"/>
      <circle cx="150" cy="55" r="10" transform="rotate(180 150 55)" fill="#0ACE82"/>
      <circle cx="10" cy="10" r="10" transform="matrix(1 0 0 -1 9 67)" fill="#0ACE82"/>
      <circle cx="10" cy="10" r="10" transform="matrix(-1 0 0 1 150 9)" fill="#A259FF"/>
      <circle cx="29" cy="21" r="10" fill="#A259FF"/>
      <circle cx="141" cy="65" r="10" transform="rotate(180 141 65)" fill="#A259FF"/>
      <circle cx="10" cy="10" r="10" transform="matrix(1 0 0 -1 18 77)" fill="#A259FF"/>
      <circle cx="10" cy="10" r="10" transform="matrix(-1 0 0 1 141 0)" fill="#F34E1E"/>
      <circle cx="38" cy="12" r="10" fill="#F34E1E"/>
      <circle cx="132" cy="74" r="10" transform="rotate(180 132 74)" fill="#F34E1E"/>
      <circle cx="10" cy="10" r="10" transform="matrix(1 0 0 -1 27 86)" fill="#F34E1E"/>
      <rect x="-0.37471" y="0.599661" width="16" height="83" rx="8" transform="matrix(-0.97437 0.224951 0.224951 0.97437 82.2294 1.09966)" fill="#D9D9D9" stroke="black"/>
    </svg>
  );
}
