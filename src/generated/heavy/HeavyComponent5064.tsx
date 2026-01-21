'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5064<T> = T extends (infer U)[]
  ? DeepReadonlyArray5064<U>
  : T extends object
  ? DeepReadonlyObject5064<T>
  : T;

interface DeepReadonlyArray5064<T> extends ReadonlyArray<DeepReadonly5064<T>> {}

type DeepReadonlyObject5064<T> = {
  readonly [P in keyof T]: DeepReadonly5064<T[P]>;
};

type UnionToIntersection5064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5064<T> = UnionToIntersection5064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5064<T extends unknown[], V> = [...T, V];

type TuplifyUnion5064<T, L = LastOf5064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5064<TuplifyUnion5064<Exclude<T, L>>, L>;

type DeepPartial5064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5064<T[P]> }
  : T;

type Paths5064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5064<K, Paths5064<T[K], Prev5064[D]>> : never }[keyof T]
  : never;

type Prev5064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5064 {
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

type ConfigPaths5064 = Paths5064<NestedConfig5064>;

interface HeavyProps5064 {
  config: DeepPartial5064<NestedConfig5064>;
  path?: ConfigPaths5064;
}

const HeavyComponent5064 = memo(function HeavyComponent5064({ config }: HeavyProps5064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5064.displayName = 'HeavyComponent5064';
export default HeavyComponent5064;
