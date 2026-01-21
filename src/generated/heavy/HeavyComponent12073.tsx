'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12073<T> = T extends (infer U)[]
  ? DeepReadonlyArray12073<U>
  : T extends object
  ? DeepReadonlyObject12073<T>
  : T;

interface DeepReadonlyArray12073<T> extends ReadonlyArray<DeepReadonly12073<T>> {}

type DeepReadonlyObject12073<T> = {
  readonly [P in keyof T]: DeepReadonly12073<T[P]>;
};

type UnionToIntersection12073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12073<T> = UnionToIntersection12073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12073<T extends unknown[], V> = [...T, V];

type TuplifyUnion12073<T, L = LastOf12073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12073<TuplifyUnion12073<Exclude<T, L>>, L>;

type DeepPartial12073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12073<T[P]> }
  : T;

type Paths12073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12073<K, Paths12073<T[K], Prev12073[D]>> : never }[keyof T]
  : never;

type Prev12073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12073 {
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

type ConfigPaths12073 = Paths12073<NestedConfig12073>;

interface HeavyProps12073 {
  config: DeepPartial12073<NestedConfig12073>;
  path?: ConfigPaths12073;
}

const HeavyComponent12073 = memo(function HeavyComponent12073({ config }: HeavyProps12073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12073.displayName = 'HeavyComponent12073';
export default HeavyComponent12073;
