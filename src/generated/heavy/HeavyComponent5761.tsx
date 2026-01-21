'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5761<T> = T extends (infer U)[]
  ? DeepReadonlyArray5761<U>
  : T extends object
  ? DeepReadonlyObject5761<T>
  : T;

interface DeepReadonlyArray5761<T> extends ReadonlyArray<DeepReadonly5761<T>> {}

type DeepReadonlyObject5761<T> = {
  readonly [P in keyof T]: DeepReadonly5761<T[P]>;
};

type UnionToIntersection5761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5761<T> = UnionToIntersection5761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5761<T extends unknown[], V> = [...T, V];

type TuplifyUnion5761<T, L = LastOf5761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5761<TuplifyUnion5761<Exclude<T, L>>, L>;

type DeepPartial5761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5761<T[P]> }
  : T;

type Paths5761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5761<K, Paths5761<T[K], Prev5761[D]>> : never }[keyof T]
  : never;

type Prev5761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5761 {
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

type ConfigPaths5761 = Paths5761<NestedConfig5761>;

interface HeavyProps5761 {
  config: DeepPartial5761<NestedConfig5761>;
  path?: ConfigPaths5761;
}

const HeavyComponent5761 = memo(function HeavyComponent5761({ config }: HeavyProps5761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5761.displayName = 'HeavyComponent5761';
export default HeavyComponent5761;
