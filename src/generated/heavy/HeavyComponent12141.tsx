'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12141<T> = T extends (infer U)[]
  ? DeepReadonlyArray12141<U>
  : T extends object
  ? DeepReadonlyObject12141<T>
  : T;

interface DeepReadonlyArray12141<T> extends ReadonlyArray<DeepReadonly12141<T>> {}

type DeepReadonlyObject12141<T> = {
  readonly [P in keyof T]: DeepReadonly12141<T[P]>;
};

type UnionToIntersection12141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12141<T> = UnionToIntersection12141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12141<T extends unknown[], V> = [...T, V];

type TuplifyUnion12141<T, L = LastOf12141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12141<TuplifyUnion12141<Exclude<T, L>>, L>;

type DeepPartial12141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12141<T[P]> }
  : T;

type Paths12141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12141<K, Paths12141<T[K], Prev12141[D]>> : never }[keyof T]
  : never;

type Prev12141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12141 {
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

type ConfigPaths12141 = Paths12141<NestedConfig12141>;

interface HeavyProps12141 {
  config: DeepPartial12141<NestedConfig12141>;
  path?: ConfigPaths12141;
}

const HeavyComponent12141 = memo(function HeavyComponent12141({ config }: HeavyProps12141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12141.displayName = 'HeavyComponent12141';
export default HeavyComponent12141;
