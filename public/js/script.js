function confirmDelete(articleId) {
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Esta ação não pode ser desfeita!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, excluir!',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#28a745',  // Cor verde para confirmar
        cancelButtonColor: '#dc3545',   // Cor vermelha para cancelar
        background: '#343a40', // Cor de fundo escura, para combinar com o seu tema
        customClass: {
            popup: 'swal-popup',  // Classe personalizada para o popup
            title: 'swal-title',  // Classe personalizada para o título
            content: 'swal-content',  // Classe personalizada para o conteúdo
            confirmButton: 'swal-confirm',  // Classe personalizada para o botão de confirmar
            cancelButton: 'swal-cancel',   // Classe personalizada para o botão de cancelar
        },
        didOpen: () => {
            // Personalizar o título ou outros elementos
            const titleElement = document.querySelector('.swal-title');
            titleElement.style.fontFamily = '"Arial", sans-serif';
            titleElement.style.fontWeight = 'bold';
        },
        didClose: () => {
            // Garantir que qualquer estilo dinâmico seja removido, se necessário
            const titleElement = document.querySelector('.swal-title');
            titleElement.style.fontWeight = 'normal';
        }
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('deleteForm-' + articleId).submit();  // Submete o formulário de exclusão
        }
    });
}
