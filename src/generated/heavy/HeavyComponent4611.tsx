'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4611<T> = T extends (infer U)[]
  ? DeepReadonlyArray4611<U>
  : T extends object
  ? DeepReadonlyObject4611<T>
  : T;

interface DeepReadonlyArray4611<T> extends ReadonlyArray<DeepReadonly4611<T>> {}

type DeepReadonlyObject4611<T> = {
  readonly [P in keyof T]: DeepReadonly4611<T[P]>;
};

type UnionToIntersection4611<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4611<T> = UnionToIntersection4611<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4611<T extends unknown[], V> = [...T, V];

type TuplifyUnion4611<T, L = LastOf4611<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4611<TuplifyUnion4611<Exclude<T, L>>, L>;

type DeepPartial4611<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4611<T[P]> }
  : T;

type Paths4611<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4611<K, Paths4611<T[K], Prev4611[D]>> : never }[keyof T]
  : never;

type Prev4611 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4611<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4611 {
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

type ConfigPaths4611 = Paths4611<NestedConfig4611>;

interface HeavyProps4611 {
  config: DeepPartial4611<NestedConfig4611>;
  path?: ConfigPaths4611;
}

const HeavyComponent4611 = memo(function HeavyComponent4611({ config }: HeavyProps4611) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4611) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4611 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4611: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4611.displayName = 'HeavyComponent4611';
export default HeavyComponent4611;
