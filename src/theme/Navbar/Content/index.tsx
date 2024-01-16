import React, {useEffect, useState} from "react"
import {useThemeConfig, ErrorCauseBoundary} from "@docusaurus/theme-common"
import {splitNavbarItems, useNavbarMobileSidebar} from "@docusaurus/theme-common/internal"
import {useHistory} from "react-router-dom"
import {useLocation} from "@docusaurus/router"
import NavbarItem from "@theme/NavbarItem" // Assuming NavbarItemProps

import Search from "docusaurus-lunr-search/src/theme/SearchBar" // Assuming Search is a valid component
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle"
import SearchBar from "@theme/SearchBar"
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle"
import NavbarLogo from "@theme/Navbar/Logo"
import NavbarSearch from "@theme/Navbar/Search"
import GithubStarsButton from "@site/src/components/shared/GithubStarsButton"
import SearchIcon from "@site/static/icons/basic/search.svg"
import PageSearchIcon from "@site/static/icons/basic/page-search.svg"
import styles from "./styles.module.css"

type NavbarItemType =
  | "html"
  | "search"
  | "default"
  | "doc"
  | "docsVersion"
  | "docSidebar"
  | "dropdown"
  | "docsVersionDropdown"
  | "localeDropdown"
  | typeof NavbarItem

// Function to retrieve navbar items from the theme configuration
function useNavbarItems() {
  return useThemeConfig().navbar.items
}

// Component to render a list of NavbarItems
function NavbarItems({items}: {items: NavbarItemType[]}) {
  return (
    <>
      {items.map((item: NavbarItemType, i: number) => (
        // Render each NavbarItem wrapped in ErrorCauseBoundary
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
            )
          }
        >
          <NavbarItem {...(item as typeof NavbarItem)} />
        </ErrorCauseBoundary>
      ))}
    </>
  )
}

// Layout for the navbar content
const NavbarContentLayout = ({left, right}: {left: JSX.Element; right: JSX.Element}) => {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  )
}

// Custom search component
const CustomSearch = () => {
  const [showSearchIcon, setShowSearchIcon] = useState<boolean>(false)
  const [isSearchModalVisible, setIsSearchModalVisible] = useState<boolean>(false)
  const history = useHistory()
  const location = useLocation()

  // Handlers to control search visibility
  function handleSearchClick() {
    setIsSearchModalVisible(true)
  }

  function handleSearchModalClose() {
    setIsSearchModalVisible(false)
  }

  // Function to handle zoom behavior based on input focus
  const handleZoomBehavior = () => {
    const viewportMetaTag = document.querySelector('meta[name="viewport"]') as HTMLMetaElement

    if (viewportMetaTag) {
      // Enable user zooming when no input is in focus
      viewportMetaTag.content = "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"

      // Add an event listener to detect when an input is in focus
      document.addEventListener("focusin", handleInputFocus)

      // Remove the event listener when the component unmounts or the modal closes
      return () => {
        document.removeEventListener("focusin", handleInputFocus)
      }
    }
  }

  // Function to handle input focus
  const handleInputFocus = (event: FocusEvent) => {
    const isInput = (event.target as HTMLElement).tagName.toLowerCase() === "input"

    // Disable user zooming when an input is in focus
    const viewportMetaTag = document.querySelector('meta[name="viewport"]') as HTMLMetaElement
    if (viewportMetaTag && isInput) {
      viewportMetaTag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    }
  }

  useEffect(() => {
    // Check pathname for showing the search icon
    location.pathname.includes("/docs/") ? setShowSearchIcon(true) : setShowSearchIcon(false)

    // Listen for history changes to close search modal
    const unlisten = history.listen((location, action) => {
      if (action === "PUSH" || action === "POP") {
        setIsSearchModalVisible(false)
        // Reset the zoom when the modal is closed
      }
    })

    return () => {
      unlisten()
    }
  }, [history])

  useEffect(() => {
    if (isSearchModalVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isSearchModalVisible])

  useEffect(() => {
    if (isSearchModalVisible) {
      setTimeout(() => {
        const searchInput = document.getElementById("search_input_react")
        handleZoomBehavior()
        if (searchInput) {
          searchInput.focus()
        }
      }, 200)
    }
  }, [isSearchModalVisible])

  return (
    <>
      {showSearchIcon && <SearchIcon onClick={handleSearchClick} className="lg:hidden mr-SPACE_03 h-6 w-6" />}
      {isSearchModalVisible ? (
        <>
          <div onClick={handleSearchModalClose} className={styles.overlay}></div>
          <div className={styles.modal}>
            {/* Search modal content */}
            <div className={styles.modalContent}>
              <div className={styles.search}>
                <div className={styles.searchInput}>
                  <Search />
                </div>
                <span
                  className={`${styles.searchDocsClose} ${styles.searchDocsCommon}`}
                  onClick={handleSearchModalClose}
                >
                  Close
                </span>
              </div>
              <div className={styles.initialCase}>
                <PageSearchIcon />
                <div className={styles.searchDocsTitle}>Search Docs</div>
                <div className={`${styles.searchDocsDesc} ${styles.searchDocsCommon}`}>
                  Search anything within the docs
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

interface NavbarContentProps {
  position?: "left" | "right"
}

// Main NavbarContent component
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar()
  const items = useNavbarItems()
  const [leftItems, rightItems] = splitNavbarItems<NavbarContentProps>(items)
  const searchBarItem = items.find((item) => item.type === "search")

  return (
    <NavbarContentLayout
      left={
        // Render left navbar items
        <>
          <CustomSearch />
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems as NavbarItemType[]} />
        </>
      }
      right={
        // Render right navbar items
        <>
          <NavbarItems items={rightItems as NavbarItemType[]} />
          <GithubStarsButton className="navbar__item navbar__link" />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  )
}
