'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6878<T> = T extends (infer U)[]
  ? DeepReadonlyArray6878<U>
  : T extends object
  ? DeepReadonlyObject6878<T>
  : T;

interface DeepReadonlyArray6878<T> extends ReadonlyArray<DeepReadonly6878<T>> {}

type DeepReadonlyObject6878<T> = {
  readonly [P in keyof T]: DeepReadonly6878<T[P]>;
};

type UnionToIntersection6878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6878<T> = UnionToIntersection6878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6878<T extends unknown[], V> = [...T, V];

type TuplifyUnion6878<T, L = LastOf6878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6878<TuplifyUnion6878<Exclude<T, L>>, L>;

type DeepPartial6878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6878<T[P]> }
  : T;

type Paths6878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6878<K, Paths6878<T[K], Prev6878[D]>> : never }[keyof T]
  : never;

type Prev6878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6878 {
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

type ConfigPaths6878 = Paths6878<NestedConfig6878>;

interface HeavyProps6878 {
  config: DeepPartial6878<NestedConfig6878>;
  path?: ConfigPaths6878;
}

const HeavyComponent6878 = memo(function HeavyComponent6878({ config }: HeavyProps6878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6878.displayName = 'HeavyComponent6878';
export default HeavyComponent6878;
