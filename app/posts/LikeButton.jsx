'use client'
import { useState } from "react"

export default function LikeButton({id}){
    const [liked, setLiked] = useState(false)

    return <button id={id} onClick={() => setLiked(!liked)}>{liked ? '❤️' : '🤍'}</button>
}