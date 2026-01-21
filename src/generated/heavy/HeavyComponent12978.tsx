'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12978<T> = T extends (infer U)[]
  ? DeepReadonlyArray12978<U>
  : T extends object
  ? DeepReadonlyObject12978<T>
  : T;

interface DeepReadonlyArray12978<T> extends ReadonlyArray<DeepReadonly12978<T>> {}

type DeepReadonlyObject12978<T> = {
  readonly [P in keyof T]: DeepReadonly12978<T[P]>;
};

type UnionToIntersection12978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12978<T> = UnionToIntersection12978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12978<T extends unknown[], V> = [...T, V];

type TuplifyUnion12978<T, L = LastOf12978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12978<TuplifyUnion12978<Exclude<T, L>>, L>;

type DeepPartial12978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12978<T[P]> }
  : T;

type Paths12978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12978<K, Paths12978<T[K], Prev12978[D]>> : never }[keyof T]
  : never;

type Prev12978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12978 {
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

type ConfigPaths12978 = Paths12978<NestedConfig12978>;

interface HeavyProps12978 {
  config: DeepPartial12978<NestedConfig12978>;
  path?: ConfigPaths12978;
}

const HeavyComponent12978 = memo(function HeavyComponent12978({ config }: HeavyProps12978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12978.displayName = 'HeavyComponent12978';
export default HeavyComponent12978;
