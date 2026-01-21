'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12462<T> = T extends (infer U)[]
  ? DeepReadonlyArray12462<U>
  : T extends object
  ? DeepReadonlyObject12462<T>
  : T;

interface DeepReadonlyArray12462<T> extends ReadonlyArray<DeepReadonly12462<T>> {}

type DeepReadonlyObject12462<T> = {
  readonly [P in keyof T]: DeepReadonly12462<T[P]>;
};

type UnionToIntersection12462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12462<T> = UnionToIntersection12462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12462<T extends unknown[], V> = [...T, V];

type TuplifyUnion12462<T, L = LastOf12462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12462<TuplifyUnion12462<Exclude<T, L>>, L>;

type DeepPartial12462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12462<T[P]> }
  : T;

type Paths12462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12462<K, Paths12462<T[K], Prev12462[D]>> : never }[keyof T]
  : never;

type Prev12462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12462 {
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

type ConfigPaths12462 = Paths12462<NestedConfig12462>;

interface HeavyProps12462 {
  config: DeepPartial12462<NestedConfig12462>;
  path?: ConfigPaths12462;
}

const HeavyComponent12462 = memo(function HeavyComponent12462({ config }: HeavyProps12462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12462.displayName = 'HeavyComponent12462';
export default HeavyComponent12462;
