'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6028<T> = T extends (infer U)[]
  ? DeepReadonlyArray6028<U>
  : T extends object
  ? DeepReadonlyObject6028<T>
  : T;

interface DeepReadonlyArray6028<T> extends ReadonlyArray<DeepReadonly6028<T>> {}

type DeepReadonlyObject6028<T> = {
  readonly [P in keyof T]: DeepReadonly6028<T[P]>;
};

type UnionToIntersection6028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6028<T> = UnionToIntersection6028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6028<T extends unknown[], V> = [...T, V];

type TuplifyUnion6028<T, L = LastOf6028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6028<TuplifyUnion6028<Exclude<T, L>>, L>;

type DeepPartial6028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6028<T[P]> }
  : T;

type Paths6028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6028<K, Paths6028<T[K], Prev6028[D]>> : never }[keyof T]
  : never;

type Prev6028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6028 {
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

type ConfigPaths6028 = Paths6028<NestedConfig6028>;

interface HeavyProps6028 {
  config: DeepPartial6028<NestedConfig6028>;
  path?: ConfigPaths6028;
}

const HeavyComponent6028 = memo(function HeavyComponent6028({ config }: HeavyProps6028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6028.displayName = 'HeavyComponent6028';
export default HeavyComponent6028;
