'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6101<T> = T extends (infer U)[]
  ? DeepReadonlyArray6101<U>
  : T extends object
  ? DeepReadonlyObject6101<T>
  : T;

interface DeepReadonlyArray6101<T> extends ReadonlyArray<DeepReadonly6101<T>> {}

type DeepReadonlyObject6101<T> = {
  readonly [P in keyof T]: DeepReadonly6101<T[P]>;
};

type UnionToIntersection6101<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6101<T> = UnionToIntersection6101<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6101<T extends unknown[], V> = [...T, V];

type TuplifyUnion6101<T, L = LastOf6101<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6101<TuplifyUnion6101<Exclude<T, L>>, L>;

type DeepPartial6101<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6101<T[P]> }
  : T;

type Paths6101<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6101<K, Paths6101<T[K], Prev6101[D]>> : never }[keyof T]
  : never;

type Prev6101 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6101<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6101 {
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

type ConfigPaths6101 = Paths6101<NestedConfig6101>;

interface HeavyProps6101 {
  config: DeepPartial6101<NestedConfig6101>;
  path?: ConfigPaths6101;
}

const HeavyComponent6101 = memo(function HeavyComponent6101({ config }: HeavyProps6101) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6101) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6101 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6101: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6101.displayName = 'HeavyComponent6101';
export default HeavyComponent6101;
