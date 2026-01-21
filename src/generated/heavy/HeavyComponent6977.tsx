'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6977<T> = T extends (infer U)[]
  ? DeepReadonlyArray6977<U>
  : T extends object
  ? DeepReadonlyObject6977<T>
  : T;

interface DeepReadonlyArray6977<T> extends ReadonlyArray<DeepReadonly6977<T>> {}

type DeepReadonlyObject6977<T> = {
  readonly [P in keyof T]: DeepReadonly6977<T[P]>;
};

type UnionToIntersection6977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6977<T> = UnionToIntersection6977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6977<T extends unknown[], V> = [...T, V];

type TuplifyUnion6977<T, L = LastOf6977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6977<TuplifyUnion6977<Exclude<T, L>>, L>;

type DeepPartial6977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6977<T[P]> }
  : T;

type Paths6977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6977<K, Paths6977<T[K], Prev6977[D]>> : never }[keyof T]
  : never;

type Prev6977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6977 {
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

type ConfigPaths6977 = Paths6977<NestedConfig6977>;

interface HeavyProps6977 {
  config: DeepPartial6977<NestedConfig6977>;
  path?: ConfigPaths6977;
}

const HeavyComponent6977 = memo(function HeavyComponent6977({ config }: HeavyProps6977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6977.displayName = 'HeavyComponent6977';
export default HeavyComponent6977;
