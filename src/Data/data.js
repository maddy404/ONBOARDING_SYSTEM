export const content = {
  data: [
    {
      id: 1,
      pageNo: 0,
      page_name: "welcome",
      leftHeading: "Welcome to EcoReturns!",
      rightHeading: ["Thanks for choosing EcoReturns."],
      rightDescription:
        "Let's set up your store in less than 5 minutes. Please answer following questions",
      category: [],
      logisticsDropDown: [],
      imgName: ["dashboard2.webp", "dashboard1.webp"],
      isShowYesNo: false,
    },
    {
      id: 2,
      pageNo: 1,
      page_name: "return",
      leftHeading: "Give you customers hasslefree returns",
      rightHeading: ["Do you accept returns?"],
      YesActionNext: "What is your Return window?",
      rightDescription: null,
      category: [],
      logisticsDropDown: [],
      imgName: ["dashboard1.webp", "dashboard2.webp"],
      isShowYesNo: true,
    },
    {
      id: 3,
      pageNo: 2,
      page_name: "exchange",
      leftHeading: "Convert Returns to Exchanges and improve revenue",
      rightHeading: ["Do you accept Exchanges?"],
      YesActionNext: "What is your Exchange window?",
      rightDescription: null,
      category: [],
      logisticsDropDown: [],
      imgName: ["dashboard1.webp", "dashboard3.webp"],
      isShowYesNo: true,
    },
    {
      id: 4,
      pageNo: 3,
      page_name: "categories",
      leftHeading: "Smart analytics to solve your return problems",
      rightHeading: ["What all categories of products you sell?"],
      rightDescription: null,
      category: [
        "Apparel",
        "Electronics",
        "Sports goods",
        "Grocery",
        "Fashion Jewellery",
        "Appliances",
        "Other",
      ],
      logisticsDropDown: [],
      imgName: ["dashboard1.webp", "dashboard4.webp"],
      isShowYesNo: false,
    },
    {
      id: 5,
      pageNo: 4,
      page_name: "logistics",
      leftHeading:
        "A lot of integrations. If something is missing, we will do it for you, Free.",
      rightHeading: ["Please select logistics provider you use"],
      rightDescription: null,
      category: [],
      logisticsDropDown: [
        "DHL",
        "SHIPPO",
        "WareIQ",
        "WareIQ",
        "USPS",
        "Walmart",
        "Amazon",
        "eBay",
        "FedEx",
        "Target",
        "Lowe`s",
      ],
      imgName: ["dashboard1.webp", "dashboard5.webp"],
      isShowYesNo: false,
    },
    {
      id: 6,
      pageNo: 5,
      page_name: "ai",
      leftHeading:
        "AI to rescue you from fraud, reduce your returns and be Ecofriendly",
      rightHeading: [
        "Do you want to reduce your returns?",
        "Do you want to control refund fraud?",
        "Do you want your customers to be happy even when they are unable to return due to policy restrictions?",
      ],
      rightDescription: null,
      category: [],
      logisticsDropDown: [],
      imgName: ["dashboard1.webp", "dashboard6.webp"],
      isShowYesNo: true,
    },
  ],
};