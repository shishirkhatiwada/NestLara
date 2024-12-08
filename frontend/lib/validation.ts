export function validateFormData(data: { 
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  message: FormDataEntryValue | null;
}) {
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    throw new Error('Name is required')
  }

  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    throw new Error('Valid email is required')
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    throw new Error('Message is required')
  }

  return {
    name: data.name.trim(),
    email: data.email.trim(),
    message: data.message.trim()
  }
}