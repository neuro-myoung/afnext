"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "./ui/useToast"
import { FileUploader } from "./FileUploader"

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().min(1, { message: "Email is required." }).email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(1, { message: "Message is required." })
    .min(10, { message: "Message must be at least 10 characters." }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      // Create a FormData object to handle both text fields and files
      const formData = new FormData()

      // Add form fields
      formData.append("firstName", data.firstName)
      formData.append("lastName", data.lastName)
      formData.append("email", data.email)
      formData.append("message", data.message)

      // Add files
      files.forEach((file, index) => {
        formData.append(`attachment-${index}`, file)
      })

      // In a real application, you would send this formData to your API
      // await fetch('/api/contact', { method: 'POST', body: formData })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      form.reset()
      setFiles([])
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  return (
    <Card className="p-6 border-1 border-[#0e0008] rounded-xs bg-[#f1ede8]">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" className="bg-[#f2f2f2] rounded-xs border-[#0e0008]" {...form.register("firstName")} placeholder="Your first name" />
            {form.formState.errors.firstName && (
              <p className="text-sm text-red-500">{form.formState.errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" className="bg-[#f2f2f2] rounded-xs border-[#0e0008]" {...form.register("lastName")} placeholder="Your last name" />
            {form.formState.errors.lastName && (
              <p className="text-sm text-red-500">{form.formState.errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" className="bg-[#f2f2f2] rounded-xs border-[#0e0008]" {...form.register("email")} placeholder="your.email@example.com" />
          {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea id="message" {...form.register("message")} placeholder="Your message" className="min-h-[120px]" />
          {form.formState.errors.message && (
            <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Attachments</Label>
          <FileUploader
            onFilesAdded={(newFiles) => setFiles([...files, ...newFiles])}
            maxFiles={5}
            maxSize={5 * 1024 * 1024} // 5MB
            acceptedFileTypes={["image/jpeg", "image/png", "image/gif"]}
          />

          {files.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Uploaded files:</p>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted p-2 rounded-md">
                    <div className="flex items-center space-x-2 overflow-hidden">
                      <div className="w-10 h-10 bg-background rounded flex items-center justify-center">
                        <img
                          src={URL.createObjectURL(file) || "/placeholder.svg"}
                          alt={`Preview ${index}`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <span className="text-sm truncate">{file.name}</span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFile(index)}
                      className="h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove file</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  )
}
