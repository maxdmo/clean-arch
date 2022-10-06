export class Email {
  static validate (email: string) {
    if (!email) {
      return false
    }

    const [local] = email.split('@')
    console.log(local)

    if (local.length > 64) {
      return false
    }

    return true
  }
}
