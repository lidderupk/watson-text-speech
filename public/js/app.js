(function() {
    var App = function() {
        this.initEvents();
        this.reqid = location.hash.replace('#', '') || '';
    }
    App.prototype = {
        initEvents: function() {
            $('#application_form').one('submit', function(e) {
                $('#form-submit').prop("disabled", true);
                e.preventDefault();
                $.ajax({
                    url: '/email',
                    crossDomain: true,
                    type: "POST",
                    data: this.getFormData()
                }).done(function(data) {
                    $('.cvportfolio').addClass('visible');
                    $('#application_form').html('<div style="color:white"><h2>Thanks, ' + $('#input-fullname').val() + '</h2><p>We\'ll be in touch via email about your request.</p></a></p></div>');
                }).error(function(data) {
                }).fail(function(xhr, status, error) {
                }).always(function(result) {
                });
                // return false;
            }.bind(this));
            $('.join-our-team').on('click', function(e) {
                $('html, body').animate({
                    scrollTop: $('#application').offset().top,
                }, 600);
                return false;
            });
            $('input, textarea').on('change', function(e) {
                if (e.target.value) {
                    $(this).addClass('not-empty');
                } else {
                    $(this).removeClass('not-empty');
                }
            })
        },  
        getFormData: function() {
            return {
                fullname: $('#input-fullname').val(),
                externalphone: $('#input-externalphone').val(),
                email: $('#input-email').val(),
                projectTitle: $('#input-projectname').val(),
                anythingelse: $('#input-anythingelse').val(),
                target: 'recruitment-dcstudio',
                source: 'Studio Website Form',
                reqid: this.reqid
            };
        }
    }
    $(function() { new App });
})();