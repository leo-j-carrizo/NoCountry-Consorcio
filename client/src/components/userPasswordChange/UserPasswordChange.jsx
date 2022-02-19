import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import "../userPasswordChange/UserPasswordChange.scss"




const UserPasswordChange = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <div className='login__password-change'>
                <div className='password__change-container'>
                    <h2 className='text-center text-primary'>Cambio de contraseña</h2>
                    <div className='container'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Correo</label>
                                <input
                                    className='form-control'
                                    name="email"
                                    placeholder='Ingrese su correo'
                                    type="text"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Campo obligatorio"
                                        }
                                    })}
                                >
                                </input>
                                {errors?.email?.message && <span>{errors.email.message} </span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password' className='form-label'>
                                    Contraseña
                                </label>
                                <input
                                    className='form-control'
                                    name="password"
                                    type="password"
                                    placeholder="Ingrese contraseña"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Necesitas este campo"
                                        }
                                    })}>
                                </input>
                                {errors?.password?.message && <span>{errors.password.message} </span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='newPassword' className='form-label'>
                                    Nueva contraseña
                                </label>
                                <input
                                    className='form-control'
                                    name="newPassword"
                                    type="password"
                                    placeholder="Ingrese nueva contraseña"
                                    {...register("newPassword", {
                                        required: {
                                            value: true,
                                            message: "Necesitas este campo"
                                        }
                                    })}>
                                </input>
                                {errors?.newPassword?.message && <span>{errors.newPassword.message} </span>}
                            </div>

                            <Link to="/userRecovery" >Olvidaste tu contraseña?</Link> <br />

                            <button type='submit' className='btn btn-primary'>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPasswordChange