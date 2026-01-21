'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5413<T> = T extends (infer U)[]
  ? DeepReadonlyArray5413<U>
  : T extends object
  ? DeepReadonlyObject5413<T>
  : T;

interface DeepReadonlyArray5413<T> extends ReadonlyArray<DeepReadonly5413<T>> {}

type DeepReadonlyObject5413<T> = {
  readonly [P in keyof T]: DeepReadonly5413<T[P]>;
};

type UnionToIntersection5413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5413<T> = UnionToIntersection5413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5413<T extends unknown[], V> = [...T, V];

type TuplifyUnion5413<T, L = LastOf5413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5413<TuplifyUnion5413<Exclude<T, L>>, L>;

type DeepPartial5413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5413<T[P]> }
  : T;

type Paths5413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5413<K, Paths5413<T[K], Prev5413[D]>> : never }[keyof T]
  : never;

type Prev5413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5413 {
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

type ConfigPaths5413 = Paths5413<NestedConfig5413>;

interface HeavyProps5413 {
  config: DeepPartial5413<NestedConfig5413>;
  path?: ConfigPaths5413;
}

const HeavyComponent5413 = memo(function HeavyComponent5413({ config }: HeavyProps5413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5413.displayName = 'HeavyComponent5413';
export default HeavyComponent5413;
