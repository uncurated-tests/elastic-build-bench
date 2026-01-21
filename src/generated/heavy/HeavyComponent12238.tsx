'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12238<T> = T extends (infer U)[]
  ? DeepReadonlyArray12238<U>
  : T extends object
  ? DeepReadonlyObject12238<T>
  : T;

interface DeepReadonlyArray12238<T> extends ReadonlyArray<DeepReadonly12238<T>> {}

type DeepReadonlyObject12238<T> = {
  readonly [P in keyof T]: DeepReadonly12238<T[P]>;
};

type UnionToIntersection12238<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12238<T> = UnionToIntersection12238<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12238<T extends unknown[], V> = [...T, V];

type TuplifyUnion12238<T, L = LastOf12238<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12238<TuplifyUnion12238<Exclude<T, L>>, L>;

type DeepPartial12238<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12238<T[P]> }
  : T;

type Paths12238<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12238<K, Paths12238<T[K], Prev12238[D]>> : never }[keyof T]
  : never;

type Prev12238 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12238<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12238 {
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

type ConfigPaths12238 = Paths12238<NestedConfig12238>;

interface HeavyProps12238 {
  config: DeepPartial12238<NestedConfig12238>;
  path?: ConfigPaths12238;
}

const HeavyComponent12238 = memo(function HeavyComponent12238({ config }: HeavyProps12238) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12238) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12238 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12238: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12238.displayName = 'HeavyComponent12238';
export default HeavyComponent12238;
