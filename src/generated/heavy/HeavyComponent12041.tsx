'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12041<T> = T extends (infer U)[]
  ? DeepReadonlyArray12041<U>
  : T extends object
  ? DeepReadonlyObject12041<T>
  : T;

interface DeepReadonlyArray12041<T> extends ReadonlyArray<DeepReadonly12041<T>> {}

type DeepReadonlyObject12041<T> = {
  readonly [P in keyof T]: DeepReadonly12041<T[P]>;
};

type UnionToIntersection12041<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12041<T> = UnionToIntersection12041<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12041<T extends unknown[], V> = [...T, V];

type TuplifyUnion12041<T, L = LastOf12041<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12041<TuplifyUnion12041<Exclude<T, L>>, L>;

type DeepPartial12041<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12041<T[P]> }
  : T;

type Paths12041<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12041<K, Paths12041<T[K], Prev12041[D]>> : never }[keyof T]
  : never;

type Prev12041 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12041<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12041 {
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

type ConfigPaths12041 = Paths12041<NestedConfig12041>;

interface HeavyProps12041 {
  config: DeepPartial12041<NestedConfig12041>;
  path?: ConfigPaths12041;
}

const HeavyComponent12041 = memo(function HeavyComponent12041({ config }: HeavyProps12041) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12041) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12041 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12041: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12041.displayName = 'HeavyComponent12041';
export default HeavyComponent12041;
