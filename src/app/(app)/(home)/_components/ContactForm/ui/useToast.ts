// This is a simplified version of the toast hook
// In a real project, you would use the full implementation from shadcn/ui

import { toast as sonnerToast } from "sonner"

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export function toast({ title, description, variant = "default" }: ToastProps) {
  return sonnerToast(title, {
    description,
    className: variant === "destructive" ? "bg-destructive text-destructive-foreground" : undefined,
  })
}
