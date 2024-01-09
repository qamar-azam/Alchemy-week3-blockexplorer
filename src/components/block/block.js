import { Link } from 'react-router-dom';
import { formatValue } from '../../utils/util';

function Block({ block }) {
  if (!block) {
    return;
  }
  return (
    <div className='bg-white m-auto p-4 rounded shadow'>
      <ul className='text-sm'>
        <li className='mb-1'>
          <span className='font-bold w-1/3 inline-block'>Number:</span>
          {block.number}
        </li>
        <li className='mb-2'>
          <span className='font-bold w-1/3 inline-block'>Hash:</span>{' '}
          {block.hash}
        </li>
        <li className='mb-2'>
          <span className='font-bold w-1/3 inline-block'>Parent Hash:</span>
          {block.parentHash}
        </li>
        <li className='mb-2'>
          <span className='font-bold w-1/3 inline-block'>Timestamp:</span>
          {new Date(block.timestamp * 1000).toUTCString()}
          {block.timestamp}
        </li>
        <li className='mb-2'>
          <span className='font-bold w-1/3 inline-block'>Nonce: </span>
          {block.nonce}
        </li>
        <li className='mb-2'>
          <span className='font-bold w-1/3 inline-block'>Transactions: </span>
          <Link to={`/transaction/${block.hash}`} className='text-blue-800'>
            {block.transactions.length} Transactions
          </Link>
        </li>
        <li className='mb-2'>
          <span className='font-bold w-1/3 inline-block'>Gas Used:</span>
          {block.gasUsed.toString()}
        </li>
        <li className='mb-1'>
          <span className='font-bold w-1/3 inline-block'>Gas Limit:</span>
          {block.gasLimit.toString()}
        </li>
        <li className='mb-2'>
          <span className='font-bold w-1/3 inline-block'>
            Base Fee Per Gas:
          </span>
          {formatValue(block.baseFeePerGas)}
        </li>

        <li className='mb-2'>
          <span className='font-bold w-1/3 inline-block'>Extra Data:</span>
          {block.extraData}
        </li>
      </ul>
    </div>
  );
}

export default Block;
