const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "art",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Chapel Hill Shiraz",
	country: "AU",
	detail: "Bottle",
	price: "$10",
 },
 {
	name: "Caten Malbec",
	country: "AU",
	detail: "Bottle",
	price: "$49",
 },
 {
	name: "Rhino Pale Ale",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Irish Guinness",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "Bottle",
	price: "$10",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Bottle",
	price: "$49",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "Sky Deck, Orion Elite, Sector 18, Noida-201301",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 // No official social media URLs provided yet — add them here when available
 // (leave url empty to render the icon as a non-clickable placeholder).
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Muddled mint, fresh lime, and a touch of sugar layered over crisp soda — the classic mojito is light, bright, and endlessly refreshing. Perfect for slow summer evenings.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "A vibrant twist on the classic — muddled raspberries meet fresh lime and mint for a sweet-tart refresher, topped with soda for that signature sparkle.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Crème de violette's floral notes swirl with lemon and soda in this striking violet-hued refresher — light, fragrant, and made to be sipped slowly.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Blue curaçao swirled with lime, mint, and sparkling soda — a vibrant, citrus-forward favorite made with fresh ingredients and a passion for every pour.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};