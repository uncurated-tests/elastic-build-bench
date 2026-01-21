'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6062<T> = T extends (infer U)[]
  ? DeepReadonlyArray6062<U>
  : T extends object
  ? DeepReadonlyObject6062<T>
  : T;

interface DeepReadonlyArray6062<T> extends ReadonlyArray<DeepReadonly6062<T>> {}

type DeepReadonlyObject6062<T> = {
  readonly [P in keyof T]: DeepReadonly6062<T[P]>;
};

type UnionToIntersection6062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6062<T> = UnionToIntersection6062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6062<T extends unknown[], V> = [...T, V];

type TuplifyUnion6062<T, L = LastOf6062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6062<TuplifyUnion6062<Exclude<T, L>>, L>;

type DeepPartial6062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6062<T[P]> }
  : T;

type Paths6062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6062<K, Paths6062<T[K], Prev6062[D]>> : never }[keyof T]
  : never;

type Prev6062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6062 {
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

type ConfigPaths6062 = Paths6062<NestedConfig6062>;

interface HeavyProps6062 {
  config: DeepPartial6062<NestedConfig6062>;
  path?: ConfigPaths6062;
}

const HeavyComponent6062 = memo(function HeavyComponent6062({ config }: HeavyProps6062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6062.displayName = 'HeavyComponent6062';
export default HeavyComponent6062;
