'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12401<T> = T extends (infer U)[]
  ? DeepReadonlyArray12401<U>
  : T extends object
  ? DeepReadonlyObject12401<T>
  : T;

interface DeepReadonlyArray12401<T> extends ReadonlyArray<DeepReadonly12401<T>> {}

type DeepReadonlyObject12401<T> = {
  readonly [P in keyof T]: DeepReadonly12401<T[P]>;
};

type UnionToIntersection12401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12401<T> = UnionToIntersection12401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12401<T extends unknown[], V> = [...T, V];

type TuplifyUnion12401<T, L = LastOf12401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12401<TuplifyUnion12401<Exclude<T, L>>, L>;

type DeepPartial12401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12401<T[P]> }
  : T;

type Paths12401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12401<K, Paths12401<T[K], Prev12401[D]>> : never }[keyof T]
  : never;

type Prev12401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12401 {
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

type ConfigPaths12401 = Paths12401<NestedConfig12401>;

interface HeavyProps12401 {
  config: DeepPartial12401<NestedConfig12401>;
  path?: ConfigPaths12401;
}

const HeavyComponent12401 = memo(function HeavyComponent12401({ config }: HeavyProps12401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12401.displayName = 'HeavyComponent12401';
export default HeavyComponent12401;
