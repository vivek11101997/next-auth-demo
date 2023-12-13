import { hashSync,compare} from "bcryptjs"


export async function hasPassword(password) {
  const hashedPassword = await hashSync(password, 12);
  return hashedPassword
  
}

export async function verifyPassword(password,hashedPassword) {
  const isValid = await compare(password, hashedPassword)
  return isValid;
}