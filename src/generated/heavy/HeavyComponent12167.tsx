'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12167<T> = T extends (infer U)[]
  ? DeepReadonlyArray12167<U>
  : T extends object
  ? DeepReadonlyObject12167<T>
  : T;

interface DeepReadonlyArray12167<T> extends ReadonlyArray<DeepReadonly12167<T>> {}

type DeepReadonlyObject12167<T> = {
  readonly [P in keyof T]: DeepReadonly12167<T[P]>;
};

type UnionToIntersection12167<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12167<T> = UnionToIntersection12167<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12167<T extends unknown[], V> = [...T, V];

type TuplifyUnion12167<T, L = LastOf12167<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12167<TuplifyUnion12167<Exclude<T, L>>, L>;

type DeepPartial12167<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12167<T[P]> }
  : T;

type Paths12167<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12167<K, Paths12167<T[K], Prev12167[D]>> : never }[keyof T]
  : never;

type Prev12167 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12167<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12167 {
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

type ConfigPaths12167 = Paths12167<NestedConfig12167>;

interface HeavyProps12167 {
  config: DeepPartial12167<NestedConfig12167>;
  path?: ConfigPaths12167;
}

const HeavyComponent12167 = memo(function HeavyComponent12167({ config }: HeavyProps12167) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12167) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12167 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12167: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12167.displayName = 'HeavyComponent12167';
export default HeavyComponent12167;
