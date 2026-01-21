'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6400<T> = T extends (infer U)[]
  ? DeepReadonlyArray6400<U>
  : T extends object
  ? DeepReadonlyObject6400<T>
  : T;

interface DeepReadonlyArray6400<T> extends ReadonlyArray<DeepReadonly6400<T>> {}

type DeepReadonlyObject6400<T> = {
  readonly [P in keyof T]: DeepReadonly6400<T[P]>;
};

type UnionToIntersection6400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6400<T> = UnionToIntersection6400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6400<T extends unknown[], V> = [...T, V];

type TuplifyUnion6400<T, L = LastOf6400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6400<TuplifyUnion6400<Exclude<T, L>>, L>;

type DeepPartial6400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6400<T[P]> }
  : T;

type Paths6400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6400<K, Paths6400<T[K], Prev6400[D]>> : never }[keyof T]
  : never;

type Prev6400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6400 {
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

type ConfigPaths6400 = Paths6400<NestedConfig6400>;

interface HeavyProps6400 {
  config: DeepPartial6400<NestedConfig6400>;
  path?: ConfigPaths6400;
}

const HeavyComponent6400 = memo(function HeavyComponent6400({ config }: HeavyProps6400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6400.displayName = 'HeavyComponent6400';
export default HeavyComponent6400;
