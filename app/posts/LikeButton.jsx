'use client'
import { useState } from "react"

export default function LikeButton({ide}){
    const [liked, setLiked] = useState(false)

    return <button id={ide} onClick={() => setLiked(!liked)}>{liked ? '❤️' : '🤍'}</button>
}