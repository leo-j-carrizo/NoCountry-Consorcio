import React from 'react'
import { useForm } from 'react-hook-form'
import "../userPasswordRecovery/UserPasswordRecovery.scss"

const UserPasswordRecovery = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
        <div className='login__password-recovery'>
            <div className='password__container'>
            <h2 className='text-center text-primary'>Recuperación de contraseña</h2>
            <div className='container'>
            <form onSubmit={handleSubmit (onSubmit)}>
                <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Correo</label>
                <input
                className='form-control'
                    name="email"
                    placeholder='Ingrese su correo'
                    type="text"
                    {...register("email", {
                        required:{
                            value:true,
                        },
                        pattern:{
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message:"Campo obligatorio"
                        }
                    })}
                    >
                    </input>
                    {errors?.email?.message && <span>{errors.email.message} </span>}
                    </div>
                <button type='submit' className='btn btn-primary'>Enviar</button>
            </form>
            </div>
            </div>
            </div>
        </>
    )
}

export default UserPasswordRecovery