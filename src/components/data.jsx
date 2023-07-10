import { MoreOffers } from "./MoreOffers";
import { BillImage } from "../assets/svgs/bill";
import { InsightsImage } from "../assets/svgs/insights";
import { SavingsImage } from "../assets/svgs/savings";
import { ScannerImage } from "../assets/svgs/scanner";
import { BankingImage } from "../assets/svgs/Banking";
import ExtraSavings from "../assets/Images/savings.png";
import { HiddenImage } from "../assets/svgs/Charges";
import DebitImage from "../assets/Images/Debit.svg";

export const featuresData = [
  {
    idName:"Scan-Feat",
    title: "Scan and pay.",
    subtitle: "Bhaiya QR Khaha Hai... 😎",
    content:
      "Seamless payments with Scan & Pay through UPI. Scan QR codes, pay instantly, or send money to contacts. Enjoy secure transactions in seconds, anytime, anywhere!",
    bgColor: "bg-drkBlue",
    textColor: "text-white",
    image: <ScannerImage />,
  },
  { 
    idName:"Split-Bill",
    title: "Split your Bills.",
    subtitle: "Tu Tera Me Mera....  😁",
    content:
      "Easily split expenses with friends, roommates, or colleagues. Allocate costs, specify shares, and settle payments hassle-free, ensuring fair and transparent bill splits.",
    bgColor: "bg-light-green",
    textColor: "text-drkPurple",
    image: <BillImage />,
  },
  {
    idName:"Money-Insight",
    title: "Get  Money Insights.",
    subtitle: "Where Does All your money go   🤔",
    content:
      "Track expenses, gain valuable insights, analyze spending patterns, and make informed financial decisions with our Money Insight feature. Take control of your finances today!",
    bgColor: "bg-drkPurple",
    textColor: "text-drkYellow",
    image: <InsightsImage />,
  },
  {
    idName:"Goal-Savings",
    title: "Goal Based Savings.",
    subtitle: "Gullak Hamarein Sapno Ki 💰",
    content:
      "Achieve your financial goals with our Goal-Based Saving feature. Save towards your dreams & wants, while we invest your money in gold or mutual funds. Secure your future, one gullak at a time.",
    bgColor: "bg-drkYellow",
    textColor: "text-drkstBlue",
    image: <SavingsImage />,
  },
];

export const moreOffersData = [
  {
    title: "100% Digital Banking. 🤩",
    subtitle:
      `Banking Whenever,  Wherever 
      (Humari koi offline shakha nhi hai).   `,
    image: <BankingImage />,
  },
  {
    title: "Zero Balance Savings account. ⚖️",
    subtitle:
      "Goodbye to minimum balance and say hello to our #ZentoZeroBalance  account.",
    image: ExtraSavings,
  },
  {
    title: "No hidden charges 🔍",
    subtitle: "Bank hidden charges - We don't do that here . 😌",
    image: <HiddenImage />,
  },
  {
    title: "Visa Debit Card. 💳",
    subtitle: "Get your customized debit card, Card humara design tumhara. ",
    image: DebitImage,
  },
];
