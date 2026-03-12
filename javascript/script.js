$(document).ready(function() {
    // Adiciona um evento de clique ao botão de menu
  $('#mobile_btn').on('click', function() {
      $('#mobile_menu').toggleClass('active');
      $('#mobile_btn').find('i').toggleClass('fa-xmark - fa-bars ');
   });
     const sections = $('section');
     const navItems = $('.nav_item')
     $(window).on('scroll', function() {
        const header= $('header');
        let activeSectionIdenx =0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }
       
        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();
            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIdenx = i;
                return false;
            }
        }) 
        navItems.removeClass('active');
        $(navItems[activeSectionIdenx]).addClass('active');
     });

        ScrollReveal().reveal('#cta',{
            origin: 'left',
            distance: '2%',
            duration: 2000,
            delay: 200,
            reset: true
          });
        ScrollReveal().reveal('#dishes',{
            origin: 'left',
            distance: '2%',
            duration: 2000,
            delay: 200,
            reset: true


        })

          ScrollReveal().reveal('#testimonials',{
            origin: 'left',
            distance: '2%',
            duration: 2000,
            delay: 200,
            reset: true


        })

        ScrollReveal().reveal('#footer_items',{
            origin: 'left',
            distance: '2%',
            duration: 2000,
            delay: 200,
            reset: true


        })

         ScrollReveal().reveal('#banner',{
            origin: 'right',
            distance: '2%',
            duration: 2000,
            delay: 200,
            reset: true


        })
});