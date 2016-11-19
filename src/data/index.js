import { List } from "immutable";

export const initialState = List.of(
    {
        slug: "vem-ke-tem",
        image: require("../img/png/vem-ke-tem.png"),
        name: "Vem Ke Tem Móveis",
        description: "Desenvolvimento Front-End com HTML5, CSS3, JavaScript e jQUery, Back-End em PHP5 e Banco de Dados MySQL, com sistema administrativo, criação de orçamento e catálogo de produtos",
        link: "http://www.vemketem.com.br"
    },
    {
        slug: "chamativa-moda",
        image: require("../img/png/chamativa-moda.png"),
        name: "Chamativa moda",
        description: "Desenvolvimento Front-End com HTML5, CSS3, JavaScript e jQUery, Back-End em PHP5 e Banco de Dados MySQL, com sistema administrativo, sistema de pedidos e catálogo de produtos",
        link: "http://chamativamoda.com.br/",
        deprecated: 1
    }
);