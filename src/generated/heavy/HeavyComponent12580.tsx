'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12580<T> = T extends (infer U)[]
  ? DeepReadonlyArray12580<U>
  : T extends object
  ? DeepReadonlyObject12580<T>
  : T;

interface DeepReadonlyArray12580<T> extends ReadonlyArray<DeepReadonly12580<T>> {}

type DeepReadonlyObject12580<T> = {
  readonly [P in keyof T]: DeepReadonly12580<T[P]>;
};

type UnionToIntersection12580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12580<T> = UnionToIntersection12580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12580<T extends unknown[], V> = [...T, V];

type TuplifyUnion12580<T, L = LastOf12580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12580<TuplifyUnion12580<Exclude<T, L>>, L>;

type DeepPartial12580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12580<T[P]> }
  : T;

type Paths12580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12580<K, Paths12580<T[K], Prev12580[D]>> : never }[keyof T]
  : never;

type Prev12580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12580 {
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

type ConfigPaths12580 = Paths12580<NestedConfig12580>;

interface HeavyProps12580 {
  config: DeepPartial12580<NestedConfig12580>;
  path?: ConfigPaths12580;
}

const HeavyComponent12580 = memo(function HeavyComponent12580({ config }: HeavyProps12580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12580.displayName = 'HeavyComponent12580';
export default HeavyComponent12580;
