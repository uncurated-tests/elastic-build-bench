'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6301<T> = T extends (infer U)[]
  ? DeepReadonlyArray6301<U>
  : T extends object
  ? DeepReadonlyObject6301<T>
  : T;

interface DeepReadonlyArray6301<T> extends ReadonlyArray<DeepReadonly6301<T>> {}

type DeepReadonlyObject6301<T> = {
  readonly [P in keyof T]: DeepReadonly6301<T[P]>;
};

type UnionToIntersection6301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6301<T> = UnionToIntersection6301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6301<T extends unknown[], V> = [...T, V];

type TuplifyUnion6301<T, L = LastOf6301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6301<TuplifyUnion6301<Exclude<T, L>>, L>;

type DeepPartial6301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6301<T[P]> }
  : T;

type Paths6301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6301<K, Paths6301<T[K], Prev6301[D]>> : never }[keyof T]
  : never;

type Prev6301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6301 {
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

type ConfigPaths6301 = Paths6301<NestedConfig6301>;

interface HeavyProps6301 {
  config: DeepPartial6301<NestedConfig6301>;
  path?: ConfigPaths6301;
}

const HeavyComponent6301 = memo(function HeavyComponent6301({ config }: HeavyProps6301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6301.displayName = 'HeavyComponent6301';
export default HeavyComponent6301;
