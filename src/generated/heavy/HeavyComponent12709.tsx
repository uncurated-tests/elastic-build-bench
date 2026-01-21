'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12709<T> = T extends (infer U)[]
  ? DeepReadonlyArray12709<U>
  : T extends object
  ? DeepReadonlyObject12709<T>
  : T;

interface DeepReadonlyArray12709<T> extends ReadonlyArray<DeepReadonly12709<T>> {}

type DeepReadonlyObject12709<T> = {
  readonly [P in keyof T]: DeepReadonly12709<T[P]>;
};

type UnionToIntersection12709<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12709<T> = UnionToIntersection12709<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12709<T extends unknown[], V> = [...T, V];

type TuplifyUnion12709<T, L = LastOf12709<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12709<TuplifyUnion12709<Exclude<T, L>>, L>;

type DeepPartial12709<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12709<T[P]> }
  : T;

type Paths12709<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12709<K, Paths12709<T[K], Prev12709[D]>> : never }[keyof T]
  : never;

type Prev12709 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12709<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12709 {
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

type ConfigPaths12709 = Paths12709<NestedConfig12709>;

interface HeavyProps12709 {
  config: DeepPartial12709<NestedConfig12709>;
  path?: ConfigPaths12709;
}

const HeavyComponent12709 = memo(function HeavyComponent12709({ config }: HeavyProps12709) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12709) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12709 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12709: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12709.displayName = 'HeavyComponent12709';
export default HeavyComponent12709;
