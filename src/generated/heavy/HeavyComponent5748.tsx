'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5748<T> = T extends (infer U)[]
  ? DeepReadonlyArray5748<U>
  : T extends object
  ? DeepReadonlyObject5748<T>
  : T;

interface DeepReadonlyArray5748<T> extends ReadonlyArray<DeepReadonly5748<T>> {}

type DeepReadonlyObject5748<T> = {
  readonly [P in keyof T]: DeepReadonly5748<T[P]>;
};

type UnionToIntersection5748<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5748<T> = UnionToIntersection5748<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5748<T extends unknown[], V> = [...T, V];

type TuplifyUnion5748<T, L = LastOf5748<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5748<TuplifyUnion5748<Exclude<T, L>>, L>;

type DeepPartial5748<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5748<T[P]> }
  : T;

type Paths5748<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5748<K, Paths5748<T[K], Prev5748[D]>> : never }[keyof T]
  : never;

type Prev5748 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5748<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5748 {
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

type ConfigPaths5748 = Paths5748<NestedConfig5748>;

interface HeavyProps5748 {
  config: DeepPartial5748<NestedConfig5748>;
  path?: ConfigPaths5748;
}

const HeavyComponent5748 = memo(function HeavyComponent5748({ config }: HeavyProps5748) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5748) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5748 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5748: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5748.displayName = 'HeavyComponent5748';
export default HeavyComponent5748;
