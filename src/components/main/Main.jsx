import React from 'react';

import Section from './section/Section';
import Feedback from './feedback/Feedback';
import Photos from './photos/Photos';

class Main extends React.Component {
  componentDidMount() {
    const { $ } = window;

    $(document).ready(() => {
      $('a[href*="#"]').bind('click', function cb(e) {
        const anchor = $(this);
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: $(anchor.attr('href')).offset().top,
            },
            1000,
          );
        e.preventDefault();
      });
      return false;
    });

    $(document).scroll(() => {
      const coord = $('.career').offset();
      const count = coord.top * 1.5;
      if (coord) {
        if (
          $(window).height() + $(window).scrollTop() >= coord.top * 1.5 &&
          $(window).scrollTop() - count < 0
        ) {
          $('.career').addClass('animation');
        } else {
          $('.career').removeClass('animation');
        }
      }
    });

    $(document).scroll(() => {
      const coord = $('.aboutMe').offset();
      const count = coord.top * 1.25;
      if (coord) {
        if (
          $(window).height() + $(window).scrollTop() >= coord.top * 1.25 &&
          $(window).scrollTop() - count < 0
        ) {
          $('.aboutMe').addClass('animation');
        } else {
          $('.aboutMe').removeClass('animation');
        }
      }
    });

    $(document).scroll(() => {
      const coord = $('.work').offset();
      const count = coord.top * 1.7;
      if (coord) {
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

  render() {
    return (
      <div>
        <Section />
        <Photos />
        <Feedback />
      </div>
    );
  }
}

export default Main;
