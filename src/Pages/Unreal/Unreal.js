import "../../css/Home.css";
import React, { Suspense } from "react";
import Navbar from "../../Component/Navbar.js";

// Traduction
import { Loader } from "../../Component/ComponentTraduction.js";
import { withTranslation } from "react-i18next";

const UnrealT = ({ t }) => {
  return (
    <>
      <div className="Home-header overflowHidden fontsRegular">
        <Navbar />
        <div className="traitSeparator" id="blur"></div>
        <div>
          <div className="contactMeFlex align-items-center fixBackBtnUnity">
            <h3 className="fontsBold underline titleUnityPage" id="blur">
              {t("Unreal.Title")}
            </h3>
          </div>
          <div className="grid-gamejam">
            <div
              className="marge-contact-play modernEnvelop flex-column-center"
              id="blur"
            >
              <div className="sizeIconCPlus flexIMG">
                <h3 className="Home width">Funfair</h3>
              </div>
              <div className="flexIMG width">
                <iframe
                  src="https://www.youtube.com/embed/suI8_LCzjSI"
                  title="youtubeVideoPresentationFunfair"
                  frameBorder="0"
                  width="560"
                  height="315"
                  allowFullScreen
                  className="iframeYoutube"
                ></iframe>
              </div>
              <p className="text-align-left padding-1vw font-size-large">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("Unreal.Funfair.Description"),
                  }}
                ></p>
                <strong className="underline">
                  {t("Unreal.Funfair.technologies")}
                </strong>
              </p>
              <div className="btnDiscoverProject">
                <a
                  href="https://arthur-bru.itch.io/carnival-unreal-engine-5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btnStyleDiscoverProject fontsBold z-index responsive-text-btn">
                    {t("VideoGamesProjects.viewMoreGame")}
                  </button>
                </a>
                <a
                  href="https://github.com/PoloBongo/Funfair_UE5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btnStyleDiscoverProject fontsBold marge-contact-play responsive-text-btn">
                    {t("VideoGamesProjects.viewMoreCode")}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TranslatedHome = withTranslation()(UnrealT);

export default function UnrealPage() {
  return (
    <Suspense fallback={<Loader />}>
      <TranslatedHome />
    </Suspense>
  );
}
