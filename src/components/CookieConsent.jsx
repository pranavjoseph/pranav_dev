import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { useTheme } from "./ThemeProvider"; // adjust path

function CookieConsentBanner() {
    const { theme } = useTheme();

    useEffect(() => {
        CookieConsent.run({
            guiOptions: {
                consentModal: {
                    layout: "box inline",
                    position: "bottom right",
                    equalWeightButtons: true,
                    flipButtons: false
                },
                preferencesModal: {
                    layout: "box",
                    position: "right",
                    equalWeightButtons: true,
                    flipButtons: false
                }
            },
            categories: {
                necessary: {
                    readOnly: true
                },
                analytics: {}
            },
            language: {
                default: "en",
                autoDetect: "browser",
                translations: {
                    en: {
                        consentModal: {
                            title: "We use cookies 🍪",
                            description: "We use cookies to improve your experience and show personalized ads. You can manage preferences.",
                            acceptAllBtn: "Accept all",
                            acceptNecessaryBtn: "Reject all",
                            showPreferencesBtn: "Manage preferences",
                            // footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
                        },
                        preferencesModal: {
                            title: "Consent Preferences Center",
                            acceptAllBtn: "Accept all",
                            acceptNecessaryBtn: "Reject all",
                            savePreferencesBtn: "Save preferences",
                            closeIconLabel: "Close modal",
                            serviceCounterLabel: "Service|Services",
                            sections: [
                                {
                                    title: "Cookie Usage",
                                    description:
                                        "We use cookies to improve your browsing experience, provide essential site functionality, analyze traffic, and deliver relevant ads. You can choose to enable or disable non-essential cookies below."
                                },
                                {
                                    title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                                    description:
                                        "These cookies are required for the website to function properly (e.g., remembering your dark mode preference or keeping navigation consistent). They cannot be disabled.",
                                    linkedCategory: "necessary"
                                },
                                {
                                    title: "Analytics Cookies",
                                    description:
                                        "Analytics cookies help us understand how visitors interact with the site, such as which pages are most popular. This information is anonymous and helps us improve the content.",
                                    linkedCategory: "analytics"
                                },
                                {
                                    title: "Advertising Cookies",
                                    description:
                                        "Advertising cookies are used to deliver personalized ads through services like Google AdSense. These cookies may track your browsing activity across different websites.",
                                    linkedCategory: "ads"
                                },
                                {
                                    title: "More information",
                                    description:
                                        "For any queries about my cookie policy or to exercise your rights, please <a class=\"cc__link\" href=\"/contact\">contact me</a>."
                                }
                            ]

                        }
                    }
                }
            }
        });

        // Sync with dark mode
        if (theme === "dark") {
            document.documentElement.classList.add("cc--darkmode");
        } else {
            document.documentElement.classList.remove("cc--darkmode");
        }
    }, [theme]);

    return null; // Banner is handled by the library
}

export default CookieConsentBanner;
