import { Email } from '../../src/entities/email'

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email = ''

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept strings larger than 320 chars', () => {
    const email = 'l'.repeat(64) + '@' + 'd'.repeat(128) + '.' + 'd'.repeat(127)

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept domain part larger than 255 chars', () => {
    const email = 'local' + '@' + 'd'.repeat(128) + '.' + 'd'.repeat(127)

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept local part larger than 64 chars', () => {
    const email = 'l'.repeat(65) + '@mail.com'

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty local part', () => {
    const email = '@mail.com'

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty domain part', () => {
    const email = 'local@'

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept local part with invalid char', () => {
    const email = 'any email@mail.com'

    expect(Email.validate(email)).toBeFalsy()
  })

  test('should accept a valid email', () => {
    const email = 'email@teste.com'

    expect(Email.validate(email)).toBeTruthy()
  })
})
