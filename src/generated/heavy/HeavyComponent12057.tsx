'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12057<T> = T extends (infer U)[]
  ? DeepReadonlyArray12057<U>
  : T extends object
  ? DeepReadonlyObject12057<T>
  : T;

interface DeepReadonlyArray12057<T> extends ReadonlyArray<DeepReadonly12057<T>> {}

type DeepReadonlyObject12057<T> = {
  readonly [P in keyof T]: DeepReadonly12057<T[P]>;
};

type UnionToIntersection12057<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12057<T> = UnionToIntersection12057<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12057<T extends unknown[], V> = [...T, V];

type TuplifyUnion12057<T, L = LastOf12057<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12057<TuplifyUnion12057<Exclude<T, L>>, L>;

type DeepPartial12057<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12057<T[P]> }
  : T;

type Paths12057<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12057<K, Paths12057<T[K], Prev12057[D]>> : never }[keyof T]
  : never;

type Prev12057 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12057<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12057 {
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

type ConfigPaths12057 = Paths12057<NestedConfig12057>;

interface HeavyProps12057 {
  config: DeepPartial12057<NestedConfig12057>;
  path?: ConfigPaths12057;
}

const HeavyComponent12057 = memo(function HeavyComponent12057({ config }: HeavyProps12057) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12057) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12057 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12057: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12057.displayName = 'HeavyComponent12057';
export default HeavyComponent12057;
