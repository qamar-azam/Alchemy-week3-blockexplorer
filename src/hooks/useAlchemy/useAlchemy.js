import { Alchemy, Network } from 'alchemy-sdk';

function useAlchemy() {
  const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET
  };

  const alchemy = new Alchemy(settings);
  return { alchemy: alchemy };
}

export default useAlchemy;
