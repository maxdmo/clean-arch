export class Email {
  static validate (email: string) {
    if (!email) {
      return false
    }

    if (email.length > 320) {
      return false
    }

    const [local, domain] = email.split('@')

    console.log(domain)

    if (domain.length > 255 || domain.length === 0) {
      return false
    }

    if (local.length > 64 || local.length === 0) {
      return false
    }

    return true
  }
}
