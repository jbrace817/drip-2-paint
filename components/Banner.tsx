"use client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface BannerData {
  active: boolean;
  text: string;
}

const Banner = () => {
  const [bannerData, setBannerData] = useState<BannerData | null>(null);
  const [isBannerActive, setIsBannerActive] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const dismissBanner = () => {
    setIsBannerActive(false);
    localStorage.setItem("bannerDismissed", "true");
  };

  useEffect(() => {
    const bannerDismissed = localStorage.getItem("bannerDismissed");
    if (bannerDismissed) {
      setIsBannerActive(false);
    }
  }, [bannerData]);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch("/api/banner");
        const data = await response.json();
        setBannerData(data);
        setIsBannerActive(data.active);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBannerData();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isBannerActive
            ? "h-auto opacity-100"
            : "h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="bg-primary py-2">
          <div className="container mx-auto flex items-center justify-between px-4">
            <p className="flex-auto text-center text-sm font-medium text-primary-foreground">
              {bannerData?.text}
            </p>
            <X
              className="size-5 cursor-pointer text-primary-foreground"
              onClick={dismissBanner}
            />
          </div>
        </div>
      </div>
      {!isBannerActive && !isLoading && (
        <div className="animate-to-full-width h-1 w-full origin-left bg-primary transition-[width]"></div>
      )}
    </div>
  );
};

export default Banner;
