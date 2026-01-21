'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12235<T> = T extends (infer U)[]
  ? DeepReadonlyArray12235<U>
  : T extends object
  ? DeepReadonlyObject12235<T>
  : T;

interface DeepReadonlyArray12235<T> extends ReadonlyArray<DeepReadonly12235<T>> {}

type DeepReadonlyObject12235<T> = {
  readonly [P in keyof T]: DeepReadonly12235<T[P]>;
};

type UnionToIntersection12235<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12235<T> = UnionToIntersection12235<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12235<T extends unknown[], V> = [...T, V];

type TuplifyUnion12235<T, L = LastOf12235<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12235<TuplifyUnion12235<Exclude<T, L>>, L>;

type DeepPartial12235<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12235<T[P]> }
  : T;

type Paths12235<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12235<K, Paths12235<T[K], Prev12235[D]>> : never }[keyof T]
  : never;

type Prev12235 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12235<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12235 {
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

type ConfigPaths12235 = Paths12235<NestedConfig12235>;

interface HeavyProps12235 {
  config: DeepPartial12235<NestedConfig12235>;
  path?: ConfigPaths12235;
}

const HeavyComponent12235 = memo(function HeavyComponent12235({ config }: HeavyProps12235) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12235) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12235 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12235: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12235.displayName = 'HeavyComponent12235';
export default HeavyComponent12235;
