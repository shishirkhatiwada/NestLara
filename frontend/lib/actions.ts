'use server'

import { revalidatePath } from 'next/cache'
import { validateFormData } from './validation'
import type { SubmissionResult } from './types'

export async function handleFormSubmission(formData: FormData): Promise<SubmissionResult> {
  try {
    const data = validateFormData({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    })
    
    // Simulate server processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically save to a database
    console.log('Form data received:', data)
    
    revalidatePath('/')
    return { success: true }
  } catch (error) {
    return { 
      error: error instanceof Error ? error.message : 'Failed to submit form'
    }
  }
}