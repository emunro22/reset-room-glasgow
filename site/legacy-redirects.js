// Old WordPress URLs -> new URLs. Shared by next.config.js (bare paths) and middleware.js
// (trailing-slash and ?page_id= variants, which next.config can't do in a single clean hop — see README).
const renamed = {
  "/massage-treatments-in-glasgow": "/treatments",
  "/deep-tissue-massage-glasgow": "/treatments/deep-tissue-massage",
  "/lymphatic-drainage-massage-glasgow": "/treatments/lymphatic-drainage-massage",
  "/swedish-massage-glasgow": "/treatments/swedish-massage",
  "/pregnancy-massage-glasgow": "/treatments/pregnancy-massage",
  "/hot-stone-massage-glasgow": "/treatments/hot-stone-massage",
  "/indian-head-massage-glasgow": "/treatments/indian-head-massage",
  "/reflexology-glasgow": "/treatments/reflexology",
  "/reiki-glasgow": "/treatments/reiki",
  "/sound-bath-glasgow": "/sound-baths",
};

const pageIds = {
  2803: "/treatments/deep-tissue-massage",
  2975: "/treatments/swedish-massage",
  3351: "/treatments/lymphatic-drainage-massage",
  3551: "/treatments/pregnancy-massage",
  3780: "/treatments/hot-stone-massage",
  3451: "/treatments/indian-head-massage",
  3192: "/treatments/reiki",
  3100: "/sound-baths",
  3267: "/treatments/reflexology",
  3919: "/treatments",
  16: "/contact",
};

module.exports = { renamed, pageIds };
