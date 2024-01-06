// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use grepri::grep::grep_walker::GrepWalker;
use std::env;
use grepri::grep::result_writer::result_write;

#[tauri::command]
async fn grep(
  conditions_text: String,
  folder_paths_text: String,
  file_patterns_text: String,
  need_recurse: bool,
  need_case_sensitive: bool,
  is_regex: bool) -> String {
    let grep_walker = GrepWalker {
      conditions_text: conditions_text,
      folder_paths_text: folder_paths_text,
      file_patterns_text: file_patterns_text,
      need_recurse: need_recurse,
      need_case_sensitive: need_case_sensitive,
      is_regex: is_regex,
    };
    match grep_walker.get_results().await {
      Ok(x) => {
        let current_path = env::current_dir().unwrap();
        let save_path = current_path.join("result.txt");
        result_write(save_path, x);
        String::from("成功")
      },
      Err(e) => {
        e.to_string()
      }
    }
  }

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
          grep
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
