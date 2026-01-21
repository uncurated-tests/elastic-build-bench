'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12413<T> = T extends (infer U)[]
  ? DeepReadonlyArray12413<U>
  : T extends object
  ? DeepReadonlyObject12413<T>
  : T;

interface DeepReadonlyArray12413<T> extends ReadonlyArray<DeepReadonly12413<T>> {}

type DeepReadonlyObject12413<T> = {
  readonly [P in keyof T]: DeepReadonly12413<T[P]>;
};

type UnionToIntersection12413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12413<T> = UnionToIntersection12413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12413<T extends unknown[], V> = [...T, V];

type TuplifyUnion12413<T, L = LastOf12413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12413<TuplifyUnion12413<Exclude<T, L>>, L>;

type DeepPartial12413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12413<T[P]> }
  : T;

type Paths12413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12413<K, Paths12413<T[K], Prev12413[D]>> : never }[keyof T]
  : never;

type Prev12413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12413 {
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

type ConfigPaths12413 = Paths12413<NestedConfig12413>;

interface HeavyProps12413 {
  config: DeepPartial12413<NestedConfig12413>;
  path?: ConfigPaths12413;
}

const HeavyComponent12413 = memo(function HeavyComponent12413({ config }: HeavyProps12413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12413.displayName = 'HeavyComponent12413';
export default HeavyComponent12413;
