import Link from 'next/link'
import Date from './date'

export default function Card({id, date, title, tag, color}) {
    return (
        <Link href={`/posts/${id}`}>
        <a key={id} className="relative flex flex-col col-span-4 px-0 py-0 space-y-2 overflow-hidden bg-gray-50 sm:rounded-xl">
        <div className={`py-1 px-2 w-min items-start text-sm font-medium text-${color}-700 bg-${color}-100 rounded-full`}>
        {tag}
        </div>
        <h4 className="m-0 text-xl font-bold text-gray-700">{title}</h4>
        <p className="text-base text-left text-gray-500 ">Each of our plan will provide you and your team with certifications.</p>
        <Date className="text-sm md:text-base font-normal text-gray-600" dateString={date} />
      </a>
      </Link>
        )
  }
  