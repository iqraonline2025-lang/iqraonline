import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decorative Glows - Matching the Story page */}
      <div className="absolute top-0 left-0 -z-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Visual/Image Container */}
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500 border border-purple-100">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Our team collaborating"
              width={600}
              height={800}
              className="object-cover w-full h-[500px]"
            />
          </div>
          {/* Purplish decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-purple-100 rounded-full -z-0 opacity-50 blur-3xl"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-fuchsia-100 rounded-full -z-0 opacity-40 blur-2xl"></div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-8">
          <div>
            <span className="text-purple-600 font-semibold tracking-widest uppercase text-sm">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
              We started with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">laptop and a dream.</span>
            </h2>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Founded in 2021, we realized that the industry was stuck in the past. 
            While technology moved at light speed, the solutions provided to small 
            businesses remained clunky and expensive.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed font-light">
            We decided to change that. By focusing on user-centric design and 
            cutting-edge automation, we’ve helped over 500 companies reclaim 
            their time and focus on what they actually love doing.
          </p>

          {/* Stats Breakdown */}
          <div className="grid grid-cols-2 gap-8 py-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="text-3xl font-bold text-gray-900">12k+</h4>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-tighter">Active Users</p>
            </div>
            <div className="border-l-4 border-fuchsia-400 pl-4">
              <h4 className="text-3xl font-bold text-gray-900">98%</h4>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-tighter">Satisfaction</p>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/story">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 active:scale-95">
                Read the Full Story
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}