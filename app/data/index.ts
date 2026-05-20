const ns = (filename: string) => `/ns/${encodeURIComponent(filename)}`;

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
  //   { name: "SUSU", img: ns("NGHỆ SĨ XIẾC SUSU.jpg") },
  //   { name: "VŨ ĐOÀN GIÓ VIỆT", img: ns("VŨ ĐOÀN GIÓ VIỆT 1.jpg") },
] as const;

export const NS1 = [
  { name: "SUSU", img: ns("NGHỆ SĨ XIẾC SUSU.jpg") },
  { name: "VŨ ĐOÀN GIÓ VIỆT", img: ns("VŨ ĐOÀN GIÓ VIỆT 1.jpg") },
] as const;

export const MASTER = [
  { name: "Anh Trọng", img: "/anh-Trong.jpeg" },
  { name: "Anh Misel", img: "/anh-Misel.jpeg" },
  { name: "Thầy Giang", img: "/thay-Giang.jpeg" },
] as const;
