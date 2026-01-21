'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5491<T> = T extends (infer U)[]
  ? DeepReadonlyArray5491<U>
  : T extends object
  ? DeepReadonlyObject5491<T>
  : T;

interface DeepReadonlyArray5491<T> extends ReadonlyArray<DeepReadonly5491<T>> {}

type DeepReadonlyObject5491<T> = {
  readonly [P in keyof T]: DeepReadonly5491<T[P]>;
};

type UnionToIntersection5491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5491<T> = UnionToIntersection5491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5491<T extends unknown[], V> = [...T, V];

type TuplifyUnion5491<T, L = LastOf5491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5491<TuplifyUnion5491<Exclude<T, L>>, L>;

type DeepPartial5491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5491<T[P]> }
  : T;

type Paths5491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5491<K, Paths5491<T[K], Prev5491[D]>> : never }[keyof T]
  : never;

type Prev5491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5491 {
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

type ConfigPaths5491 = Paths5491<NestedConfig5491>;

interface HeavyProps5491 {
  config: DeepPartial5491<NestedConfig5491>;
  path?: ConfigPaths5491;
}

const HeavyComponent5491 = memo(function HeavyComponent5491({ config }: HeavyProps5491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5491.displayName = 'HeavyComponent5491';
export default HeavyComponent5491;
