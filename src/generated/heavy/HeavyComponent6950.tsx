'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6950<T> = T extends (infer U)[]
  ? DeepReadonlyArray6950<U>
  : T extends object
  ? DeepReadonlyObject6950<T>
  : T;

interface DeepReadonlyArray6950<T> extends ReadonlyArray<DeepReadonly6950<T>> {}

type DeepReadonlyObject6950<T> = {
  readonly [P in keyof T]: DeepReadonly6950<T[P]>;
};

type UnionToIntersection6950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6950<T> = UnionToIntersection6950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6950<T extends unknown[], V> = [...T, V];

type TuplifyUnion6950<T, L = LastOf6950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6950<TuplifyUnion6950<Exclude<T, L>>, L>;

type DeepPartial6950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6950<T[P]> }
  : T;

type Paths6950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6950<K, Paths6950<T[K], Prev6950[D]>> : never }[keyof T]
  : never;

type Prev6950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6950 {
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

type ConfigPaths6950 = Paths6950<NestedConfig6950>;

interface HeavyProps6950 {
  config: DeepPartial6950<NestedConfig6950>;
  path?: ConfigPaths6950;
}

const HeavyComponent6950 = memo(function HeavyComponent6950({ config }: HeavyProps6950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6950.displayName = 'HeavyComponent6950';
export default HeavyComponent6950;
