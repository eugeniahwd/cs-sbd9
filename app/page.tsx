"use client";

import React from 'react';

interface FeatureItem {
  title: string;
  desc: string;
}

interface TestimonialItem {
  name: string;
  loc: string;
  text: string;
}

const Home: React.FC = () => {
  const features: FeatureItem[] = [
    { title: "Formula Keratin Aktif", desc: "Meresap hingga ke inti rambut untuk perlindungan dari dalam." },
    { title: "Bahan Alami Terpilih", desc: "Menggunakan campuran ekstrak alami tanpa bahan kimia berbahaya." },
    { title: "Teruji Dermatologis", desc: "Aman untuk semua jenis kulit kepala, termasuk kulit sensitif." },
    { title: "Kemasan Ramah Lingkungan", desc: "Botol terbuat dari 25% bahan daur ulang." },
  ];

  const testimonials: TestimonialItem[] = [
    { name: "Kamilamilaan", loc: "Jakarta", text: "Rambutku yang susah diatur jadi jauh lebih lembut kayak hati Jake" },
    { name: "Cipicapa", loc: "Surabaya", text: "Gacor banget, pakai Thick & Long cuma 2 minggu dan rambut udah keliatan lebih tebal." },
    { name: "Pdidi", loc: "Bandung", text: "Ketombeku hilang total dalam seminggu. Dosa pun ikut hilang awokwok" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden text-gray-900">


      <nav className="flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-black text-yellow-500 tracking-tighter italic">
          SUNSILK
        </div>
        <ul className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500">
          <li className="hover:text-yellow-500 cursor-pointer transition-all">Product</li>
          <li className="hover:text-yellow-500 cursor-pointer transition-all">Benefits</li>
          <li className="hover:text-yellow-500 cursor-pointer transition-all">Reviews</li>
          <li className="hover:text-yellow-500 cursor-pointer transition-all">Hair Tips</li>
        </ul>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-xs font-black uppercase tracking-widest px-7 py-3 rounded-full transition-transform active:scale-95 shadow-lg shadow-yellow-100">
          Beli Sekarang
        </button>
      </nav>

      <section className="relative bg-gradient-to-tr from-yellow-50 via-white to-orange-50 py-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block border-l-4 border-yellow-400 pl-4 py-1">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">Official Hair Care</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              RAMBUT <br/>
              <span className="text-yellow-500">BERKILAU</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Inovasi terbaru dengan <span className="text-gray-900 font-bold">Micellar Technology</span> dan Keratin untuk kelembutan 48 jam.
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <button className="bg-gray-900 text-white font-bold px-10 py-5 rounded-none hover:bg-yellow-500 transition-colors">
                PELAJARI LEBIH LANJUT
              </button>
            </div>
          </div>

          <div className="flex-1 relative group">
            <div className="w-80 h-[450px] bg-yellow-400 mx-auto rounded-[40px] shadow-[40px_40px_0px_0px_rgba(254,240,213,1)] overflow-hidden relative border-[12px] border-white">
              
              <img 
                src="/images/sunsilk-bottle.png" 
                alt="Sunsilk Bottle" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
              
              <div className="absolute bottom-10 left-0 right-0 text-center text-white">
                <div className="text-3xl font-black italic tracking-tighter">SUNSILK</div>
                <div className="text-[10px] tracking-[0.4em] opacity-70 uppercase mt-1">Super Silky Smooth</div>
              </div>
            </div>

            <div className="absolute -top-10 -right-5 w-24 h-24 border border-yellow-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 space-y-4">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-yellow-500">Featured</h2>
            <h3 className="text-4xl font-black tracking-tight">PILIH VARIANMU</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Smooth & Manageable", price: "22.000", border: "border-yellow-200", bg: "bg-yellow-50" },
              { title: "Thick & Long", price: "24.000", border: "border-orange-200", bg: "bg-orange-50" },
              { title: "Anti-Dandruff", price: "23.000", border: "border-pink-200", bg: "bg-pink-50" },
            ].map((prod) => (
              <div key={prod.title} className={`group p-10 border ${prod.border} transition-all hover:shadow-2xl hover:-translate-y-2`}>
                <div className={`w-12 h-1 ${prod.bg} mb-8 transition-all group-hover:w-full group-hover:bg-yellow-400`}></div>
                <h4 className="text-xl font-black mb-4 uppercase tracking-tighter leading-tight">{prod.title}</h4>
                <p className="text-gray-500 text-sm mb-8">Formula khusus yang dirancang untuk hasil maksimal sejak pemakaian pertama.</p>
                <div className="flex justify-between items-end">
                   <span className="text-lg font-black italic text-yellow-600">IDR {prod.price}</span>
                   <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-gray-900 pb-1">Beli</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
             <h2 className="text-5xl font-black tracking-tighter leading-[0.8] mb-6 italic">
               THEY <br/><span className="text-yellow-500">TALK.</span>
             </h2>
             <p className="text-gray-400 text-sm uppercase tracking-widest">Apa yang mereka katakan.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                <div className="text-4xl font-black text-yellow-100 italic select-none leading-none">0{i+1}</div>
                <div className="space-y-4">
                  <p className="text-gray-600 font-medium leading-relaxed italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-yellow-400"></div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest">{t.name}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-tighter">{t.loc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-yellow-400 text-center">
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-10">
          START YOUR <br/>JOURNEY NOW.
        </h2>
        <button className="bg-white text-gray-900 font-black px-12 py-5 text-sm uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition-all shadow-2xl">
          Get Product
        </button>
      </section>

      <footer className="py-16 px-8 bg-white border-t border-gray-100 text-center">
        <div className="text-3xl font-black italic tracking-tighter mb-8 text-yellow-500">SUNSILK.</div>
        <p className="text-[10px] text-gray-300 uppercase tracking-[0.5em]">© 2026 Sunsilk Indonesia</p>
      </footer>

    </main>
  );
};

export default Home;