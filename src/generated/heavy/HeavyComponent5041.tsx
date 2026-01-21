'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5041<T> = T extends (infer U)[]
  ? DeepReadonlyArray5041<U>
  : T extends object
  ? DeepReadonlyObject5041<T>
  : T;

interface DeepReadonlyArray5041<T> extends ReadonlyArray<DeepReadonly5041<T>> {}

type DeepReadonlyObject5041<T> = {
  readonly [P in keyof T]: DeepReadonly5041<T[P]>;
};

type UnionToIntersection5041<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5041<T> = UnionToIntersection5041<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5041<T extends unknown[], V> = [...T, V];

type TuplifyUnion5041<T, L = LastOf5041<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5041<TuplifyUnion5041<Exclude<T, L>>, L>;

type DeepPartial5041<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5041<T[P]> }
  : T;

type Paths5041<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5041<K, Paths5041<T[K], Prev5041[D]>> : never }[keyof T]
  : never;

type Prev5041 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5041<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5041 {
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

type ConfigPaths5041 = Paths5041<NestedConfig5041>;

interface HeavyProps5041 {
  config: DeepPartial5041<NestedConfig5041>;
  path?: ConfigPaths5041;
}

const HeavyComponent5041 = memo(function HeavyComponent5041({ config }: HeavyProps5041) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5041) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5041 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5041: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5041.displayName = 'HeavyComponent5041';
export default HeavyComponent5041;
