'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12161<T> = T extends (infer U)[]
  ? DeepReadonlyArray12161<U>
  : T extends object
  ? DeepReadonlyObject12161<T>
  : T;

interface DeepReadonlyArray12161<T> extends ReadonlyArray<DeepReadonly12161<T>> {}

type DeepReadonlyObject12161<T> = {
  readonly [P in keyof T]: DeepReadonly12161<T[P]>;
};

type UnionToIntersection12161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12161<T> = UnionToIntersection12161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12161<T extends unknown[], V> = [...T, V];

type TuplifyUnion12161<T, L = LastOf12161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12161<TuplifyUnion12161<Exclude<T, L>>, L>;

type DeepPartial12161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12161<T[P]> }
  : T;

type Paths12161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12161<K, Paths12161<T[K], Prev12161[D]>> : never }[keyof T]
  : never;

type Prev12161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12161 {
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

type ConfigPaths12161 = Paths12161<NestedConfig12161>;

interface HeavyProps12161 {
  config: DeepPartial12161<NestedConfig12161>;
  path?: ConfigPaths12161;
}

const HeavyComponent12161 = memo(function HeavyComponent12161({ config }: HeavyProps12161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12161.displayName = 'HeavyComponent12161';
export default HeavyComponent12161;
