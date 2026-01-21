'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6285<T> = T extends (infer U)[]
  ? DeepReadonlyArray6285<U>
  : T extends object
  ? DeepReadonlyObject6285<T>
  : T;

interface DeepReadonlyArray6285<T> extends ReadonlyArray<DeepReadonly6285<T>> {}

type DeepReadonlyObject6285<T> = {
  readonly [P in keyof T]: DeepReadonly6285<T[P]>;
};

type UnionToIntersection6285<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6285<T> = UnionToIntersection6285<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6285<T extends unknown[], V> = [...T, V];

type TuplifyUnion6285<T, L = LastOf6285<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6285<TuplifyUnion6285<Exclude<T, L>>, L>;

type DeepPartial6285<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6285<T[P]> }
  : T;

type Paths6285<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6285<K, Paths6285<T[K], Prev6285[D]>> : never }[keyof T]
  : never;

type Prev6285 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6285<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6285 {
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

type ConfigPaths6285 = Paths6285<NestedConfig6285>;

interface HeavyProps6285 {
  config: DeepPartial6285<NestedConfig6285>;
  path?: ConfigPaths6285;
}

const HeavyComponent6285 = memo(function HeavyComponent6285({ config }: HeavyProps6285) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6285) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6285 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6285: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6285.displayName = 'HeavyComponent6285';
export default HeavyComponent6285;
