'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12138<T> = T extends (infer U)[]
  ? DeepReadonlyArray12138<U>
  : T extends object
  ? DeepReadonlyObject12138<T>
  : T;

interface DeepReadonlyArray12138<T> extends ReadonlyArray<DeepReadonly12138<T>> {}

type DeepReadonlyObject12138<T> = {
  readonly [P in keyof T]: DeepReadonly12138<T[P]>;
};

type UnionToIntersection12138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12138<T> = UnionToIntersection12138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12138<T extends unknown[], V> = [...T, V];

type TuplifyUnion12138<T, L = LastOf12138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12138<TuplifyUnion12138<Exclude<T, L>>, L>;

type DeepPartial12138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12138<T[P]> }
  : T;

type Paths12138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12138<K, Paths12138<T[K], Prev12138[D]>> : never }[keyof T]
  : never;

type Prev12138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12138 {
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

type ConfigPaths12138 = Paths12138<NestedConfig12138>;

interface HeavyProps12138 {
  config: DeepPartial12138<NestedConfig12138>;
  path?: ConfigPaths12138;
}

const HeavyComponent12138 = memo(function HeavyComponent12138({ config }: HeavyProps12138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12138.displayName = 'HeavyComponent12138';
export default HeavyComponent12138;
