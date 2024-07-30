

export default function CarItem() {

    

    return (
        <div className="p-3 w-full md:w-6/12 lg:w-4/12">
              <div className="bg-white border shadow-md text-gray-500">
                
                <a href="/details">
                  <img
                    src="https://images.unsplash.com/photo-1575090536203-2a6193126514?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDN8fGh5dW5kYWl8ZW58MHx8fHwxNjMxNjk3ODI1&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=450&fit=crop"
                    className="hover:opacity-90 w-full"
                    alt="..."
                    width={600}
                    height={450}
                  />
                </a>
                
                <div className="p-6">
                  <h4 className="font-bold mb-2 text-gray-900 text-xl">
                    <a href="#" className="hover:text-gray-500">
                      Hyundai Creta 2017
                    </a>
                  </h4>
                  <p className="mb-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  
                  <hr className="border-gray-200 my-4" />
                  
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center py-1 space-x-1">
                          </div>
                          <p className="font-bold text-gray-900">Price</p>
                      </div>
                
                </div>
              </div>
            </div>
    )
}