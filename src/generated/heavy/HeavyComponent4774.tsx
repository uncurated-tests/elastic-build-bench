'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4774<T> = T extends (infer U)[]
  ? DeepReadonlyArray4774<U>
  : T extends object
  ? DeepReadonlyObject4774<T>
  : T;

interface DeepReadonlyArray4774<T> extends ReadonlyArray<DeepReadonly4774<T>> {}

type DeepReadonlyObject4774<T> = {
  readonly [P in keyof T]: DeepReadonly4774<T[P]>;
};

type UnionToIntersection4774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4774<T> = UnionToIntersection4774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4774<T extends unknown[], V> = [...T, V];

type TuplifyUnion4774<T, L = LastOf4774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4774<TuplifyUnion4774<Exclude<T, L>>, L>;

type DeepPartial4774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4774<T[P]> }
  : T;

type Paths4774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4774<K, Paths4774<T[K], Prev4774[D]>> : never }[keyof T]
  : never;

type Prev4774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4774 {
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

type ConfigPaths4774 = Paths4774<NestedConfig4774>;

interface HeavyProps4774 {
  config: DeepPartial4774<NestedConfig4774>;
  path?: ConfigPaths4774;
}

const HeavyComponent4774 = memo(function HeavyComponent4774({ config }: HeavyProps4774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4774.displayName = 'HeavyComponent4774';
export default HeavyComponent4774;
