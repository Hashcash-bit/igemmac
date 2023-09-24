import React from 'react';
import styled from 'styled-components';
import TopSection from '../../Components/TopSection/TopSection';

const Banner = styled.div`
  background: url('https://thepointsguy.global.ssl.fastly.net/us/originals/2023/03/Really-Cool.jpeg?width=1920')
    no-repeat center center;
  background-size: cover;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  display: flex;
  padding: 0 30px;
`;

const Sidebar = styled.div`
  position: sticky;
  top: 0;
  width: 20%;
  height: 100vh;
  overflow: auto;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  width: 80%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Topic = styled.p`
  cursor: pointer;
  font-weight: bold;
`;

const SubTopic = styled.p`
  cursor: pointer;
  margin-left: 20px;
`;

function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function MyPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        backgroundColor: "#dda7a2"
      }}
    >
      <TopSection />
      <Banner>
        <Title>IHR & Womens Rights</Title>
      </Banner>
      <Container>
        <Sidebar>
          <Topic onClick={() => scrollTo('section1')}>Topic 1</Topic>
          <SubTopic onClick={() => scrollTo('sub-section1')}>
            - Sub topic 1
          </SubTopic>
          <SubTopic onClick={() => scrollTo('sub-section2')}>
            - Sub topic 2
          </SubTopic>
          <SubTopic onClick={() => scrollTo('sub-section3')}>
            - Sub topic 3
          </SubTopic>
          <Topic onClick={() => scrollTo('section2')}>Topic 2</Topic>
          <SubTopic onClick={() => scrollTo('sub-section4')}>
            - Sub topic 1
          </SubTopic>
          <SubTopic onClick={() => scrollTo('sub-section5')}>
            - Sub topic 2
          </SubTopic>
          <SubTopic onClick={() => scrollTo('sub-section6')}>
            - Sub topic 3
          </SubTopic>
        </Sidebar>
        <Content>
          <Section id="section1">
            <h2>Some Long Ahh Title1</h2>
            <p id="sub-section1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              purus odio. In in ultrices purus. Nunc id lacus rutrum, interdum
              mauris et, tempor dolor. Integer blandit libero purus, vitae
              sodales turpis malesuada sed. Nullam et mi venenatis, semper nunc
              cursus, maximus erat. Mauris condimentum, enim a ultricies
              maximus, nunc turpis tincidunt risus, sit amet aliquet sapien
              lorem non nisi. Integer pharetra quam vel tortor sodales rutrum.
              Praesent a lorem quis neque luctus congue volutpat nec erat.
              Vivamus augue leo, tristique ut malesuada in, sagittis eget odio.
              Curabitur egestas metus eu sem consectetur, et aliquet enim
              sagittis. Pellentesque sit amet blandit enim. Sed risus purus,
              commodo id ex ut, rutrum tempus eros. Curabitur ante mauris,
              pellentesque nec tempus ac, luctus ut orci. Praesent non leo quis
              sem tincidunt imperdiet. Cras mattis est nec odio porttitor
              finibus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Duis metus nibh, pretium a mi nec, lacinia efficitur mi.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque sodales sagittis quam, id imperdiet neque fringilla
              sit amet. Aenean ut pretium elit. Nullam facilisis tincidunt
              ligula eget eleifend. Etiam placerat ligula mi, a aliquam nisl
              egestas nec. Maecenas scelerisque eros mi, quis accumsan lacus
              auctor quis. Etiam nec tellus at urna vulputate lacinia. Ut tempus
              gravida sem, quis eleifend orci. Nam vestibulum tempus nulla.
              Suspendisse urna diam, dignissim ornare elit eget, volutpat
              faucibus felis. Quisque non molestie orci. Donec id faucibus dui,
              quis fermentum purus. Proin in dolor et odio consectetur ornare.c
              1
            </p>
            <p id="sub-section2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              purus odio. In in ultrices purus. Nunc id lacus rutrum, interdum
              mauris et, tempor dolor. Integer blandit libero purus, vitae
              sodales turpis malesuada sed. Nullam et mi venenatis, semper nunc
              cursus, maximus erat. Mauris condimentum, enim a ultricies
              maximus, nunc turpis tincidunt risus, sit amet aliquet sapien
              lorem non nisi. Integer pharetra quam vel tortor sodales rutrum.
              Praesent a lorem quis neque luctus congue volutpat nec erat.
              Vivamus augue leo, tristique ut malesuada in, sagittis eget odio.
            </p>
            <p id="sub-section3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              purus odio. In in ultrices purus. Nunc id lacus rutrum, interdum
              mauris et, tempor dolor. Integer blandit libero purus, vitae
              sodales turpis malesuada sed. Nullam et mi venenatis, semper nunc
              cursus, maximus erat. Mauris condimentum, enim a ultricies
              maximus, nunc turpis tincidunt risus, sit amet aliquet sapien
              lorem non nisi. Integer pharetra quam vel tortor sodales rutrum.
              Praesent a lorem quis neque luctus congue volutpat nec erat.
              Vivamus augue leo, tristique ut malesuada in, sagittis eget odio.
              Curabitur egestas metus eu sem consectetur, et aliquet enim
              sagittis. Pellentesque sit amet blandit enim. Sed risus purus,
              commodo id ex ut, rutrum tempus eros. Curabitur ante mauris,
              pellentesque nec tempus ac, luctus ut orci. Praesent non leo quis
              sem tincidunt imperdiet. Cras mattis est nec odio porttitor
              finibus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Duis metus nibh, pretium a mi nec, lacinia efficitur mi.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque sodales sagittis quam, id imperdiet neque fringilla
              sit amet. Aenean ut pretium elit. Nullam facilisis tincidunt
              ligula eget eleifend. Etiam placerat ligula mi, a aliquam nisl
              egestas nec. Maecenas scelerisque eros mi, quis accumsan lacus
              auctor quis. Etiam nec tellus at urna vulputate lacinia. Ut tempus
              gravida sem, quis eleifend orci. Nam vestibulum tempus nulla.
              Suspendisse urna diam, dignissim ornare elit eget, volutpat
              faucibus felis. Quisque non molestie orci. Donec id faucibus dui,
              quis fermentum purus. Proin in dolor et odio consectetur ornare.
            </p>
          </Section>
          <Section id="section2">
            <h2>Long Ahh Title 2</h2>
            <p id="sub-section4">
              Curabitur egestas metus eu sem consectetur, et aliquet enim
              sagittis. Pellentesque sit amet blandit enim. Sed risus purus,
              commodo id ex ut, rutrum tempus eros. Curabitur ante mauris,
              pellentesque nec tempus ac, luctus ut orci. Praesent non leo quis
              sem tincidunt imperdiet. Cras mattis est nec odio porttitor
              finibus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Duis metus nibh, pretium a mi nec, lacinia efficitur mi.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque sodales sagittis quam, id imperdiet neque fringilla
              sit amet. Aenean ut pretium elit. Nullam facilisis tincidunt
              ligula eget eleifend. Etiam placerat ligula mi, a aliquam nisl
              egestas nec. Maecenas scelerisque eros mi, quis accumsan lacus
              auctor quis. Etiam nec tellus at urna vulputate lacinia.
            </p>
            <p id="sub-section5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              purus odio. In in ultrices purus. Nunc id lacus rutrum, interdum
              mauris et, tempor dolor. Integer blandit libero purus, vitae
              sodales turpis malesuada sed. Nullam et mi venenatis, semper nunc
              cursus, maximus erat. Mauris condimentum, enim a ultricies
              maximus, nunc turpis tincidunt risus, sit amet aliquet sapien
              lorem non nisi. Integer pharetra quam vel tortor sodales rutrum.
              Praesent a lorem quis neque luctus congue volutpat nec erat.
              Vivamus augue leo, tristique ut malesuada in, sagittis eget odio.
              Curabitur egestas metus eu sem consectetur, et aliquet enim
              sagittis. Pellentesque sit amet blandit enim. Sed risus purus,
              commodo id ex ut, rutrum tempus eros. Curabitur ante mauris,
              pellentesque nec tempus ac, luctus ut orci. Praesent non leo quis
              sem tincidunt imperdiet. Cras mattis est nec odio porttitor
              finibus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Duis metus nibh, pretium a mi nec, lacinia efficitur mi.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque sodales sagittis quam, id imperdiet neque fringilla
              sit amet. Aenean ut pretium elit. Nullam facilisis tincidunt
              ligula eget eleifend. Etiam placerat ligula mi, a aliquam nisl
              egestas nec. Maecenas scelerisque eros mi, quis accumsan lacus
              auctor quis. Etiam nec tellus at urna vulputate lacinia. Ut tempus
              gravida sem, quis eleifend orci. Nam vestibulum tempus nulla.
              Suspendisse urna diam, dignissim ornare elit eget, volutpat
              faucibus felis. Quisque non molestie orci. Donec id faucibus dui,
              quis fermentum purus. Proin in dolor et odio consectetur ornare.
            </p>
            <p id="sub-section6">
              Ut tempus gravida sem, quis eleifend orci. Nam vestibulum tempus
              nulla. Suspendisse urna diam, dignissim ornare elit eget, volutpat
              faucibus felis. Quisque non molestie orci. Donec id faucibus dui,
              quis fermentum purus. Proin in dolor et odio consectetur ornare.
            </p>
          </Section>
        </Content>
      </Container>
    </div>
  );
}

export default MyPage;
