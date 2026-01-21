'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6098<T> = T extends (infer U)[]
  ? DeepReadonlyArray6098<U>
  : T extends object
  ? DeepReadonlyObject6098<T>
  : T;

interface DeepReadonlyArray6098<T> extends ReadonlyArray<DeepReadonly6098<T>> {}

type DeepReadonlyObject6098<T> = {
  readonly [P in keyof T]: DeepReadonly6098<T[P]>;
};

type UnionToIntersection6098<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6098<T> = UnionToIntersection6098<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6098<T extends unknown[], V> = [...T, V];

type TuplifyUnion6098<T, L = LastOf6098<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6098<TuplifyUnion6098<Exclude<T, L>>, L>;

type DeepPartial6098<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6098<T[P]> }
  : T;

type Paths6098<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6098<K, Paths6098<T[K], Prev6098[D]>> : never }[keyof T]
  : never;

type Prev6098 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6098<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6098 {
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

type ConfigPaths6098 = Paths6098<NestedConfig6098>;

interface HeavyProps6098 {
  config: DeepPartial6098<NestedConfig6098>;
  path?: ConfigPaths6098;
}

const HeavyComponent6098 = memo(function HeavyComponent6098({ config }: HeavyProps6098) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6098) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6098 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6098: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6098.displayName = 'HeavyComponent6098';
export default HeavyComponent6098;
