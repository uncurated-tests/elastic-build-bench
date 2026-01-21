'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5880<T> = T extends (infer U)[]
  ? DeepReadonlyArray5880<U>
  : T extends object
  ? DeepReadonlyObject5880<T>
  : T;

interface DeepReadonlyArray5880<T> extends ReadonlyArray<DeepReadonly5880<T>> {}

type DeepReadonlyObject5880<T> = {
  readonly [P in keyof T]: DeepReadonly5880<T[P]>;
};

type UnionToIntersection5880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5880<T> = UnionToIntersection5880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5880<T extends unknown[], V> = [...T, V];

type TuplifyUnion5880<T, L = LastOf5880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5880<TuplifyUnion5880<Exclude<T, L>>, L>;

type DeepPartial5880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5880<T[P]> }
  : T;

type Paths5880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5880<K, Paths5880<T[K], Prev5880[D]>> : never }[keyof T]
  : never;

type Prev5880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5880 {
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

type ConfigPaths5880 = Paths5880<NestedConfig5880>;

interface HeavyProps5880 {
  config: DeepPartial5880<NestedConfig5880>;
  path?: ConfigPaths5880;
}

const HeavyComponent5880 = memo(function HeavyComponent5880({ config }: HeavyProps5880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5880.displayName = 'HeavyComponent5880';
export default HeavyComponent5880;
