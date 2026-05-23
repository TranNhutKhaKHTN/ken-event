const ns = (filename: string) => `/ns/${encodeURIComponent(filename)}`;
const invite = (filename: string) => `/invite/${encodeURIComponent(filename)}`;
const publicImg = (filename: string) => `/${encodeURIComponent(filename)}`;

function slugify(name: string, title: string): string {
  return [title, name]
    .join("-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .replace(/-+/g, "-");
}

export type Inviter = {
  slug: string;
  title: string;
  name: string;
  img: string;
  displayName?: string;
};

type InviterEntry = {
  title: string;
  name: string;
  file: string;
  displayName?: string;
  inPublicRoot?: boolean;
};

const INVITER_ENTRIES = [
  {
    title: "ThS.",
    name: "Nguyễn Thị Mai Thu",
    file: "Thư mời ThS. Nguyễn Thị Mai Thu.png",
  },
  { title: "PV", name: "Hồ Trinh", file: "Thư mời PV Hồ Trinh.png" },
  { title: "Thầy", name: "Lê Văn Danh", file: "Thư mời Thầy Lê Văn Danh.png" },
  {
    title: "Cô",
    name: "Nguyễn Minh Hiếu",
    file: "Thư mời Cô Nguyễn Minh Hiếu.png",
  },
  { title: "Thầy", name: "Từ Minh Trị", file: "Thư mời Thầy Từ Minh Trị.png" },
  {
    title: "Thầy",
    name: "Nguyễn Phi Hậu",
    file: "Thư mời Thầy Nguyễn Phi Hậu.png",
  },
  {
    title: "Cô",
    name: "Tôn Nữ Nguyên Ánh",
    file: "Thư mời Cô Tôn Nữ Nguyên Ánh.png",
  },
  {
    title: "ThS.",
    name: "Đào Lê Thảo Nguyên",
    file: "Thư mời ThS. Đào Lê Thảo Nguyên.png",
  },
  {
    title: "Cô",
    name: "Đặng Kiều Oanh",
    file: "Thư mời Cô Đặng Kiều Oanh.png",
  },
  { title: "PV", name: "Đình Ngọc", file: "Thư mời PV Đình Ngọc.png" },
  {
    title: "Thầy",
    name: "Lê Hoàng Bảo",
    file: "Thư mời Thầy Lê Hoàng Bảo.png",
  },
  {
    title: "ThS.",
    name: "Nguyễn Thị Thùy Vân",
    file: "Thư mời ThS. Nguyễn Thị Thùy Vân.png",
  },
  { title: "PV", name: "Ngọc Anh", file: "Thư mời PV Ngọc Anh.png" },
  {
    title: "Thầy",
    name: "Bùi Tấn Thắng",
    file: "Thư mời Thầy Bùi Tấn Thắng.png",
  },
  { title: "PV", name: "Thùy Trang", file: "Thư mời PV Thùy Trang.png" },
  {
    title: "Cô",
    name: "Trịnh Thị Lanh",
    file: "Thư mời Cô Trịnh Thị Lanh.png",
  },
  {
    title: "ThS.",
    name: "Nguyễn Trường Giang",
    file: "Thư mời ThS. Nguyễn Trường Giang.png",
  },
  {
    title: "Thầy",
    name: "Huỳnh Định Vương Thanh",
    file: "Thư mời Thầy Huỳnh Định Vương Thanh.png",
  },
  {
    title: "Cô",
    name: "Nguyễn Thị Hoàng Vi",
    file: "Thư mời Cô Nguyễn Thị Hoàng Vi.png",
  },
  {
    title: "ThS.",
    name: "Phạm Ngọc Bình",
    file: "Thư mời ThS. Phạm Ngọc Bình.png",
  },
  { title: "PV", name: "Kim Sáng", file: "Thư mời PV Kim Sáng.png" },
  {
    title: "Anh",
    name: "Ngô Minh Trọng",
    file: "Thư mời Anh Ngô Minh Trọng.png",
  },
  {
    title: "ThS.",
    name: "Mai Tấn Thành",
    file: "Thư mời ThS. Mai Tấn Thành.png",
  },
  {
    title: "BTV",
    name: "Trần Thị Thu Hiếu",
    file: "Thư mời BTV Trần Thị Thu Hiếu.png",
  },
  {
    title: "ThS.",
    name: "Đoàn Thanh Nghiêm",
    file: "Thư mời ThS. Đoàn Thanh Nghiêm.png",
  },
  { title: "PV", name: "Thùy Dương", file: "Thư mời PV Thùy Dương.png" },
  {
    title: "ThS.",
    name: "Trần Thị Mỹ Hạnh",
    file: "Thư mời ThS. Trần Thị Mỹ Hạnh.png",
  },
  { title: "PV", name: "Huệ Xuân", file: "Thư mời PV Huệ Xuân.png" },
  {
    title: "Cô",
    name: "Trần Thị Hương Ly",
    file: "Thư mời Cô Trần Thị Hương Ly.png",
  },
  { title: "BTV", name: "Hà Diễm", file: "Thư mời BTV Hà Diễm.png" },
  { title: "BTV", name: "Phan Loan", file: "Thư mời BTV Phan Loan.png" },
  {
    title: "Thầy",
    name: "Lê Trọng Thành Tín",
    file: "Thư mời Thầy Lê Trọng Thành Tín.png",
  },
  {
    title: "ThS.",
    name: "Trần Hà Phương Thảo",
    file: "Thư mời ThS. Trần Hà Phương Thảo.png",
  },
  {
    title: "ThS.",
    name: "Nguyễn Thị Diễm Phương",
    file: "Thư mời ThS. Nguyễn Thị Diễm Phương.png",
  },
  {
    title: "Thầy",
    name: "Trần Vân Nam",
    file: "Thư mời Thầy Trần Vân Nam.png",
  },
  {
    title: "",
    name: "CÔNG TY TNHH MICRO SAAS ONE",
    file: "THƯ MỜI CÔNG TY TNHH MICRO SAAS ONE  .png",
    displayName: "Kính mời Quý Nhà tài trợ tham dự",
    inPublicRoot: true,
  },
  {
    title: "",
    name: "CÔNG TY TNHH THU MUA HẢI SẢN VMV",
    file: "Thư mời CÔNG TY TNHH THU MUA HẢI SẢN VMV.png",
    displayName: "Kính mời Quý Nhà tài trợ tham dự",
    inPublicRoot: true,
  },
  {
    title: "",
    name: "CÔNG TY TNHH WINDY LAND",
    file: "Thư mời CÔNG TY TNHH WINDY LAND.png",
    displayName: "Kính mời Quý Nhà tài trợ tham dự",
    inPublicRoot: true,
  },
] as InviterEntry[];

export const INVITERS: Inviter[] = INVITER_ENTRIES.map(
  ({ title, name, file, displayName, inPublicRoot }) => ({
    slug: slugify(name, title),
    title,
    name,
    displayName,
    img: inPublicRoot ? publicImg(file) : invite(file),
  }),
);

export const INVITERS_BY_SLUG = Object.fromEntries(
  INVITERS.map((inviter) => [inviter.slug, inviter]),
) as Record<string, Inviter>;

export function getInviter(slug: string): Inviter | undefined {
  return INVITERS_BY_SLUG[slug];
}

export const NS = [
  { name: "NSƯT BẢO TRÍ", img: ns("NSUT BẢO TRÍ.jpg") },
  { name: "PHAN NHƯ THUỲ", img: ns("CA SĨ PHAN NHƯ THÙY.jpg") },
  { name: "NHƯ HẠNH", img: ns("DIỄN VIÊN NHƯ HẠNH.jpg") },
  { name: "DK LÂM", img: ns("RAPPER DK LÂM.jpg") },
  { name: "MINH SANG", img: ns("CA SĨ MINH SANG.jpg") },
  { name: "MC HUỲNH NGÂN", img: ns("MC HUỲNH NGÂN.jpg") },
  { name: "MINH TRANG", img: ns("CA SĨ MINH TRANG.jpg") },
  { name: "BẢO TRÂM", img: ns("CA SĨ BẢO TRÂM.jpg") },
  { name: "HOÀNG ĐÔ", img: ns("DIỄN VIÊN HOÀNG ĐÔ.jpg") },
  { name: "QUỐC THANH", img: ns("DIỄN VIÊN QUỐC THANH.jpg") },
  { name: "TRƯƠNG LÊ TUẤN KIỆT", img: ns("DIỄN VIÊN TUẤN KIỆT.jpg") },
  { name: "ĐỨC ANH", img: ns("NGHỆ SĨ XIẾC ĐỨC ANH.jpg") },
] as const;

export const NS1 = [
  { name: "SUSU", img: ns("NGHỆ SĨ XIẾC SUSU.jpg") },
  { name: "VŨ ĐOÀN GIÓ VIỆT", img: ns("VŨ ĐOÀN GIÓ VIỆT 1.jpg") },
] as const;

export const MASTER = [
  { name: "Ngô Minh Trọng", role: "Đạo diễn", img: "/anh-Trong.jpeg" },
  {
    name: "Võ Phan Misel",
    role: "Chuyên gia âm thanh",
    img: "/anh-Misel.jpeg",
  },
  {
    name: "ThS. Nguyễn Trường Giang",
    role: "Giảng viên hướng dẫn",
    img: "/thay-Giang.jpeg",
  },
] as const;
