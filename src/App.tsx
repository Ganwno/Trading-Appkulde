import "./App.css";
import Shared from "./components/shared/Shared";
import BitcoinSV1 from "./assets/images/BitcoinSV1.png";
import Solana from "./assets/images/Solana.png";
import EthereumETH from "./assets/images/Ethereum(ETH).png";
import BinanceBNB from "./assets/images/Binance(BNB).png";
import SHIBAINU from "./assets/images/SHIBAINU.png";
import Binance from "./assets/images/BinanceCoin.png";
import BitcoinSV from "./assets/images/BitcoinSV.png";
import Ethereum from "./assets/images/Ethereum.png";
import SolanaSOL from "./assets/images/Solana(SOL).png";
import Trending from "./components/Trending";
function App() {
  return (
    <div className="App">
      <Trending/>
      <Shared
        name="Bitcoin (BTC)"
        img={BitcoinSV1}
        price="$31812.80"
        upDown="+10%"
        tvl="$60,000"
        src1={SolanaSOL}
        src2={Ethereum}
        src3={Binance}
      />
      <Shared
        name="Solana (SOL)"
        img={Solana}
        price="$32.83"
        upDown="-12.32%"
        tvl="$60,000"
        src1={BitcoinSV}
        src2={Ethereum}
        src3={Binance}
      />
      <Shared
        name="Ethereum (ETH)"
        img={EthereumETH}
        price="$1,466.45"
        upDown="-11.93%"
        tvl="$60,000"
        src1={SolanaSOL}
        src2={BitcoinSV}
        src3={Binance}
      />
      <Shared
        name="Binance USD (BUSD)"
        img={BinanceBNB}
        price="$1.00"
        upDown="+0.26%"
        tvl="$60,000"
        src1={SolanaSOL}
        src2={Ethereum}
        src3={Binance}
      />
      <Shared
        name="Shiba Inu (SHIB)"
        img={SHIBAINU}
        price="$0.00000001948"
        upDown="-8.1%"
        tvl="$60,000"
        src1={SolanaSOL}
        src2={Ethereum}
        src3={Binance}
      />
    </div>
  );
}

export default App;
