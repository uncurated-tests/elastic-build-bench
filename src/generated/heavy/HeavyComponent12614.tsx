'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12614<T> = T extends (infer U)[]
  ? DeepReadonlyArray12614<U>
  : T extends object
  ? DeepReadonlyObject12614<T>
  : T;

interface DeepReadonlyArray12614<T> extends ReadonlyArray<DeepReadonly12614<T>> {}

type DeepReadonlyObject12614<T> = {
  readonly [P in keyof T]: DeepReadonly12614<T[P]>;
};

type UnionToIntersection12614<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12614<T> = UnionToIntersection12614<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12614<T extends unknown[], V> = [...T, V];

type TuplifyUnion12614<T, L = LastOf12614<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12614<TuplifyUnion12614<Exclude<T, L>>, L>;

type DeepPartial12614<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12614<T[P]> }
  : T;

type Paths12614<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12614<K, Paths12614<T[K], Prev12614[D]>> : never }[keyof T]
  : never;

type Prev12614 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12614<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12614 {
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

type ConfigPaths12614 = Paths12614<NestedConfig12614>;

interface HeavyProps12614 {
  config: DeepPartial12614<NestedConfig12614>;
  path?: ConfigPaths12614;
}

const HeavyComponent12614 = memo(function HeavyComponent12614({ config }: HeavyProps12614) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12614) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12614 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12614: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12614.displayName = 'HeavyComponent12614';
export default HeavyComponent12614;
