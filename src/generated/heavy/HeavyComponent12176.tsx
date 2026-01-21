'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12176<T> = T extends (infer U)[]
  ? DeepReadonlyArray12176<U>
  : T extends object
  ? DeepReadonlyObject12176<T>
  : T;

interface DeepReadonlyArray12176<T> extends ReadonlyArray<DeepReadonly12176<T>> {}

type DeepReadonlyObject12176<T> = {
  readonly [P in keyof T]: DeepReadonly12176<T[P]>;
};

type UnionToIntersection12176<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12176<T> = UnionToIntersection12176<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12176<T extends unknown[], V> = [...T, V];

type TuplifyUnion12176<T, L = LastOf12176<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12176<TuplifyUnion12176<Exclude<T, L>>, L>;

type DeepPartial12176<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12176<T[P]> }
  : T;

type Paths12176<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12176<K, Paths12176<T[K], Prev12176[D]>> : never }[keyof T]
  : never;

type Prev12176 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12176<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12176 {
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

type ConfigPaths12176 = Paths12176<NestedConfig12176>;

interface HeavyProps12176 {
  config: DeepPartial12176<NestedConfig12176>;
  path?: ConfigPaths12176;
}

const HeavyComponent12176 = memo(function HeavyComponent12176({ config }: HeavyProps12176) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12176) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12176 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12176: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12176.displayName = 'HeavyComponent12176';
export default HeavyComponent12176;
