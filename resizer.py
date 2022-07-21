import argparse
import sys
from cv2 import resize, imread, imwrite, IMREAD_UNCHANGED

parser = argparse.ArgumentParser()
parser.add_argument("--src", metavar="source",
                    help="Source folder of the Image files")
parser.add_argument("--dest", metavar="destinantion",
                    help="Destination folder of the Image files (Default: Source folder)")
parser.add_argument("--size", metavar="size", nargs='+', type=int,
                    help="Size of the new image(Width Height)")
args = parser.parse_args()


def resize_image(src, size, dest):
    img = imread(src, IMREAD_UNCHANGED)
    resized_img = resize(img, size)
    imwrite(dest, resized_img);



if args.src == None:
    sys.exit("Path source Folder Missing")

if args.dest == None:
    args.dest = args.src

if args.size == None:
    sys.exit("New image size missing.")

resize_image(args.src,args.size, args.dest)