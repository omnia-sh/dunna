export function generateRandomPhoneNumber(digits: string): string {
  const phoneNumber = Array.from(
    {
      length: 10,
    },
    () => digits[Math.floor(Math.random() * digits.length)],
  ).join("");
  return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}
