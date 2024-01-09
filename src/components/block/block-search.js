function BlockSearch({ getBlock }) {
  const searchBlock = (e) => {
    e.preventDefault();
    getBlock(e.target.search.value);
  };
  return (
    <div className='mb-6 m-auto  '>
      <form onSubmit={searchBlock}>
        <input
          type='text'
          name='search'
          className='px-3 py-3 mr-2 rounded w-2/3 shadow'
          placeholder='Search by Block Number'
        />
        <button type='submit' className='bg-indigo-600 text-white p-3 rounded'>
          Search
        </button>
      </form>
    </div>
  );
}

export default BlockSearch;
