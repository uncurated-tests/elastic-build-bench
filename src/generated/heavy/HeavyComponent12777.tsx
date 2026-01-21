'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12777<T> = T extends (infer U)[]
  ? DeepReadonlyArray12777<U>
  : T extends object
  ? DeepReadonlyObject12777<T>
  : T;

interface DeepReadonlyArray12777<T> extends ReadonlyArray<DeepReadonly12777<T>> {}

type DeepReadonlyObject12777<T> = {
  readonly [P in keyof T]: DeepReadonly12777<T[P]>;
};

type UnionToIntersection12777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12777<T> = UnionToIntersection12777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12777<T extends unknown[], V> = [...T, V];

type TuplifyUnion12777<T, L = LastOf12777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12777<TuplifyUnion12777<Exclude<T, L>>, L>;

type DeepPartial12777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12777<T[P]> }
  : T;

type Paths12777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12777<K, Paths12777<T[K], Prev12777[D]>> : never }[keyof T]
  : never;

type Prev12777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12777 {
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

type ConfigPaths12777 = Paths12777<NestedConfig12777>;

interface HeavyProps12777 {
  config: DeepPartial12777<NestedConfig12777>;
  path?: ConfigPaths12777;
}

const HeavyComponent12777 = memo(function HeavyComponent12777({ config }: HeavyProps12777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12777.displayName = 'HeavyComponent12777';
export default HeavyComponent12777;
