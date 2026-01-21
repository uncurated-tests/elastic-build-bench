'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5972<T> = T extends (infer U)[]
  ? DeepReadonlyArray5972<U>
  : T extends object
  ? DeepReadonlyObject5972<T>
  : T;

interface DeepReadonlyArray5972<T> extends ReadonlyArray<DeepReadonly5972<T>> {}

type DeepReadonlyObject5972<T> = {
  readonly [P in keyof T]: DeepReadonly5972<T[P]>;
};

type UnionToIntersection5972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5972<T> = UnionToIntersection5972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5972<T extends unknown[], V> = [...T, V];

type TuplifyUnion5972<T, L = LastOf5972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5972<TuplifyUnion5972<Exclude<T, L>>, L>;

type DeepPartial5972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5972<T[P]> }
  : T;

type Paths5972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5972<K, Paths5972<T[K], Prev5972[D]>> : never }[keyof T]
  : never;

type Prev5972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5972 {
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

type ConfigPaths5972 = Paths5972<NestedConfig5972>;

interface HeavyProps5972 {
  config: DeepPartial5972<NestedConfig5972>;
  path?: ConfigPaths5972;
}

const HeavyComponent5972 = memo(function HeavyComponent5972({ config }: HeavyProps5972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5972.displayName = 'HeavyComponent5972';
export default HeavyComponent5972;
