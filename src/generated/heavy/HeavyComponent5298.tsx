'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5298<T> = T extends (infer U)[]
  ? DeepReadonlyArray5298<U>
  : T extends object
  ? DeepReadonlyObject5298<T>
  : T;

interface DeepReadonlyArray5298<T> extends ReadonlyArray<DeepReadonly5298<T>> {}

type DeepReadonlyObject5298<T> = {
  readonly [P in keyof T]: DeepReadonly5298<T[P]>;
};

type UnionToIntersection5298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5298<T> = UnionToIntersection5298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5298<T extends unknown[], V> = [...T, V];

type TuplifyUnion5298<T, L = LastOf5298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5298<TuplifyUnion5298<Exclude<T, L>>, L>;

type DeepPartial5298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5298<T[P]> }
  : T;

type Paths5298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5298<K, Paths5298<T[K], Prev5298[D]>> : never }[keyof T]
  : never;

type Prev5298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5298 {
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

type ConfigPaths5298 = Paths5298<NestedConfig5298>;

interface HeavyProps5298 {
  config: DeepPartial5298<NestedConfig5298>;
  path?: ConfigPaths5298;
}

const HeavyComponent5298 = memo(function HeavyComponent5298({ config }: HeavyProps5298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5298.displayName = 'HeavyComponent5298';
export default HeavyComponent5298;
