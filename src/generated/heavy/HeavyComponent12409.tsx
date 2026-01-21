'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12409<T> = T extends (infer U)[]
  ? DeepReadonlyArray12409<U>
  : T extends object
  ? DeepReadonlyObject12409<T>
  : T;

interface DeepReadonlyArray12409<T> extends ReadonlyArray<DeepReadonly12409<T>> {}

type DeepReadonlyObject12409<T> = {
  readonly [P in keyof T]: DeepReadonly12409<T[P]>;
};

type UnionToIntersection12409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12409<T> = UnionToIntersection12409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12409<T extends unknown[], V> = [...T, V];

type TuplifyUnion12409<T, L = LastOf12409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12409<TuplifyUnion12409<Exclude<T, L>>, L>;

type DeepPartial12409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12409<T[P]> }
  : T;

type Paths12409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12409<K, Paths12409<T[K], Prev12409[D]>> : never }[keyof T]
  : never;

type Prev12409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12409 {
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

type ConfigPaths12409 = Paths12409<NestedConfig12409>;

interface HeavyProps12409 {
  config: DeepPartial12409<NestedConfig12409>;
  path?: ConfigPaths12409;
}

const HeavyComponent12409 = memo(function HeavyComponent12409({ config }: HeavyProps12409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12409.displayName = 'HeavyComponent12409';
export default HeavyComponent12409;
