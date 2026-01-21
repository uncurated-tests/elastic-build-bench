'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6<T> = T extends (infer U)[]
  ? DeepReadonlyArray6<U>
  : T extends object
  ? DeepReadonlyObject6<T>
  : T;

interface DeepReadonlyArray6<T> extends ReadonlyArray<DeepReadonly6<T>> {}

type DeepReadonlyObject6<T> = {
  readonly [P in keyof T]: DeepReadonly6<T[P]>;
};

type UnionToIntersection6<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6<T> = UnionToIntersection6<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6<T extends unknown[], V> = [...T, V];

type TuplifyUnion6<T, L = LastOf6<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6<TuplifyUnion6<Exclude<T, L>>, L>;

type DeepPartial6<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6<T[P]> }
  : T;

type Paths6<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6<K, Paths6<T[K], Prev6[D]>> : never }[keyof T]
  : never;

type Prev6 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6 {
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

type ConfigPaths6 = Paths6<NestedConfig6>;

interface HeavyProps6 {
  config: DeepPartial6<NestedConfig6>;
  path?: ConfigPaths6;
}

const HeavyComponent6 = memo(function HeavyComponent6({ config }: HeavyProps6) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6.displayName = 'HeavyComponent6';
export default HeavyComponent6;
