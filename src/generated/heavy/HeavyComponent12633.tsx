'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12633<T> = T extends (infer U)[]
  ? DeepReadonlyArray12633<U>
  : T extends object
  ? DeepReadonlyObject12633<T>
  : T;

interface DeepReadonlyArray12633<T> extends ReadonlyArray<DeepReadonly12633<T>> {}

type DeepReadonlyObject12633<T> = {
  readonly [P in keyof T]: DeepReadonly12633<T[P]>;
};

type UnionToIntersection12633<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12633<T> = UnionToIntersection12633<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12633<T extends unknown[], V> = [...T, V];

type TuplifyUnion12633<T, L = LastOf12633<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12633<TuplifyUnion12633<Exclude<T, L>>, L>;

type DeepPartial12633<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12633<T[P]> }
  : T;

type Paths12633<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12633<K, Paths12633<T[K], Prev12633[D]>> : never }[keyof T]
  : never;

type Prev12633 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12633<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12633 {
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

type ConfigPaths12633 = Paths12633<NestedConfig12633>;

interface HeavyProps12633 {
  config: DeepPartial12633<NestedConfig12633>;
  path?: ConfigPaths12633;
}

const HeavyComponent12633 = memo(function HeavyComponent12633({ config }: HeavyProps12633) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12633) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12633 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12633: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12633.displayName = 'HeavyComponent12633';
export default HeavyComponent12633;
