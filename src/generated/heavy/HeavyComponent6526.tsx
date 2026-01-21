'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6526<T> = T extends (infer U)[]
  ? DeepReadonlyArray6526<U>
  : T extends object
  ? DeepReadonlyObject6526<T>
  : T;

interface DeepReadonlyArray6526<T> extends ReadonlyArray<DeepReadonly6526<T>> {}

type DeepReadonlyObject6526<T> = {
  readonly [P in keyof T]: DeepReadonly6526<T[P]>;
};

type UnionToIntersection6526<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6526<T> = UnionToIntersection6526<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6526<T extends unknown[], V> = [...T, V];

type TuplifyUnion6526<T, L = LastOf6526<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6526<TuplifyUnion6526<Exclude<T, L>>, L>;

type DeepPartial6526<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6526<T[P]> }
  : T;

type Paths6526<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6526<K, Paths6526<T[K], Prev6526[D]>> : never }[keyof T]
  : never;

type Prev6526 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6526<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6526 {
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

type ConfigPaths6526 = Paths6526<NestedConfig6526>;

interface HeavyProps6526 {
  config: DeepPartial6526<NestedConfig6526>;
  path?: ConfigPaths6526;
}

const HeavyComponent6526 = memo(function HeavyComponent6526({ config }: HeavyProps6526) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6526) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6526 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6526: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6526.displayName = 'HeavyComponent6526';
export default HeavyComponent6526;
