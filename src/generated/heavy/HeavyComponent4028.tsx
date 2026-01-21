'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4028<T> = T extends (infer U)[]
  ? DeepReadonlyArray4028<U>
  : T extends object
  ? DeepReadonlyObject4028<T>
  : T;

interface DeepReadonlyArray4028<T> extends ReadonlyArray<DeepReadonly4028<T>> {}

type DeepReadonlyObject4028<T> = {
  readonly [P in keyof T]: DeepReadonly4028<T[P]>;
};

type UnionToIntersection4028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4028<T> = UnionToIntersection4028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4028<T extends unknown[], V> = [...T, V];

type TuplifyUnion4028<T, L = LastOf4028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4028<TuplifyUnion4028<Exclude<T, L>>, L>;

type DeepPartial4028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4028<T[P]> }
  : T;

type Paths4028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4028<K, Paths4028<T[K], Prev4028[D]>> : never }[keyof T]
  : never;

type Prev4028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4028 {
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

type ConfigPaths4028 = Paths4028<NestedConfig4028>;

interface HeavyProps4028 {
  config: DeepPartial4028<NestedConfig4028>;
  path?: ConfigPaths4028;
}

const HeavyComponent4028 = memo(function HeavyComponent4028({ config }: HeavyProps4028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4028.displayName = 'HeavyComponent4028';
export default HeavyComponent4028;
