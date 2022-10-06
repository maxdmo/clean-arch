import { Email } from './email'

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email = ''

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should accept a valid email', () => {
    const email = 'email@teste.com'

    expect(Email.validate(email)).toBeTruthy()
  })
})
