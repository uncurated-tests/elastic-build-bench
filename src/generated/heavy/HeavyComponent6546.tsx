'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6546<T> = T extends (infer U)[]
  ? DeepReadonlyArray6546<U>
  : T extends object
  ? DeepReadonlyObject6546<T>
  : T;

interface DeepReadonlyArray6546<T> extends ReadonlyArray<DeepReadonly6546<T>> {}

type DeepReadonlyObject6546<T> = {
  readonly [P in keyof T]: DeepReadonly6546<T[P]>;
};

type UnionToIntersection6546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6546<T> = UnionToIntersection6546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6546<T extends unknown[], V> = [...T, V];

type TuplifyUnion6546<T, L = LastOf6546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6546<TuplifyUnion6546<Exclude<T, L>>, L>;

type DeepPartial6546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6546<T[P]> }
  : T;

type Paths6546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6546<K, Paths6546<T[K], Prev6546[D]>> : never }[keyof T]
  : never;

type Prev6546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6546 {
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

type ConfigPaths6546 = Paths6546<NestedConfig6546>;

interface HeavyProps6546 {
  config: DeepPartial6546<NestedConfig6546>;
  path?: ConfigPaths6546;
}

const HeavyComponent6546 = memo(function HeavyComponent6546({ config }: HeavyProps6546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6546.displayName = 'HeavyComponent6546';
export default HeavyComponent6546;
