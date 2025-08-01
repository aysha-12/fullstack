import Image from 'next/image';
import React from 'react';
import img from '../../assets/free-photo-of-colorful-facades-along-amsterdam-canal.jpeg'
import img1 from '../../assets/free-photo-of-man-skiing-through-snowy-mountain-landscape.jpeg'
import img2 from '../../assets/free-photo-of-picturesque-village-with-foggy-morning-landscape.jpeg'
import img3 from '../../assets/free-photo-of-woman-in-white-overlooking-tranquil-harbor.jpeg'

const page = () => {
    return (
        <div className='p-5 md:p-10'>
            <div className='block md:flex items-center justify-around  '>
                <div className='w-full md:w-1/3'><Image className='h-80' src={img} alt='explor news' height={300} width={500} /></div>
                <div className='w-full md:w-1/2 md:mt-0 mt-5'>
              <p>
                <b>Gliding on Ice: A Winter Adventure Like No Other</b><br></br>
                In a world often dominated by grey skyscrapers and muted tones,colorful buildings offer a vibrant break from the ordinary. Found in cities like Burano in Italy, La Boca in Buenos Aires, or Jodhpur in India, these lively structures bring personality, culture, and joy to urban landscapes.

Each color tells a story. In coastal towns, bright hues helped fishermen identify their homes from the sea. In artistic neighborhoods, painted walls reflect creativity and community spirit. Whether it’s a pink house with turquoise shutters or a street lined with rainbow facades, these buildings invite smiles and curiosity.

Colorful buildings also attract tourists, boosting local economies and encouraging preservation of unique architectural styles. More than just eye candy, they are living pieces of history and identity.

Incorporating color into architecture doesn’t just brighten the streets—it lifts moods and creates spaces people love to live in. In a way, each building becomes a canvas, and each city a gallery.
                </p>
                </div>

                    

            </div>
            <div className='block md:flex items-center mt-10  justify-around '>
                <div className='w-full md:w-1/3'><Image className='h-80' src={img1} alt='explor news' height={300} width={500} /></div>
                <div className='w-full md:w-1/2 md:mt-0 mt-5'>
              <p>
                <b>A Splash of Color and Ice: Where Architecture Meets Adventure</b><br></br>
                In a world often dominated by grey skyscrapers and muted tones, colorful buildings offer a vibrant break from the ordinary. Found in cities like Burano in Italy, La Boca in Buenos Aires, or Jodhpur in India, these lively structures bring personality, culture, and joy to urban landscapes.

Each color tells a story. In coastal towns, bright hues helped fishermen identify their homes from the sea. In artistic neighborhoods, painted walls reflect creativity and community spirit. Whether it’s a pink house with turquoise shutters or a street lined with rainbow facades, these buildings invite smiles and curiosity.

Colorful buildings also attract tourists, boosting local economies and encouraging preservation of unique architectural styles. More than just eye candy, they are living pieces of history and identity.

Incorporating color into architecture doesn’t just brighten the streets—it lifts moods and creates spaces people love to live in. In a way, each building becomes a canvas, and each city a gallery.
                </p>
                </div>
            </div>
            <div className='block md:flex items-center mt-10  justify-around '>
                <div className='w-full md:w-1/3'><Image className='h-80' src={img2} alt='explor news' height={300} width={500} /></div>
                <div className='w-full md:w-1/2 md:mt-0 mt-5'>
              <p>
                <b>The Beauty of Nature: A Gift All Around Us

</b><br></br>
                Nature is all around us, offering beauty, peace, and inspiration every day.From towering mountains and deep forests to quiet rivers and blooming flowers, the natural world is full of wonder.

Spending time in nature helps us relax and feel connected. A simple walk through a park, listening to birds or watching the sunset, can lift our mood and clear our mind. Nature teaches us patience through the slow change of seasons and amazes us with its colors, sounds, and life.

Trees give us clean air, plants give us food, and animals remind us of the wild and free parts of the world. Even a single leaf or stone can show us the detail and design that exists in every corner of nature.

In a busy, modern world, nature is a quiet friend that waits for us. It does not ask for much—just care and respect. By protecting nature, we protect our own future.

Whether it’s a forest path, a sea breeze, or the stars above, nature invites us to slow down, look closer, and remember that we’re part of something bigger.
                </p>
                </div>
            </div>
            <div className='block md:flex items-center mt-10 justify-around '>
                <div className='w-full md:w-1/3'><Image className='h-80' src={img3} alt='explor news' height={300} width={500} /></div>
                <div className='w-full md:w-1/2 md:mt-0 mt-5'>
              <p>
               
                <b> The Power of Alone Time</b><br></br>

In a world full of noise, schedules, and screens, alone time is a quiet gift we often overlook. Spending time by yourself isn’t about loneliness—it’s about reconnecting with your own thoughts, feelings, and needs.

Alone time gives you space to reflect, dream, and recharge. Whether it’s reading a book, taking a walk, or simply sitting in silence, these moments help clear your mind and reduce stress. They allow creativity to flow and help you understand yourself better.

Being alone also builds confidence. You learn to enjoy your own company, make decisions independently, and discover what truly matters to you—without outside influence.

It doesn’t take hours; even a few quiet minutes a day can make a big difference. The key is to be present and let go of distractions.

In a busy world, alone time is not a luxury—it’s a necessity. It helps us grow, stay balanced, and live more fully. So take a breath, step back, and enjoy the calm. Sometimes, the best company is yourself.
                </p>
                </div>
            </div>
            
            
        </div>
    );
};

export default page;