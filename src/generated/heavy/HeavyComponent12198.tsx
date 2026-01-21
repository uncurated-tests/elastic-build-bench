'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12198<T> = T extends (infer U)[]
  ? DeepReadonlyArray12198<U>
  : T extends object
  ? DeepReadonlyObject12198<T>
  : T;

interface DeepReadonlyArray12198<T> extends ReadonlyArray<DeepReadonly12198<T>> {}

type DeepReadonlyObject12198<T> = {
  readonly [P in keyof T]: DeepReadonly12198<T[P]>;
};

type UnionToIntersection12198<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12198<T> = UnionToIntersection12198<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12198<T extends unknown[], V> = [...T, V];

type TuplifyUnion12198<T, L = LastOf12198<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12198<TuplifyUnion12198<Exclude<T, L>>, L>;

type DeepPartial12198<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12198<T[P]> }
  : T;

type Paths12198<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12198<K, Paths12198<T[K], Prev12198[D]>> : never }[keyof T]
  : never;

type Prev12198 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12198<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12198 {
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

type ConfigPaths12198 = Paths12198<NestedConfig12198>;

interface HeavyProps12198 {
  config: DeepPartial12198<NestedConfig12198>;
  path?: ConfigPaths12198;
}

const HeavyComponent12198 = memo(function HeavyComponent12198({ config }: HeavyProps12198) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12198) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12198 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12198: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12198.displayName = 'HeavyComponent12198';
export default HeavyComponent12198;
