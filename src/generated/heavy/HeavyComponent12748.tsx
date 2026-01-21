'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12748<T> = T extends (infer U)[]
  ? DeepReadonlyArray12748<U>
  : T extends object
  ? DeepReadonlyObject12748<T>
  : T;

interface DeepReadonlyArray12748<T> extends ReadonlyArray<DeepReadonly12748<T>> {}

type DeepReadonlyObject12748<T> = {
  readonly [P in keyof T]: DeepReadonly12748<T[P]>;
};

type UnionToIntersection12748<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12748<T> = UnionToIntersection12748<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12748<T extends unknown[], V> = [...T, V];

type TuplifyUnion12748<T, L = LastOf12748<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12748<TuplifyUnion12748<Exclude<T, L>>, L>;

type DeepPartial12748<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12748<T[P]> }
  : T;

type Paths12748<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12748<K, Paths12748<T[K], Prev12748[D]>> : never }[keyof T]
  : never;

type Prev12748 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12748<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12748 {
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

type ConfigPaths12748 = Paths12748<NestedConfig12748>;

interface HeavyProps12748 {
  config: DeepPartial12748<NestedConfig12748>;
  path?: ConfigPaths12748;
}

const HeavyComponent12748 = memo(function HeavyComponent12748({ config }: HeavyProps12748) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12748) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12748 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12748: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12748.displayName = 'HeavyComponent12748';
export default HeavyComponent12748;
