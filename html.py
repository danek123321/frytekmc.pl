import os

def find_html_files(folder_path):
    html_files = []
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith('.html'):
                html_files.append(os.path.join(root, file))
    return html_files

def main():
    folder_path = input("Podaj ścieżkę do folderu, w którym chcesz znaleźć pliki HTML: ")
    html_files = find_html_files(folder_path)

    if html_files:
        print("Znalezione pliki HTML:")
        for file in html_files:
            print(file)
    else:
        print("Brak plików HTML w podanym folderze.")

if __name__ == "__main__":
    main()
