// export default function Home() {
//   return (
//       <main className="min-h-screen flex items-center justify-center p-8">
//         <div className="max-w-xl w-full text-center">
//           <h1 className="text-2xl font-semibold">Next.js Starter</h1>
//           <p className="mt-2 text-sm text-gray-600">
//             Edit <code className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/10">src/app/page.tsx</code> and save to see changes.
//           </p>
//         </div>
//       </main>
//   );
// }
'use client';
import Hero from "@/components/organisms/Hero";
import Card from "@/components/molecules/Card";
import Button from "@/components/atoms/Button";

export default function Page() {
    return (
        <main className="p-6">
            <Hero
                title="Atomic Design Starter"
                subtitle="Atoms → Molecules → Organisms. Clean structure, easy scaling."
                onCtaClick={() => alert("CTA clicked")}
                ctaText="Build Now"
            />

            <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                <Card
                    title="Atom"
                    body="Smallest fundamental UI piece. Example: Button."
                    footer={<Button variant="ghost">Docs</Button>}
                />
                <Card
                    title="Molecule"
                    body="Group atoms into a meaningful unit. Example: Card."
                    footer={<Button variant="secondary">See More</Button>}
                />
                <Card
                    title="Organism"
                    body="Complex section composed of molecules/atoms. Example: Hero."
                    footer={<Button>Try It</Button>}
                />
            </section>
        </main>
    );
}

