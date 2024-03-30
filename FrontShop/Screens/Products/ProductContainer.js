import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, ScrollView, Dimensions } from "react-native";
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

import ProductList from './ProductList';
import SearchedProduct from './SearchedProducts';
import Banner from '../../Shared/Banner'
import CategoryFilter from './CategoryFilter';

var { height } = Dimensions.get ('window')
const data = require('../../assets/data/products.json');
const productsCategories = require('../../assets/data/categories.json');

const ProductContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState()
    const [initialState, setInitialState] = useState([])

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        setCategories(productsCategories);
        setProductsCtg(data);
        setActive(-1)
        setInitialState(data)

        return () => {
            setProducts([])
            setProductsFiltered([])
            setFocus();
            setCategories([])
            setActive()
            setInitialState()
        }

    }, [])

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )

    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }

    //Categories

    const changeCtg = (ctg) => {
        {
            ctg === "all"
                ? [setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter(i => i.category.$oid === ctg),
                        setActive(true)
                    ),
                ];
        }
    }

    return (
        <Container>
            <View>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="search-outline" />
                        <Input
                            placeholder="Search"
                            onFocus={openList}
                            onChangeText={(text) => searchProduct(text)}
                        />
                        {focus == true ? (
                            <Icon onPress={onBlur} name="close-outline" />
                        ) : null}
                    </Item>
                </Header>
                {focus == true ? (
                    <SearchedProduct
                        navigation={props.navigation}
                        productsFiltered={productsFiltered}
                    />
                ) : (
                    <ScrollView>
                        <View>
                            <View>
                                <Banner />
                            </View>
                            <View>
                                <CategoryFilter
                                    categories={categories}
                                    CategoryFilter={changeCtg}
                                    productsCtg={productsCtg}
                                    active={active}
                                    setActive={setActive}
                                />
                            </View>
                            {productsCtg.length > 0 ? (
                                 <View style={styles.listContainer}>
                                    {productsCtg.map((item) => {
                                        return(
                                            <ProductList
                                            navigation={props.navigation}
                                            key={item._id}
                                            item={item}
                                            />
                                        )
                                    })}
                             </View>
                        )   : (
                                <View style={[styles.center, {height: height / 2 }]}>
                                <Text>No Products Found</Text>
                                </View>
                        )}

                        </View>
                    </ScrollView>
                )}
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    listContainer: {
        width: '100%',
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProductContainer;
