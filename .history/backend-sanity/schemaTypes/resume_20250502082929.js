export default{
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
        {
          name: 'file',
          title: 'Resume File',
          type: 'document',
          options: {
            accept: '.pdf,.doc,.docx,',
          },
        },
      ],
}
