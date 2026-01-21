'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6097<T> = T extends (infer U)[]
  ? DeepReadonlyArray6097<U>
  : T extends object
  ? DeepReadonlyObject6097<T>
  : T;

interface DeepReadonlyArray6097<T> extends ReadonlyArray<DeepReadonly6097<T>> {}

type DeepReadonlyObject6097<T> = {
  readonly [P in keyof T]: DeepReadonly6097<T[P]>;
};

type UnionToIntersection6097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6097<T> = UnionToIntersection6097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6097<T extends unknown[], V> = [...T, V];

type TuplifyUnion6097<T, L = LastOf6097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6097<TuplifyUnion6097<Exclude<T, L>>, L>;

type DeepPartial6097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6097<T[P]> }
  : T;

type Paths6097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6097<K, Paths6097<T[K], Prev6097[D]>> : never }[keyof T]
  : never;

type Prev6097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6097 {
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

type ConfigPaths6097 = Paths6097<NestedConfig6097>;

interface HeavyProps6097 {
  config: DeepPartial6097<NestedConfig6097>;
  path?: ConfigPaths6097;
}

const HeavyComponent6097 = memo(function HeavyComponent6097({ config }: HeavyProps6097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6097.displayName = 'HeavyComponent6097';
export default HeavyComponent6097;
