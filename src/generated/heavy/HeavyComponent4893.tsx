'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4893<T> = T extends (infer U)[]
  ? DeepReadonlyArray4893<U>
  : T extends object
  ? DeepReadonlyObject4893<T>
  : T;

interface DeepReadonlyArray4893<T> extends ReadonlyArray<DeepReadonly4893<T>> {}

type DeepReadonlyObject4893<T> = {
  readonly [P in keyof T]: DeepReadonly4893<T[P]>;
};

type UnionToIntersection4893<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4893<T> = UnionToIntersection4893<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4893<T extends unknown[], V> = [...T, V];

type TuplifyUnion4893<T, L = LastOf4893<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4893<TuplifyUnion4893<Exclude<T, L>>, L>;

type DeepPartial4893<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4893<T[P]> }
  : T;

type Paths4893<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4893<K, Paths4893<T[K], Prev4893[D]>> : never }[keyof T]
  : never;

type Prev4893 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4893<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4893 {
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

type ConfigPaths4893 = Paths4893<NestedConfig4893>;

interface HeavyProps4893 {
  config: DeepPartial4893<NestedConfig4893>;
  path?: ConfigPaths4893;
}

const HeavyComponent4893 = memo(function HeavyComponent4893({ config }: HeavyProps4893) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4893) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4893 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4893: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4893.displayName = 'HeavyComponent4893';
export default HeavyComponent4893;
