'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6915<T> = T extends (infer U)[]
  ? DeepReadonlyArray6915<U>
  : T extends object
  ? DeepReadonlyObject6915<T>
  : T;

interface DeepReadonlyArray6915<T> extends ReadonlyArray<DeepReadonly6915<T>> {}

type DeepReadonlyObject6915<T> = {
  readonly [P in keyof T]: DeepReadonly6915<T[P]>;
};

type UnionToIntersection6915<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6915<T> = UnionToIntersection6915<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6915<T extends unknown[], V> = [...T, V];

type TuplifyUnion6915<T, L = LastOf6915<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6915<TuplifyUnion6915<Exclude<T, L>>, L>;

type DeepPartial6915<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6915<T[P]> }
  : T;

type Paths6915<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6915<K, Paths6915<T[K], Prev6915[D]>> : never }[keyof T]
  : never;

type Prev6915 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6915<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6915 {
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

type ConfigPaths6915 = Paths6915<NestedConfig6915>;

interface HeavyProps6915 {
  config: DeepPartial6915<NestedConfig6915>;
  path?: ConfigPaths6915;
}

const HeavyComponent6915 = memo(function HeavyComponent6915({ config }: HeavyProps6915) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6915) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6915 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6915: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6915.displayName = 'HeavyComponent6915';
export default HeavyComponent6915;
