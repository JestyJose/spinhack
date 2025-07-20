import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

export default function TeslaPressureCooker() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/images/tesla-logo.jpg" 
              alt="Tesla Logo" 
              className="h-10 w-auto rounded-sm"
            />
            <span className="text-gray-500">Smart Kitchen</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <ScrollLink to="hero" smooth={true} className="text-gray-600 hover:text-orange-500 cursor-pointer">Home</ScrollLink>
            <ScrollLink to="features" smooth={true} className="text-gray-600 hover:text-orange-500 cursor-pointer">Features</ScrollLink>
            <ScrollLink to="model" smooth={true} className="text-gray-600 hover:text-orange-500 cursor-pointer">Model</ScrollLink>
            <ScrollLink to="culinary" smooth={true} className="text-gray-600 hover:text-orange-500 cursor-pointer">Culinary</ScrollLink>
            <ScrollLink to="specs" smooth={true} className="text-gray-600 hover:text-orange-500 cursor-pointer">Specs</ScrollLink>
          </nav>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
            Pre-order
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                <span className="text-orange-500">Smart</span> Cooking, <br />
                <span className="text-orange-500">Reimagined</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 md:max-w-lg">
                Experience the future of culinary innovation with the Tesla Smart Pressure Cooker—where AI meets gourmet cooking.
              </p>
              <div className="flex gap-4">
                <ScrollLink to="features" smooth={true}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                    Explore Features
                  </Button>
                </ScrollLink>
                <ScrollLink to="model" smooth={true}>
                  <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-6 text-lg">
                    Watch Model
                  </Button>
                </ScrollLink>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
                <img 
                  src="/assets/images/pressure-cooker-hero.svg" 
                  alt="Tesla Smart Pressure Cooker" 
                  className="relative w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionary Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology that transforms how you prepare meals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF6B00" strokeWidth="2"/>
                  <circle cx="50" cy="40" r="15" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <line x1="50" y1="55" x2="50" y2="65" stroke="#FF6B00" strokeWidth="2"/>
                  <line x1="40" y1="75" x2="50" y2="65" stroke="#FF6B00" strokeWidth="2"/>
                  <line x1="60" y1="75" x2="50" y2="65" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M35,30 L45,40 M55,40 L65,30" stroke="#FF6B00" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Cooking Automation</h3>
              <p className="text-gray-600">
                Automatically adjusts pressure, heat, and cook time based on recipe and ingredient type using onboard AI.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M30,50 Q50,20 70,50 Q50,80 30,50" fill="none" stroke="#FF6B00" strokeWidth="3"/>
                  <path d="M25,50 Q50,10 75,50 Q50,90 25,50" fill="none" stroke="#FF6B00" strokeWidth="2" strokeDasharray="3,3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dual-Zone Pressure Diffuser</h3>
              <p className="text-gray-600">
                Cook two different dishes simultaneously with independent pressure and heat control in each zone.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF6B00" strokeWidth="2"/>
                  <rect x="30" y="35" width="40" height="30" rx="5" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="10" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="5" fill="#FF6B00"/>
                  <line x1="75" y1="30" x2="65" y2="40" stroke="#FF6B00" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Built-in Real-Time Cooking Camera</h3>
              <p className="text-gray-600">
                Stream or record your cooking process from inside the cooker via an internal steam-resistant HD camera.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF6B00" strokeWidth="2"/>
                  <rect x="25" y="35" width="50" height="30" rx="5" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M30,40 L70,40" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M30,50 L70,50" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M30,60 L70,60" stroke="#FF6B00" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Touchscreen OLED Display</h3>
              <p className="text-gray-600">
                Intuitive Tesla UI for manual control, smart recipes, status updates, and maintenance alerts.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M35,60 Q50,30 65,60" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M40,65 Q50,45 60,65" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <circle cx="50" cy="45" r="10" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M40,30 L60,30" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M35,35 L65,35" stroke="#FF6B00" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Steam-Resistant Ion Assistant</h3>
              <p className="text-gray-600">
                A smart voice assistant that works in hot, steamy environments, allowing hands-free control.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M30,50 a20,20 0 0,1 40,0" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="10" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M25,70 L35,60 M65,60 L75,70" stroke="#FF6B00" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Wireless App Connectivity</h3>
              <p className="text-gray-600">
                Control and monitor the cooker from your smartphone via the Tesla Home App (iOS & Android).
              </p>
            </div>
            
            {/* Feature 7 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF6B00" strokeWidth="2"/>
                  <rect x="35" y="30" width="30" height="40" rx="3" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <line x1="35" y1="45" x2="65" y2="45" stroke="#FF6B00" strokeWidth="2"/>
                  <circle cx="50" cy="37.5" r="5" fill="#FF6B00"/>
                  <path d="M40,55 L45,60 L60,45" stroke="#FF6B00" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Ingredient Scanner</h3>
              <p className="text-gray-600">
                Scan ingredients via the camera or sensors to get automatic cooking suggestions and optimal settings.
              </p>
            </div>
            
            {/* Feature 8 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF6B00" strokeWidth="2"/>
                  <rect x="30" y="30" width="40" height="40" rx="3" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <line x1="40" y1="45" x2="60" y2="45" stroke="#FF6B00" strokeWidth="2"/>
                  <line x1="40" y1="55" x2="60" y2="55" stroke="#FF6B00" strokeWidth="2"/>
                  <line x1="40" y1="65" x2="50" y2="65" stroke="#FF6B00" strokeWidth="2"/>
                  <circle cx="70" cy="30" r="10" fill="#FF6B00"/>
                  <text x="70" y="34" fontFamily="Arial" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">!</text>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Maintenance & Self-Clean Alerts</h3>
              <p className="text-gray-600">
                Detects residue, build-up, or wear and alerts you to clean or replace components via app or screen.
              </p>
            </div>
            
            {/* Feature 9 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M40,40 Q50,30 60,40" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M35,50 Q50,40 65,50" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M40,60 Q50,50 60,60" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <circle cx="50" cy="65" r="10" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Scent Exhaust Diffuser</h3>
              <p className="text-gray-600">
                Filters and gently releases cooking aromas, reducing heavy kitchen smells using Tesla's adaptive air system.
              </p>
            </div>
            
            {/* Feature 10 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF6B00" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M50,30 L50,40" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M50,60 L50,70" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M30,50 L40,50" stroke="#FF6B00" strokeWidth="2"/>
                  <path d="M60,50 L70,50" stroke="#FF6B00" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="5" fill="#FF6B00"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Energy-Efficient Induction Core</h3>
              <p className="text-gray-600">
                Uses Tesla's optimized thermal core for fast, even cooking with minimal power consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Section */}
      <section id="model" className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Tesla Smart Pressure Cooker</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elegantly designed, meticulously engineered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <img 
                src="/assets/images/models/pressure-cooker-features.jpg" 
                alt="Tesla Pressure Cooker Features" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src="/assets/images/models/pressure-cooker-model.jpg" 
                alt="Tesla Pressure Cooker Model" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Creations Section */}
      <section id="culinary" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Culinary Creations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the delicious meals you can prepare with your Tesla Smart Pressure Cooker
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Food Item 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-56 overflow-hidden rounded-lg mb-6">
                <img 
                  src="/assets/images/food/food1.svg" 
                  alt="Hearty Beef Stew" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-xl mb-2">Hearty Beef Stew</h4>
              <p className="text-gray-600 mb-3">
                A rich and flavorful stew ready in just 25 minutes with the perfect pressure and temperature control.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-3">⏱️ 25 min</span>
                <span>🔥 One-pot meal</span>
              </div>
            </div>

            {/* Food Item 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-56 overflow-hidden rounded-lg mb-6">
                <img 
                  src="/assets/images/food/food2.svg" 
                  alt="Steamed Salmon & Vegetables" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-xl mb-2">Steamed Salmon & Vegetables</h4>
              <p className="text-gray-600 mb-3">
                Perfectly cooked salmon with fresh vegetables using the dual-zone feature for separate cooking times.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-3">⏱️ 15 min</span>
                <span>🥦 Healthy option</span>
              </div>
            </div>

            {/* Food Item 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-56 overflow-hidden rounded-lg mb-6">
                <img 
                  src="/assets/images/food/food3.svg" 
                  alt="Homemade Bone Broth Soup" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-xl mb-2">Homemade Bone Broth Soup</h4>
              <p className="text-gray-600 mb-3">
                Rich and nutritious bone broth in 45 minutes instead of hours with traditional methods.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-3">⏱️ 45 min</span>
                <span>🍲 Comfort food</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-orange-500 hover:bg-orange-600">
              View Recipe Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered to perfection with cutting-edge technology
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-gray-50">
                <h3 className="text-xl font-bold mb-6 text-orange-500">Dimensions & Capacity</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Capacity</span>
                    <span className="font-medium">8 Quarts</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Dimensions</span>
                    <span className="font-medium">13.5" × 13" × 12.5"</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-medium">11.5 lbs</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Materials</span>
                    <span className="font-medium">Stainless Steel, Ceramic</span>
                  </li>
                </ul>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-orange-500">Technical Features</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Power</span>
                    <span className="font-medium">1200W</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Connectivity</span>
                    <span className="font-medium">Wi-Fi, Bluetooth 5.0</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Camera Resolution</span>
                    <span className="font-medium">1080p HD</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Cooking Presets</span>
                    <span className="font-medium">42 Programmable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Cooking?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the future of smart kitchen appliances with the Tesla Smart Pressure Cooker
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Pre-order Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-400 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/assets/images/tesla-logo.jpg" 
                  alt="Tesla Logo" 
                  className="h-8 w-auto rounded-sm"
                />
                <span>Smart Kitchen</span>
              </div>
              <p>© 2025 Tesla Smart Kitchen. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <div>
                <h4 className="font-medium text-white mb-3">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-orange-500">Features</a></li>
                  <li><a href="#" className="hover:text-orange-500">Specifications</a></li>
                  <li><a href="#" className="hover:text-orange-500">Reviews</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-3">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                  <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                  <li><a href="#" className="hover:text-orange-500">Warranty</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}