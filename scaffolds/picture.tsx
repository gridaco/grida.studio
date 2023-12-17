'use client'
import { Picture } from "@/components/picture";
import { useEnlarge } from "./enlarge";

export default function FuctionalPicture({ ...props }: Omit<React.ComponentProps<typeof Picture>, 'onClick'>) {
  const { setPicture } = useEnlarge()
  return <Picture {...props} onClick={() => {
    // does not support static import
    if (typeof props.src === 'string') {
      console.log(props.src)
      setPicture(props.src as string)
    }
  }} />
}
