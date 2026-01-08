/**
 * Trading Background Component
 * Adds a subtle '@Squidward' watermark over the yellow page background.
 */
const TradingBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      <div className="select-none font-sans text-center">
        <span className="block text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-extrabold tracking-tight text-black/5">
          @Squidward
        </span>
      </div>
    </div>
  );
};

export default TradingBackground;
