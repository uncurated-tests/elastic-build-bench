'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6620<T> = T extends (infer U)[]
  ? DeepReadonlyArray6620<U>
  : T extends object
  ? DeepReadonlyObject6620<T>
  : T;

interface DeepReadonlyArray6620<T> extends ReadonlyArray<DeepReadonly6620<T>> {}

type DeepReadonlyObject6620<T> = {
  readonly [P in keyof T]: DeepReadonly6620<T[P]>;
};

type UnionToIntersection6620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6620<T> = UnionToIntersection6620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6620<T extends unknown[], V> = [...T, V];

type TuplifyUnion6620<T, L = LastOf6620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6620<TuplifyUnion6620<Exclude<T, L>>, L>;

type DeepPartial6620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6620<T[P]> }
  : T;

type Paths6620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6620<K, Paths6620<T[K], Prev6620[D]>> : never }[keyof T]
  : never;

type Prev6620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6620 {
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

type ConfigPaths6620 = Paths6620<NestedConfig6620>;

interface HeavyProps6620 {
  config: DeepPartial6620<NestedConfig6620>;
  path?: ConfigPaths6620;
}

const HeavyComponent6620 = memo(function HeavyComponent6620({ config }: HeavyProps6620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6620.displayName = 'HeavyComponent6620';
export default HeavyComponent6620;
