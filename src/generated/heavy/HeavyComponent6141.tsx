'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6141<T> = T extends (infer U)[]
  ? DeepReadonlyArray6141<U>
  : T extends object
  ? DeepReadonlyObject6141<T>
  : T;

interface DeepReadonlyArray6141<T> extends ReadonlyArray<DeepReadonly6141<T>> {}

type DeepReadonlyObject6141<T> = {
  readonly [P in keyof T]: DeepReadonly6141<T[P]>;
};

type UnionToIntersection6141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6141<T> = UnionToIntersection6141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6141<T extends unknown[], V> = [...T, V];

type TuplifyUnion6141<T, L = LastOf6141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6141<TuplifyUnion6141<Exclude<T, L>>, L>;

type DeepPartial6141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6141<T[P]> }
  : T;

type Paths6141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6141<K, Paths6141<T[K], Prev6141[D]>> : never }[keyof T]
  : never;

type Prev6141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6141 {
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

type ConfigPaths6141 = Paths6141<NestedConfig6141>;

interface HeavyProps6141 {
  config: DeepPartial6141<NestedConfig6141>;
  path?: ConfigPaths6141;
}

const HeavyComponent6141 = memo(function HeavyComponent6141({ config }: HeavyProps6141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6141.displayName = 'HeavyComponent6141';
export default HeavyComponent6141;
