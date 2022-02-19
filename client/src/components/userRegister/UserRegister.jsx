import React from 'react'
import { useForm } from 'react-hook-form'
import "../userRegister/UserRegister.scss"

const UserRegister = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <div className='login__register'>
                <div className='register__container'>
                    <h2 className='text-center text-primary'>Registro de ususario</h2>
                    <div className='container'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Nombre y Apellido</label>
                                <input
                                    className='form-control'
                                    name="name"
                                    placeholder='Juan Guerra'
                                    type="text"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Campo obligatorio"
                                        }
                                    })}
                                >
                                </input>
                                {errors?.name?.message && <span>{errors.name.message} </span>}

                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Correo</label>
                                <input
                                    className='form-control'
                                    name="email"
                                    placeholder='juan@gmail.com'
                                    type="text"
                                    {...register("email", {
                                        requiered: {
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
                                <label htmlFor='floor' className='form-label'>Piso</label>
                                <input
                                    className='form-control'
                                    name="floor"
                                    placeholder='1'
                                    type="text"
                                    {...register("floor", {
                                        required: {
                                            value: true,
                                            message: "Campo obligatorio"
                                        }
                                    })}
                                >
                                </input>
                                {errors?.floor?.message && <span>{errors.floor.message} </span>}


                            </div>
                            <div className='mb-3'>
                                <label htmlFor='depa' className='form-label'>Departamento</label>
                                <input
                                    className='form-control'
                                    name="depa"
                                    placeholder='A'
                                    type="text"
                                    {...register("depa", {
                                        required: {
                                            value: true,
                                            message: "Campo obligatorio"
                                        }
                                    })}
                                >
                                </input>
                                {errors?.depa?.message && <span>{errors.depa.message}</span>}

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
                                <br />
                            </div>

                            <button type='submit' className='btn btn-primary'>Registrar</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserRegister