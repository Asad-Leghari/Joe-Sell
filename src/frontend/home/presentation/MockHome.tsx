import React from "react";

// Enums
type CurrencyCodeEnum =
  | "AED"
  | "AFN"
  | "ALL"
  | "USD"
  | "EUR"
  | "GBP"
  | "PKR"
  | "INR"; // extend as needed

type SellerTrustLevelEnum = "TOP_RATED" | "ABOVE_STANDARD";

type AvailabilityEnum = "TEMPORARILY_UNAVAILABLE" | "AVAILABLE" | "UNAVAILABLE";

type AvailabilityThresholdEnum = "MORE_THAN";

type TimeDurationUnitEnum = "YEAR" | "MONTH" | "DAY";

type RefundMethodEnum = "MONEY_BACK" | "MERCHANDISE_CREDIT";

type ReturnMethodEnum = "REPLACEMENT" | "EXCHANGE";

type ReturnShippingCostPayerEnum = "SELLER" | "BUYER";

type DeliveryOptionsEnum =
  | "SHIP_TO_HOME"
  | "SELLER_ARRANGED_LOCAL_PICKUP"
  | "IN_STORE_PICKUP";

type LengthUnitOfMeasureEnum = "INCH" | "FEET" | "CENTIMETER";

type WeightUnitOfMeasureEnum = "POUND" | "KILOGRAM" | "OUNCE";

// Item
export interface Item {
  itemId: string;
  title: string;
  imageUrl: string;
  category: string;
  categoryId: string;
  buyingOptions: string;
  sellerUsername: string;
  sellerFeedbackPercentage: string;
  sellerFeedbackScore: string;
  gtin: string;
  brand: string;
  mpn: string;
  epid: string;
  conditionId: string;
  condition: string;
  priceValue: string;
  priceCurrency: CurrencyCodeEnum;
  primaryItemGroupId: string;
  primaryItemGroupType: string;
  itemEndDate: string;
  sellerItemRevision: string;
  itemLocationCountry: string;
  localizedAspects: string;
  sellerTrustLevel: SellerTrustLevelEnum;
  availability: AvailabilityEnum;
  imageAlteringProhibited: boolean;
  estimatedAvailableQuantity: number;
  availabilityThresholdType: AvailabilityThresholdEnum;
  availabilityThreshold: number;
  returnsAccepted: boolean;
  returnPeriodValue: number;
  returnPeriodUnit: TimeDurationUnitEnum;
  refundMethod: RefundMethodEnum;
  returnMethod: ReturnMethodEnum;
  returnShippingCostPayer: ReturnShippingCostPayerEnum;
  acceptedPaymentMethods: string;
  deliveryOptions: DeliveryOptionsEnum[];
  shipToIncludedRegions: string;
  shipToExcludedRegions: string;
  inferredEpid: string;
  inferredGtin: string;
  inferredBrand: string;
  inferredMpn: string;
  inferredLocalizedAspects: string;
  additionalImageUrls: string;
  originalPriceValue: string;
  originalPriceCurrency: CurrencyCodeEnum;
  discountAmount: string;
  discountPercentage: string;
  energyEfficiencyClass: string;
  qualifiedPrograms: string;
  lotSize: number;
  lengthUnitOfMeasure: LengthUnitOfMeasureEnum;
  packageWidth: string;
  packageHeight: string;
  packageLength: string;
  weightUnitOfMeasure: WeightUnitOfMeasureEnum;
  packageWeight: string;
  shippingCarrierCode: string;
  shippingServiceCode: string;
  shippingType: string;
  shippingCost: string;
  shippingCostType: string;
  additionalShippingCostPerUnit: string;
  quantityUsedForEstimate: number;
  unitPrice: string;
  unitPricingMeasure: string;
  legacyItemId: string;
  alerts: string;
  sellerAccountType: string;
  tyreLabelImageUrl: string;
  priorityListingPayload: string;
  itemCreationDate: string;
  itemWebUrl: string;
  defaultImageUrl: string;
  itemAffiliateWebUrl: string;
  ageGroup: string;
  color: string;
  pattern: string;
  size: string;
  gender: string;
  material: string;
  totalUnits: string;
  ecoParticipationFeeValue: string;
  ecoParticipationFeeCurrency: string;
  takeBackPolicyLabel: string;
  takeBackPolicyDescription: string;
  hazmatSignalWordId: string;
  hazmatSignalWord: string;
  hazmatStatementIds: string;
  hazmatStatementDescriptions: string;
  hazmatPictogramIds: string;
  hazmatPictogramDescriptions: string;
  hazmatPictogramImageUrls: string;
  hazmatAdditionalInformation: string;
  repairScore: string;
  conditionDescriptors: string;
  sellerUserId: string;
}

