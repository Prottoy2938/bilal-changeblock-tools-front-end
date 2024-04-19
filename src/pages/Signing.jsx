import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { BACKEND_HOST } from "../constants";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signing() {
    const [code, setCode] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        for (const [key, value] of searchParams.entries()) {
            if(key === 'code')
                setCode(value);
        }
      }, []);

      const getTokens = async () => {
         try {
                const response = await fetch(`${BACKEND_HOST}/auth/google/token?code=${code}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'Application/json',
                    }
                })
                const res = await response.json()
                if(response.status === 200){
                  localStorage.setItem('access_token', res.access_token)
                    await getProfile()
                    window.location.href = '/'
                }
                else{
                    toast.error(res.detail)
                    navigate('/')
                }
            } catch (error) {
                console.log(error);
            }
      }

      const getProfile = async() => {
        const response = await fetch(`${BACKEND_HOST}/profile`,{
          method: 'GET',
          headers: {
              'Content-Type': 'Application/json',
              'Authorization': `${localStorage.getItem('access_token')}`
          }
      })
        const res = await response.json()
        if(response.status === 200){
          localStorage.setItem('userImage', res.picture)
          localStorage.setItem('userName', res.name)
          localStorage.setItem('userEmail', res.email)
        }
        else{
            toast.error(res.detail)
            navigate('/')
        }
      }

      useEffect(()=>{
        if(code)
            getTokens()
      },[code])

  return (
    <div className="h-screen w-full flex justify-center items-center bg-lemon">
      <RotatingLines
        visible={true}
        height="70"
        width="70"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Signing;
