'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6441<T> = T extends (infer U)[]
  ? DeepReadonlyArray6441<U>
  : T extends object
  ? DeepReadonlyObject6441<T>
  : T;

interface DeepReadonlyArray6441<T> extends ReadonlyArray<DeepReadonly6441<T>> {}

type DeepReadonlyObject6441<T> = {
  readonly [P in keyof T]: DeepReadonly6441<T[P]>;
};

type UnionToIntersection6441<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6441<T> = UnionToIntersection6441<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6441<T extends unknown[], V> = [...T, V];

type TuplifyUnion6441<T, L = LastOf6441<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6441<TuplifyUnion6441<Exclude<T, L>>, L>;

type DeepPartial6441<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6441<T[P]> }
  : T;

type Paths6441<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6441<K, Paths6441<T[K], Prev6441[D]>> : never }[keyof T]
  : never;

type Prev6441 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6441<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6441 {
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

type ConfigPaths6441 = Paths6441<NestedConfig6441>;

interface HeavyProps6441 {
  config: DeepPartial6441<NestedConfig6441>;
  path?: ConfigPaths6441;
}

const HeavyComponent6441 = memo(function HeavyComponent6441({ config }: HeavyProps6441) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6441) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6441 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6441: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6441.displayName = 'HeavyComponent6441';
export default HeavyComponent6441;