export interface ItemResponse {
  items: Item[];
}

export const mockItems: Item[] = [
  {
    itemId: "12345",
    title: "Apple iPhone 14 Pro Max - 256GB",
    imageUrl: "https://example.com/iphone14.jpg",
    category: "Smartphones",
    categoryId: "001",
    buyingOptions: "FIXED_PRICE",
    sellerUsername: "tech_seller01",
    sellerFeedbackPercentage: "99.8",
    sellerFeedbackScore: "12000",
    gtin: "0194253400000",
    brand: "Apple",
    mpn: "A2894",
    epid: "1234567890",
    conditionId: "1000",
    condition: "New",
    priceValue: "1299.99",
    priceCurrency: "USD",
    primaryItemGroupId: "IPH14PMAX",
    primaryItemGroupType: "MODEL",
    itemEndDate: "2025-12-31T23:59:59Z",
    sellerItemRevision: "1",
    itemLocationCountry: "US",
    localizedAspects: "Color: Space Black",
    sellerTrustLevel: "TOP_RATED",
    availability: "AVAILABLE",
    imageAlteringProhibited: true,
    estimatedAvailableQuantity: 15,
    availabilityThresholdType: "MORE_THAN",
    availabilityThreshold: 10,
    returnsAccepted: true,
    returnPeriodValue: 30,
    returnPeriodUnit: "DAY",
    refundMethod: "MONEY_BACK",
    returnMethod: "REPLACEMENT",
    returnShippingCostPayer: "SELLER",
    acceptedPaymentMethods: "PayPal, Credit Card",
    deliveryOptions: ["SHIP_TO_HOME"],
    shipToIncludedRegions: "Worldwide",
    shipToExcludedRegions: "None",
    inferredEpid: "EP12345",
    inferredGtin: "0194253400000",
    inferredBrand: "Apple",
    inferredMpn: "A2894",
    inferredLocalizedAspects: "Storage: 256GB",
    additionalImageUrls: "https://example.com/iphone14-back.jpg",
    originalPriceValue: "1399.99",
    originalPriceCurrency: "USD",
    discountAmount: "100.00",
    discountPercentage: "7.14",
    energyEfficiencyClass: "N/A",
    qualifiedPrograms: "eBay Plus",
    lotSize: 1,
    lengthUnitOfMeasure: "INCH",
    packageWidth: "3.1",
    packageHeight: "6.3",
    packageLength: "0.3",
    weightUnitOfMeasure: "POUND",
    packageWeight: "0.5",
    shippingCarrierCode: "UPS",
    shippingServiceCode: "UPS_2DAY",
    shippingType: "EXPRESS",
    shippingCost: "19.99",
    shippingCostType: "FIXED",
    additionalShippingCostPerUnit: "0",
    quantityUsedForEstimate: 1,
    unitPrice: "1299.99",
    unitPricingMeasure: "1 unit",
    legacyItemId: "98765",
    alerts: "None",
    sellerAccountType: "Business",
    tyreLabelImageUrl: "",
    priorityListingPayload: "High Priority",
    itemCreationDate: "2025-01-01T10:00:00Z",
    itemWebUrl: "https://ebay.com/itm/12345",
    defaultImageUrl: "https://example.com/iphone14.jpg",
    itemAffiliateWebUrl: "https://ebay.com/affiliate/12345",
    ageGroup: "Adult",
    color: "Space Black",
    pattern: "Solid",
    size: "6.7 inch",
    gender: "Unisex",
    material: "Aluminum, Glass",
    totalUnits: "1",
    ecoParticipationFeeValue: "0",
    ecoParticipationFeeCurrency: "USD",
    takeBackPolicyLabel: "Returns Accepted",
    takeBackPolicyDescription: "30 days money-back guarantee",
    hazmatSignalWordId: "",
    hazmatSignalWord: "",
    hazmatStatementIds: "",
    hazmatStatementDescriptions: "",
    hazmatPictogramIds: "",
    hazmatPictogramDescriptions: "",
    hazmatPictogramImageUrls: "",
    hazmatAdditionalInformation: "",
    repairScore: "9",
    conditionDescriptors: "Brand New, Factory Sealed",
    sellerUserId: "seller123",
  },
  {
    itemId: "67890",
    title: "Nike Air Zoom Pegasus 40 Running Shoes",
    imageUrl: "https://example.com/nike-pegasus.jpg",
    category: "Shoes",
    categoryId: "002",
    buyingOptions: "AUCTION",
    sellerUsername: "sportsgear99",
    sellerFeedbackPercentage: "97.5",
    sellerFeedbackScore: "5400",
    gtin: "0019123456789",
    brand: "Nike",
    mpn: "DZ4685-002",
    epid: "987654321",
    conditionId: "3000",
    condition: "Used",
    priceValue: "79.99",
    priceCurrency: "USD",
    primaryItemGroupId: "PEGASUS40",
    primaryItemGroupType: "MODEL",
    itemEndDate: "2025-09-15T20:00:00Z",
    sellerItemRevision: "2",
    itemLocationCountry: "US",
    localizedAspects: "Size: 10 US",
    sellerTrustLevel: "ABOVE_STANDARD",
    availability: "AVAILABLE",
    imageAlteringProhibited: false,
    estimatedAvailableQuantity: 1,
    availabilityThresholdType: "MORE_THAN",
    availabilityThreshold: 0,
    returnsAccepted: true,
    returnPeriodValue: 14,
    returnPeriodUnit: "DAY",
    refundMethod: "MONEY_BACK",
    returnMethod: "EXCHANGE",
    returnShippingCostPayer: "BUYER",
    acceptedPaymentMethods: "PayPal",
    deliveryOptions: ["SHIP_TO_HOME", "IN_STORE_PICKUP"],
    shipToIncludedRegions: "US",
    shipToExcludedRegions: "International",
    inferredEpid: "EP67890",
    inferredGtin: "0019123456789",
    inferredBrand: "Nike",
    inferredMpn: "DZ4685-002",
    inferredLocalizedAspects: "Running Shoes",
    additionalImageUrls: "https://example.com/nike-pegasus-side.jpg",
    originalPriceValue: "120.00",
    originalPriceCurrency: "USD",
    discountAmount: "40.01",
    discountPercentage: "33.34",
    energyEfficiencyClass: "N/A",
    qualifiedPrograms: "None",
    lotSize: 1,
    lengthUnitOfMeasure: "INCH",
    packageWidth: "8.5",
    packageHeight: "5",
    packageLength: "13",
    weightUnitOfMeasure: "POUND",
    packageWeight: "2",
    shippingCarrierCode: "FedEx",
    shippingServiceCode: "FEDEX_GROUND",
    shippingType: "STANDARD",
    shippingCost: "9.99",
    shippingCostType: "FIXED",
    additionalShippingCostPerUnit: "0",
    quantityUsedForEstimate: 1,
    unitPrice: "79.99",
    unitPricingMeasure: "1 pair",
    legacyItemId: "112233",
    alerts: "Limited stock",
    sellerAccountType: "Individual",
    tyreLabelImageUrl: "",
    priorityListingPayload: "Normal Priority",
    itemCreationDate: "2025-08-01T14:30:00Z",
    itemWebUrl: "https://ebay.com/itm/67890",
    defaultImageUrl: "https://example.com/nike-pegasus.jpg",
    itemAffiliateWebUrl: "https://ebay.com/affiliate/67890",
    ageGroup: "Adult",
    color: "Black/White",
    pattern: "Solid",
    size: "10 US",
    gender: "Male",
    material: "Mesh, Rubber",
    totalUnits: "1",
    ecoParticipationFeeValue: "0",
    ecoParticipationFeeCurrency: "USD",
    takeBackPolicyLabel: "Returns Accepted",
    takeBackPolicyDescription: "14-day exchange policy",
    hazmatSignalWordId: "",
    hazmatSignalWord: "",
    hazmatStatementIds: "",
    hazmatStatementDescriptions: "",
    hazmatPictogramIds: "",
    hazmatPictogramDescriptions: "",
    hazmatPictogramImageUrls: "",
    hazmatAdditionalInformation: "",
    repairScore: "7",
    conditionDescriptors: "Lightly Used, Clean Condition",
    sellerUserId: "user567",
  },
];

const MockHome = () => {
  return (
    <div>
      {mockItems.map((item) =>
        ((entry) => {
          return <>{entry.epid}</>;
        })(item)
      )}
    </div>
  );
};

export default MockHome;
