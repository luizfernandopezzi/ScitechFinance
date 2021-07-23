import googleIconImg from '../assests/images/google-icon.svg'
import { useAuth } from '../hooks/useAuth'

export function User(){
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }
    }

    return(
        <>
        { user ? (
            <div className="user-info">
              <img src={user.avatar} alt={user.name} />
              <span>Olá, {user.name}!</span>
            </div>
          ) : (
            <button onClick={handleCreateRoom} className='log-in'>
                        <img className="google-icon" src={googleIconImg} alt="Logo do Google" />
                        Faça log-in com a sua conta do Google
            </button>
          ) }
        </>
    )
}