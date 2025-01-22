'use client';

const data = [
  {
    id: 'item-1',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    description:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 'item-2',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    description:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 'item-3',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    description:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 'item-4',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    description:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 'item-5',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    description:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080',
  },
];

const Testimonials = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 flex flex-col lg:col-span-2 lg:mt-20 lg:grid lg:grid-cols-2 md:gap-6 lg:gap-8">
        <div className="mb-8 flex items-end justify-between lg:items-center  md:mb-14 lg:mb-16">
          <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
            All case studies
          </h2>
        </div>
        <div className="container mx-auto ">
          <div className="flex overflow-x-scroll pb-10 no-scrollbar gap-4 snap-x">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-nowrap snap-center max-w-[320px]  lg:max-w-[360px] "
              >
                <div className="p-4 flex justify-center flex-col bg-white shadow-lg group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl aspect-[3/2]  md:aspect-[5/4] lg:aspect-[16/9]">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
