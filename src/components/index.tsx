import Image from "next/image";
import { useState } from "react";


const Component = () => {
    const [input, setInput] = useState<string>('');


    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>
              COLIN AI
        </h2>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/colin.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          style={{borderRadius: '30px'}}
          priority
        />
        <input type='text' value={input} placeholder='Please begin by uploading a csv file'/> 
      </div>
    )
}


export default Component;