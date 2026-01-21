'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12070<T> = T extends (infer U)[]
  ? DeepReadonlyArray12070<U>
  : T extends object
  ? DeepReadonlyObject12070<T>
  : T;

interface DeepReadonlyArray12070<T> extends ReadonlyArray<DeepReadonly12070<T>> {}

type DeepReadonlyObject12070<T> = {
  readonly [P in keyof T]: DeepReadonly12070<T[P]>;
};

type UnionToIntersection12070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12070<T> = UnionToIntersection12070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12070<T extends unknown[], V> = [...T, V];

type TuplifyUnion12070<T, L = LastOf12070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12070<TuplifyUnion12070<Exclude<T, L>>, L>;

type DeepPartial12070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12070<T[P]> }
  : T;

type Paths12070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12070<K, Paths12070<T[K], Prev12070[D]>> : never }[keyof T]
  : never;

type Prev12070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12070 {
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

type ConfigPaths12070 = Paths12070<NestedConfig12070>;

interface HeavyProps12070 {
  config: DeepPartial12070<NestedConfig12070>;
  path?: ConfigPaths12070;
}

const HeavyComponent12070 = memo(function HeavyComponent12070({ config }: HeavyProps12070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12070.displayName = 'HeavyComponent12070';
export default HeavyComponent12070;
