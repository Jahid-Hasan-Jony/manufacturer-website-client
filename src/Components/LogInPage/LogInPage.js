import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import useToken from '../../Hooks/useToken';



const LogInPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);
    useEffect(() => {
        if (token) {
            return navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if (gLoading || loading) { return <LoadingPage /> }

    let ErrorVariable;
    if (gError || error) { ErrorVariable = <p className='text-red-600 py-4'>{error?.message || gError.message}</p> }


    const onSubmit = ({ email, password }) => {
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='mt-20 h-4/5 flex justify-center items-center'>
            <div className="card logInCard w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-bold">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z][\w\.]+@[\w]+([\.\w])*/igm,
                                    message: 'Provide a valid Email'
                                }
                            })} type="email" placeholder="Enter Email Address" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && < span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && < span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password Length Should be greater then 5'
                                }
                            })} type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && < span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && < span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>
                        {ErrorVariable}
                        <input className='btn w-full max-w-xs' type="submit" value='Log In' />
                        <p className='py-3'>Create a new Account? <Link className='text-blue-600 text-bold' to='/signup'>Please Sign Up</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Join With Google</button>

                </div>
            </div >
        </div >
    );
};

export default LogInPage;