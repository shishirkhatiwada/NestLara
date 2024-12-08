'use client'

import { Input } from './input'
import { Textarea } from './textarea'
import { Label } from './label'

interface FormFieldProps {
  label: string
  name: string
  type: 'text' | 'email' | 'textarea'
  placeholder?: string
  required?: boolean
}

export function FormField({ 
  label, 
  name, 
  type, 
  placeholder, 
  required 
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      {type === 'textarea' ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full min-h-[100px] resize-none"
        />
      ) : (
        <Input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full"
        />
      )}
    </div>
  )
}