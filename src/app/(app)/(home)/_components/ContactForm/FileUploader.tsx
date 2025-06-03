"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Upload } from "lucide-react"

interface FileUploaderProps {
  onFilesAdded: (files: File[]) => void
  maxFiles?: number
  maxSize?: number
  acceptedFileTypes?: string[]
}

export function FileUploader({
  onFilesAdded,
  maxFiles = 5,
  maxSize = 5 * 1024 * 1024, // 5MB
  acceptedFileTypes = ["image/jpeg", "image/png", "image/gif", "image/heic", "image/heif", "image/webp", "image/jpg"],
}: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const validateFiles = (fileList: FileList): File[] => {
    setError(null)
    const validFiles: File[] = []

    if (fileList.length > maxFiles) {
      setError(`You can only upload up to ${maxFiles} files at once.`)
      return []
    }

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i]

      // Check file type
      if (!acceptedFileTypes.includes(file.type)) {
        setError(`File type not supported. Please upload JPG, PNG, GIF, HEIC, HEIF, or WebP files only.`)
        return []
      }

      // Check file size
      if (file.size > maxSize) {
        setError(`File size exceeds ${maxSize / (1024 * 1024)}MB limit.`)
        return []
      }

      validFiles.push(file)
    }

    return validFiles
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const validFiles = validateFiles(e.dataTransfer.files)
      if (validFiles.length > 0) {
        onFilesAdded(validFiles)
      }
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const validFiles = validateFiles(e.target.files)
      if (validFiles.length > 0) {
        onFilesAdded(validFiles)
      }

      // Reset the input so the same file can be uploaded again if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      // Remove capture attribute to ensure it opens gallery on mobile
      fileInputRef.current.removeAttribute("capture")
      fileInputRef.current.click()
    }
  }

  const handleCaptureClick = (captureMode: "user" | "environment" | "") => (e: React.MouseEvent) => {
    e.stopPropagation()

    if (fileInputRef.current) {
      // Update the capture attribute dynamically
      if (captureMode) {
        fileInputRef.current.setAttribute("capture", captureMode)
      } else {
        fileInputRef.current.removeAttribute("capture")
      }

      fileInputRef.current.click()
    }
  }

  return (
    <div className="space-y-2">
      <div
        className={`border-2 border-dashed bg-[#f2f2f2] rounded-xs border-[#0e0008] p-6 text-center cursor-pointer transition-colors ${
          isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          multiple
          accept={acceptedFileTypes.join(",")}
          capture="environment"
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center space-y-2">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <div className="space-y-1">
            <p className="text-sm font-medium">Drag & drop images here or click to browse</p>
            <p className="text-xs text-muted-foreground">
              Supports JPG, PNG, GIF, HEIC, HEIF, WebP up to {maxSize / (1024 * 1024)}MB (max {maxFiles} files)
            </p>
            <p className="text-xs text-primary mt-1">On mobile, you can take a photo or select from your gallery</p>
          </div>
        </div>
        <div className="flex gap-2 mt-4 md:hidden">
          <button
            type="button"
            onClick={handleCaptureClick("user")}
            className="text-xs bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors"
          >
            Selfie Camera
          </button>
          <button
            type="button"
            onClick={handleCaptureClick("environment")}
            className="text-xs bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors"
          >
            Back Camera
          </button>
          <button
            type="button"
            onClick={handleCaptureClick("")}
            className="text-xs bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors"
          >
            Gallery
          </button>
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}