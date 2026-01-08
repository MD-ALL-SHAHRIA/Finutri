import Link from "next/link";

export default function Footer() {
  return (
    
    <footer className="text-slate-300 text-sm font-sans">
      
      <div className="bg-[#0b1c2e] py-12">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* First Column */}
          <div className="col-span-1 lg:col-span-3 xl:col-span-2">
            <Link href="/" className="flex flex-col group leading-none">
              <div className="text-3xl font-bold tracking-tight text-white">
                Finutri
                <span className="text-red-500 text-4xl leading-3">.</span>
              </div>
              <span className="text-[11px] text-gray-500 font-medium mt-1 mb-5 tracking-normal group-hover:text-brand-primary transition-colors">
                Herbal & Natural Pharmacy
              </span>
            </Link>

            <p className="leading-relaxed opacity-80 mb-6 max-w-md">
              Finutri is your trusted destination for evidence-informed herbal
              medicines, serving health-conscious customers across the US.
            </p>
          </div>

          {/* Shop Links */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-emerald-400">
                  All medicines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  By category
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  By symptom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Best deals
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-emerald-400">
                  About Finutri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Shipping & returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Chat with us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  support@finutri.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="bg-[#040a12] py-2">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>© 2025 Finutri. All rights reserved.</p>
          {/* Payment Icons Placeholders */}
          <div className="flex justify-between items-center gap-8 mt-4 md:mt-0 grayscale opacity-80">
            <div className="h-6 w-13 rounded text-white font-semibold">
              Visa
            </div>
            <div className="h-6 w-13 rounded text-white font-semibold">
              MasterCard
            </div>
            <div className="h-6 w-13 rounded text-white font-semibold">
              PayPal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
