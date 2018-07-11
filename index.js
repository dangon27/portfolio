var first= new Vue ({
    el: '#one',
    data: {
        title: 'blah',
        subtitle: 'blah',
        bio: 'blah',
        quote: 'blah',
        subtitle2: 'blah'
    }
    });

var second= new Vue ({
    el: '#signup-form',
    data: {
        name: 'ASDF',
        email: 'ASDF',
        subject:'ASDF',
        message:'ASDF'
    },

    methods: {
        processForm: function() {
            console.log({name: this.name, email: this.email, subject: this.subject, message: this.message});
            alert('Processing!');
        }
    }



})
    