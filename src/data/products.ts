import productTvFront from "@/assets/product-tv-front.webp";
import productTvTilt from "@/assets/product-tv-tilt.webp";
import productTvTilted from "@/assets/product-tv-tilted.webp";
import productTvBoth from "@/assets/product-tv-both.webp";
import productTvBack from "@/assets/product-tv-back.webp";
import productTvBack2 from "@/assets/product-tv-back2.webp";
import productTvSidePorts from "@/assets/product-tv-side-ports.webp";
import productTvSide from "@/assets/product-tv-side.webp";
import productTvTop from "@/assets/product-tv-top.webp";
import productTouchpen from "@/assets/product-touchpen.png";

export type ProductCategory = "smart-board" | "accessory";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  image: string;
  images: string[];
  specs: { label: string; value: string }[];
}

const smartBoardImages = [
  productTvFront,
  productTvTilted,
  productTvTilt,
  productTvBoth,
  productTvBack,
  productTvBack2,
  productTvSidePorts,
  productTvSide,
  productTvTop,
];

export const products: Product[] = [
  {
    id: "smart-board-55",
    name: 'Smart Board 55"',
    category: "smart-board",
    tagline: "Compact powerhouse for huddle rooms",
    description:
      "The 55-inch SonicHive Smart Board delivers stunning 4K UHD visuals, 40-point infrared multi-touch, and AI-powered collaboration in a compact form perfect for small meeting rooms and classrooms. Features a built-in camera on top and an OPS slot for optional computing modules.",
    image: productTvFront,
    images: smartBoardImages,
    specs: [
      { label: "Display", value: '55" 4K UHD' },
      { label: "Touch", value: "40-point Infrared" },
      { label: "Response", value: "<5ms" },
      { label: "Audio", value: "2×15W Speakers" },
      { label: "Camera", value: "Built-in (top)" },
      { label: "OPS Slot", value: "Available" },
      { label: "OS", value: "Android 13" },
      { label: "Connectivity", value: "Wi-Fi 6, BT 5.0" },
      { label: "Warranty", value: "1 Year (Extended options available)" },
    ],
  },
  {
    id: "smart-board-65",
    name: 'Smart Board 65"',
    category: "smart-board",
    tagline: "The most popular choice for modern offices",
    description:
      "Our best-selling 65-inch interactive display balances size and performance. 40-point infrared touch allows 5–6 people to write simultaneously. Ideal for conference rooms, training spaces, and collaborative environments. Includes built-in camera and OPS slot.",
    image: productTvFront,
    images: smartBoardImages,
    specs: [
      { label: "Display", value: '65" 4K UHD' },
      { label: "Touch", value: "40-point Infrared" },
      { label: "Response", value: "<5ms" },
      { label: "Audio", value: "2×20W Speakers" },
      { label: "Camera", value: "Built-in (top)" },
      { label: "OPS Slot", value: "Available" },
      { label: "OS", value: "Android 13" },
      { label: "Connectivity", value: "Wi-Fi 6, BT 5.0" },
      { label: "Warranty", value: "1 Year (Extended options available)" },
    ],
  },
  {
    id: "smart-board-75",
    name: 'Smart Board 75"',
    category: "smart-board",
    tagline: "Immersive experience for large spaces",
    description:
      "The 75-inch model fills large conference rooms and auditoriums with crystal-clear visuals. 40-point infrared touch for seamless multi-user writing. Built-in camera on top and OPS slot for optional computing upgrade.",
    image: productTvFront,
    images: smartBoardImages,
    specs: [
      { label: "Display", value: '75" 4K UHD' },
      { label: "Touch", value: "40-point Infrared" },
      { label: "Response", value: "<5ms" },
      { label: "Audio", value: "2×20W + Subwoofer" },
      { label: "Camera", value: "Built-in (top)" },
      { label: "OPS Slot", value: "Available" },
      { label: "Connectivity", value: "Wi-Fi 6, BT 5.0" },
      { label: "Warranty", value: "1 Year (Extended options available)" },
    ],
  },
  {
    id: "smart-board-86",
    name: 'Smart Board 86"',
    category: "smart-board",
    tagline: "Maximum impact for auditoriums",
    description:
      "Our flagship 86-inch display commands attention in the largest spaces. 40-point infrared touch with unmatched clarity, powerful audio, and enterprise-grade features. Built-in camera and OPS slot included.",
    image: productTvFront,
    images: smartBoardImages,
    specs: [
      { label: "Display", value: '86" 4K UHD' },
      { label: "Touch", value: "40-point Infrared" },
      { label: "Response", value: "<3ms" },
      { label: "Audio", value: "4×20W Array" },
      { label: "Camera", value: "Built-in (top)" },
      { label: "OPS Slot", value: "Available" },
      { label: "Connectivity", value: "Wi-Fi 6E, BT 5.2" },
      { label: "Warranty", value: "1 Year (Extended options available)" },
    ],
  },
  {
    id: "smart-board-98",
    name: 'Smart Board 98"',
    category: "smart-board",
    tagline: "The ultimate display for premium venues",
    description:
      "The massive 98-inch SonicHive Smart Board is designed for the most demanding environments — large auditoriums, executive boardrooms, and training centres. 40-point infrared touch, built-in camera, and OPS slot deliver a complete solution at scale.",
    image: productTvFront,
    images: smartBoardImages,
    specs: [
      { label: "Display", value: '98" 4K UHD' },
      { label: "Touch", value: "40-point Infrared" },
      { label: "Response", value: "<3ms" },
      { label: "Audio", value: "4×20W Array" },
      { label: "Camera", value: "Built-in (top)" },
      { label: "OPS Slot", value: "Available" },
      { label: "Connectivity", value: "Wi-Fi 6E, BT 5.2" },
      { label: "Warranty", value: "1 Year (Extended options available)" },
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
    images: [productTouchpen],
    specs: [
      { label: "Tips", value: "Dual (fine + thick)" },
      { label: "Attachment", value: "Magnetic" },
      { label: "Pressure", value: "4096 levels" },
      { label: "Battery", value: "Passive (no charge)" },
    ],
  },
];
