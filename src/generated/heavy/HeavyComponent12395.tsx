'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12395<T> = T extends (infer U)[]
  ? DeepReadonlyArray12395<U>
  : T extends object
  ? DeepReadonlyObject12395<T>
  : T;

interface DeepReadonlyArray12395<T> extends ReadonlyArray<DeepReadonly12395<T>> {}

type DeepReadonlyObject12395<T> = {
  readonly [P in keyof T]: DeepReadonly12395<T[P]>;
};

type UnionToIntersection12395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12395<T> = UnionToIntersection12395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12395<T extends unknown[], V> = [...T, V];

type TuplifyUnion12395<T, L = LastOf12395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12395<TuplifyUnion12395<Exclude<T, L>>, L>;

type DeepPartial12395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12395<T[P]> }
  : T;

type Paths12395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12395<K, Paths12395<T[K], Prev12395[D]>> : never }[keyof T]
  : never;

type Prev12395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12395 {
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

type ConfigPaths12395 = Paths12395<NestedConfig12395>;

interface HeavyProps12395 {
  config: DeepPartial12395<NestedConfig12395>;
  path?: ConfigPaths12395;
}

const HeavyComponent12395 = memo(function HeavyComponent12395({ config }: HeavyProps12395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12395.displayName = 'HeavyComponent12395';
export default HeavyComponent12395;
