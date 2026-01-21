'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12227<T> = T extends (infer U)[]
  ? DeepReadonlyArray12227<U>
  : T extends object
  ? DeepReadonlyObject12227<T>
  : T;

interface DeepReadonlyArray12227<T> extends ReadonlyArray<DeepReadonly12227<T>> {}

type DeepReadonlyObject12227<T> = {
  readonly [P in keyof T]: DeepReadonly12227<T[P]>;
};

type UnionToIntersection12227<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12227<T> = UnionToIntersection12227<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12227<T extends unknown[], V> = [...T, V];

type TuplifyUnion12227<T, L = LastOf12227<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12227<TuplifyUnion12227<Exclude<T, L>>, L>;

type DeepPartial12227<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12227<T[P]> }
  : T;

type Paths12227<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12227<K, Paths12227<T[K], Prev12227[D]>> : never }[keyof T]
  : never;

type Prev12227 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12227<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12227 {
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

type ConfigPaths12227 = Paths12227<NestedConfig12227>;

interface HeavyProps12227 {
  config: DeepPartial12227<NestedConfig12227>;
  path?: ConfigPaths12227;
}

const HeavyComponent12227 = memo(function HeavyComponent12227({ config }: HeavyProps12227) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12227) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12227 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12227: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12227.displayName = 'HeavyComponent12227';
export default HeavyComponent12227;
