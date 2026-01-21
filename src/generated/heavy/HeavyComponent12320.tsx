'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12320<T> = T extends (infer U)[]
  ? DeepReadonlyArray12320<U>
  : T extends object
  ? DeepReadonlyObject12320<T>
  : T;

interface DeepReadonlyArray12320<T> extends ReadonlyArray<DeepReadonly12320<T>> {}

type DeepReadonlyObject12320<T> = {
  readonly [P in keyof T]: DeepReadonly12320<T[P]>;
};

type UnionToIntersection12320<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12320<T> = UnionToIntersection12320<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12320<T extends unknown[], V> = [...T, V];

type TuplifyUnion12320<T, L = LastOf12320<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12320<TuplifyUnion12320<Exclude<T, L>>, L>;

type DeepPartial12320<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12320<T[P]> }
  : T;

type Paths12320<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12320<K, Paths12320<T[K], Prev12320[D]>> : never }[keyof T]
  : never;

type Prev12320 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12320<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12320 {
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

type ConfigPaths12320 = Paths12320<NestedConfig12320>;

interface HeavyProps12320 {
  config: DeepPartial12320<NestedConfig12320>;
  path?: ConfigPaths12320;
}

const HeavyComponent12320 = memo(function HeavyComponent12320({ config }: HeavyProps12320) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12320) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12320 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12320: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12320.displayName = 'HeavyComponent12320';
export default HeavyComponent12320;
