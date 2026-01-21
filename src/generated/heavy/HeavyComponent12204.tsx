'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12204<T> = T extends (infer U)[]
  ? DeepReadonlyArray12204<U>
  : T extends object
  ? DeepReadonlyObject12204<T>
  : T;

interface DeepReadonlyArray12204<T> extends ReadonlyArray<DeepReadonly12204<T>> {}

type DeepReadonlyObject12204<T> = {
  readonly [P in keyof T]: DeepReadonly12204<T[P]>;
};

type UnionToIntersection12204<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12204<T> = UnionToIntersection12204<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12204<T extends unknown[], V> = [...T, V];

type TuplifyUnion12204<T, L = LastOf12204<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12204<TuplifyUnion12204<Exclude<T, L>>, L>;

type DeepPartial12204<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12204<T[P]> }
  : T;

type Paths12204<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12204<K, Paths12204<T[K], Prev12204[D]>> : never }[keyof T]
  : never;

type Prev12204 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12204<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12204 {
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

type ConfigPaths12204 = Paths12204<NestedConfig12204>;

interface HeavyProps12204 {
  config: DeepPartial12204<NestedConfig12204>;
  path?: ConfigPaths12204;
}

const HeavyComponent12204 = memo(function HeavyComponent12204({ config }: HeavyProps12204) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12204) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12204 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12204: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12204.displayName = 'HeavyComponent12204';
export default HeavyComponent12204;
