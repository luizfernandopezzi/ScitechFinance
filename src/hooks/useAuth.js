import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'

// O hook useAuth compartilha os dados do contexto AuthContext nível abaixo. Ou seja, componentes que utilizam esse hook, teram acesso ao contexto AuthContext.
export function useAuth() {
  const value = useContext(AuthContext)
  return value;
}