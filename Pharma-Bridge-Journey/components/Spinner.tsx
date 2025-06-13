import React from 'react';
import Loader from 'react-spinners/MoonLoader';

const override = {
  display: 'block',
  margin: '50px auto',
}

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <div className='flex flex-col justify-center align center'>
    <Loader
      color='rgba(11, 16, 140, 0.92)'
      loading={loading}
      cssOverride={override}
      size={100}
    />
    <p className='text-center'>Please Wait...</p>
    </div>
  )
}

export default Spinner;