import { Suspense, useState, useRef, useEffect } from "react";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhp,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faPython,
  faBootstrap,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import imgCPlusLangage from "../img/c++Icon.svg";
import imgLuaLangage from "../img/luaIcon.svg";
import imgCLangage from "../img/cIcon.svg";
import imgCSharpLangage from "../img/CSharpIcon.svg";
import imgInfoIcon from "../img/infoIcon.svg";
import imgUnityIcon from "../img/unityIcon.svg";

// Traduction
import { Loader } from "./ComponentTraduction";
import { withTranslation } from "react-i18next";

import "../css/Home.css";

const PopupMySqlT = ({ t }) => {
  const [showSqlBool, setShowSqlBool] = useState(false);
  const [showGitBool, setShowGitBool] = useState(false);
  const displayStatus = useRef(null);
  const MySQLCSS = useRef(null);
  const displayStatusGit = useRef(null);
  const GitCSS = useRef(null);

  const CSSPopup = (ref, bool) => {
    if (ref.current) {
      ref.current.style.position = bool ? "absolute" : "relative";
      ref.current.style.zIndex = bool ? "100" : "0";
    }
    const elements = document.querySelectorAll("#blur");
    elements.forEach((element) => {
      if (element) {
        element.style.filter = bool ? "blur(5px)" : "blur(0px)";
      }
    });
  };

  useEffect(() => {
    CSSPopup(MySQLCSS, showSqlBool);
    // eslint-disable-next-line
  }, [showSqlBool]);

  useEffect(() => {
    CSSPopup(GitCSS, showGitBool);
    // eslint-disable-next-line
  }, [showGitBool]);

  const handleSqlBtnClick = () => {
    setShowSqlBool(!showSqlBool);
    if (GitCSS.current) {
      GitCSS.current.style.filter = showSqlBool ? "blur(0px)" : "blur(5px)";
    }
  };

  const handleGitBtnClick = () => {
    setShowGitBool(!showGitBool);
    if (MySQLCSS.current) {
      MySQLCSS.current.style.filter = showGitBool ? "blur(0px)" : "blur(5px)";
    }
  };

  return (
    <div className="rectangleGlobal">
      <div className="rectangleTool" id="blur">
        <div className="sizeIconCPlus fontsRegular">
          <img
            src={imgUnityIcon}
            className="iconSpace"
            alt="Unity Custom Engine Icon"
          ></img>
          {t("Home.Unity")}
        </div>
      </div>
      <div className="rectangleTool" id="blur">
        <div className="sizeIconCPlus fontsRegular">
          <img
            src={imgCLangage}
            className="iconSpace"
            alt="C Langage Icon"
          ></img>
          {t("Home.C")}
        </div>
      </div>
      <div className="rectangleTool" id="blur">
        <div className="sizeIconCPlus fontsRegular">
          <img
            src={imgCPlusLangage}
            className="iconSpace"
            alt="C++ Langage Icon"
          ></img>
          {t("Home.C++")}
        </div>
      </div>
      <div className="rectangleTool" id="blur">
        <div className="sizeIconCPlus fontsRegular">
          <img
            src={imgCSharpLangage}
            className="iconSpace"
            alt="C# Langage Icon"
          ></img>
          {t("Home.C#")}
        </div>
      </div>
      <div className="rectangleTool" id="blur">
        <div className="sizeIconCPlus fontsRegular">
          <FontAwesomeIcon
            icon={faPhp}
            color="#bc63ff"
            size="xl"
            className="iconSpace"
          />
          {t("Home.PHP")}
        </div>
      </div>
      <div className="rectangleTool" id="blur">
        <div className="sizeIconCPlus fontsRegular">
          <FontAwesomeIcon
            icon={faJs}
            color="#bc63ff"
            size="xl"
            className="iconSpace"
          />
          {t("Home.JavaScript")}
        </div>
      </div>
      <div className="rectangleTool fontsRegular" id="blur">
        <FontAwesomeIcon
          icon={faHtml5}
          color="#bc63ff"
          size="xl"
          className="iconSpace"
        />
        {t("Home.HTML")}
      </div>
      <div className="rectangleTool fontsRegular" id="blur">
        <FontAwesomeIcon
          icon={faCss3Alt}
          color="#bc63ff"
          size="xl"
          className="iconSpace"
        />
        {t("Home.CSS")}
      </div>
      <div className="rectangleTool fontsRegular" ref={MySQLCSS} id="MySql">
        <div className="infoIcon">
          <button className="btnNavbarProjects" onClick={handleSqlBtnClick}>
            <img
              src={imgInfoIcon}
              className="iconInfoWidth"
              alt="Info Langage Icon"
            ></img>
          </button>
        </div>
        <FontAwesomeIcon
          icon={faDatabase}
          color="#bc63ff"
          size="xl"
          className="iconSpace"
        />
        {t("Home.MySQL")}
        <div
          style={
            ({ display: showSqlBool ? "block" : "none" },
            {
              animation: `${
                showSqlBool ? "fadeIn" : "fadeOut"
              } 1s ease forwards`,
            })
          }
          className="overflowPopup"
          ref={displayStatus}
        >
          <div>
            <p
              className="sizeMySql fontsLight"
              dangerouslySetInnerHTML={{
                __html: t("Home.MySQLDescription"),
              }}
            ></p>
          </div>
        </div>
      </div>
      <div className="rectangleTool fontsRegular" ref={GitCSS} id="Git">
        <div className="infoIcon">
          <button className="btnNavbarProjects" onClick={handleGitBtnClick}>
            <img
              src={imgInfoIcon}
              className="iconInfoWidth"
              alt="Info Langage Icon"
            ></img>
          </button>
        </div>
        <FontAwesomeIcon
          icon={faGitAlt}
          color="#bc63ff"
          size="xl"
          className="iconSpace"
        />
        {t("Home.Git")}
        <div
          style={
            ({ display: showGitBool ? "block" : "none" },
            {
              overflow: "hidden",
              animation: `${
                showGitBool ? "fadeIn" : "fadeOut"
              } 1s ease forwards`,
            })
          }
          ref={displayStatusGit}
        >
          <div>
            <p
              className="sizeMySql fontsLight"
              dangerouslySetInnerHTML={{
                __html: t("Home.GitDescription"),
              }}
            ></p>
          </div>
        </div>
      </div>
      <div className="rectangleTool fontsRegular" id="blur">
        <FontAwesomeIcon
          icon={faBootstrap}
          color="#bc63ff"
          size="xl"
          className="iconSpace"
        />
        {t("Home.Bootstrap")}
      </div>
      <div className="rectangleTool fontsRegular" id="blur">
        <FontAwesomeIcon
          icon={faPython}
          color="#bc63ff"
          size="xl"
          className="iconSpace"
        />
        {t("Home.Python")}
      </div>
      <div className="rectangleTool fontsRegular" id="blur">
        <FontAwesomeIcon
          icon={faReact}
          color="#bc63ff"
          size="xl"
          className="iconSpace"
        />
        {t("Home.React")}
      </div>
      <div className="rectangleTool fontsRegular" id="blur">
        <div className="sizeIconCPlus">
          <img
            src={imgLuaLangage}
            className="iconSpace"
            alt="Lua Langage Icon"
          ></img>
          {t("Home.LUA")}
        </div>
      </div>
    </div>
  );
};

const TranslatedPopupLanguage = withTranslation()(PopupMySqlT);

export default function PopupMySql() {
  return (
    <Suspense fallback={<Loader />}>
      <TranslatedPopupLanguage />
    </Suspense>
  );
}
