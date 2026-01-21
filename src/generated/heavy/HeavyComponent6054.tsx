'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6054<T> = T extends (infer U)[]
  ? DeepReadonlyArray6054<U>
  : T extends object
  ? DeepReadonlyObject6054<T>
  : T;

interface DeepReadonlyArray6054<T> extends ReadonlyArray<DeepReadonly6054<T>> {}

type DeepReadonlyObject6054<T> = {
  readonly [P in keyof T]: DeepReadonly6054<T[P]>;
};

type UnionToIntersection6054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6054<T> = UnionToIntersection6054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6054<T extends unknown[], V> = [...T, V];

type TuplifyUnion6054<T, L = LastOf6054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6054<TuplifyUnion6054<Exclude<T, L>>, L>;

type DeepPartial6054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6054<T[P]> }
  : T;

type Paths6054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6054<K, Paths6054<T[K], Prev6054[D]>> : never }[keyof T]
  : never;

type Prev6054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6054 {
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

type ConfigPaths6054 = Paths6054<NestedConfig6054>;

interface HeavyProps6054 {
  config: DeepPartial6054<NestedConfig6054>;
  path?: ConfigPaths6054;
}

const HeavyComponent6054 = memo(function HeavyComponent6054({ config }: HeavyProps6054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6054.displayName = 'HeavyComponent6054';
export default HeavyComponent6054;
