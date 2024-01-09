import { Utils } from 'alchemy-sdk';
import { Link } from 'react-router-dom';
import { formatValue, truncString } from '../../utils/util';

function TransactionList({ block }) {
  return (
    <div className='bg-white rounded shadow p-4'>
      <table className='table-auto min-w-full text-sm text-left'>
        <thead className='border-b dark:border-neutral-500'>
          <tr>
            <th className='p-2'>Txn Hash</th>
            <th>Block</th>
            <th>Age</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
            <th>Txn Fee</th>
          </tr>
        </thead>
        <tbody>
          {block?.transactions &&
            block?.transactions.map((tx) => (
              <tr
                key={tx.hash}
                className='border-b  hover:bg-neutral-100 even:bg-neutral-100 '
              >
                <td className='p-4'>
                  <Link
                    to={`/transaction/detail/${tx.hash}`}
                    className='text-blue-800'
                  >
                    {truncString(tx.hash)}
                  </Link>
                </td>

                <td>
                  <Link to={`/${tx.blockNumber}`} className='text-blue-800'>
                    {tx.blockNumber}
                  </Link>
                </td>
                <td>{new Date(block.timestamp * 1000).toDateString()}</td>
                <td>{truncString(tx.from)}</td>
                <td>{truncString(tx.to)}</td>
                <td>{formatValue(tx.value)}ETH</td>
                <td>{Utils.formatEther(tx.gasPrice)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
