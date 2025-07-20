import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info - Fine & Dandy",
  description: "Get in touch with Kelsey & Mikaela at Fine & Dandy",
};

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-warm-beige">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-retro text-shadow-retro mb-4">
            Meet Kelsey & Mikaela
          </h1>
          <p className="text-xl text-body text-high-contrast font-permanent-marker">
            partners in disco and resale
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-8 shadow-retro border-2 border-retro/20">
            <h2 className="text-2xl font-bold text-retro mb-4 text-shadow-retro">
              Our Story
            </h2>
            <p className="text-body text-high-contrast leading-relaxed mb-4">
              We&apos;re a pair of old souls who have been groovin&apos; together for over a decade. 
              Our shared passion for bygone styles, rad tunes, and far-out finds led us to 
              create Fine & Dandy.
            </p>
            <p className="text-body text-high-contrast leading-relaxed">
              Thanks for supporting our shop!
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Store Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-retro border-2 border-retro/20">
              <h3 className="text-xl font-bold text-retro mb-4 text-shadow-retro">
                Visit Our Shop
              </h3>
              <div className="space-y-3 text-body text-high-contrast">
                <p className="font-semibold">Fine & Dandy</p>
                <p>123 Vintage Lane</p>
                <p>Santa Cruz, CA 95060</p>
                <p className="mt-4">
                  <span className="font-semibold">Hours:</span><br />
                  Tuesday - Saturday: 11am - 7pm<br />
                  Sunday: 12pm - 5pm<br />
                  Monday: Closed
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-retro border-2 border-retro/20">
              <h3 className="text-xl font-bold text-retro mb-4 text-shadow-retro">
                Get In Touch
              </h3>
              <div className="space-y-3 text-body text-high-contrast">
                <p>
                  <span className="font-semibold">Phone:</span><br />
                  (831) 555-0123
                </p>
                <p>
                  <span className="font-semibold">Email:</span><br />
                  hello@fineanddandy.com
                </p>
                <p>
                  <span className="font-semibold">Instagram:</span><br />
                  @fineanddandy
                </p>
                <p>
                  <span className="font-semibold">Facebook:</span><br />
                  Fine & Dandy Vintage
                </p>
              </div>
            </div>
          </div>

          {/* Special Message */}
          <div className="mt-8 bg-gradient-to-r from-retro/10 to-warm-orange/10 rounded-lg p-8 text-center border-2 border-retro/20">
            <p className="text-lg text-body text-high-contrast font-permanent-marker">
              &ldquo;We believe every piece has a story, and every story deserves to be told. 
              Come dig through our treasures and find your next favorite thing!&rdquo;
            </p>
            <p className="text-sm text-body text-high-contrast mt-2">
              - Kelsey & Mikaela
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 