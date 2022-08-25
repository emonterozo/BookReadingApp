/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Box,
  Divider,
  VStack,
  FlatList,
  HStack,
  Text,
  Pressable,
  ScrollView,
  ArrowBackIcon,
  IconButton,
} from 'native-base';

import {BOOKS} from './src/constant';
import {IBook, IItem} from './src/types';

const App = () => {
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);

  const renderBooks = ({item}: IItem) => (
    <Pressable
      flex={1}
      maxWidth="50%"
      m={1}
      borderWidth="1"
      borderColor="coolGray.300"
      padding="5"
      rounded="8"
      onPress={() => setSelectedBook(item)}>
      <VStack space="4" divider={<Divider />}>
        <Box>{item.title}</Box>
      </VStack>
    </Pressable>
  );

  return (
    <NativeBaseProvider>
      <Box safeAreaTop bg="warmGray.600" />
      <HStack bg="warmGray.600" px="1" py="3" w="100%">
        <HStack alignItems="center">
          {selectedBook !== null && (
            <IconButton
              size="sm"
              icon={<ArrowBackIcon />}
              color="amber.900"
              onPress={() => setSelectedBook(null)}
            />
          )}
          <Text color="white" fontSize="20" fontWeight="bold" marginLeft={2}>
            {selectedBook === null ? 'Books' : selectedBook.title}
          </Text>
        </HStack>
      </HStack>
      <Box flex={1} m={1}>
        {selectedBook === null ? (
          <FlatList data={BOOKS} renderItem={renderBooks} numColumns={2} />
        ) : (
          <ScrollView>
            <Box p={2}>
              <Text>{selectedBook.content}</Text>
            </Box>
          </ScrollView>
        )}
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
//npx react-native run-ios --simulator="iPad Pro (12.9-inch) (3rd generation)"
