'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12944<T> = T extends (infer U)[]
  ? DeepReadonlyArray12944<U>
  : T extends object
  ? DeepReadonlyObject12944<T>
  : T;

interface DeepReadonlyArray12944<T> extends ReadonlyArray<DeepReadonly12944<T>> {}

type DeepReadonlyObject12944<T> = {
  readonly [P in keyof T]: DeepReadonly12944<T[P]>;
};

type UnionToIntersection12944<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12944<T> = UnionToIntersection12944<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12944<T extends unknown[], V> = [...T, V];

type TuplifyUnion12944<T, L = LastOf12944<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12944<TuplifyUnion12944<Exclude<T, L>>, L>;

type DeepPartial12944<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12944<T[P]> }
  : T;

type Paths12944<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12944<K, Paths12944<T[K], Prev12944[D]>> : never }[keyof T]
  : never;

type Prev12944 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12944<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12944 {
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

type ConfigPaths12944 = Paths12944<NestedConfig12944>;

interface HeavyProps12944 {
  config: DeepPartial12944<NestedConfig12944>;
  path?: ConfigPaths12944;
}

const HeavyComponent12944 = memo(function HeavyComponent12944({ config }: HeavyProps12944) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12944) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12944 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12944: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12944.displayName = 'HeavyComponent12944';
export default HeavyComponent12944;
