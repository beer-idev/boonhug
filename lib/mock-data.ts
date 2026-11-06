export type Pet = {
  id: string;
  name: string;
  type: "dog" | "cat";
  sex: string;
  age: string;
  color: string;
  location: string;
  image: string;
};

export const pets: Pet[] = [
  {
    id: "dumbo",
    name: "น้องดัมโบ",
    type: "dog",
    sex: "ตัวผู้",
    age: "4 ปี",
    color: "สีครีม",
    location: "กรุงเทพฯ",
    image: "/images/pet-dumbo.png",
  },
  {
    id: "mali",
    name: "น้องมะลิ",
    type: "cat",
    sex: "ตัวเมีย",
    age: "1 ปี 3 เดือน",
    color: "สีส้ม",
    location: "โคราช",
    image: "/images/pet-mali.png",
  },
  {
    id: "jaja",
    name: "น้องจาจ้า",
    type: "cat",
    sex: "ตัวผู้",
    age: "3 ปี",
    color: "ขาวเทา",
    location: "โคราช",
    image: "/images/pet-jaja.png",
  },
  {
    id: "nua",
    name: "น้องถั่ว",
    type: "cat",
    sex: "ตัวเมีย",
    age: "2 ปี",
    color: "สีเทา",
    location: "เชียงใหม่",
    image: "/images/pet-grey.png",
  },
  {
    id: "lucky",
    name: "น้องลัคกี้",
    type: "dog",
    sex: "ตัวผู้",
    age: "5 ปี",
    color: "สีน้ำตาล",
    location: "กรุงเทพฯ",
    image: "/images/pet-dog.png",
  },
];

export const organizations = [
  {
    id: "voice",
    name: "The Voice (เสียงจากเรา)",
    account: "ธ.กสิกรไทย เลขที่ 233-1-01207-6",
    logo: "/images/donor-logo-voice.png",
    progress: 82,
    amount: "200K",
  },
  {
    id: "paws",
    name: "มูลนิธิรักษ์แมว",
    account: "ธ.กสิกรไทย เลขที่ 036-1-50346-5",
    logo: "/images/donor-logo-cat.png",
    progress: 48,
    amount: "20K",
  },
  {
    id: "santisook",
    name: "มูลนิธิสันติสุขเพื่อสุนัขและแมวจรจัด",
    account: "ธ.ไทยพาณิชย์ เลขที่ 403-7834-644",
    logo: "/images/donor-logo-santisook.png",
    progress: 92,
    amount: "2M",
  },
];
