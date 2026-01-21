'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4007<T> = T extends (infer U)[]
  ? DeepReadonlyArray4007<U>
  : T extends object
  ? DeepReadonlyObject4007<T>
  : T;

interface DeepReadonlyArray4007<T> extends ReadonlyArray<DeepReadonly4007<T>> {}

type DeepReadonlyObject4007<T> = {
  readonly [P in keyof T]: DeepReadonly4007<T[P]>;
};

type UnionToIntersection4007<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4007<T> = UnionToIntersection4007<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4007<T extends unknown[], V> = [...T, V];

type TuplifyUnion4007<T, L = LastOf4007<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4007<TuplifyUnion4007<Exclude<T, L>>, L>;

type DeepPartial4007<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4007<T[P]> }
  : T;

type Paths4007<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4007<K, Paths4007<T[K], Prev4007[D]>> : never }[keyof T]
  : never;

type Prev4007 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4007<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4007 {
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

type ConfigPaths4007 = Paths4007<NestedConfig4007>;

interface HeavyProps4007 {
  config: DeepPartial4007<NestedConfig4007>;
  path?: ConfigPaths4007;
}

const HeavyComponent4007 = memo(function HeavyComponent4007({ config }: HeavyProps4007) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4007) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4007 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4007: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4007.displayName = 'HeavyComponent4007';
export default HeavyComponent4007;
