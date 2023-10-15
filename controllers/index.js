exports.home = (req, res) => {
    res.render('home', { 
        title: 'Home' 
    }
    );
};

exports.about = (req, res) => {
    res.render('about', { 
        title: 'About Me' 
    }
        );
};

exports.projects = (req, res) => {
    res.render('projects', { 
        title: 'Projects' }
        );
};

exports.contact = (req, res) => {
    res.render('contact', { 
        title: 'Contact Me' }
        );
};