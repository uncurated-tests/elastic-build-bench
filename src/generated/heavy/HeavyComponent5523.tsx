'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5523<T> = T extends (infer U)[]
  ? DeepReadonlyArray5523<U>
  : T extends object
  ? DeepReadonlyObject5523<T>
  : T;

interface DeepReadonlyArray5523<T> extends ReadonlyArray<DeepReadonly5523<T>> {}

type DeepReadonlyObject5523<T> = {
  readonly [P in keyof T]: DeepReadonly5523<T[P]>;
};

type UnionToIntersection5523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5523<T> = UnionToIntersection5523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5523<T extends unknown[], V> = [...T, V];

type TuplifyUnion5523<T, L = LastOf5523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5523<TuplifyUnion5523<Exclude<T, L>>, L>;

type DeepPartial5523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5523<T[P]> }
  : T;

type Paths5523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5523<K, Paths5523<T[K], Prev5523[D]>> : never }[keyof T]
  : never;

type Prev5523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5523 {
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

type ConfigPaths5523 = Paths5523<NestedConfig5523>;

interface HeavyProps5523 {
  config: DeepPartial5523<NestedConfig5523>;
  path?: ConfigPaths5523;
}

const HeavyComponent5523 = memo(function HeavyComponent5523({ config }: HeavyProps5523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5523.displayName = 'HeavyComponent5523';
export default HeavyComponent5523;
