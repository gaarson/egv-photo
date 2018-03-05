import React from 'react';
import { connect } from 'react-redux';
import { mainScreen } from '../../actions';

import Section from './section/Section';
import Feedback from './feedback/Feedback';
import Photos from './photos/Photos';

const mapStateToProps = ({ mainSections, mainPhotos }) => ({
  mainSections,
  mainPhotos,
});

const mapDispatchToProps = dispatch => ({
  getMainPhotos: () => dispatch(mainScreen.pending()),
  slideShow: photos => dispatch(mainScreen.success(photos)),
});

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: setInterval(() => {
        if (this.props.mainPhotos.length)
          this.props.slideShow(this.props.mainPhotos);
      }, 6000),
    };
  }

  componentDidMount() {
    this.props.getMainPhotos();

    const { $ } = window;

    $(document).ready(() => {
      $('.arrowScroll').bind('click', function cb(e) {
        const anchor = $(this);
        console.log($(anchor.attr('href')));
        if ($(anchor.attr('href')).offset()) {
          $('html, body')
            .stop()
            .animate(
              {
                scrollTop: $(anchor.attr('href')).offset().top,
              },
              1000,
            );
          e.preventDefault();
        }
      });
      return false;
    });

    //$(document).scroll(() => {
    //const coord = $('.career').offset();
    //if (coord) {
    //const count = coord.top * 1.5;
    //if (
    //$(window).height() + $(window).scrollTop() >= coord.top * 1.5 &&
    //$(window).scrollTop() - count < 0
    //) {
    //$('.career').addClass('animation');
    //} else {
    //$('.career').removeClass('animation');
    //}
    //}
    //});

    //const coord = $('.aboutMe').offset();
    //if (coord) {
    //const count = coord.top * 1.25;
    //if (
    //$(window).height() + $(window).scrollTop() >= coord.top * 1.25 &&
    //$(window).scrollTop() - count < 0
    //) {
    //$('.aboutMe').addClass('animation');
    //} else {
    //$('.aboutMe').removeClass('animation');
    //}
    //}
    //});

    $(document).scroll(() => {
      const coord = $('.work').offset();
      if (coord) {
        const count = coord.top * 1.7;
        if (
          $(window).height() + $(window).scrollTop() >= coord.top * 1.25 &&
          $(window).scrollTop() - count < 0
        ) {
          $('.work').addClass('animation');
        } else {
          $('.work').removeClass('animation');
        }
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <Section mainSections={this.props.mainSections} />
        <Photos />
        <Feedback />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
