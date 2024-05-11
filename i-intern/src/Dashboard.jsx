import React from 'react';
import IBM from './assets/IBM_logo_in.jpg';

const internships = [
  {
    id: 1,
    title: 'Frontend Development Internship',
    category: 'IT',
    company: 'WebTech Solutions',
    description:
      'Exciting opportunity to learn frontend development with modern technologies such as React, Vue, and Angular. Work on user interfaces, design responsive web applications, and collaborate with a talented team.',
    date: 'May 1, 2024',
    duration: '6 months',
    location: 'Kuala Lumpur',
    imageUrl: IBM
  },
  {
    id: 2,
    title: 'Data Analyst Internship',
    category: 'Data Science',
    company: 'Data Insights Co.',
    description:
      'Explore the world of data analysis and gain practical experience in data visualization, statistical analysis, and data mining. Work on real datasets to uncover insights and support decision-making.',
    date: 'June 15, 2024',
    duration: '4 months',
    location: 'Miri',
    imageUrl: IBM
  },
  {
    id: 3,
    title: 'Marketing Internship',
    category: 'Marketing',
    company: 'Digital Marketing Agency',
    description:
      'Join our marketing team and assist with social media campaigns, content creation, and market research. Learn digital marketing strategies, analyze campaign performance, and contribute creative ideas.',
    date: 'July 10, 2024',
    duration: '3 months',
    location: 'Kuching',
    imageUrl: IBM
  },
  {
    id: 4,
    title: 'UX/UI Design Internship',
    category: 'Design',
    company: 'Creative Designs Studio',
    description:
      'Immerse yourself in the world of user experience and interface design. Create wireframes, prototypes, and mockups, and collaborate with designers and developers to bring innovative designs to life.',
    date: 'August 20, 2024',
    duration: '5 months',
    location: 'Malacca',
    imageUrl: IBM
  },
  {
    id: 5,
    title: 'Finance Internship',
    category: 'Finance',
    company: 'Financial Services Corp.',
    description:
      'Gain hands-on experience in finance and investment banking. Assist with financial analysis, modeling, and research projects. Learn from industry experts and develop valuable skills for your future career.',
    date: 'September 5, 2024',
    duration: '6 months',
    location: 'Kuching',
    imageUrl: IBM
  }
];


export default function Dashboard() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Apply Now</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Kickstart Your Career with Us
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {internships.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <p className="text-gray-500">
                  {post.date}
                </p>
                <p
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category}
                </p>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                  {post.company}
                  </p>
                  <p className="text-gray-600">{post.location} | {post.duration}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
