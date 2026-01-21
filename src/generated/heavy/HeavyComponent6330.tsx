'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6330<T> = T extends (infer U)[]
  ? DeepReadonlyArray6330<U>
  : T extends object
  ? DeepReadonlyObject6330<T>
  : T;

interface DeepReadonlyArray6330<T> extends ReadonlyArray<DeepReadonly6330<T>> {}

type DeepReadonlyObject6330<T> = {
  readonly [P in keyof T]: DeepReadonly6330<T[P]>;
};

type UnionToIntersection6330<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6330<T> = UnionToIntersection6330<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6330<T extends unknown[], V> = [...T, V];

type TuplifyUnion6330<T, L = LastOf6330<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6330<TuplifyUnion6330<Exclude<T, L>>, L>;

type DeepPartial6330<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6330<T[P]> }
  : T;

type Paths6330<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6330<K, Paths6330<T[K], Prev6330[D]>> : never }[keyof T]
  : never;

type Prev6330 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6330<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6330 {
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

type ConfigPaths6330 = Paths6330<NestedConfig6330>;

interface HeavyProps6330 {
  config: DeepPartial6330<NestedConfig6330>;
  path?: ConfigPaths6330;
}

const HeavyComponent6330 = memo(function HeavyComponent6330({ config }: HeavyProps6330) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6330) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6330 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6330: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6330.displayName = 'HeavyComponent6330';
export default HeavyComponent6330;
