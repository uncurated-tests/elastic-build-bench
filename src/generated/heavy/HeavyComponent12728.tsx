'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12728<T> = T extends (infer U)[]
  ? DeepReadonlyArray12728<U>
  : T extends object
  ? DeepReadonlyObject12728<T>
  : T;

interface DeepReadonlyArray12728<T> extends ReadonlyArray<DeepReadonly12728<T>> {}

type DeepReadonlyObject12728<T> = {
  readonly [P in keyof T]: DeepReadonly12728<T[P]>;
};

type UnionToIntersection12728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12728<T> = UnionToIntersection12728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12728<T extends unknown[], V> = [...T, V];

type TuplifyUnion12728<T, L = LastOf12728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12728<TuplifyUnion12728<Exclude<T, L>>, L>;

type DeepPartial12728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12728<T[P]> }
  : T;

type Paths12728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12728<K, Paths12728<T[K], Prev12728[D]>> : never }[keyof T]
  : never;

type Prev12728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12728 {
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

type ConfigPaths12728 = Paths12728<NestedConfig12728>;

interface HeavyProps12728 {
  config: DeepPartial12728<NestedConfig12728>;
  path?: ConfigPaths12728;
}

const HeavyComponent12728 = memo(function HeavyComponent12728({ config }: HeavyProps12728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12728.displayName = 'HeavyComponent12728';
export default HeavyComponent12728;
