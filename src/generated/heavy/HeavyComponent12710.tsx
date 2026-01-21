'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12710<T> = T extends (infer U)[]
  ? DeepReadonlyArray12710<U>
  : T extends object
  ? DeepReadonlyObject12710<T>
  : T;

interface DeepReadonlyArray12710<T> extends ReadonlyArray<DeepReadonly12710<T>> {}

type DeepReadonlyObject12710<T> = {
  readonly [P in keyof T]: DeepReadonly12710<T[P]>;
};

type UnionToIntersection12710<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12710<T> = UnionToIntersection12710<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12710<T extends unknown[], V> = [...T, V];

type TuplifyUnion12710<T, L = LastOf12710<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12710<TuplifyUnion12710<Exclude<T, L>>, L>;

type DeepPartial12710<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12710<T[P]> }
  : T;

type Paths12710<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12710<K, Paths12710<T[K], Prev12710[D]>> : never }[keyof T]
  : never;

type Prev12710 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12710<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12710 {
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

type ConfigPaths12710 = Paths12710<NestedConfig12710>;

interface HeavyProps12710 {
  config: DeepPartial12710<NestedConfig12710>;
  path?: ConfigPaths12710;
}

const HeavyComponent12710 = memo(function HeavyComponent12710({ config }: HeavyProps12710) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12710) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12710 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12710: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12710.displayName = 'HeavyComponent12710';
export default HeavyComponent12710;
