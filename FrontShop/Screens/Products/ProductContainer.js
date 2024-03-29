import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import { Container, Header, Icon, Item, Input, Text } from 'native-base';
import ProductList from './ProductList';
import SearchedProduct from './SearchedProducts';
import data from '../../assets/data/products.json';

import Banner from '../../Shared/Banner'

const ProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
    }, []);

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((product) =>
                product.name.toLowerCase().includes(text.toLowerCase())
            )
        );
    };

    const openList = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };

    return (
        <Container>
            <View>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="search-outline" />
                        <Input
                            placeholder='Search'
                            onFocus={openList}
                            onChangeText={(text) => searchProduct(text)}
                        />
                        {focus && (
                            <Icon onPress={onBlur} name="close-outline" />
                        )}
                    </Item>
                </Header>
                {focus ? (
                    <SearchedProduct
                        productsFiltered={productsFiltered}
                    />
                ) : (
                    <View style={styles.container}>
                        <View>
                            <Banner />
                        </View>

                        <View style={styles.listContainer}>
                            <FlatList
                                data={products}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <ProductList
                                        key={item.brand}
                                        item={item}
                                    />
                                )}
                                keyExtractor={(item) => item.brand}
                            />
                        </View>
                    </View>
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
