'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)

  function onMediaSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) return

    const previewURL = URL.createObjectURL(files[0])

    if (files[0].type.includes('image')) {
      setImagePreview(previewURL)
    }

    if (files[0].type.includes('video')) {
      setVideoPreview(previewURL)
    }
  }

  return (
    <>
      <input
        type="file"
        name="coverUrl"
        id="coverUrl"
        className="invisible h-0 w-0"
        accept="image/*,video/*"
        onChange={onMediaSelected}
      />

      {imagePreview && (
        // eslint-disable-next-line
        <img
          src={imagePreview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}

      {videoPreview && (
        <video
          src={videoPreview}
          controls={false}
          className="aspect-video w-full rounded-lg object-cover"
        ></video>
      )}
    </>
  )
}
