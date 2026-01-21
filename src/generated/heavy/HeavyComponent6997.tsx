'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6997<T> = T extends (infer U)[]
  ? DeepReadonlyArray6997<U>
  : T extends object
  ? DeepReadonlyObject6997<T>
  : T;

interface DeepReadonlyArray6997<T> extends ReadonlyArray<DeepReadonly6997<T>> {}

type DeepReadonlyObject6997<T> = {
  readonly [P in keyof T]: DeepReadonly6997<T[P]>;
};

type UnionToIntersection6997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6997<T> = UnionToIntersection6997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6997<T extends unknown[], V> = [...T, V];

type TuplifyUnion6997<T, L = LastOf6997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6997<TuplifyUnion6997<Exclude<T, L>>, L>;

type DeepPartial6997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6997<T[P]> }
  : T;

type Paths6997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6997<K, Paths6997<T[K], Prev6997[D]>> : never }[keyof T]
  : never;

type Prev6997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6997 {
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

type ConfigPaths6997 = Paths6997<NestedConfig6997>;

interface HeavyProps6997 {
  config: DeepPartial6997<NestedConfig6997>;
  path?: ConfigPaths6997;
}

const HeavyComponent6997 = memo(function HeavyComponent6997({ config }: HeavyProps6997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6997.displayName = 'HeavyComponent6997';
export default HeavyComponent6997;
