export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={"flex justify-center bg-[#1a1a1a] py-4 text-center"}>
      Copyright &copy; {year} Quang Duy.
      <br />
      All rights reserved.
    </footer>
  );
}
