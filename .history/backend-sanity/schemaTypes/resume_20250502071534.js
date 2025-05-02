export default{
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
        {
          name: 'file',
          title: 'Resume File',
          type: 'file',
          options: {
            accept: '.pdf,.doc,.docx,.png,.jpg,.svg',
          },
        },
      ],
}
