interface NavbarProps {
  setComponentVisibility: (componentIdentifier: string) => void;
}

export function Navbar({ setComponentVisibility }: NavbarProps) {
  return (
    <nav className="w-full h-12 bg-neutral-200 flex flex-row items-center gap-4 pl-4">
      <div onClick={() => setComponentVisibility("poll")}>Create poll</div>
      <div onClick={() => setComponentVisibility("vote")}>Vote on poll</div>
      <div
        onClick={() => setComponentVisibility("user")}
        className="ml-auto mr-4"
      >
        User
      </div>
    </nav>
  );
}
