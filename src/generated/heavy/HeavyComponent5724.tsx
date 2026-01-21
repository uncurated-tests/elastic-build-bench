'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5724<T> = T extends (infer U)[]
  ? DeepReadonlyArray5724<U>
  : T extends object
  ? DeepReadonlyObject5724<T>
  : T;

interface DeepReadonlyArray5724<T> extends ReadonlyArray<DeepReadonly5724<T>> {}

type DeepReadonlyObject5724<T> = {
  readonly [P in keyof T]: DeepReadonly5724<T[P]>;
};

type UnionToIntersection5724<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5724<T> = UnionToIntersection5724<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5724<T extends unknown[], V> = [...T, V];

type TuplifyUnion5724<T, L = LastOf5724<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5724<TuplifyUnion5724<Exclude<T, L>>, L>;

type DeepPartial5724<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5724<T[P]> }
  : T;

type Paths5724<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5724<K, Paths5724<T[K], Prev5724[D]>> : never }[keyof T]
  : never;

type Prev5724 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5724<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5724 {
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

type ConfigPaths5724 = Paths5724<NestedConfig5724>;

interface HeavyProps5724 {
  config: DeepPartial5724<NestedConfig5724>;
  path?: ConfigPaths5724;
}

const HeavyComponent5724 = memo(function HeavyComponent5724({ config }: HeavyProps5724) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5724) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5724 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5724: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5724.displayName = 'HeavyComponent5724';
export default HeavyComponent5724;
