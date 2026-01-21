'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5594<T> = T extends (infer U)[]
  ? DeepReadonlyArray5594<U>
  : T extends object
  ? DeepReadonlyObject5594<T>
  : T;

interface DeepReadonlyArray5594<T> extends ReadonlyArray<DeepReadonly5594<T>> {}

type DeepReadonlyObject5594<T> = {
  readonly [P in keyof T]: DeepReadonly5594<T[P]>;
};

type UnionToIntersection5594<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5594<T> = UnionToIntersection5594<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5594<T extends unknown[], V> = [...T, V];

type TuplifyUnion5594<T, L = LastOf5594<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5594<TuplifyUnion5594<Exclude<T, L>>, L>;

type DeepPartial5594<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5594<T[P]> }
  : T;

type Paths5594<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5594<K, Paths5594<T[K], Prev5594[D]>> : never }[keyof T]
  : never;

type Prev5594 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5594<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5594 {
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

type ConfigPaths5594 = Paths5594<NestedConfig5594>;

interface HeavyProps5594 {
  config: DeepPartial5594<NestedConfig5594>;
  path?: ConfigPaths5594;
}

const HeavyComponent5594 = memo(function HeavyComponent5594({ config }: HeavyProps5594) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5594) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5594 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5594: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5594.displayName = 'HeavyComponent5594';
export default HeavyComponent5594;
