import React, { useState } from 'react';
import './Auth.css'

const Auth =()=>{
    const [islogin,setIsLogin]=usestate(true);
    
    const toggleAuthMode=()=>{
        setIsLogin((prev)=>!prev);
};
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(isLogin ? "Logging in..." : "Creating account...");

    };
    return(
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-glass-card">
                    <div className="auth-header">
                        <h2 className="title=gradient">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                        <p className="auth-subtitle">
                            {isLogin ? 'Enter your credentials to access your account' : 'Join The Momo Spopt Family today'}
                        </p>

                    </div>
                    <form className="auth-form" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="input-group">
                                <label>Full name</label>
                                <input type ="text" placeholder="prachi sutar" required={!isLogin} />

                            </div>
                        )}
                        <div className="input-group">
                            <label>Email adress</label>
                            <input type="email" placeholder="you@example.com" required={isLogin} />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="********" required={isLogin} />
                        </div>
                        {!isLogin && (
                            <div className="input-group">
                                <label>Password</label>
                                <input type ="password" placeholder="********" required={!isLogin} />
                            </div>
                        )}
                        {isLogin && <div className="forget-password">Forget Password?</div>}
                        <button type="submit" className="auth-submit-btn">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>
                    <div className="auth-footer">
                        <p>
                            {isLogin ? "Don't have an account?" :'Already have an account?'}
                            <span className="auth-toggle-link" onclick={toggleAuthMode}>
                                {isLogin ? 'Sign Up' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;