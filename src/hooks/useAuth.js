import {useSelector} from 'react-redux'

export function useAuth() {
  const {id, token, full_name, email, weight, age, social_links} = useSelector(state => state.user);

  return {
    isAuth: !!id,
    id,
    token,
    full_name,
    email,
    weight,
    age,
    social_links
  }
}