import { Utils } from 'alchemy-sdk';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAlchemy from '../hooks/useAlchemy/useAlchemy';

function Balance() {
  const { alchemy } = useAlchemy();
  const [balance, setBalance] = useState('');
  const [address, setAddress] = useState('');

  const findBalance = async (e) => {
    e.preventDefault();
    const address = e.target.balance.value;
    let balance = await alchemy.core.getBalance(address, 'latest');
    balance = Utils.formatEther(balance);
    setAddress(address);
    setBalance(balance);
  };
  return (
    <>
      <div className='pt-4 mb-6 flex'>
        <h1 className='text-2xl font-bold'>Find Balance</h1>

        <Link
          to='/'
          className='bg-indigo-600 text-white py-2 px-3 rounded ml-auto'
        >
          Find Block
        </Link>
      </div>

      <div>
        <form onSubmit={findBalance}>
          <input
            type='text'
            name='balance'
            className='px-3 py-3 mr-2 rounded w-2/3 shadow'
            placeholder='vitalik.eth'
          />
          <button
            type='submit'
            className='bg-indigo-600 text-white p-3 rounded'
          >
            Find Balance
          </button>
        </form>

        {balance && (
          <p className='mt-2'>{`Balance of ${address}: ${balance} ETH`}</p>
        )}
      </div>
    </>
  );
}

export default Balance;
