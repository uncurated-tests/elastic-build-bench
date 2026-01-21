'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6505<T> = T extends (infer U)[]
  ? DeepReadonlyArray6505<U>
  : T extends object
  ? DeepReadonlyObject6505<T>
  : T;

interface DeepReadonlyArray6505<T> extends ReadonlyArray<DeepReadonly6505<T>> {}

type DeepReadonlyObject6505<T> = {
  readonly [P in keyof T]: DeepReadonly6505<T[P]>;
};

type UnionToIntersection6505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6505<T> = UnionToIntersection6505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6505<T extends unknown[], V> = [...T, V];

type TuplifyUnion6505<T, L = LastOf6505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6505<TuplifyUnion6505<Exclude<T, L>>, L>;

type DeepPartial6505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6505<T[P]> }
  : T;

type Paths6505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6505<K, Paths6505<T[K], Prev6505[D]>> : never }[keyof T]
  : never;

type Prev6505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6505 {
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

type ConfigPaths6505 = Paths6505<NestedConfig6505>;

interface HeavyProps6505 {
  config: DeepPartial6505<NestedConfig6505>;
  path?: ConfigPaths6505;
}

const HeavyComponent6505 = memo(function HeavyComponent6505({ config }: HeavyProps6505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6505.displayName = 'HeavyComponent6505';
export default HeavyComponent6505;
