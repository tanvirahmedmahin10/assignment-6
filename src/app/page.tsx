
import Banner from "./Components/Banner";
import GymMap from "./Components/GymData/GymMap";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div id='library' className="container mx-auto my-15">
        <h2 className="text-2xl font-bold">THE LIBRARY</h2>
        <p>Twelve lifts covering every major muscle group.</p>
      </div>
      <GymMap></GymMap>
    </div>
  );
}
