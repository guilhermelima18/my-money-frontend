import { CardSummary } from "../../components/CardSummary";
import { Layout } from "../../components/Layout";
import { DashboardContainer, CardsContainer } from "./styles";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Layout>
        <CardsContainer>
          <CardSummary />
        </CardsContainer>
      </Layout>
    </DashboardContainer>
  );
}
