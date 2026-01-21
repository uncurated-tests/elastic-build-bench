'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6157<T> = T extends (infer U)[]
  ? DeepReadonlyArray6157<U>
  : T extends object
  ? DeepReadonlyObject6157<T>
  : T;

interface DeepReadonlyArray6157<T> extends ReadonlyArray<DeepReadonly6157<T>> {}

type DeepReadonlyObject6157<T> = {
  readonly [P in keyof T]: DeepReadonly6157<T[P]>;
};

type UnionToIntersection6157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6157<T> = UnionToIntersection6157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6157<T extends unknown[], V> = [...T, V];

type TuplifyUnion6157<T, L = LastOf6157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6157<TuplifyUnion6157<Exclude<T, L>>, L>;

type DeepPartial6157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6157<T[P]> }
  : T;

type Paths6157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6157<K, Paths6157<T[K], Prev6157[D]>> : never }[keyof T]
  : never;

type Prev6157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6157 {
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

type ConfigPaths6157 = Paths6157<NestedConfig6157>;

interface HeavyProps6157 {
  config: DeepPartial6157<NestedConfig6157>;
  path?: ConfigPaths6157;
}

const HeavyComponent6157 = memo(function HeavyComponent6157({ config }: HeavyProps6157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6157.displayName = 'HeavyComponent6157';
export default HeavyComponent6157;
