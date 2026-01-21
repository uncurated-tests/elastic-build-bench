'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12107<T> = T extends (infer U)[]
  ? DeepReadonlyArray12107<U>
  : T extends object
  ? DeepReadonlyObject12107<T>
  : T;

interface DeepReadonlyArray12107<T> extends ReadonlyArray<DeepReadonly12107<T>> {}

type DeepReadonlyObject12107<T> = {
  readonly [P in keyof T]: DeepReadonly12107<T[P]>;
};

type UnionToIntersection12107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12107<T> = UnionToIntersection12107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12107<T extends unknown[], V> = [...T, V];

type TuplifyUnion12107<T, L = LastOf12107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12107<TuplifyUnion12107<Exclude<T, L>>, L>;

type DeepPartial12107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12107<T[P]> }
  : T;

type Paths12107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12107<K, Paths12107<T[K], Prev12107[D]>> : never }[keyof T]
  : never;

type Prev12107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12107 {
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

type ConfigPaths12107 = Paths12107<NestedConfig12107>;

interface HeavyProps12107 {
  config: DeepPartial12107<NestedConfig12107>;
  path?: ConfigPaths12107;
}

const HeavyComponent12107 = memo(function HeavyComponent12107({ config }: HeavyProps12107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12107.displayName = 'HeavyComponent12107';
export default HeavyComponent12107;
