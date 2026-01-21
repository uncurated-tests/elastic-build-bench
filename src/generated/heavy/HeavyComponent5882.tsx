'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5882<T> = T extends (infer U)[]
  ? DeepReadonlyArray5882<U>
  : T extends object
  ? DeepReadonlyObject5882<T>
  : T;

interface DeepReadonlyArray5882<T> extends ReadonlyArray<DeepReadonly5882<T>> {}

type DeepReadonlyObject5882<T> = {
  readonly [P in keyof T]: DeepReadonly5882<T[P]>;
};

type UnionToIntersection5882<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5882<T> = UnionToIntersection5882<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5882<T extends unknown[], V> = [...T, V];

type TuplifyUnion5882<T, L = LastOf5882<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5882<TuplifyUnion5882<Exclude<T, L>>, L>;

type DeepPartial5882<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5882<T[P]> }
  : T;

type Paths5882<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5882<K, Paths5882<T[K], Prev5882[D]>> : never }[keyof T]
  : never;

type Prev5882 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5882<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5882 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths5882 = Paths5882<NestedConfig5882>;

interface HeavyProps5882 {
  config: DeepPartial5882<NestedConfig5882>;
  path?: ConfigPaths5882;
}

const HeavyComponent5882 = memo(function HeavyComponent5882({ config }: HeavyProps5882) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5882) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5882 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5882: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5882.displayName = 'HeavyComponent5882';
export default HeavyComponent5882;
