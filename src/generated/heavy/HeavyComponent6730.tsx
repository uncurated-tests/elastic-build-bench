'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6730<T> = T extends (infer U)[]
  ? DeepReadonlyArray6730<U>
  : T extends object
  ? DeepReadonlyObject6730<T>
  : T;

interface DeepReadonlyArray6730<T> extends ReadonlyArray<DeepReadonly6730<T>> {}

type DeepReadonlyObject6730<T> = {
  readonly [P in keyof T]: DeepReadonly6730<T[P]>;
};

type UnionToIntersection6730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6730<T> = UnionToIntersection6730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6730<T extends unknown[], V> = [...T, V];

type TuplifyUnion6730<T, L = LastOf6730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6730<TuplifyUnion6730<Exclude<T, L>>, L>;

type DeepPartial6730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6730<T[P]> }
  : T;

type Paths6730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6730<K, Paths6730<T[K], Prev6730[D]>> : never }[keyof T]
  : never;

type Prev6730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6730 {
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

type ConfigPaths6730 = Paths6730<NestedConfig6730>;

interface HeavyProps6730 {
  config: DeepPartial6730<NestedConfig6730>;
  path?: ConfigPaths6730;
}

const HeavyComponent6730 = memo(function HeavyComponent6730({ config }: HeavyProps6730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6730.displayName = 'HeavyComponent6730';
export default HeavyComponent6730;
