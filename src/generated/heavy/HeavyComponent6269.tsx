'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6269<T> = T extends (infer U)[]
  ? DeepReadonlyArray6269<U>
  : T extends object
  ? DeepReadonlyObject6269<T>
  : T;

interface DeepReadonlyArray6269<T> extends ReadonlyArray<DeepReadonly6269<T>> {}

type DeepReadonlyObject6269<T> = {
  readonly [P in keyof T]: DeepReadonly6269<T[P]>;
};

type UnionToIntersection6269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6269<T> = UnionToIntersection6269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6269<T extends unknown[], V> = [...T, V];

type TuplifyUnion6269<T, L = LastOf6269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6269<TuplifyUnion6269<Exclude<T, L>>, L>;

type DeepPartial6269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6269<T[P]> }
  : T;

type Paths6269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6269<K, Paths6269<T[K], Prev6269[D]>> : never }[keyof T]
  : never;

type Prev6269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6269 {
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

type ConfigPaths6269 = Paths6269<NestedConfig6269>;

interface HeavyProps6269 {
  config: DeepPartial6269<NestedConfig6269>;
  path?: ConfigPaths6269;
}

const HeavyComponent6269 = memo(function HeavyComponent6269({ config }: HeavyProps6269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6269.displayName = 'HeavyComponent6269';
export default HeavyComponent6269;
