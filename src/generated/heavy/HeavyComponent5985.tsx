'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5985<T> = T extends (infer U)[]
  ? DeepReadonlyArray5985<U>
  : T extends object
  ? DeepReadonlyObject5985<T>
  : T;

interface DeepReadonlyArray5985<T> extends ReadonlyArray<DeepReadonly5985<T>> {}

type DeepReadonlyObject5985<T> = {
  readonly [P in keyof T]: DeepReadonly5985<T[P]>;
};

type UnionToIntersection5985<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5985<T> = UnionToIntersection5985<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5985<T extends unknown[], V> = [...T, V];

type TuplifyUnion5985<T, L = LastOf5985<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5985<TuplifyUnion5985<Exclude<T, L>>, L>;

type DeepPartial5985<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5985<T[P]> }
  : T;

type Paths5985<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5985<K, Paths5985<T[K], Prev5985[D]>> : never }[keyof T]
  : never;

type Prev5985 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5985<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5985 {
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

type ConfigPaths5985 = Paths5985<NestedConfig5985>;

interface HeavyProps5985 {
  config: DeepPartial5985<NestedConfig5985>;
  path?: ConfigPaths5985;
}

const HeavyComponent5985 = memo(function HeavyComponent5985({ config }: HeavyProps5985) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5985) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5985 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5985: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5985.displayName = 'HeavyComponent5985';
export default HeavyComponent5985;
