'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12903<T> = T extends (infer U)[]
  ? DeepReadonlyArray12903<U>
  : T extends object
  ? DeepReadonlyObject12903<T>
  : T;

interface DeepReadonlyArray12903<T> extends ReadonlyArray<DeepReadonly12903<T>> {}

type DeepReadonlyObject12903<T> = {
  readonly [P in keyof T]: DeepReadonly12903<T[P]>;
};

type UnionToIntersection12903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12903<T> = UnionToIntersection12903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12903<T extends unknown[], V> = [...T, V];

type TuplifyUnion12903<T, L = LastOf12903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12903<TuplifyUnion12903<Exclude<T, L>>, L>;

type DeepPartial12903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12903<T[P]> }
  : T;

type Paths12903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12903<K, Paths12903<T[K], Prev12903[D]>> : never }[keyof T]
  : never;

type Prev12903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12903 {
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

type ConfigPaths12903 = Paths12903<NestedConfig12903>;

interface HeavyProps12903 {
  config: DeepPartial12903<NestedConfig12903>;
  path?: ConfigPaths12903;
}

const HeavyComponent12903 = memo(function HeavyComponent12903({ config }: HeavyProps12903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12903.displayName = 'HeavyComponent12903';
export default HeavyComponent12903;
