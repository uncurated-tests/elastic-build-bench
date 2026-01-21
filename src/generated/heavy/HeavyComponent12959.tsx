'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12959<T> = T extends (infer U)[]
  ? DeepReadonlyArray12959<U>
  : T extends object
  ? DeepReadonlyObject12959<T>
  : T;

interface DeepReadonlyArray12959<T> extends ReadonlyArray<DeepReadonly12959<T>> {}

type DeepReadonlyObject12959<T> = {
  readonly [P in keyof T]: DeepReadonly12959<T[P]>;
};

type UnionToIntersection12959<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12959<T> = UnionToIntersection12959<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12959<T extends unknown[], V> = [...T, V];

type TuplifyUnion12959<T, L = LastOf12959<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12959<TuplifyUnion12959<Exclude<T, L>>, L>;

type DeepPartial12959<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12959<T[P]> }
  : T;

type Paths12959<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12959<K, Paths12959<T[K], Prev12959[D]>> : never }[keyof T]
  : never;

type Prev12959 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12959<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12959 {
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

type ConfigPaths12959 = Paths12959<NestedConfig12959>;

interface HeavyProps12959 {
  config: DeepPartial12959<NestedConfig12959>;
  path?: ConfigPaths12959;
}

const HeavyComponent12959 = memo(function HeavyComponent12959({ config }: HeavyProps12959) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12959) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12959 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12959: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12959.displayName = 'HeavyComponent12959';
export default HeavyComponent12959;
