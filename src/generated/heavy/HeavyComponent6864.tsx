'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6864<T> = T extends (infer U)[]
  ? DeepReadonlyArray6864<U>
  : T extends object
  ? DeepReadonlyObject6864<T>
  : T;

interface DeepReadonlyArray6864<T> extends ReadonlyArray<DeepReadonly6864<T>> {}

type DeepReadonlyObject6864<T> = {
  readonly [P in keyof T]: DeepReadonly6864<T[P]>;
};

type UnionToIntersection6864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6864<T> = UnionToIntersection6864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6864<T extends unknown[], V> = [...T, V];

type TuplifyUnion6864<T, L = LastOf6864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6864<TuplifyUnion6864<Exclude<T, L>>, L>;

type DeepPartial6864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6864<T[P]> }
  : T;

type Paths6864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6864<K, Paths6864<T[K], Prev6864[D]>> : never }[keyof T]
  : never;

type Prev6864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6864 {
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

type ConfigPaths6864 = Paths6864<NestedConfig6864>;

interface HeavyProps6864 {
  config: DeepPartial6864<NestedConfig6864>;
  path?: ConfigPaths6864;
}

const HeavyComponent6864 = memo(function HeavyComponent6864({ config }: HeavyProps6864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6864.displayName = 'HeavyComponent6864';
export default HeavyComponent6864;
