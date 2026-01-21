'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12302<T> = T extends (infer U)[]
  ? DeepReadonlyArray12302<U>
  : T extends object
  ? DeepReadonlyObject12302<T>
  : T;

interface DeepReadonlyArray12302<T> extends ReadonlyArray<DeepReadonly12302<T>> {}

type DeepReadonlyObject12302<T> = {
  readonly [P in keyof T]: DeepReadonly12302<T[P]>;
};

type UnionToIntersection12302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12302<T> = UnionToIntersection12302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12302<T extends unknown[], V> = [...T, V];

type TuplifyUnion12302<T, L = LastOf12302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12302<TuplifyUnion12302<Exclude<T, L>>, L>;

type DeepPartial12302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12302<T[P]> }
  : T;

type Paths12302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12302<K, Paths12302<T[K], Prev12302[D]>> : never }[keyof T]
  : never;

type Prev12302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12302 {
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

type ConfigPaths12302 = Paths12302<NestedConfig12302>;

interface HeavyProps12302 {
  config: DeepPartial12302<NestedConfig12302>;
  path?: ConfigPaths12302;
}

const HeavyComponent12302 = memo(function HeavyComponent12302({ config }: HeavyProps12302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12302.displayName = 'HeavyComponent12302';
export default HeavyComponent12302;
