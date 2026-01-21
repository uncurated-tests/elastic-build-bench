'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5695<T> = T extends (infer U)[]
  ? DeepReadonlyArray5695<U>
  : T extends object
  ? DeepReadonlyObject5695<T>
  : T;

interface DeepReadonlyArray5695<T> extends ReadonlyArray<DeepReadonly5695<T>> {}

type DeepReadonlyObject5695<T> = {
  readonly [P in keyof T]: DeepReadonly5695<T[P]>;
};

type UnionToIntersection5695<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5695<T> = UnionToIntersection5695<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5695<T extends unknown[], V> = [...T, V];

type TuplifyUnion5695<T, L = LastOf5695<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5695<TuplifyUnion5695<Exclude<T, L>>, L>;

type DeepPartial5695<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5695<T[P]> }
  : T;

type Paths5695<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5695<K, Paths5695<T[K], Prev5695[D]>> : never }[keyof T]
  : never;

type Prev5695 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5695<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5695 {
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

type ConfigPaths5695 = Paths5695<NestedConfig5695>;

interface HeavyProps5695 {
  config: DeepPartial5695<NestedConfig5695>;
  path?: ConfigPaths5695;
}

const HeavyComponent5695 = memo(function HeavyComponent5695({ config }: HeavyProps5695) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5695) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5695 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5695: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5695.displayName = 'HeavyComponent5695';
export default HeavyComponent5695;
