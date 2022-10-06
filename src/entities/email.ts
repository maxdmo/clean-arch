export class Email {
  static validate (email: string) {
    if (!email) {
      return false
    }

    if (email.length > 320) {
      return false
    }

    const [local, domain] = email.split('@')

    if (domain.length > 255) {
      return false
    }

    if (local.length > 64) {
      return false
    }

    return true
  }
}
