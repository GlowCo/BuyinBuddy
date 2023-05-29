import React, { useState } from 'react';

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDataWritten, setIsDataWritten] = useState(false);
 
const [writeQuery, setWriteQuery] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const endpoint = `https://nickfunction.azurewebsites.net/api/HttpTrigger5?code=GJWT7j7zxuDm1erky0H1uSIGXB1m7zXdnBy6znYsqD9FAzFurpxstQ==&writequery=${writeQuery}`;
 
      const response = await fetch(endpoint);

      if (response.ok) {
        setIsDataWritten(true);
      } else {
        console.log('Error writing value to MySQL.');
      }
    } catch (error) {
      console.log('Error:', error);
    }

    setIsLoading(false);
  };
  
    const handleInputChange = (event) => {
		setWriteQuery(event.target.value);
		console.log ({writeQuery});
  };

  return (
    <div>
      <h1>Next.js with React</h1>
	  <input type="text" value={writeQuery} onChange={handleInputChange} />
      {!isLoading && !isDataWritten && (
        <button onClick={handleClick}>Click me</button>
      )}
      {isLoading && <div>Loading...</div>}
      {isDataWritten && <div>Data written</div>}	  
    </div>
  );
};

export default IndexPage;