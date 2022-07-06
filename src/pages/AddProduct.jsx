import React from 'react'

const AddProduct = () => {
  return (
    <form>
      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label htmlFor='inputEmail4'>Nombre del producto</label>
          <input type='text' className='form-control' id='inputEmail4' placeholder='Aretes Tanjiro Kamado' />
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='inputPassword4'>Descripción</label>
          <input type='text' className='form-control' id='inputPassword4' placeholder='Bonitos Aretes Kimetsu No Yaiba Aretes De Sol Kamado Tanjiro Demon Slayer 2' />
        </div>
      </div>
      <div className='form-group'>
        <label htmlFor='inputAddress'>Precio</label>
        <input type='text' className='form-control' id='inputAddress' placeholder='962' />
      </div>
      <div className='form-group'>
        <label htmlFor='inputAddress2'>Categoría</label>
        <input type='text' className='form-control' id='inputAddress2' placeholder='Estetico' />
      </div>
      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label htmlFor='inputCity'>Marca</label>
          <input type='text' className='form-control' id='inputCity' placeholder='Hatori Hanso' />
        </div>
        <div className='form-group col-md-4'>
          <label htmlFor='inputState'>State</label>
          <select id='inputState' className='form-control'>
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className='form-group col-md-2'>
          <label htmlFor='inputZip'>Zip</label>
          <input type='text' className='form-control' id='inputZip' />
        </div>
      </div>
      <div className='form-group'>
        <div className='form-check'>
          <input className='form-check-input' type='checkbox' id='gridCheck' />
          <label className='form-check-label' htmlFor='gridCheck'>
            Check me out
          </label>
        </div>
      </div>
      <button type='submit' className='btn btn-primary'>Sign in</button>
    </form>

  )
}

export default AddProduct
