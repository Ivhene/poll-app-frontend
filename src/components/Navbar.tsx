interface NavbarProps {
  setComponentVisibility: (componentIdentifier: string) => void;
  user: string;
}

export function Navbar({ setComponentVisibility, user }: NavbarProps) {
  return (
    <nav className="w-full h-12 bg-neutral-200 flex flex-row items-center gap-4 pl-4">
      <div onClick={() => setComponentVisibility("poll")}>Create poll</div>
      <div onClick={() => setComponentVisibility("vote")}>Vote on poll</div>
      <div className="ml-auto mr-4">{user !== "" ? user : "User"}</div>
    </nav>
  );
}
