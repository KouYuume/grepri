use async_std::{fs::{DirEntry, read_dir}, path::{Path, PathBuf}, stream::StreamExt};
use async_recursion::async_recursion;
use futures::executor;

pub struct Folder<'a> {
  path: &'a Path,
}

impl<'a> Folder<'a> {
  pub fn new(path:&'a Path) -> Self {
    Folder {
      path: path,
    }
  }

  pub async fn get_filepaths(&self, need_recurse:bool) -> Result<Vec<PathBuf>, std::io::Error> {
    let files = self.get_files(self.path, &need_recurse).await?;
    Ok(files.iter().map(|f| f.path()).collect())
  }

  #[async_recursion]
  async fn get_files(&self, folderpath: &Path, need_recurse: &bool) -> Result<Vec<DirEntry>, std::io::Error> {
    let mut files = Vec::new();
    let mut entries = read_dir(folderpath).await?;
    while let Some(res) = entries.next().await {
      let file = res?;
      let file_type = file.file_type().await?;
      if file_type.is_file() {
        files.push(file);
      } else if file_type.is_dir() {
        if !need_recurse { continue };
        files.append(&mut self.get_files(file.path().as_path(), need_recurse).await?);
      }
    }
    
    Ok(files)
  }
}

#[test]
fn test_get_files() {
    let t = Folder {
      path: Path::new("."),
    };
    let r = t.get_files(t.path, &true);
 
    for b in executor::block_on(r).unwrap() {
      println!("{}", b.path().as_path().to_string_lossy().to_string());
      println!("{}", executor::block_on(b.path().is_file()));
    }
    assert_eq!(1, 1);
}