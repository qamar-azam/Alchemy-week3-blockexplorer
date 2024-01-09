import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAlchemy from '../../hooks/useAlchemy/useAlchemy';
import { formatValue } from '../../utils/util';

function TransactionDetails() {
  const { hash } = useParams();
  const { alchemy } = useAlchemy();
  const [transaction, setTransaction] = useState(null);

  const getTxDetail = useCallback(async () => {
    const data = await alchemy.core.getTransactionReceipt(hash);
    setTransaction(data);
  }, [hash, alchemy]);

  useEffect(() => {
    getTxDetail();
  }, [getTxDetail]);

  return (
    <>
      <div className='pt-4 mb-6'>
        <h1 className='text-2xl font-bold'>Transaction Details</h1>
      </div>

      <div className='bg-white m-auto p-4 rounded shadow'>
        {transaction ? (
          <ul className='text-sm'>
            <li className='mb-2'>
              <span className='font-bold w-1/3 inline-block'>
                Transaction Hash:
              </span>
              {transaction.transactionHash}
            </li>

            <li className='mb-2'>
              <span className='font-bold w-1/3 inline-block'>Status:</span>
              {transaction.status === 1 ? 'Success' : 'Failure'}
            </li>

            <li className='mb-2'>
              <span className='font-bold w-1/3 inline-block'>Block:</span>
              <Link
                to={`/${transaction.blockNumber}`}
                className='text-blue-800'
              >
                {transaction.blockNumber}
              </Link>
            </li>
            <li className='mb-2'>
              <span className='font-bold w-1/3 inline-block'>Block Hash:</span>
              {transaction.blockHash}
            </li>
            <li className='mb-2'>
              <span className='font-bold w-1/3 inline-block'>From:</span>
              {transaction.from}
            </li>
            <li className='mb-2'>
              <span className='font-bold w-1/3 inline-block'>To:</span>
              {transaction.to}
            </li>
            <li className='mb-2'>
              <span className='font-bold w-1/3 inline-block'>Gas Used:</span>
              {transaction.gasUsed.toString()}
            </li>
            <li className='mb-2'>
              <span className='font-bold w-1/3 inline-block'>Gas Price:</span>
              {formatValue(transaction.effectiveGasPrice)}
            </li>
          </ul>
        ) : (
          'Loading...'
        )}
      </div>
    </>
  );
}

export default TransactionDetails;
