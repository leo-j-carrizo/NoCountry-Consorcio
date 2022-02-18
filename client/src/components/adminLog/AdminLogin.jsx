import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import "./AdminLogin.scss"

const AdminLogin = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <>

            
                <div className='login__admin'>
                    <div className='admin__container'>

                        <h1 className='text-center text-primary'>Log in</h1>
                        <p className='admin__text text-center'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aspernatur molestias fuga!
                            Doloribus perferendis debitis sit hic magnam facilis exercitationem.</p>

                        <div className='container'>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className='mb-3'>
                                    <label htmlFor='email' className='form-label'>
                                        Usuario
                                    </label>
                                    <input
                                        className='form-control'
                                        name="email"
                                        type="text"
                                        placeholder="Ingrese nombre"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                            },
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: "Necesitas este campo"
                                            }
                                        })}
                                    >
                                    </input>
                                    {errors?.email?.message && <span>{errors.email.message} </span>}
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='password' className='form-label' >
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

                                <Link to="/user">Eres propietario?</Link> <br />

                                <button type='submit' className='btn btn-primary' >Ingrese</button>

                            </form>
                        </div>
                    </div>
                </div>
            

        </>
    )
}

export default AdminLogin