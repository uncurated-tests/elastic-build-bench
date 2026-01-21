'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12096<T> = T extends (infer U)[]
  ? DeepReadonlyArray12096<U>
  : T extends object
  ? DeepReadonlyObject12096<T>
  : T;

interface DeepReadonlyArray12096<T> extends ReadonlyArray<DeepReadonly12096<T>> {}

type DeepReadonlyObject12096<T> = {
  readonly [P in keyof T]: DeepReadonly12096<T[P]>;
};

type UnionToIntersection12096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12096<T> = UnionToIntersection12096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12096<T extends unknown[], V> = [...T, V];

type TuplifyUnion12096<T, L = LastOf12096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12096<TuplifyUnion12096<Exclude<T, L>>, L>;

type DeepPartial12096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12096<T[P]> }
  : T;

type Paths12096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12096<K, Paths12096<T[K], Prev12096[D]>> : never }[keyof T]
  : never;

type Prev12096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12096 {
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

type ConfigPaths12096 = Paths12096<NestedConfig12096>;

interface HeavyProps12096 {
  config: DeepPartial12096<NestedConfig12096>;
  path?: ConfigPaths12096;
}

const HeavyComponent12096 = memo(function HeavyComponent12096({ config }: HeavyProps12096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12096.displayName = 'HeavyComponent12096';
export default HeavyComponent12096;
