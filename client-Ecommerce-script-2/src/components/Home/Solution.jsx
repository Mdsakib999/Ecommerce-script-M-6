import { ArrowRight } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      text: "Wide range of office and school supplies for every need"
    },
    {
      text: "Quality products from trusted international brands"
    },
    {
      text: "Fast delivery for urgent office requirements"
    },
    {
      text: "Bulk ordering with special corporate discounts"
    },
    {
      text: "24/7 customer support and expert advice"
    },
    {
      text: "Easy returns and hassle-free exchanges"
    },
    {
      text: "Eco-friendly and sustainable product options"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Solution Badge */}
            <div className="inline-flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                SOLUTION
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                Complete Office Solutions for Modern Businesses
              </h2>
              
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                At Notevia Limited, we provide premium office and stationary supplies 
                that combine quality, reliability, and value. From essential writing instruments 
                to complete office setup solutions, we're your trusted partner for all workplace 
                and educational needs. We focus on customer satisfaction, product authenticity, 
                and seamless delivery to achieve this.
              </p>
            </div>
          </div>

          {/* Right Column - Solution Points */}
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-lg transition-all duration-200"
              >
                {/* Arrow Icon */}
                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
                
                {/* Solution Text */}
                <p className="text-gray-700 font-medium leading-relaxed group-hover:text-black transition-colors duration-200">
                  {solution.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-black mb-2">
                Ready to Upgrade Your Office?
              </h3>
              <p className="text-gray-600">
                Join thousands of businesses who trust Notevia Limited
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Shop Now
              </button>
              <button className="bg-white hover:bg-gray-50 text-black border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;