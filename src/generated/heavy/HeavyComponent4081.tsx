'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4081<T> = T extends (infer U)[]
  ? DeepReadonlyArray4081<U>
  : T extends object
  ? DeepReadonlyObject4081<T>
  : T;

interface DeepReadonlyArray4081<T> extends ReadonlyArray<DeepReadonly4081<T>> {}

type DeepReadonlyObject4081<T> = {
  readonly [P in keyof T]: DeepReadonly4081<T[P]>;
};

type UnionToIntersection4081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4081<T> = UnionToIntersection4081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4081<T extends unknown[], V> = [...T, V];

type TuplifyUnion4081<T, L = LastOf4081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4081<TuplifyUnion4081<Exclude<T, L>>, L>;

type DeepPartial4081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4081<T[P]> }
  : T;

type Paths4081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4081<K, Paths4081<T[K], Prev4081[D]>> : never }[keyof T]
  : never;

type Prev4081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4081 {
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

type ConfigPaths4081 = Paths4081<NestedConfig4081>;

interface HeavyProps4081 {
  config: DeepPartial4081<NestedConfig4081>;
  path?: ConfigPaths4081;
}

const HeavyComponent4081 = memo(function HeavyComponent4081({ config }: HeavyProps4081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4081.displayName = 'HeavyComponent4081';
export default HeavyComponent4081;
