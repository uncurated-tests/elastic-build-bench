'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12900<T> = T extends (infer U)[]
  ? DeepReadonlyArray12900<U>
  : T extends object
  ? DeepReadonlyObject12900<T>
  : T;

interface DeepReadonlyArray12900<T> extends ReadonlyArray<DeepReadonly12900<T>> {}

type DeepReadonlyObject12900<T> = {
  readonly [P in keyof T]: DeepReadonly12900<T[P]>;
};

type UnionToIntersection12900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12900<T> = UnionToIntersection12900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12900<T extends unknown[], V> = [...T, V];

type TuplifyUnion12900<T, L = LastOf12900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12900<TuplifyUnion12900<Exclude<T, L>>, L>;

type DeepPartial12900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12900<T[P]> }
  : T;

type Paths12900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12900<K, Paths12900<T[K], Prev12900[D]>> : never }[keyof T]
  : never;

type Prev12900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12900 {
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

type ConfigPaths12900 = Paths12900<NestedConfig12900>;

interface HeavyProps12900 {
  config: DeepPartial12900<NestedConfig12900>;
  path?: ConfigPaths12900;
}

const HeavyComponent12900 = memo(function HeavyComponent12900({ config }: HeavyProps12900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12900.displayName = 'HeavyComponent12900';
export default HeavyComponent12900;
