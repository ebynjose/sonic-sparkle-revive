import productSmartboard from "@/assets/product-smartboard.png";
import productProjector from "@/assets/product-projector.png";
import productTouchpen from "@/assets/product-touchpen.png";
import productOpsbox from "@/assets/product-opsbox.png";
import productCamera from "@/assets/product-camera.png";
import productScanner from "@/assets/product-scanner.png";

export type ProductCategory = "smart-board" | "accessory";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: "smart-board-55",
    name: 'Smart Board 55"',
    category: "smart-board",
    tagline: "Compact powerhouse for huddle rooms",
    description:
      "The 55-inch SonicHive Smart Board delivers stunning 4K UHD visuals, 20-point multi-touch, and AI-powered collaboration in a compact form perfect for small meeting rooms and classrooms.",
    image: productSmartboard,
    specs: [
      { label: "Display", value: '55" 4K UHD' },
      { label: "Touch Points", value: "20-point" },
      { label: "Response", value: "<5ms" },
      { label: "Audio", value: "2×15W Speakers" },
      { label: "OS", value: "Android 13" },
      { label: "Connectivity", value: "Wi-Fi 6, BT 5.0" },
    ],
  },
  {
    id: "smart-board-65",
    name: 'Smart Board 65"',
    category: "smart-board",
    tagline: "The most popular choice for modern offices",
    description:
      "Our best-selling 65-inch interactive display balances size and performance. Ideal for conference rooms, training spaces, and collaborative environments.",
    image: productSmartboard,
    specs: [
      { label: "Display", value: '65" 4K UHD' },
      { label: "Touch Points", value: "20-point" },
      { label: "Response", value: "<5ms" },
      { label: "Audio", value: "2×20W Speakers" },
      { label: "OS", value: "Android 13" },
      { label: "Connectivity", value: "Wi-Fi 6, BT 5.0" },
    ],
  },
  {
    id: "smart-board-75",
    name: 'Smart Board 75"',
    category: "smart-board",
    tagline: "Immersive experience for large spaces",
    description:
      "The 75-inch model fills large conference rooms and auditoriums with crystal-clear visuals. Built-in camera and 8-array microphone for seamless hybrid meetings.",
    image: productSmartboard,
    specs: [
      { label: "Display", value: '75" 4K UHD' },
      { label: "Touch Points", value: "20-point" },
      { label: "Response", value: "<5ms" },
      { label: "Audio", value: "2×20W + Subwoofer" },
      { label: "Camera", value: "Built-in 48MP" },
      { label: "Connectivity", value: "Wi-Fi 6, BT 5.0" },
    ],
  },
  {
    id: "smart-board-86",
    name: 'Smart Board 86"',
    category: "smart-board",
    tagline: "Maximum impact for auditoriums",
    description:
      "Our flagship 86-inch display commands attention in the largest spaces. Unmatched clarity, powerful audio, and enterprise-grade features for professional environments.",
    image: productSmartboard,
    specs: [
      { label: "Display", value: '86" 4K UHD' },
      { label: "Touch Points", value: "40-point" },
      { label: "Response", value: "<3ms" },
      { label: "Audio", value: "4×20W Array" },
      { label: "Camera", value: "Built-in 48MP" },
      { label: "Connectivity", value: "Wi-Fi 6E, BT 5.2" },
    ],
  },
  {
    id: "projector",
    name: "Wireless Projector",
    category: "accessory",
    tagline: "One-click wireless screen casting",
    description:
      "Connect to any interactive board with a single button press. Plug into your computer, press, and cast — simple, fast, and cable-free.",
    image: productProjector,
    specs: [
      { label: "Connection", value: "USB-C / USB-A" },
      { label: "Latency", value: "<30ms" },
      { label: "Resolution", value: "Up to 4K" },
      { label: "Range", value: "15m" },
    ],
  },
  {
    id: "touch-pen",
    name: "Touch Pen",
    category: "accessory",
    tagline: "Precision writing and drawing",
    description:
      "Smooth dual-tip stylus with magnetic adsorption. Write naturally with the fine tip or switch to the thick tip for bold strokes. Magnetically attaches to the board.",
    image: productTouchpen,
    specs: [
      { label: "Tips", value: "Dual (fine + thick)" },
      { label: "Attachment", value: "Magnetic" },
      { label: "Pressure", value: "4096 levels" },
      { label: "Battery", value: "Passive (no charge)" },
    ],
  },
  {
    id: "camera",
    name: "HD Camera",
    category: "accessory",
    tagline: "Crystal-clear video conferencing",
    description:
      "Built-in or external camera supporting 13MP/48MP resolution with 8-array microphones for superior audio pickup in any room size.",
    image: productCamera,
    specs: [
      { label: "Resolution", value: "13MP / 48MP" },
      { label: "Microphones", value: "8-array" },
      { label: "Field of View", value: "120°" },
      { label: "Mount", value: "Clip / Built-in" },
    ],
  },
  {
    id: "scanner",
    name: "Document Scanner",
    category: "accessory",
    tagline: "Real-time physical document projection",
    description:
      "10-megapixel overhead scanner projects physical documents in real-time with ultra-clear color reproduction. Perfect for classrooms and presentations.",
    image: productScanner,
    specs: [
      { label: "Resolution", value: "10MP" },
      { label: "Capture Area", value: "A3" },
      { label: "Focus", value: "Auto-focus" },
      { label: "Output", value: "Live / Capture" },
    ],
  },
  {
    id: "ops-box",
    name: "OPS Computing Module",
    category: "accessory",
    tagline: "Powerful Intel Core brain module",
    description:
      "Plug-in computing module powered by Intel Core with 64-bit architecture. Compatible with all video conferencing software, freely installable.",
    image: productOpsbox,
    specs: [
      { label: "Processor", value: "Intel Core i5/i7" },
      { label: "RAM", value: "8GB / 16GB" },
      { label: "Storage", value: "256GB SSD" },
      { label: "OS", value: "Windows 11 Pro" },
    ],
  },
];
