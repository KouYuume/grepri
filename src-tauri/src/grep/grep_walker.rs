use async_std::path::PathBuf;
use std::fs::File;
use std::io::{self, BufRead, Lines, BufReader};

use super::grep_result::GrepResult;
use super::super::io::folder_walker;

pub struct GrepWalker {
    pub conditions_text: String,
    pub folder_paths_text: String,
    pub file_patterns_text: String,
    pub need_recurse: bool,
    pub need_case_sensitive: bool,
    pub is_regex: bool,
}

impl GrepWalker {
    pub async fn get_results(&self) -> Result<Vec<GrepResult>, std::io::Error> {
        let conditions: Vec<&str> = self.conditions_text.split(',').map(|x| x.trim()).collect();

        let folder_paths: Vec<&str> = self
            .folder_paths_text
            .split(',')
            .map(|x| x.trim())
            .collect();

        let file_patterns: Vec<&str> = self
            .file_patterns_text
            .split(',')
            .map(|x| x.trim())
            .collect();

        let file_paths = 
          folder_walker::get_match_all_filepaths(&folder_paths, &file_patterns, self.need_recurse).await?;

        self.grep(conditions, file_paths)
    }

    fn grep(
      &self,
      conditions: Vec<&str>,
      file_paths: Vec<PathBuf>,
    ) -> Result<Vec<GrepResult>, std::io::Error> {
      let mut result = Vec::new();

      for file_path in file_paths {
        let path_string = file_path.to_string_lossy().to_string();
        let mut count: usize = 0;

        for line in self.read_file(file_path)? {
          if line.is_err() { continue };
          let line_text = line.unwrap();
          count += 1;

          if self.is_match_any_conditions(&line_text, &conditions) {
            result.push(GrepResult {
              file_path: path_string.clone(),
              row: count,
              match_text: line_text.clone(),
            });
          }
        }
      };

      Ok(result)
    }

    fn read_file(
      &self,
      file_path: PathBuf,
    ) -> Result<Lines<BufReader<File>>, std::io::Error> {
      let file = File::open(file_path)?;
      let reader = io::BufReader::new(file);
      Ok(reader.lines())
    }

    fn is_match_any_conditions(
      &self,
      line: &String,
      conditions: &Vec<&str>,
    ) -> bool {
      for condition in conditions.iter() {
        if line.contains(condition) { return true };
      }
      false
    }
  }
