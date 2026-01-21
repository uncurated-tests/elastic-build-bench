'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4380<T> = T extends (infer U)[]
  ? DeepReadonlyArray4380<U>
  : T extends object
  ? DeepReadonlyObject4380<T>
  : T;

interface DeepReadonlyArray4380<T> extends ReadonlyArray<DeepReadonly4380<T>> {}

type DeepReadonlyObject4380<T> = {
  readonly [P in keyof T]: DeepReadonly4380<T[P]>;
};

type UnionToIntersection4380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4380<T> = UnionToIntersection4380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4380<T extends unknown[], V> = [...T, V];

type TuplifyUnion4380<T, L = LastOf4380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4380<TuplifyUnion4380<Exclude<T, L>>, L>;

type DeepPartial4380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4380<T[P]> }
  : T;

type Paths4380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4380<K, Paths4380<T[K], Prev4380[D]>> : never }[keyof T]
  : never;

type Prev4380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4380 {
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

type ConfigPaths4380 = Paths4380<NestedConfig4380>;

interface HeavyProps4380 {
  config: DeepPartial4380<NestedConfig4380>;
  path?: ConfigPaths4380;
}

const HeavyComponent4380 = memo(function HeavyComponent4380({ config }: HeavyProps4380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4380.displayName = 'HeavyComponent4380';
export default HeavyComponent4380;
