import CContainer from "@/components/base/CContainer";
import CHead from "@/components/base/CHead";
import LayoutMain from "@/layouts/LayoutMain";
import { Tab, TabList, Tabs, useColorModeValue } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const NewsContainer = dynamic(
  () => import("@/containers/ClassDetail/News/index"),
  {
    ssr: false,
  }
);
const ExerciseContainer = dynamic(
  () => import("@/containers/ClassDetail/Exercise/index"),
  {
    ssr: false,
  }
);
const EveryoneContainer = dynamic(
  () => import("@/containers/ClassDetail/Everyone/index"),
  {
    ssr: false,
  }
);
const PointContainer = dynamic(
  () => import("@/containers/ClassDetail/Point/index"),
  {
    ssr: false,
  }
);

const tabs = [
  { name: "Bảng tin", key: "news" },
  { name: "Bài tập trên lớp", key: "exercise" },
  { name: "Mọi người", key: "everyone" },
  { name: "Điểm", key: "point" },
];

const ClassDetail = () => {
  const router = useRouter();
  const tab = router?.query?.tab;
  const slug = router?.query?.slug;

  const colorTab = useColorModeValue("primary", "teal.300");

  const onChangeTab = (index: number) => {
    tabs.map((tabs, indexTab) => {
      if (indexTab === index) {
        return router.push({
          pathname: "/[slug]",
          query: { slug: slug, tab: tabs.key },
        });
      }
    });
  };

  const renderTab = (tab: string | string[] | undefined, type = "tab") => {
    switch (tab) {
      case "news":
        return type === "tab" ? <NewsContainer /> : slug;
      case "exercise":
        return type === "tab" ? (
          <ExerciseContainer />
        ) : (
          `Bài tập trên lớp cho ${slug}`
        );
      case "everyone":
        return type === "tab" ? <EveryoneContainer /> : `Người trong ${slug}`;
      case "point":
        return type === "tab" ? <PointContainer /> : `Bảng điểm ${slug}`;
      default:
        return <NewsContainer />;
    }
  };

  return (
    <>
      <CHead title={renderTab(tab, "ok")} />
      <LayoutMain
        isLogo={false}
        middleNav={
          <Tabs
            onChange={(index: number) => onChangeTab(index)}
            defaultIndex={0}
            defaultValue={0}
          >
            <TabList h="60px" borderBottom="unset">
              {tabs.map((tab) => (
                <Tab
                  fontWeight="500"
                  fontSize="14px"
                  letterSpacing=".01785714em"
                  _selected={{
                    color: colorTab,
                    borderBottom: "3px solid #007b83",
                  }}
                  key={tab.key}
                >
                  {tab.name}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        }
        title={slug}
      >
        <CContainer
          minW="18.75rem"
          w={["", "", "720px", "1000px"]}
          marginTop="1.5rem"
        >
          {renderTab(tab)}
        </CContainer>
      </LayoutMain>
    </>
  );
};

export default ClassDetail;
