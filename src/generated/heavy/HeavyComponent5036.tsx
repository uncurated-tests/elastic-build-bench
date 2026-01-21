'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5036<T> = T extends (infer U)[]
  ? DeepReadonlyArray5036<U>
  : T extends object
  ? DeepReadonlyObject5036<T>
  : T;

interface DeepReadonlyArray5036<T> extends ReadonlyArray<DeepReadonly5036<T>> {}

type DeepReadonlyObject5036<T> = {
  readonly [P in keyof T]: DeepReadonly5036<T[P]>;
};

type UnionToIntersection5036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5036<T> = UnionToIntersection5036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5036<T extends unknown[], V> = [...T, V];

type TuplifyUnion5036<T, L = LastOf5036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5036<TuplifyUnion5036<Exclude<T, L>>, L>;

type DeepPartial5036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5036<T[P]> }
  : T;

type Paths5036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5036<K, Paths5036<T[K], Prev5036[D]>> : never }[keyof T]
  : never;

type Prev5036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5036 {
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

type ConfigPaths5036 = Paths5036<NestedConfig5036>;

interface HeavyProps5036 {
  config: DeepPartial5036<NestedConfig5036>;
  path?: ConfigPaths5036;
}

const HeavyComponent5036 = memo(function HeavyComponent5036({ config }: HeavyProps5036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5036.displayName = 'HeavyComponent5036';
export default HeavyComponent5036;
