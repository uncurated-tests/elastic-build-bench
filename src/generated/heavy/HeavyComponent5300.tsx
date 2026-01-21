'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5300<T> = T extends (infer U)[]
  ? DeepReadonlyArray5300<U>
  : T extends object
  ? DeepReadonlyObject5300<T>
  : T;

interface DeepReadonlyArray5300<T> extends ReadonlyArray<DeepReadonly5300<T>> {}

type DeepReadonlyObject5300<T> = {
  readonly [P in keyof T]: DeepReadonly5300<T[P]>;
};

type UnionToIntersection5300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5300<T> = UnionToIntersection5300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5300<T extends unknown[], V> = [...T, V];

type TuplifyUnion5300<T, L = LastOf5300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5300<TuplifyUnion5300<Exclude<T, L>>, L>;

type DeepPartial5300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5300<T[P]> }
  : T;

type Paths5300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5300<K, Paths5300<T[K], Prev5300[D]>> : never }[keyof T]
  : never;

type Prev5300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5300 {
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

type ConfigPaths5300 = Paths5300<NestedConfig5300>;

interface HeavyProps5300 {
  config: DeepPartial5300<NestedConfig5300>;
  path?: ConfigPaths5300;
}

const HeavyComponent5300 = memo(function HeavyComponent5300({ config }: HeavyProps5300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5300.displayName = 'HeavyComponent5300';
export default HeavyComponent5300;
