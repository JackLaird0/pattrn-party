const tab_1 = $('.accordion1');
const tab_2 = $('.accordion2');
const tab_3 = $('.accordion3');
const tab_4 = $('.accordion4');

$(document).ready(function () {
  
})

const changeTab = (currentTab) => {
  if(currentTab === 'tab_1') {
    tab_1.attr()
    $('.panel-title')[0].innerText = 'Lorem ipsum dolor sit amet, consectetue'
    $('.panel-text')[0].innerText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
  } else if (currentTab === 'tab_2' ) {
    $('.panel-title')[0].innerText = 'Dorem dipsum dolor sit damet, donsectetue'
    $('.panel-text')[0].innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.'
  } else if (currentTab === 'tab_3' ) {
    $('.panel-title')[0].innerText = 'Chorem chipsum cholor sit chamet, chonsectetue'
    $('.panel-text')[0].innerText = 'Leu duo mazim dolorum, et sea debet mucius electram, vis quod ornatus torquatos ex. Sumo civibus usu no, duo tation sadipscing et. Vel an wisi solet, at eos nonumy docendi, ut mei semper commodo. Ne pro discere quaerendum cotidieque, vix ne ridens definitiones. Mel eu integre aliquando. '
  } else if (currentTab === 'tab_4' ) {
    $('.panel-title')[0].innerText = 'Norem nipsum nolor sit namet, nonsectetue'
    $('.panel-text')[0].innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.'
  }
}

tab_1.on('click', event => changeTab('tab_1'))
tab_2.on('click', event => changeTab('tab_2'))
tab_3.on('click', event => changeTab('tab_3'))
tab_4.on('click', event => changeTab('tab_4'))

