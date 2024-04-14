import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {postFooterIcons} from '../../data/post';

const Post = ({post}) => {
  return (
    <View>
      <Divider width={1} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10, margin: 10}}>
        <PostFooter />

        <Like post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      alignItems: 'center',
    }}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <LinearGradient
        colors={['#F2703F', '#E35157', '#CA1D7E']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={styles.storyGradient}>
        <Image
          style={styles.profile_picture}
          source={{uri: post.profile_picture}}
        />
      </LinearGradient>
      <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>
        {' '}
        {post.user}{' '}
      </Text>
    </View>
    <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
  </View>
);

const PostImage = ({post}) => (
  <View style={{width: '100%', height: 450}}>
    <Image source={{uri: post.imageUrl}} style={{height: '100%'}} />
  </View>
);

const PostFooter = () => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={imgUrl} />
  </TouchableOpacity>
);

const Like = ({post}) => (
  <View style={{flexDirection: 'row', marginTop: 4}}>
    <Text style={{color: 'white', fontWeight: '600'}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
);

const Caption = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      width: '1',
      justifyContent: 'space-between ',
    }}>
    <View style={{flexDirection: 'row', marginTop: 4}}>
      <Text style={{color: 'white', fontWeight: '600'}}>{post.user} </Text>

      <Text style={{color: 'white', fontWeight: '600'}}>{post.caption}</Text>
    </View>
  </View>
);

const CommentsSection = ({post}) => (
  <View>
    {!!post.comments.length && (
      <Text style={{color: 'gray'}}>
        View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}
        {post.comments.length > 1 ? ' comments' : '  comment'}
      </Text>
    )}
  </View>
);

const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{color: 'white'}}>
          <Text style={{fontWeight: '600'}}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  storyGradient: {
    height: 38,
    width: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 82 / 2,
    margin: 5,
  },
  profile_picture: {
    width: 35,
    height: 35,
    borderRadius: 75 / 2,
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 2,
  },
  footerIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
  },
});

export default Post;
