'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6476<T> = T extends (infer U)[]
  ? DeepReadonlyArray6476<U>
  : T extends object
  ? DeepReadonlyObject6476<T>
  : T;

interface DeepReadonlyArray6476<T> extends ReadonlyArray<DeepReadonly6476<T>> {}

type DeepReadonlyObject6476<T> = {
  readonly [P in keyof T]: DeepReadonly6476<T[P]>;
};

type UnionToIntersection6476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6476<T> = UnionToIntersection6476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6476<T extends unknown[], V> = [...T, V];

type TuplifyUnion6476<T, L = LastOf6476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6476<TuplifyUnion6476<Exclude<T, L>>, L>;

type DeepPartial6476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6476<T[P]> }
  : T;

type Paths6476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6476<K, Paths6476<T[K], Prev6476[D]>> : never }[keyof T]
  : never;

type Prev6476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6476 {
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

type ConfigPaths6476 = Paths6476<NestedConfig6476>;

interface HeavyProps6476 {
  config: DeepPartial6476<NestedConfig6476>;
  path?: ConfigPaths6476;
}

const HeavyComponent6476 = memo(function HeavyComponent6476({ config }: HeavyProps6476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6476.displayName = 'HeavyComponent6476';
export default HeavyComponent6476;
