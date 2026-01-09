import { Mail } from "lucide-react";

export default function Newsletter() 
{
  return (
    <section className="container mx-auto px-4 py-12 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-brand-light px-6 py-12 text-center md:px-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
          <Mail className="h-8 w-8 text-emerald-600" />
        </div>

        <h2 className="mb-2 text-2xl font-extrabold text-gray-900">
          Get Weekly Health Tips
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-base font-semibold text-emerald-600">
          Subscribe to receive expert wellness advice, herbal remedy guides, and
          exclusive offers delivered to your inbox every week.
        </p>

        <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-full border border-gray-300 bg-brand-light px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button className="rounded-full bg-emerald-700 px-8 py-3 text-sm font-medium text-white hover:bg-emerald-800 transition-colors tracking-wide">
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs font-medium text-emerald-600">
          ✓ No spam · Unsubscribe anytime · Privacy protected
        </p>
      </div>
    </section>
  );
}
