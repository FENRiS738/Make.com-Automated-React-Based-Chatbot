import React from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = React.useState({
    prompt: ''
  });
  const [response, setResponse] = React.useState('Response...');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('https://hook.us1.make.com/khu3igmie9aj2tjcrt7arluwq00xbv52', {
        prompt: formData.prompt,
      });
      setResponse(res.data);
      setFormData({
        prompt: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app">
      <div className="chat-bot-layout">
        <form onSubmit={handleSubmit}>
          <input type="text" name="prompt" value={formData.prompt} onChange={handleChange} placeholder="Enter prompt here..." />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className='responseArea'>
        <textarea value={response} readOnly />
      </div>
    </div>
  );
}

export default App;
