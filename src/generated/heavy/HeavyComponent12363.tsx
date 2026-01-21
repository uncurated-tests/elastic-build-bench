'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12363<T> = T extends (infer U)[]
  ? DeepReadonlyArray12363<U>
  : T extends object
  ? DeepReadonlyObject12363<T>
  : T;

interface DeepReadonlyArray12363<T> extends ReadonlyArray<DeepReadonly12363<T>> {}

type DeepReadonlyObject12363<T> = {
  readonly [P in keyof T]: DeepReadonly12363<T[P]>;
};

type UnionToIntersection12363<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12363<T> = UnionToIntersection12363<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12363<T extends unknown[], V> = [...T, V];

type TuplifyUnion12363<T, L = LastOf12363<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12363<TuplifyUnion12363<Exclude<T, L>>, L>;

type DeepPartial12363<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12363<T[P]> }
  : T;

type Paths12363<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12363<K, Paths12363<T[K], Prev12363[D]>> : never }[keyof T]
  : never;

type Prev12363 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12363<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12363 {
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

type ConfigPaths12363 = Paths12363<NestedConfig12363>;

interface HeavyProps12363 {
  config: DeepPartial12363<NestedConfig12363>;
  path?: ConfigPaths12363;
}

const HeavyComponent12363 = memo(function HeavyComponent12363({ config }: HeavyProps12363) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12363) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12363 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12363: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12363.displayName = 'HeavyComponent12363';
export default HeavyComponent12363;
