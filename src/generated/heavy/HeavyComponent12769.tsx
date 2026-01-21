'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12769<T> = T extends (infer U)[]
  ? DeepReadonlyArray12769<U>
  : T extends object
  ? DeepReadonlyObject12769<T>
  : T;

interface DeepReadonlyArray12769<T> extends ReadonlyArray<DeepReadonly12769<T>> {}

type DeepReadonlyObject12769<T> = {
  readonly [P in keyof T]: DeepReadonly12769<T[P]>;
};

type UnionToIntersection12769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12769<T> = UnionToIntersection12769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12769<T extends unknown[], V> = [...T, V];

type TuplifyUnion12769<T, L = LastOf12769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12769<TuplifyUnion12769<Exclude<T, L>>, L>;

type DeepPartial12769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12769<T[P]> }
  : T;

type Paths12769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12769<K, Paths12769<T[K], Prev12769[D]>> : never }[keyof T]
  : never;

type Prev12769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12769 {
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

type ConfigPaths12769 = Paths12769<NestedConfig12769>;

interface HeavyProps12769 {
  config: DeepPartial12769<NestedConfig12769>;
  path?: ConfigPaths12769;
}

const HeavyComponent12769 = memo(function HeavyComponent12769({ config }: HeavyProps12769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12769.displayName = 'HeavyComponent12769';
export default HeavyComponent12769;
