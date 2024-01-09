import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAlchemy from '../hooks/useAlchemy/useAlchemy';
import TransactionList from '../components/transaction/list';

function Transaction() {
  const { hash } = useParams();
  const { alchemy } = useAlchemy();
  const [block, setBlock] = useState([]);

  useEffect(() => {
    async function getBlockTransaction() {
      const block = await alchemy.core.getBlockWithTransactions(hash);
      setBlock(block);
    }

    getBlockTransaction();
  }, [hash]);

  return (
    <>
      <div className='pt-4 mb-6'>
        <h1 className='text-2xl font-bold'>Transaction</h1>
        <p>
          For Block{' '}
          <Link to={`/${block.number}`} className='text-blue-800'>
            {block.number}
          </Link>
        </p>
      </div>

      {block.length === 0 ? 'Loading...' : <TransactionList block={block} />}
    </>
  );
}

export default Transaction;
