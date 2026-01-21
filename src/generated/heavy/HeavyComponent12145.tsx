'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12145<T> = T extends (infer U)[]
  ? DeepReadonlyArray12145<U>
  : T extends object
  ? DeepReadonlyObject12145<T>
  : T;

interface DeepReadonlyArray12145<T> extends ReadonlyArray<DeepReadonly12145<T>> {}

type DeepReadonlyObject12145<T> = {
  readonly [P in keyof T]: DeepReadonly12145<T[P]>;
};

type UnionToIntersection12145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12145<T> = UnionToIntersection12145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12145<T extends unknown[], V> = [...T, V];

type TuplifyUnion12145<T, L = LastOf12145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12145<TuplifyUnion12145<Exclude<T, L>>, L>;

type DeepPartial12145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12145<T[P]> }
  : T;

type Paths12145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12145<K, Paths12145<T[K], Prev12145[D]>> : never }[keyof T]
  : never;

type Prev12145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12145 {
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

type ConfigPaths12145 = Paths12145<NestedConfig12145>;

interface HeavyProps12145 {
  config: DeepPartial12145<NestedConfig12145>;
  path?: ConfigPaths12145;
}

const HeavyComponent12145 = memo(function HeavyComponent12145({ config }: HeavyProps12145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12145.displayName = 'HeavyComponent12145';
export default HeavyComponent12145;
