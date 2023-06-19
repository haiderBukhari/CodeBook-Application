import './CSS/reviews.css'
import Review1 from '../../assets/images/img-1.avif'
import Review2 from '../../assets/images/img-2.avif'
import Review3 from '../../assets/images/img-3.avif'
import Review4 from '../../assets/images/img-4.avif'

export const Review = () => {
  let list = [
    {
      id:1,
      image: `${Review1}`,
      name: "Bonnie Green",
      detail: "Developer at Random AI",
      heading: "Very easy this was to integrate",
      para: 'If you care for your time, I hands down would go with this.'
    },
    {
      id:2,
      image: `${Review2}`,
      name: "Roberta Casas",
      detail: "Lead designer at Random",
      heading: "Solid foundation for any project",
      para: 'Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!'
    },
    {
      id:3,
      image: `${Review3}`,
      name: "Jese Leos",
      detail: "Software Engineer at Random",
      heading: "Mindblowing workflow",
      para: 'Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.'
    },
    {
      id:4,
      image: `${Review4}`,
      name: "Joseph McFall",
      detail: "CTO at Random",
      heading: "Efficient Collaborating",
      para: 'You have many examples that can be used to create a fast prototype for your team.'
    }
  ]
  return (
    <main>
      <h1 data-aos="fade-up" className='text-2xl text-center font-semibold dark:text-slate-100 mb-20 mt-10 underline underline-offset-8'>Student About CodeBook</h1>
      <div className='main' data-aos="fade-down">
        {
          list.map((arr) => (
            <div key={arr.id} className='review p-22 dark:bg-slate-800'>
              <div className='review-1 dark:text-white'>
                <img className='img1' src={arr.image} alt=""/>
                <div className="apply-flex">
                  <p className='name text-xl mb-2'>{arr.name}</p>
                  <p className='text-md font-light text-gray-700 dark:text-gray-400'>{arr.detail}</p>
                </div>
              </div>
              <p className='my-4 mt-5 font-semibold	text-lg text-center dark:text-white'>{arr.heading}</p>
              <p className='leading-loose	m-auto w-83 text-center dark:text-gray-300'>{arr.para}</p>
            </div>
          ))
        }
      </div>
    </main>
  )
}
