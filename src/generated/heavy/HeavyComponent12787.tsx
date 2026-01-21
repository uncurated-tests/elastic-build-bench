'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12787<T> = T extends (infer U)[]
  ? DeepReadonlyArray12787<U>
  : T extends object
  ? DeepReadonlyObject12787<T>
  : T;

interface DeepReadonlyArray12787<T> extends ReadonlyArray<DeepReadonly12787<T>> {}

type DeepReadonlyObject12787<T> = {
  readonly [P in keyof T]: DeepReadonly12787<T[P]>;
};

type UnionToIntersection12787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12787<T> = UnionToIntersection12787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12787<T extends unknown[], V> = [...T, V];

type TuplifyUnion12787<T, L = LastOf12787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12787<TuplifyUnion12787<Exclude<T, L>>, L>;

type DeepPartial12787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12787<T[P]> }
  : T;

type Paths12787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12787<K, Paths12787<T[K], Prev12787[D]>> : never }[keyof T]
  : never;

type Prev12787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12787 {
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

type ConfigPaths12787 = Paths12787<NestedConfig12787>;

interface HeavyProps12787 {
  config: DeepPartial12787<NestedConfig12787>;
  path?: ConfigPaths12787;
}

const HeavyComponent12787 = memo(function HeavyComponent12787({ config }: HeavyProps12787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12787.displayName = 'HeavyComponent12787';
export default HeavyComponent12787;
