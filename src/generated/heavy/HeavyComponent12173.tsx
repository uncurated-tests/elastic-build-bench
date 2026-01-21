'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12173<T> = T extends (infer U)[]
  ? DeepReadonlyArray12173<U>
  : T extends object
  ? DeepReadonlyObject12173<T>
  : T;

interface DeepReadonlyArray12173<T> extends ReadonlyArray<DeepReadonly12173<T>> {}

type DeepReadonlyObject12173<T> = {
  readonly [P in keyof T]: DeepReadonly12173<T[P]>;
};

type UnionToIntersection12173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12173<T> = UnionToIntersection12173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12173<T extends unknown[], V> = [...T, V];

type TuplifyUnion12173<T, L = LastOf12173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12173<TuplifyUnion12173<Exclude<T, L>>, L>;

type DeepPartial12173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12173<T[P]> }
  : T;

type Paths12173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12173<K, Paths12173<T[K], Prev12173[D]>> : never }[keyof T]
  : never;

type Prev12173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12173 {
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

type ConfigPaths12173 = Paths12173<NestedConfig12173>;

interface HeavyProps12173 {
  config: DeepPartial12173<NestedConfig12173>;
  path?: ConfigPaths12173;
}

const HeavyComponent12173 = memo(function HeavyComponent12173({ config }: HeavyProps12173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12173.displayName = 'HeavyComponent12173';
export default HeavyComponent12173;
