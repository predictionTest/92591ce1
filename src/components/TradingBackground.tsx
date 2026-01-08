const SQUIDWARD_IMAGE_URL = "https://gateway.pinata.cloud/ipfs/bafkreihqtyzuvdlh2n2zqgwp3o36is5nbmlqi5bdqotwjdwdpp4ldacdfa";

/**
 * Trading Background Component
 * Uses a very subtle Squidward image overlay across the entire app.
 *
 * - Fixed, non-interactive background behind all content
 * - Low opacity + grayscale so text and UI remain fully readable
 * - Soft yellow gradient overlay to blend with existing theme
 */
const TradingBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Squidward image overlay */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center md:bg-contain bg-cover opacity-[0.05] dark:opacity-[0.07] transition-opacity duration-300"
        style={{
          backgroundImage: `url("${SQUIDWARD_IMAGE_URL}")`,
          filter: "grayscale(85%)", // desaturate for minimal visual noise
        }}
      />

      {/* Soft yellow veil to ensure readability over the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/70 via-yellow-200/40 to-yellow-200/60" />
    </div>
  );
};

export default TradingBackground;
