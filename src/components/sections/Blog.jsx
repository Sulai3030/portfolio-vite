import { useState } from "react";

const Blog = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(prevState => !prevState)
  }

  const content = `(This piece appeared on New York Minute Magazine.com in 2014 ©, all rights reserved. ) 2014 is the future.

In the past, we had two ways to get news: television and the newspaper. Now, with the proliferation of the Internet, satellites, social networking sites, and 24-hour so-called “news channels,” we can get news anytime and anywhere. No more waiting for the six o’clock nightly news. So long, Tom Brokaw!

And as the cliché goes, the world is getting smaller. And flatter. Or so we think, prior to seeing The Square, the Oscar-nominated documentary by Jehane Noujaim (Startup.com, The Control Room).

The Square follows the political revolution in Egypt that started in Tahrir Square as a daring demonstration against the entrenched dictatorship led for 40 years by General Hosni Mubarak. The revolution originally called for a fair minimum wage (sound familiar?) and an end to Egypt's 40-year state of emergency.

What mushroomed from the incident was a gathering of millions, and I do mean millions, of people who no longer wanted to be repressed and suffer from the crushing of their hearts and minds on a daily basis.

In this movie, we meet people as diverse as Khalid Abdalla, star of the Oscar-nominated film The Kite Runner, who is a British-educated actor and son of two longtime advocates for political change in Egypt. We also meet Ahmed Hassan, the heart of the movie. Hassan plays a young disaffected man who longs for freedom so fervently that you can see the honest emotions in his face.

We meet Ramy Essam, a musician who becomes the voice of the revolution. In the early days of the revolution, Essam was kidnapped by the secret police and savagely beaten. We also see Magdy Ashour, who is a member of the Muslim Brotherhood and a true believer in returning to the Quran as the basis of the new constitution.

In this nail-biting documentary, we watch as Ashour is tested in his allegiance when the Brotherhood co-opts the Square for its own political gain. Once they assume the presidency, the group ignores the freedoms of those who so earnestly fought for them in the Square.

Each one of these characters is emblematic of the range of personalities and opinions that inhabit Egypt. We watch as they discuss fervently among each other what it means to truly be free. It is fascinating to watch a country be reborn, and that is just what happens in The Square. We watch the creation of a nation, something we have never witnessed on a scale such as this in post-modern times.

To the viewers’ fascination, despite all of the technology available to the Egyptian people, the conflict takes place in the Square face-to-face. Nothing disrupts the honest dialogue between people who really want to know what their nation should be, and what it means to live in a democracy that they have created themselves. This is their country. Watch this documentary. It will change the way you view freedom.
The Square is streaming exclusively on Netflix and is still in theaters.

`;

  const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`


  return (
    <>
     <div className="bg-black h-screen flex items-center justify-center">
      <div className="p-7 w-5/6">
        <h2 className="text-2xl font-bold mb-4">Blog and Writing Samples</h2>
        <p className="text-left">{ shownContent }</p>
        <button className="mt-3 bg-blue-600 text-white py-2
        px-4 rounded hover:bg-blue-600" onClick=
        {toggleExpansion} >
          {
            isExpanded ? 'Read Less' : 'Read More'
          }
        </button>
      </div>
     </div>
   </>
  )};
  export default Blog;
