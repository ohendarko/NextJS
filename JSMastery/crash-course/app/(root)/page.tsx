import Image from "next/image";
import Hello from "../components/hello";


export default function Home() {
  console.log('where am I');
  return (
    <>
      <h1 className="text-3xl">Welcome to NextJS</h1>
      <Hello />
    </>
  );
}
