'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6378<T> = T extends (infer U)[]
  ? DeepReadonlyArray6378<U>
  : T extends object
  ? DeepReadonlyObject6378<T>
  : T;

interface DeepReadonlyArray6378<T> extends ReadonlyArray<DeepReadonly6378<T>> {}

type DeepReadonlyObject6378<T> = {
  readonly [P in keyof T]: DeepReadonly6378<T[P]>;
};

type UnionToIntersection6378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6378<T> = UnionToIntersection6378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6378<T extends unknown[], V> = [...T, V];

type TuplifyUnion6378<T, L = LastOf6378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6378<TuplifyUnion6378<Exclude<T, L>>, L>;

type DeepPartial6378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6378<T[P]> }
  : T;

type Paths6378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6378<K, Paths6378<T[K], Prev6378[D]>> : never }[keyof T]
  : never;

type Prev6378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6378 {
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

type ConfigPaths6378 = Paths6378<NestedConfig6378>;

interface HeavyProps6378 {
  config: DeepPartial6378<NestedConfig6378>;
  path?: ConfigPaths6378;
}

const HeavyComponent6378 = memo(function HeavyComponent6378({ config }: HeavyProps6378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6378.displayName = 'HeavyComponent6378';
export default HeavyComponent6378;
