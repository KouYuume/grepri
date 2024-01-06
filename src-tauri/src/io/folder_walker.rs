use super::folder::Folder;
use async_std::path::{PathBuf, Path};
use regex::Regex;

pub async fn get_match_all_filepaths(
  folder_paths: &Vec<&str>,
  file_patterns: &Vec<&str>,
  need_recurse: bool,
) -> Result<Vec<PathBuf>, std::io::Error> {
  let mut result = Vec::new();
  for folder_path in folder_paths {
      result.append(&mut get_match_filepaths(folder_path, file_patterns, need_recurse).await?);
  }
  Ok(result)
}

async fn get_match_filepaths(
  folder_path: &str,
  file_patterns: &Vec<&str>,
  need_recurse: bool,
) -> Result<Vec<PathBuf>, std::io::Error> {
  Ok(get_all_filepaths(&Path::new(folder_path), need_recurse).await?
      .into_iter()
      .filter(|p| is_match_file_pattern(p, file_patterns))
      .collect())
}

async fn get_all_filepaths(
  folderpath: &Path,
  need_recurse: bool,
) -> Result<Vec<PathBuf>, std::io::Error> {
  let folder = Folder::new(&Path::new(folderpath));
  folder.get_filepaths(need_recurse).await
}

fn is_match_file_pattern(pathbuf: &PathBuf, file_patterns: &Vec<&str>) -> bool {
  for file_pattern in file_patterns {
      let regex = Regex::new(file_pattern).unwrap();
      if !regex.is_match(pathbuf.to_str().unwrap()) {
          return false;
      };
  }
  true
}