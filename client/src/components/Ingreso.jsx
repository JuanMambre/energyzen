import React from 'react'

const Ingreso = () => {
  return (
    <div className=' flex justify-center items-center'>
        <div className=' p-3 bg-white w-25 h-full justify-center items-center'>
            <form action=''>
                <div className=' mb-3'>
                    <label htmlFor='email' className=' mr-6'>Email</label>
                    <input type='email' placeholder='Ingresa tu Email' className=''/>
                </div>
                <div className=' mb-3'>
                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' placeholder='Ingresa tu Contraseña'/>
                </div>
                <button>Ingresa</button>
            </form>
        </div>
    </div>
  )
}

export default Ingreso