
"use client";

import { useState } from "react";

const eras = [
  {
    name: "Ancient Rome",
    date: "27 BC – 476 AD",
    icon: "🏛️",
    title: "A Feast Fit for an Emperor",
    description:
      "Discover the flavours of Roman banquets, aromatic herbs, honeyed delicacies and grand historical feasts.",
    dishes: ["Herb-roasted vegetables", "Honeyed almonds", "Rustic lentil stew"],
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Mughal Empire",
    date: "1526 – 1857",
    icon: "👑",
    title: "Royal Flavours of the Mughals",
    description:
      "Explore fragrant spices, royal dining traditions, saffron-inspired recipes and the artistry of historic kitchens.",
    dishes: ["Saffron-inspired rice", "Spiced lentils", "Cardamom sweets"],
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Roaring 20s",
    date: "1920 – 1929",
    icon: "🥂",
    title: "The Golden Age of Glamour",
    description:
      "Step into the Jazz Age with elegant supper clubs, vintage-inspired dishes and sophisticated dinner parties.",
    dishes: ["Elegant savoury bites", "Vintage desserts", "Citrus mocktails"],
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Medieval Europe",
    date: "500 – 1500",
    icon: "🏰",
    title: "The Medieval Hearth",
    description:
      "Celebrate rustic breads, hearty grains, garden herbs and comforting recipes inspired by medieval kitchens.",
    dishes: ["Rustic grain bread", "Garden herb broth", "Apple compote"],
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Ancient Persia",
    date: "550 BC onward",
    icon: "🦁",
    title: "The Fragrant Persian Table",
    description:
      "Discover the culinary heritage of fragrant herbs, dried fruits, grains and sweet-and-savoury combinations.",
    dishes: ["Herbed grain pilaf", "Pomegranate salad", "Dried fruits and nuts"],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
  },
];

const boxItems = [
  {
    number: "01",
    title: "Rare & Authentic Spices",
    description:
      "Explore aromatic ingredients inspired by historic trade routes, from cinnamon and cumin to fragrant cardamom.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Historical Scrolls",
    description:
      "Discover fascinating stories about royal kitchens, ancient markets, forgotten food traditions and culinary culture.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Parchment Recipe Cards",
    description:
      "Bring history into your kitchen with step-by-step recipes, ingredient notes and serving inspiration.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85",
  },
];

const facts = [
  {
    title: "Ancient Grains",
    subtitle: "A foundation of traditional diets",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85",
    description:
      "Whole grains such as barley and millet have nourished communities for centuries.",
    benefit: "Dietary fibre • Plant nutrients",
  },
  {
    title: "Olive Oil",
    subtitle: "A Mediterranean classic",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=85",
    description:
      "Olive oil has a long culinary history and is valued for its unsaturated fats.",
    benefit: "Unsaturated fats • Flavour",
  },
  {
    title: "Herbs & Spices",
    subtitle: "Nature's aromatic pantry",
    image:
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=700&q=85",
    description:
      "Herbs and spices bring colour, aroma and distinctive character to traditional cooking.",
    benefit: "Aroma • Culinary variety",
  },
  {
    title: "Beans & Lentils",
    subtitle: "A timeless staple",
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=700&q=85",
    description:
      "Legumes appear in food traditions worldwide and provide plant protein and fibre.",
    benefit: "Plant protein • Fibre",
  },
  {
    title: "Seasonal Produce",
    subtitle: "Inspired by the harvest",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85",
    description:
      "Seasonal produce celebrates local ingredients and the changing rhythms of the harvest.",
    benefit: "Variety • Seasonal flavour",
  },
  {
    title: "Traditional Techniques",
    subtitle: "The wisdom of the kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=85",
    description:
      "Slow simmering, soaking and fermentation have shaped food traditions across cultures.",
    benefit: "Depth of flavour • Heritage",
  },
];

const reviews = [
  {
    quote:
      "A wonderful concept that brings food history to life. Every dinner becomes an opportunity to discover something new.",
    name: "Sophia M.",
    detail: "HISTORY ENTHUSIAST",
  },
  {
    quote:
      "The perfect inspiration for a themed dinner. The storytelling and elegant presentation make the experience memorable.",
    name: "Oliver R.",
    detail: "CURIOUS COOK",
  },
  {
    quote:
      "An imaginative way to explore different cultures and bring everyone together around the dinner table.",
    name: "Amara K.",
    detail: "FAMILY EXPLORER",
  },
];

