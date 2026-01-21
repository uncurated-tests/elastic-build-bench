'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12301<T> = T extends (infer U)[]
  ? DeepReadonlyArray12301<U>
  : T extends object
  ? DeepReadonlyObject12301<T>
  : T;

interface DeepReadonlyArray12301<T> extends ReadonlyArray<DeepReadonly12301<T>> {}

type DeepReadonlyObject12301<T> = {
  readonly [P in keyof T]: DeepReadonly12301<T[P]>;
};

type UnionToIntersection12301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12301<T> = UnionToIntersection12301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12301<T extends unknown[], V> = [...T, V];

type TuplifyUnion12301<T, L = LastOf12301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12301<TuplifyUnion12301<Exclude<T, L>>, L>;

type DeepPartial12301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12301<T[P]> }
  : T;

type Paths12301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12301<K, Paths12301<T[K], Prev12301[D]>> : never }[keyof T]
  : never;

type Prev12301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12301 {
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

type ConfigPaths12301 = Paths12301<NestedConfig12301>;

interface HeavyProps12301 {
  config: DeepPartial12301<NestedConfig12301>;
  path?: ConfigPaths12301;
}

const HeavyComponent12301 = memo(function HeavyComponent12301({ config }: HeavyProps12301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12301.displayName = 'HeavyComponent12301';
export default HeavyComponent12301;
