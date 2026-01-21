'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6765<T> = T extends (infer U)[]
  ? DeepReadonlyArray6765<U>
  : T extends object
  ? DeepReadonlyObject6765<T>
  : T;

interface DeepReadonlyArray6765<T> extends ReadonlyArray<DeepReadonly6765<T>> {}

type DeepReadonlyObject6765<T> = {
  readonly [P in keyof T]: DeepReadonly6765<T[P]>;
};

type UnionToIntersection6765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6765<T> = UnionToIntersection6765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6765<T extends unknown[], V> = [...T, V];

type TuplifyUnion6765<T, L = LastOf6765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6765<TuplifyUnion6765<Exclude<T, L>>, L>;

type DeepPartial6765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6765<T[P]> }
  : T;

type Paths6765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6765<K, Paths6765<T[K], Prev6765[D]>> : never }[keyof T]
  : never;

type Prev6765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6765 {
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

type ConfigPaths6765 = Paths6765<NestedConfig6765>;

interface HeavyProps6765 {
  config: DeepPartial6765<NestedConfig6765>;
  path?: ConfigPaths6765;
}

const HeavyComponent6765 = memo(function HeavyComponent6765({ config }: HeavyProps6765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6765.displayName = 'HeavyComponent6765';
export default HeavyComponent6765;
