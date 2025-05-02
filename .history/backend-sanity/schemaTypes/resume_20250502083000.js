export default{
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
        {
          name: 'file',
          title: 'Resume File',
          type: 'array',
          options: {
            accept: '.pdf,.doc,.docx,',
          },
        },
      ],
}
