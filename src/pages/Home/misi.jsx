import Button from "../../components/Button";

const Misi = () => {
  return (
    <div className="max-w-7xl mx-auto mt-36">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-8">
          <header className="flex flex-col gap-y-2">
            <p className="text-teal-500 font-bold tracking-[-0.7px]">
              Tentang Sekolah Janji Baik
            </p>
            <h1 className="text-black text-4xl font-semibold w-8/12 tracking-[-0.7px] leading-tight">
              Pendidikan untuk Semua, Masa Depan yang Lebih Baik
            </h1>
          </header>

          <p className="text-[#72717B] w-7/12 leading-relaxed tracking-[-0.7px]">
            Sekolah Janji Baik adalah sekolah non-profit yang menyediakan
            pendidikan gratis bagi anak-anak kurang mampu di Indonesia. Berdiri
            sejak 2020, kami hadir untuk menjembatani kesenjangan pendidikan dan
            memberikan kesempatan belajar yang layak bagi setiap anak.
          </p>

          <div className="flex flex-col gap-y-8">
            <h1 className="text-black text-3xl font-medium">Misi Kami</h1>

            <div className="flex flex-col gap-y-4">
              <MisiList>
                Menjangkau anak-anak putus sekolah dari keluarga Prasejahtera
                untuk mendapatkan hak Pendidikan melalui jalur Pendidikan
                nonformal (Pendidikan Kesetaraan).
              </MisiList>
              <MisiList>
                Memberikan pemahaman kepada masyarakat akan pentingnya
                pendidikan dan memperkecil Jarak (Gap)kesenjangan digital
                melalui Pendidikan literasi digital.
              </MisiList>
              <MisiList>
                Membentuk peserta didik menjadi manusia pembelajar seumur hidup
                (Long Life Education) yang mempunyaiintegritas melalui program
                pengembangan diri dan keterampilan bagi peserta didik.
              </MisiList>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <h1 className="text-black text-3xl font-medium">
              Telah Menjangkau
            </h1>

            <div className="flex gap-x-12">
              <DataJangkauan
                childrenNumber="573+"
                childrenText="Anak penerima manfaat"
              />
              <DataJangkauan
                childrenNumber="14+"
                childrenText="Kota di seluruh Indonesia"
              />
              <DataJangkauan
                childrenNumber="145+"
                childrenText="Relawan & tenaga pengajar"
              />
            </div>
          </div>
          <Button variant="w-[510px]">Pelajari lebih lanjut</Button>
        </div>

        <img src="./logo.png" alt="" />
      </div>
    </div>
  );
};

const MisiList = ({ children }) => {
  return (
    <div className="flex gap-x-4 items-center">
      <img src="./icons/check.svg" alt="icon" />
      <p className="text-[#72717B] w-6/12 leading-relaxed tracking-[-0.7px]">
        {children}
      </p>
    </div>
  );
};

const DataJangkauan = ({ childrenText, childrenNumber }) => {
  return (
    <div className="flex flex-col items-center gap-y-1">
      <h1 className="font-semibold text-2xl tracking-[-0.7px] text-teal-500">
        {childrenNumber}
      </h1>
      <p className="text-[#72717B] text-sm text-center tracking-[-0.7px] w-10/12">
        {childrenText}
      </p>
    </div>
  );
};

export default Misi;
