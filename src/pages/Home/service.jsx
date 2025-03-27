import Button from "../../components/Button";

const Service = () => {
  const serviceItems = [
    {
      id: 1,
      icon: "./icons/siswa.png",
      title: "Siswa",
      description: `Dapatkan pendidikan berkualitas untuk masa depan yang lebih cerah.
              Bergabunglah bersama kami dan nikmati fasilitas belajar lengkap,
              program pengembangan siswa, serta lingkungan belajar yang
              mendukung.`,
      textBtn: "Daftar Sebagai Siswa",
    },
    {
      id: 2,
      icon: "./icons/relawan.png",
      title: "Menjadi Relawan",
      description: `Bergabunglah sebagai pengajar, mentor, atau tenaga relawan untuk membantu anak-anak belajar dan berkembang. Anda bisa berbagi ilmu, pengalaman, atau keterampilan dengan mereka.`,
      textBtn: "Daftar Sebagai Relawan",
    },
    {
      id: 3,
      icon: "./icons/donation.png",
      title: "Donasi",
      description: `Dukung pendidikan anak-anak dengan memberikan donasi.
                    Setiap kontribusi yang Anda berikan akan digunakan untuk
                    biaya operasional sekolah, perlengkapan belajar, dan
                    program pengembangan siswa.`,
      textBtn: "Donasi Sekarang",
    },
    {
      id: 4,
      icon: "./icons/kolaborasi.png",
      title: "Kolaborasi",
      description: `Kami membuka peluang kerja sama dengan komunitas, perusahaan, dan lembaga lainnya untuk menciptakan program pendidikan yang lebih berdampak. Mari bersama membangun masa depan yang lebih baik!`,
      textBtn: "Hubungi Kami",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-x-12 items-center absolute mt-[-50px] z-10">
        {serviceItems.map((item) => (
          <CardService
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            textBtn={item.textBtn}
          />
        ))}
      </div>
    </div>
  );
};

const CardService = ({ icon, title, description, textBtn }) => {
  return (
    <div className="bg-white flex flex-col p-5 shadow-lg w-[280px] h-[440px] rounded-2xl items-center gap-y-8">
      <img src={icon} alt="siswa icon" width={60} height={60} />

      <header className="flex flex-col items-center gap-y-2">
        <h1 className="font-semibold tracking-[-0.7px] text-3xl">{title}</h1>
        <p className="text-center text-[#7D8597] leading-6">{description}</p>
      </header>

      <Button variant="h-[40px] w-full text-center ">{textBtn}</Button>
    </div>
  );
};
export default Service;
