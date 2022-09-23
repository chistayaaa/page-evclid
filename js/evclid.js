document.addEventListener('DOMContentLoaded', function(){

    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tabs__content').forEach(function(tabContent){
                tabContent.classList.remove('tabs__content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content-active')
        })
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
      });

    $(function () {
        $("#accordion").accordion({
        });
    });

    $(document).ready(function(){
        $('.ui-accordion > li > .ui-accordion-content').hide();
          
        $('.ui-accordion > li').click(function() {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".ui-accordion-content").slideUp(600);
          } else {
            $(".ui-accordion > li.ui-accordion-content .ui-accordion-content").slideUp(600);
            $(".ui-accordion > li.ui-accordion-content").removeClass("active");
            $(this).addClass("active").find(".ui-accordion-content").slideDown(600);
          }
          return false;
        });
        
      });
    
    $(document).ready(function(){
      $('.header__burger').click (function(event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('.header__nav-list').toggleClass('active');
      });
    });











})