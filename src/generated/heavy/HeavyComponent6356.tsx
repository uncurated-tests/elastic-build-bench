'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6356<T> = T extends (infer U)[]
  ? DeepReadonlyArray6356<U>
  : T extends object
  ? DeepReadonlyObject6356<T>
  : T;

interface DeepReadonlyArray6356<T> extends ReadonlyArray<DeepReadonly6356<T>> {}

type DeepReadonlyObject6356<T> = {
  readonly [P in keyof T]: DeepReadonly6356<T[P]>;
};

type UnionToIntersection6356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6356<T> = UnionToIntersection6356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6356<T extends unknown[], V> = [...T, V];

type TuplifyUnion6356<T, L = LastOf6356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6356<TuplifyUnion6356<Exclude<T, L>>, L>;

type DeepPartial6356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6356<T[P]> }
  : T;

type Paths6356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6356<K, Paths6356<T[K], Prev6356[D]>> : never }[keyof T]
  : never;

type Prev6356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6356 {
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

type ConfigPaths6356 = Paths6356<NestedConfig6356>;

interface HeavyProps6356 {
  config: DeepPartial6356<NestedConfig6356>;
  path?: ConfigPaths6356;
}

const HeavyComponent6356 = memo(function HeavyComponent6356({ config }: HeavyProps6356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6356.displayName = 'HeavyComponent6356';
export default HeavyComponent6356;
