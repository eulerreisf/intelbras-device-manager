import intelbrasIcon from "/intelbras.ico";
import { useDeviceFetcher } from "../src/services/Devices";
import "./App.css";

const App = () => {
  const { device, loading } = useDeviceFetcher();

  return (
    <>
      <div>
        <a>
          <img src={intelbrasIcon} className="logo" alt="Intelbras logo" />
        </a>
      </div>
      <h1>Device Manager</h1>
      <button>refetch</button>
      {!loading && <div>{device}</div>}
    </>
  );
};

export default App;
