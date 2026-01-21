'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6503<T> = T extends (infer U)[]
  ? DeepReadonlyArray6503<U>
  : T extends object
  ? DeepReadonlyObject6503<T>
  : T;

interface DeepReadonlyArray6503<T> extends ReadonlyArray<DeepReadonly6503<T>> {}

type DeepReadonlyObject6503<T> = {
  readonly [P in keyof T]: DeepReadonly6503<T[P]>;
};

type UnionToIntersection6503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6503<T> = UnionToIntersection6503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6503<T extends unknown[], V> = [...T, V];

type TuplifyUnion6503<T, L = LastOf6503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6503<TuplifyUnion6503<Exclude<T, L>>, L>;

type DeepPartial6503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6503<T[P]> }
  : T;

type Paths6503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6503<K, Paths6503<T[K], Prev6503[D]>> : never }[keyof T]
  : never;

type Prev6503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6503 {
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

type ConfigPaths6503 = Paths6503<NestedConfig6503>;

interface HeavyProps6503 {
  config: DeepPartial6503<NestedConfig6503>;
  path?: ConfigPaths6503;
}

const HeavyComponent6503 = memo(function HeavyComponent6503({ config }: HeavyProps6503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6503.displayName = 'HeavyComponent6503';
export default HeavyComponent6503;
