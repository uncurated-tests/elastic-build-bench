'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12425<T> = T extends (infer U)[]
  ? DeepReadonlyArray12425<U>
  : T extends object
  ? DeepReadonlyObject12425<T>
  : T;

interface DeepReadonlyArray12425<T> extends ReadonlyArray<DeepReadonly12425<T>> {}

type DeepReadonlyObject12425<T> = {
  readonly [P in keyof T]: DeepReadonly12425<T[P]>;
};

type UnionToIntersection12425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12425<T> = UnionToIntersection12425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12425<T extends unknown[], V> = [...T, V];

type TuplifyUnion12425<T, L = LastOf12425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12425<TuplifyUnion12425<Exclude<T, L>>, L>;

type DeepPartial12425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12425<T[P]> }
  : T;

type Paths12425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12425<K, Paths12425<T[K], Prev12425[D]>> : never }[keyof T]
  : never;

type Prev12425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12425 {
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

type ConfigPaths12425 = Paths12425<NestedConfig12425>;

interface HeavyProps12425 {
  config: DeepPartial12425<NestedConfig12425>;
  path?: ConfigPaths12425;
}

const HeavyComponent12425 = memo(function HeavyComponent12425({ config }: HeavyProps12425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12425.displayName = 'HeavyComponent12425';
export default HeavyComponent12425;
