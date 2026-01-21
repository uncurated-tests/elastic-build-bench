'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6396<T> = T extends (infer U)[]
  ? DeepReadonlyArray6396<U>
  : T extends object
  ? DeepReadonlyObject6396<T>
  : T;

interface DeepReadonlyArray6396<T> extends ReadonlyArray<DeepReadonly6396<T>> {}

type DeepReadonlyObject6396<T> = {
  readonly [P in keyof T]: DeepReadonly6396<T[P]>;
};

type UnionToIntersection6396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6396<T> = UnionToIntersection6396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6396<T extends unknown[], V> = [...T, V];

type TuplifyUnion6396<T, L = LastOf6396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6396<TuplifyUnion6396<Exclude<T, L>>, L>;

type DeepPartial6396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6396<T[P]> }
  : T;

type Paths6396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6396<K, Paths6396<T[K], Prev6396[D]>> : never }[keyof T]
  : never;

type Prev6396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6396 {
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

type ConfigPaths6396 = Paths6396<NestedConfig6396>;

interface HeavyProps6396 {
  config: DeepPartial6396<NestedConfig6396>;
  path?: ConfigPaths6396;
}

const HeavyComponent6396 = memo(function HeavyComponent6396({ config }: HeavyProps6396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6396.displayName = 'HeavyComponent6396';
export default HeavyComponent6396;
