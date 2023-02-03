const app = {
init: function() {
        let imgProjectElement = document.getElementsByClassName('img-project');
        
        for (const img of imgProjectElement) {
            img.addEventListener('click', app.handleClick);
        }
    },

    handleClick: function(e) {
        let projectImg = e.target;
        let projectInfo = projectImg.nextElementSibling;
        
        projectInfo.classList.toggle('hidden');
    }
}


document.addEventListener('DOMContentLoaded', app.init);