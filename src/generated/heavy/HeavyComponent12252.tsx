'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12252<T> = T extends (infer U)[]
  ? DeepReadonlyArray12252<U>
  : T extends object
  ? DeepReadonlyObject12252<T>
  : T;

interface DeepReadonlyArray12252<T> extends ReadonlyArray<DeepReadonly12252<T>> {}

type DeepReadonlyObject12252<T> = {
  readonly [P in keyof T]: DeepReadonly12252<T[P]>;
};

type UnionToIntersection12252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12252<T> = UnionToIntersection12252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12252<T extends unknown[], V> = [...T, V];

type TuplifyUnion12252<T, L = LastOf12252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12252<TuplifyUnion12252<Exclude<T, L>>, L>;

type DeepPartial12252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12252<T[P]> }
  : T;

type Paths12252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12252<K, Paths12252<T[K], Prev12252[D]>> : never }[keyof T]
  : never;

type Prev12252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12252 {
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

type ConfigPaths12252 = Paths12252<NestedConfig12252>;

interface HeavyProps12252 {
  config: DeepPartial12252<NestedConfig12252>;
  path?: ConfigPaths12252;
}

const HeavyComponent12252 = memo(function HeavyComponent12252({ config }: HeavyProps12252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12252.displayName = 'HeavyComponent12252';
export default HeavyComponent12252;