export default function CulinaryTimeMachine() {
  const [activeEra, setActiveEra] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const era = eras[activeEra];

  function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage(
      "Thank you! Your email passed the demo form validation. Connect a newsletter service to save subscriptions."
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#4A0E17] text-[#F2DCA0]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #4a0e17;
        }

        * {
          box-sizing: border-box;
        }

        ::selection {
          background: #d4af37;
          color: #4a0e17;
        }
      `}</style>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#D4AF37]/30 bg-[#35080E]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-4xl text-[#D4AF37]">⌛</span>
            <span className="font-serif text-lg leading-tight text-[#F2DCA0]">
              The Culinary
              <br />
              Time Machine
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-xs uppercase tracking-wider lg:flex">
            <a href="#story" className="hover:text-[#D4AF37]">Our Story</a>
            <a href="#timeline" className="hover:text-[#D4AF37]">Timeline</a>
            <a href="#box" className="hover:text-[#D4AF37]">The Box</a>
            <a href="#heritage" className="hover:text-[#D4AF37]">Benefits</a>
            <a href="#reviews" className="hover:text-[#D4AF37]">Reviews</a>
          </nav>

          <a
            href="#box"
            className="hidden rounded-full bg-[#D4AF37] px-5 py-3 text-xs font-bold text-[#4A0E17] transition hover:bg-[#F2DCA0] sm:inline-block"
          >
            Discover the Box ↗
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="rounded border border-[#D4AF37]/50 px-3 py-2 text-xl lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-[#D4AF37]/20 px-6 py-5 lg:hidden">
            {[
              ["Our Story", "#story"],
              ["Timeline", "#timeline"],
              ["The Box", "#box"],
              ["Benefits", "#heritage"],
              ["Reviews", "#reviews"],
              ["Newsletter", "#newsletter"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#D4AF37]"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[650px] items-center border-b border-[#D4AF37]/30"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=2200&q=90"
            alt="Beautifully arranged culinary feast"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#27060A] via-[#35080E]/85 to-[#35080E]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A0E17] via-transparent to-[#35080E]/30" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
          <p className="mb-6 text-xs uppercase tracking-[0.32em] text-[#D4AF37]">
            ✦ An Extraordinary Culinary Journey
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] sm:text-6xl md:text-7xl lg:text-8xl">
            Taste History,
            <br />
            <span className="italic text-[#D4AF37]">One Century</span>
            <br />
            at a Time.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#F2DCA0]/85 md:text-lg">
            Travel through remarkable food traditions. Discover forgotten
            flavours, explore royal kitchens and bring centuries of culinary
            inspiration to your own table.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#timeline"
              className="rounded-full bg-[#D4AF37] px-7 py-4 font-serif font-semibold text-[#4A0E17] transition hover:-translate-y-1 hover:bg-[#F2DCA0]"
            >
              Explore the Journey →
            </a>
            <a
              href="#story"
              className="rounded-full border border-[#D4AF37]/70 px-7 py-4 font-serif hover:bg-[#D4AF37]/10"
            >
              Our Story
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-xs uppercase tracking-wider text-[#F2DCA0]/80">
            <span>✦ Authentic Inspiration</span>
            <span>✦ Historical Recipes</span>
            <span>✦ Food Heritage</span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="story" className="bg-[#4A0E17] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              More Than a Meal
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Every Flavour
              <br />
              <span className="italic text-[#D4AF37]">Has a Story.</span>
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-[#F2DCA0]/80">
              Food is one of humanity&apos;s oldest storytellers. It reveals how
              people celebrated, traded, travelled and gathered around a shared
              table.
            </p>
            <p className="mt-4 max-w-xl leading-8 text-[#F2DCA0]/80">
              The Culinary Time Machine turns that fascinating history into a
              modern culinary adventure, combining historical inspiration,
              engaging stories and creative recipes.
            </p>
            <a
              href="#box"
              className="mt-8 inline-block border-b border-[#D4AF37] pb-2 font-serif text-lg text-[#D4AF37] hover:text-[#F2DCA0]"
            >
              Discover Our Philosophy ↗
            </a>
          </div>

          <div className="relative p-3">
            <div className="absolute inset-0 rounded-tl-[90px] rounded-br-[90px] border border-[#D4AF37]/60" />
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
              alt="A colourful spread inspired by traditional cooking"
              className="relative h-[400px] w-full rounded-tl-[90px] rounded-br-[90px] object-cover"
            />
            <div className="absolute -bottom-3 left-0 border border-[#D4AF37]/50 bg-[#35080E] p-5">
              <p className="font-serif text-3xl italic text-[#D4AF37]">
                Centuries
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider">
                Of flavour and discovery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TIMELINE */}
      <section id="timeline" className="border-y border-[#D4AF37]/40 bg-[#E9D5AD] px-5 py-24 text-[#4A0E17] md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8B481F]">
              An Interactive Culinary Archive
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl">
              Choose Your Era
            </h2>
            <p className="mt-5 leading-7 text-[#4A0E17]/75">
              Select an era to explore its culinary traditions, memorable
              ingredients and fascinating food stories.
            </p>
            <div className="mx-auto mt-7 h-px w-24 bg-[#B05E27]" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)]">
            <div className="flex flex-col gap-3">
              {eras.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveEra(index)}
                  aria-pressed={activeEra === index}
                  className={`flex items-center gap-4 border p-4 text-left transition ${
                    activeEra === index
                      ? "border-[#D4AF37] bg-[#4A0E17] text-[#F2DCA0] shadow-lg"
                      : "border-[#B05E27]/25 bg-[#F2E4C8] hover:border-[#B05E27]"
                  }`}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>
                    <span className="block font-serif text-lg">{item.name}</span>
                    <span className="mt-1 block text-xs text-[#B05E27]">
                      {item.date}
                    </span>
                  </span>
                  <span className="ml-auto text-[#D4AF37]">↗</span>
                </button>
              ))}
            </div>

            <div className="grid overflow-hidden border border-[#B05E27]/40 bg-[#F3E4C5] shadow-xl md:grid-cols-2">
              <div className="relative min-h-[340px]">
                <img
                  src={era.image}
                  alt={`Food inspiration for ${era.name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#35080E]/95 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 text-[#F2DCA0]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                    Chapter {String(activeEra + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-4xl">{era.name}</h3>
                  <p className="mt-2 text-sm">{era.date}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-xs uppercase tracking-wider text-[#B05E27]">
                  A Taste of the Past
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                  {era.title}
                </h3>
                <p className="mt-5 leading-7 text-[#4A0E17]/75">
                  {era.description}
                </p>

                <div className="my-6 h-px bg-[#B05E27]/30" />

                <h4 className="font-serif text-xl">Inspired Dishes</h4>
                <ul className="mt-4 space-y-3">
                  {era.dishes.map((dish) => (
                    <li key={dish} className="flex gap-3 text-sm">
                      <span className="text-[#B05E27]">✦</span>
                      {dish}
                    </li>
                  ))}
                </ul>

                <a
                  href="#box"
                  className="mt-8 inline-flex w-fit rounded-full bg-[#4A0E17] px-6 py-3 font-serif text-[#F2DCA0] transition hover:bg-[#B05E27]"
                >
                  Explore the Experience →
                </a>
                <p className="mt-4 text-xs italic text-[#8B481F]">
                  Historical inspiration adapted for modern kitchens.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-[#B05E27]/30 pt-7 text-xs uppercase tracking-wider text-[#8B481F]">
            <span>✦ Food Heritage</span>
            <span>✦ Cultural Discovery</span>
            <span>✦ Inspired Cooking</span>
          </div>
        </div>
      </section>

      {/* BOX EXPERIENCE */}
      <section id="box" className="bg-[#35080E] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              ✦ The Box Experience ✦
            </p>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl">
              More Than Just a Meal
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#F2DCA0]/75">
              A culinary time capsule filled with ingredient inspiration,
              historical stories and recipes for your own kitchen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {boxItems.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden border border-[#D4AF37]/35 bg-[#4A0E17] transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#35080E]/90 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-[#D4AF37] bg-[#35080E]/80 font-serif text-lg text-[#D4AF37]">
                    {item.number}
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-3xl text-[#D4AF37]">✧</p>
                  <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#F2DCA0]/75">
                    {item.description}
                  </p>
                  <div className="mt-6 h-px w-16 bg-[#D4AF37]/60 transition-all group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid items-center gap-8 border border-[#D4AF37]/40 bg-[#4A0E17] p-6 md:grid-cols-2 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                An Heirloom for Your Table
              </p>
              <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
                Unbox a Thousand Stories.
              </h3>
              <p className="mt-5 leading-7 text-[#F2DCA0]/75">
                Created for curious cooks, history lovers and thoughtful gift
                givers who believe a memorable meal begins with a story.
              </p>
              <a
                href="#newsletter"
                className="mt-7 inline-block rounded-full bg-[#D4AF37] px-7 py-3 font-serif font-semibold text-[#4A0E17] hover:bg-[#F2DCA0]"
              >
                Get Early Access →
              </a>
            </div>

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
              alt="A richly presented food spread"
              className="h-[310px] w-full border border-[#D4AF37]/30 object-cover"
            />
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-wider text-[#D4AF37]">
            <span>✦ Thoughtful Presentation</span>
            <span>✦ Culinary Storytelling</span>
            <span>✦ Inspired Ingredients</span>
          </div>
        </div>
      </section>

      {/* NUTRITION AND ANTHROPOLOGY */}
      <section id="heritage" className="bg-[#B05E27] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#F2DCA0]">
              Nutrition & Anthropological Discoveries
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Ancient Wisdom.
              <br />
              <span className="italic text-[#F2DCA0]">Timeless Ingredients.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#F7E7BB]/90">
              Explore ingredients and traditional food practices that have
              influenced kitchens across cultures and generations.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {facts.map((fact, index) => (
              <article
                key={fact.title}
                className="group border border-[#D4AF37]/50 bg-[#EBD8B5] p-4 text-[#4A0E17] transition hover:-translate-y-1 hover:bg-[#F7E7C9]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={fact.image}
                    alt={fact.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center bg-[#4A0E17] font-serif text-sm text-[#D4AF37]">
                    0{index + 1}
                  </span>
                </div>
                <div className="p-3 pt-5">
                  <h3 className="font-serif text-2xl">{fact.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-wide text-[#8B481F]">
                    {fact.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#4A0E17]/80">
                    {fact.description}
                  </p>
                  <div className="mt-5 border-t border-[#B05E27]/30 pt-4 text-xs font-semibold text-[#8B481F]">
                    {fact.benefit}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-[#F7E7BB]/90">
            General food and nutrition information only. Nutritional value
            varies by ingredient, portion and preparation method.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-[#D4AF37]/40 bg-[#4A0E17] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              Your Adventure Begins Here
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              A Journey in Three Acts
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                number: "I",
                title: "Choose Your Century",
                text: "Choose a historical era that captures your imagination, from ancient empires to the Jazz Age.",
              },
              {
                number: "II",
                title: "Open the Time Capsule",
                text: "Explore culinary stories, ingredient inspiration and recipe guides from your selected chapter.",
              },
              {
                number: "III",
                title: "Bring History to Life",
                text: "Prepare a memorable meal and share new discoveries around your own dinner table.",
              },
            ].map((step) => (
              <article key={step.number} className="border-t border-[#D4AF37]/50 pt-7">
                <span className="font-serif text-5xl italic text-[#D4AF37]">
                  {step.number}
                </span>
                <h3 className="mt-5 font-serif text-2xl">{step.title}</h3>
                <p className="mt-4 leading-7 text-[#F2DCA0]/75">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-[#E9D5AD] px-5 py-24 text-[#4A0E17] md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8B481F]">
              Notes from the Table
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Stories Worth Sharing
            </h2>
            <p className="mt-4 text-sm text-[#4A0E17]/70">
              Imagine the conversations that begin when history meets dinner.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col border border-[#B05E27]/35 bg-[#F3E4C5] p-7"
              >
                <div className="text-xl tracking-widest text-[#B05E27]">
                  ✦ ✦ ✦ ✦ ✦
                </div>
                <p className="mt-6 flex-1 font-serif text-xl italic leading-8">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-7 border-t border-[#B05E27]/30 pt-5">
                  <p className="font-serif text-lg">{review.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#8B481F]">
                    {review.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-[#8B481F]">
            Sample reviews for the design preview. Replace with verified
            customer feedback before publishing.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="relative overflow-hidden border-y border-[#D4AF37]/60 bg-[#35080E] px-5 py-24 md:px-10">
        <div className="pointer-events-none absolute inset-4 border border-[#D4AF37]/20 sm:inset-8" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85"
              alt="A beautifully arranged selection of colourful food"
              className="h-[320px] w-full border border-[#D4AF37]/40 object-cover"
            />
            <div className="absolute bottom-5 left-5 border border-[#D4AF37]/60 bg-[#35080E]/90 px-5 py-3">
              <p className="font-serif text-xl italic text-[#D4AF37]">
                Good food has a long history.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              A Letter from the Past
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Join Our Culinary Journey
            </h2>
            <p className="mt-5 leading-7 text-[#F2DCA0]/75">
              Receive culinary discoveries, historical food stories and
              collection announcements, delivered with a little inspiration
              from the past.
            </p>

            <form onSubmit={subscribe} className="mt-8">
              <label htmlFor="email" className="mb-3 block text-sm">
                Your email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setMessage("");
                  }}
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 border border-[#D4AF37]/50 bg-[#4A0E17] px-5 py-4 text-sm text-[#F2DCA0] outline-none placeholder:text-[#F2DCA0]/40 focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="bg-[#D4AF37] px-7 py-4 text-sm font-bold text-[#4A0E17] transition hover:bg-[#F2DCA0]"
                >
                  Subscribe →
                </button>
              </div>

              {message && (
                <p role="status" className="mt-4 text-sm text-[#D4AF37]">
                  {message}
                </p>
              )}

              <p className="mt-4 text-xs leading-6 text-[#F2DCA0]/60">
                This demo form does not store emails or send newsletters.
                Connect a newsletter service to enable real subscriptions.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#27060A] px-5 pb-8 pt-14 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-[#D4AF37]/25 pb-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#home" className="inline-flex items-center gap-3">
                <span className="text-4xl text-[#D4AF37]">⌛</span>
                <span className="font-serif text-xl leading-tight">
                  The Culinary
                  <br />
                  Time Machine
                </span>
              </a>
              <p className="mt-5 max-w-xs text-sm leading-7 text-[#F2DCA0]/65">
                Celebrating the flavours, stories and traditions that connect
                generations around the table.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-[#D4AF37]">Explore</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-[#F2DCA0]/70">
                <a href="#story" className="hover:text-[#D4AF37]">Our Story</a>
                <a href="#timeline" className="hover:text-[#D4AF37]">Historical Timeline</a>
                <a href="#box" className="hover:text-[#D4AF37]">The Box Experience</a>
                <a href="#heritage" className="hover:text-[#D4AF37]">Food & Heritage</a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg text-[#D4AF37]">Our Promise</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-[#F2DCA0]/70">
                <span>Thoughtful Storytelling</span>
                <span>Culinary Inspiration</span>
                <span>Respect for Food Heritage</span>
                <a href="#newsletter" className="hover:text-[#D4AF37]">Join Our Letters</a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg text-[#D4AF37]">Stay Curious</h3>
              <p className="mt-5 text-sm leading-7 text-[#F2DCA0]/70">
                Every ingredient has a past. Every meal can begin a new story.
              </p>
              <a
                href="#newsletter"
                className="mt-5 inline-block border-b border-[#D4AF37] pb-2 font-serif text-[#D4AF37] hover:text-[#F2DCA0]"
              >
                Join the Journey ↗
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-7 text-xs text-[#F2DCA0]/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 The Culinary Time Machine. All rights reserved.
            </p>
            <a href="#home" className="font-serif italic text-[#D4AF37]">
              Past Flavours. Present Moments. ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
