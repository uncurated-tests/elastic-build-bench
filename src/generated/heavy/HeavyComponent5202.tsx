'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5202<T> = T extends (infer U)[]
  ? DeepReadonlyArray5202<U>
  : T extends object
  ? DeepReadonlyObject5202<T>
  : T;

interface DeepReadonlyArray5202<T> extends ReadonlyArray<DeepReadonly5202<T>> {}

type DeepReadonlyObject5202<T> = {
  readonly [P in keyof T]: DeepReadonly5202<T[P]>;
};

type UnionToIntersection5202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5202<T> = UnionToIntersection5202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5202<T extends unknown[], V> = [...T, V];

type TuplifyUnion5202<T, L = LastOf5202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5202<TuplifyUnion5202<Exclude<T, L>>, L>;

type DeepPartial5202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5202<T[P]> }
  : T;

type Paths5202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5202<K, Paths5202<T[K], Prev5202[D]>> : never }[keyof T]
  : never;

type Prev5202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5202 {
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

type ConfigPaths5202 = Paths5202<NestedConfig5202>;

interface HeavyProps5202 {
  config: DeepPartial5202<NestedConfig5202>;
  path?: ConfigPaths5202;
}

const HeavyComponent5202 = memo(function HeavyComponent5202({ config }: HeavyProps5202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5202.displayName = 'HeavyComponent5202';
export default HeavyComponent5202;
