'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6240<T> = T extends (infer U)[]
  ? DeepReadonlyArray6240<U>
  : T extends object
  ? DeepReadonlyObject6240<T>
  : T;

interface DeepReadonlyArray6240<T> extends ReadonlyArray<DeepReadonly6240<T>> {}

type DeepReadonlyObject6240<T> = {
  readonly [P in keyof T]: DeepReadonly6240<T[P]>;
};

type UnionToIntersection6240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6240<T> = UnionToIntersection6240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6240<T extends unknown[], V> = [...T, V];

type TuplifyUnion6240<T, L = LastOf6240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6240<TuplifyUnion6240<Exclude<T, L>>, L>;

type DeepPartial6240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6240<T[P]> }
  : T;

type Paths6240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6240<K, Paths6240<T[K], Prev6240[D]>> : never }[keyof T]
  : never;

type Prev6240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6240 {
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

type ConfigPaths6240 = Paths6240<NestedConfig6240>;

interface HeavyProps6240 {
  config: DeepPartial6240<NestedConfig6240>;
  path?: ConfigPaths6240;
}

const HeavyComponent6240 = memo(function HeavyComponent6240({ config }: HeavyProps6240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6240.displayName = 'HeavyComponent6240';
export default HeavyComponent6240;
