'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6187<T> = T extends (infer U)[]
  ? DeepReadonlyArray6187<U>
  : T extends object
  ? DeepReadonlyObject6187<T>
  : T;

interface DeepReadonlyArray6187<T> extends ReadonlyArray<DeepReadonly6187<T>> {}

type DeepReadonlyObject6187<T> = {
  readonly [P in keyof T]: DeepReadonly6187<T[P]>;
};

type UnionToIntersection6187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6187<T> = UnionToIntersection6187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6187<T extends unknown[], V> = [...T, V];

type TuplifyUnion6187<T, L = LastOf6187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6187<TuplifyUnion6187<Exclude<T, L>>, L>;

type DeepPartial6187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6187<T[P]> }
  : T;

type Paths6187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6187<K, Paths6187<T[K], Prev6187[D]>> : never }[keyof T]
  : never;

type Prev6187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6187 {
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

type ConfigPaths6187 = Paths6187<NestedConfig6187>;

interface HeavyProps6187 {
  config: DeepPartial6187<NestedConfig6187>;
  path?: ConfigPaths6187;
}

const HeavyComponent6187 = memo(function HeavyComponent6187({ config }: HeavyProps6187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6187.displayName = 'HeavyComponent6187';
export default HeavyComponent6187;
