import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
//
import HouseIcon from "@mui/icons-material/House";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import StyleIcon from "@mui/icons-material/Style";
import GroupIcon from "@mui/icons-material/Group";
import TuneIcon from "@mui/icons-material/Tune";
import CategoriesOfPlaces from "./component/PlacesComponent/Categories";

import Places from "./component/PlacesComponent/Places";
import Services from "./component/ServicesComponent/Services";
import CategoriesOfServisec from "./component/ServicesComponent/Categories";
import Bookings from "./component/Bookings/Bookings";
import Vendors from "./component/Users/Vendors";
import Customers from "./component/Users/Customers";
import Admins from "./component/Users/Admins";
import Amenities from "./component/Settings/Amenities";
import PromoCodes from "./component/Settings/PromoCodes";
import Banners from "./component/Settings/Banners";

const ROUTES: Record<string, JSX.Element> = {
  "/places/categories": <CategoriesOfPlaces />,
  "/places/places": <Places />,
  "/services/categories": <CategoriesOfServisec />,
  "/services/services": <Services />,
  "/bookings/bookings": <Bookings />,
  "/users/vendors": <Vendors />,
  "/users/customers": <Customers />,
  "/users/adimns": <Admins />,
  "/settings/amenities": <Amenities />,
  "/settings/promoCodes": <PromoCodes />,
  "/settings/banners": <Banners />,
};

const NAVIGATION: Navigation = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    kind: "header",
    title: "Management",
  },

  {
    segment: "places",
    title: "Places",
    icon: <HouseIcon />,
    children: [
      {
        segment: "categories",
        title: "Categories",
        icon: <DescriptionIcon />,
      },
      {
        segment: "places",
        title: "Places",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "services",
    title: "Services",
    icon: <HomeRepairServiceIcon />,
    children: [
      {
        segment: "categories",
        title: "Categories",
        icon: <DescriptionIcon />,
      },
      {
        segment: "services",
        title: "Services",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "bookings",
    title: "Bookings",
    icon: <StyleIcon />,
    children: [
      {
        segment: "bookings",
        title: "Bookings",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "users",
    title: "Users",
    icon: <GroupIcon />,
    children: [
      {
        segment: "vendors",
        title: "Vendors",
        icon: <DescriptionIcon />,
      },
      {
        segment: "customers",
        title: "Customers",
        icon: <DescriptionIcon />,
      },
      {
        segment: "adimns",
        title: "Adimns",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "settings",
    title: "Settings",
    icon: <TuneIcon />,
    children: [
      {
        segment: "amenities",
        title: "Amenities",
        icon: <DescriptionIcon />,
      },
      {
        segment: "promoCodes",
        title: "Promo Codes",
        icon: <DescriptionIcon />,
      },
      {
        segment: "banners",
        title: "Banners",
        icon: <DescriptionIcon />,
      },
    ],
  },
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");
  console.log("Current path is:", router.pathname); // هنا فقط!!

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          {ROUTES[router.pathname] || (
            <Grid container spacing={1}>
              <Grid size={5} />
              <Grid size={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid size={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid size={4}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={8}>
                <Skeleton height={100} />
              </Grid>

              <Grid size={12}>
                <Skeleton height={150} />
              </Grid>
              <Grid size={12}>
                <Skeleton height={14} />
              </Grid>

              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
            </Grid>
          )}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
