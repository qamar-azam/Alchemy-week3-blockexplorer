import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className=' bg-slate-100 min-h-screen '>
      <div className='container m-auto'>
        <Outlet />
      </div>
    </div>
  );
}
