import { useState } from 'react';
import { useSelector } from 'react-redux';

function NewTicket() {
  // get user from global state
  const { user } = useSelector((state) => state.auth);
  // Set local state
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState('iPhone');
  const [description, setdescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>
      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input type='text' className='form-control' value={name} disabled />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input type='text' className='form-control' value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='iPhone'>iPhone</option>
              <option value='Macbook Pro'>Macbook Pro</option>
              <option value='iPad'>iPad</option>
              <option value='iPad'>iMac</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}
export default NewTicket;