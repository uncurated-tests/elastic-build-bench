'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5355<T> = T extends (infer U)[]
  ? DeepReadonlyArray5355<U>
  : T extends object
  ? DeepReadonlyObject5355<T>
  : T;

interface DeepReadonlyArray5355<T> extends ReadonlyArray<DeepReadonly5355<T>> {}

type DeepReadonlyObject5355<T> = {
  readonly [P in keyof T]: DeepReadonly5355<T[P]>;
};

type UnionToIntersection5355<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5355<T> = UnionToIntersection5355<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5355<T extends unknown[], V> = [...T, V];

type TuplifyUnion5355<T, L = LastOf5355<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5355<TuplifyUnion5355<Exclude<T, L>>, L>;

type DeepPartial5355<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5355<T[P]> }
  : T;

type Paths5355<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5355<K, Paths5355<T[K], Prev5355[D]>> : never }[keyof T]
  : never;

type Prev5355 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5355<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5355 {
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

type ConfigPaths5355 = Paths5355<NestedConfig5355>;

interface HeavyProps5355 {
  config: DeepPartial5355<NestedConfig5355>;
  path?: ConfigPaths5355;
}

const HeavyComponent5355 = memo(function HeavyComponent5355({ config }: HeavyProps5355) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5355) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5355 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5355: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5355.displayName = 'HeavyComponent5355';
export default HeavyComponent5355;
