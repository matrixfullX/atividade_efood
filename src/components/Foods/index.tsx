import star from "../../assets/images/elements/star.png"
import sushi from "../../assets/images/foods/sushi.png"
import macarrao from "../../assets/images/foods/macarrão.png"
import { Button, Card, Container, ContainerItens, Image, Infos, Labels, Notice, Paragraph, Star, Tag, Title } from "./styles"

const Foods = () => (
  <Container>
    <ContainerItens>
      <Card>
        <Image src={sushi} alt="bandeija de sushi servida" />
        <Labels>
          <Tag>Destaque da semana</Tag>
          <Tag>Japonesa</Tag>
        </Labels>
        <Infos>
          <Title>Hioki Sushi</Title>
          <Star src={star} alt="estrela de avaliação" />
          <Notice>4.9</Notice>
        </Infos>
        <Paragraph>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</Paragraph>
        <Button href="/flavors">Saiba mais</Button>
      </Card>
      <Card>
        <Image src={macarrao} alt="bandeija de sushi servida" />
        <Labels>
          <Tag>Italiana</Tag>
        </Labels>
        <Infos>
          <Title>La Dolce Vita Trattoria</Title>
          <Star src={star} alt="estrela de avaliação" />
          <Notice>4.6</Notice>
        </Infos>
        <Paragraph>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras e tradicionais, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.Peça já!</Paragraph>
        <Button href="/flavors">Saiba mais</Button>
      </Card>
      <Card>
        <Image src={macarrao} alt="bandeija de sushi servida" />
        <Labels>
          <Tag>Italiana</Tag>
        </Labels>
        <Infos>
          <Title>La Dolce Vita Trattoria</Title>
          <Star src={star} alt="estrela de avaliação" />
          <Notice>4.6</Notice>
        </Infos>
        <Paragraph>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras e tradicionais, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.Peça já!</Paragraph>
        <Button href="/flavors">Saiba mais</Button>
      </Card>
      <Card>
        <Image src={macarrao} alt="bandeija de sushi servida" />
        <Labels>
          <Tag>Italiana</Tag>
        </Labels>
        <Infos>
          <Title>La Dolce Vita Trattoria</Title>
          <Star src={star} alt="estrela de avaliação" />
          <Notice>4.6</Notice>
        </Infos>
        <Paragraph>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras e tradicionais, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.Peça já!</Paragraph>
        <Button href="/flavors">Saiba mais</Button>
      </Card>
      <Card>
        <Image src={macarrao} alt="bandeija de sushi servida" />
        <Labels>
          <Tag>Italiana</Tag>
        </Labels>
        <Infos>
          <Title>La Dolce Vita Trattoria</Title>
          <Star src={star} alt="estrela de avaliação" />
          <Notice>4.6</Notice>
        </Infos>
        <Paragraph>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras e tradicionais, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.Peça já!</Paragraph>
        <Button href="/flavors">Saiba mais</Button>
      </Card>
      <Card>
        <Image src={macarrao} alt="bandeija de sushi servida" />
        <Labels>
          <Tag>Italiana</Tag>
        </Labels>
        <Infos>
          <Title>La Dolce Vita Trattoria</Title>
          <Star src={star} alt="estrela de avaliação" />
          <Notice>4.6</Notice>
        </Infos>
        <Paragraph>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras e tradicionais, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.Peça já!</Paragraph>
        <Button href="/flavors">Saiba mais</Button>
      </Card>
    </ContainerItens>
  </Container>
)

export default Foods