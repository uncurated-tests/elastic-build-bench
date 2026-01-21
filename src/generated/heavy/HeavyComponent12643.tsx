'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12643<T> = T extends (infer U)[]
  ? DeepReadonlyArray12643<U>
  : T extends object
  ? DeepReadonlyObject12643<T>
  : T;

interface DeepReadonlyArray12643<T> extends ReadonlyArray<DeepReadonly12643<T>> {}

type DeepReadonlyObject12643<T> = {
  readonly [P in keyof T]: DeepReadonly12643<T[P]>;
};

type UnionToIntersection12643<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12643<T> = UnionToIntersection12643<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12643<T extends unknown[], V> = [...T, V];

type TuplifyUnion12643<T, L = LastOf12643<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12643<TuplifyUnion12643<Exclude<T, L>>, L>;

type DeepPartial12643<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12643<T[P]> }
  : T;

type Paths12643<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12643<K, Paths12643<T[K], Prev12643[D]>> : never }[keyof T]
  : never;

type Prev12643 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12643<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12643 {
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

type ConfigPaths12643 = Paths12643<NestedConfig12643>;

interface HeavyProps12643 {
  config: DeepPartial12643<NestedConfig12643>;
  path?: ConfigPaths12643;
}

const HeavyComponent12643 = memo(function HeavyComponent12643({ config }: HeavyProps12643) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12643) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12643 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12643: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12643.displayName = 'HeavyComponent12643';
export default HeavyComponent12643;
