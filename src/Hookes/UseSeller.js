import { useEffect, useState } from 'react';

const useSeller = email => {
  const [isSeller, setIsSeller] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`https://server-site-lake.vercel.app/users/seller/${email}`)
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          setIsSeller(data.isSeller);
        });
    }
  }, [email]);
  return [isSeller];
};
export default useSeller;
