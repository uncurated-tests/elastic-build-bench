'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12955<T> = T extends (infer U)[]
  ? DeepReadonlyArray12955<U>
  : T extends object
  ? DeepReadonlyObject12955<T>
  : T;

interface DeepReadonlyArray12955<T> extends ReadonlyArray<DeepReadonly12955<T>> {}

type DeepReadonlyObject12955<T> = {
  readonly [P in keyof T]: DeepReadonly12955<T[P]>;
};

type UnionToIntersection12955<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12955<T> = UnionToIntersection12955<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12955<T extends unknown[], V> = [...T, V];

type TuplifyUnion12955<T, L = LastOf12955<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12955<TuplifyUnion12955<Exclude<T, L>>, L>;

type DeepPartial12955<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12955<T[P]> }
  : T;

type Paths12955<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12955<K, Paths12955<T[K], Prev12955[D]>> : never }[keyof T]
  : never;

type Prev12955 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12955<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12955 {
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

type ConfigPaths12955 = Paths12955<NestedConfig12955>;

interface HeavyProps12955 {
  config: DeepPartial12955<NestedConfig12955>;
  path?: ConfigPaths12955;
}

const HeavyComponent12955 = memo(function HeavyComponent12955({ config }: HeavyProps12955) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12955) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12955 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12955: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12955.displayName = 'HeavyComponent12955';
export default HeavyComponent12955;
