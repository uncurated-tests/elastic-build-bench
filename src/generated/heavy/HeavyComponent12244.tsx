'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12244<T> = T extends (infer U)[]
  ? DeepReadonlyArray12244<U>
  : T extends object
  ? DeepReadonlyObject12244<T>
  : T;

interface DeepReadonlyArray12244<T> extends ReadonlyArray<DeepReadonly12244<T>> {}

type DeepReadonlyObject12244<T> = {
  readonly [P in keyof T]: DeepReadonly12244<T[P]>;
};

type UnionToIntersection12244<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12244<T> = UnionToIntersection12244<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12244<T extends unknown[], V> = [...T, V];

type TuplifyUnion12244<T, L = LastOf12244<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12244<TuplifyUnion12244<Exclude<T, L>>, L>;

type DeepPartial12244<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12244<T[P]> }
  : T;

type Paths12244<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12244<K, Paths12244<T[K], Prev12244[D]>> : never }[keyof T]
  : never;

type Prev12244 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12244<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12244 {
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

type ConfigPaths12244 = Paths12244<NestedConfig12244>;

interface HeavyProps12244 {
  config: DeepPartial12244<NestedConfig12244>;
  path?: ConfigPaths12244;
}

const HeavyComponent12244 = memo(function HeavyComponent12244({ config }: HeavyProps12244) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12244) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12244 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12244: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12244.displayName = 'HeavyComponent12244';
export default HeavyComponent12244;
