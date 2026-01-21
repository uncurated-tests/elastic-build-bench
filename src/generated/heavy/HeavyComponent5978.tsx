'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5978<T> = T extends (infer U)[]
  ? DeepReadonlyArray5978<U>
  : T extends object
  ? DeepReadonlyObject5978<T>
  : T;

interface DeepReadonlyArray5978<T> extends ReadonlyArray<DeepReadonly5978<T>> {}

type DeepReadonlyObject5978<T> = {
  readonly [P in keyof T]: DeepReadonly5978<T[P]>;
};

type UnionToIntersection5978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5978<T> = UnionToIntersection5978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5978<T extends unknown[], V> = [...T, V];

type TuplifyUnion5978<T, L = LastOf5978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5978<TuplifyUnion5978<Exclude<T, L>>, L>;

type DeepPartial5978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5978<T[P]> }
  : T;

type Paths5978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5978<K, Paths5978<T[K], Prev5978[D]>> : never }[keyof T]
  : never;

type Prev5978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5978 {
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

type ConfigPaths5978 = Paths5978<NestedConfig5978>;

interface HeavyProps5978 {
  config: DeepPartial5978<NestedConfig5978>;
  path?: ConfigPaths5978;
}

const HeavyComponent5978 = memo(function HeavyComponent5978({ config }: HeavyProps5978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5978.displayName = 'HeavyComponent5978';
export default HeavyComponent5978;
