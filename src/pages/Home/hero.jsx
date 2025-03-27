import Button from "../../components/Button";

const Hero = () => {
  return (
    <div className="relative">
      <img src="./background.png" alt="" />
      <div className="absolute inset-0 flex mt-24 flex-col gap-y-8 justify-center items-center">
        <h1 className="font-bold text-5xl w-7/12 text-center leading-tight tracking-[-0.7px] text-white">
          Sekolah Inovatif Untuk Masa Depan Tanpa Hambatan
        </h1>
        <p className="text-white tracking-[-0.7px] leading-tight text-center w-6/12 font-medium text-lg">
          Kami percaya bahwa setiap anak memiliki hak untuk mendapatkan akses
          pendidikan yang berkualitas dan memiliki potensi besar untuk
          sukses.Sekolah teknologi janji baik hadir untuk mewujudkan impian
          tanpa hambatan biaya.
        </p>

        <div className="flex gap-x-4">
          <Button variant="w-[305px]">Pelajari Lebih Lanjut</Button>
          <Button variant="w-[305px]">Hubungi Kami</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
