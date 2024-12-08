'use client'

import { useTransition } from 'react'
import { handleFormSubmission } from '@/lib/actions/contact'
import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

export function ContactForm() {
  const [isPending, startTransition] = useTransition()

  async function onSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await handleFormSubmission(formData)
      
      if (result.success) {
        toast.success('Message sent successfully!')
        const form = document.querySelector('form') as HTMLFormElement
        form?.reset()
      } else {
        toast.error(result.error || 'Failed to send message')
      }
    })
  }

  return (
    <form action={onSubmit} className="space-y-6 animate-fade-up">
      <FormField
        label="Name"
        name="name"
        type="text"
        placeholder="Your name"
        required
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="Your email"
        required
      />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        placeholder="Your message"
        required
      />
      <Button 
        type="submit" 
        disabled={isPending}
        className="w-full transition-all duration-200 hover:scale-[1.02]"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}