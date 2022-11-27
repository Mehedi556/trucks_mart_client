import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
          <DotLoader color="#36d7b7" />
      </div>
    );
};

export default Loader;