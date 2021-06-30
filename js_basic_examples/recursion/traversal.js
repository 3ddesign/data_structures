const filesystem = {
  documents: {
    files: ['tax.txt', 'resume.pdf', 'picture.png']
  },
  work: {
    urgent: {
      files: ['project-b.pdf']
    },
    lowPrio: {
      files: ['budget.xlsx']
    }
  }
};

console.log(getFilenames(filesystem));

function getFilenames(fs) {
  const allFiles = [];
  for (const identifier in fs) {
    if (Array.isArray(fs[identifier])) {
      allFiles.push(...fs[identifier]);
    } else {
      allFiles.push(...getFilenames(fs[identifier]));
    }
  }
  return allFiles;
}
