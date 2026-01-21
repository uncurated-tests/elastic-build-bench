'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12597<T> = T extends (infer U)[]
  ? DeepReadonlyArray12597<U>
  : T extends object
  ? DeepReadonlyObject12597<T>
  : T;

interface DeepReadonlyArray12597<T> extends ReadonlyArray<DeepReadonly12597<T>> {}

type DeepReadonlyObject12597<T> = {
  readonly [P in keyof T]: DeepReadonly12597<T[P]>;
};

type UnionToIntersection12597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12597<T> = UnionToIntersection12597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12597<T extends unknown[], V> = [...T, V];

type TuplifyUnion12597<T, L = LastOf12597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12597<TuplifyUnion12597<Exclude<T, L>>, L>;

type DeepPartial12597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12597<T[P]> }
  : T;

type Paths12597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12597<K, Paths12597<T[K], Prev12597[D]>> : never }[keyof T]
  : never;

type Prev12597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12597 {
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

type ConfigPaths12597 = Paths12597<NestedConfig12597>;

interface HeavyProps12597 {
  config: DeepPartial12597<NestedConfig12597>;
  path?: ConfigPaths12597;
}

const HeavyComponent12597 = memo(function HeavyComponent12597({ config }: HeavyProps12597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12597.displayName = 'HeavyComponent12597';
export default HeavyComponent12597;
