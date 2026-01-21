'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6462<T> = T extends (infer U)[]
  ? DeepReadonlyArray6462<U>
  : T extends object
  ? DeepReadonlyObject6462<T>
  : T;

interface DeepReadonlyArray6462<T> extends ReadonlyArray<DeepReadonly6462<T>> {}

type DeepReadonlyObject6462<T> = {
  readonly [P in keyof T]: DeepReadonly6462<T[P]>;
};

type UnionToIntersection6462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6462<T> = UnionToIntersection6462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6462<T extends unknown[], V> = [...T, V];

type TuplifyUnion6462<T, L = LastOf6462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6462<TuplifyUnion6462<Exclude<T, L>>, L>;

type DeepPartial6462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6462<T[P]> }
  : T;

type Paths6462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6462<K, Paths6462<T[K], Prev6462[D]>> : never }[keyof T]
  : never;

type Prev6462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6462 {
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

type ConfigPaths6462 = Paths6462<NestedConfig6462>;

interface HeavyProps6462 {
  config: DeepPartial6462<NestedConfig6462>;
  path?: ConfigPaths6462;
}

const HeavyComponent6462 = memo(function HeavyComponent6462({ config }: HeavyProps6462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6462.displayName = 'HeavyComponent6462';
export default HeavyComponent6462;
