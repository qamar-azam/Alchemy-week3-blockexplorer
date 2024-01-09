import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAlchemy from '../hooks/useAlchemy/useAlchemy';
import Block from '../components/block/block';
import BlockSearch from '../components/block/block-search';

function Home() {
  const { alchemy } = useAlchemy();
  const { number } = useParams();
  const [blockNumber, setBlockNumber] = useState();
  const [block, setBlock] = useState(null);

  useEffect(() => {
    async function getBlockNumber() {
      const blockNum = number ? number : await alchemy.core.getBlockNumber();
      getBlock(blockNum);
    }

    getBlockNumber();
  }, []);

  const getBlock = async (blockNumber) => {
    const response = await alchemy.core.getBlock(Number(blockNumber));
    setBlockNumber(blockNumber);
    setBlock(response);
  };

  return (
    <>
      <div className='pt-4 mb-4 flex items-start'>
        <div>
          <h1 className='text-xl font-bold'>
            The Ethereum Blockchain Explorer
          </h1>

          <p>Block Number: {blockNumber}</p>
        </div>
        <Link
          to='/balance'
          className='bg-indigo-600 text-white p-2 rounded ml-auto'
        >
          Find Balance
        </Link>
      </div>
      <BlockSearch getBlock={getBlock} />
      <Block block={block} />
    </>
  );
}

export default Home;
