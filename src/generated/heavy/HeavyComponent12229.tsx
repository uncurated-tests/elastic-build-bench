'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12229<T> = T extends (infer U)[]
  ? DeepReadonlyArray12229<U>
  : T extends object
  ? DeepReadonlyObject12229<T>
  : T;

interface DeepReadonlyArray12229<T> extends ReadonlyArray<DeepReadonly12229<T>> {}

type DeepReadonlyObject12229<T> = {
  readonly [P in keyof T]: DeepReadonly12229<T[P]>;
};

type UnionToIntersection12229<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12229<T> = UnionToIntersection12229<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12229<T extends unknown[], V> = [...T, V];

type TuplifyUnion12229<T, L = LastOf12229<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12229<TuplifyUnion12229<Exclude<T, L>>, L>;

type DeepPartial12229<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12229<T[P]> }
  : T;

type Paths12229<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12229<K, Paths12229<T[K], Prev12229[D]>> : never }[keyof T]
  : never;

type Prev12229 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12229<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12229 {
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

type ConfigPaths12229 = Paths12229<NestedConfig12229>;

interface HeavyProps12229 {
  config: DeepPartial12229<NestedConfig12229>;
  path?: ConfigPaths12229;
}

const HeavyComponent12229 = memo(function HeavyComponent12229({ config }: HeavyProps12229) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12229) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12229 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12229: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12229.displayName = 'HeavyComponent12229';
export default HeavyComponent12229;
