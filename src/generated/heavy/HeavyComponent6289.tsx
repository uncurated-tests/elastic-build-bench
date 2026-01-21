'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6289<T> = T extends (infer U)[]
  ? DeepReadonlyArray6289<U>
  : T extends object
  ? DeepReadonlyObject6289<T>
  : T;

interface DeepReadonlyArray6289<T> extends ReadonlyArray<DeepReadonly6289<T>> {}

type DeepReadonlyObject6289<T> = {
  readonly [P in keyof T]: DeepReadonly6289<T[P]>;
};

type UnionToIntersection6289<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6289<T> = UnionToIntersection6289<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6289<T extends unknown[], V> = [...T, V];

type TuplifyUnion6289<T, L = LastOf6289<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6289<TuplifyUnion6289<Exclude<T, L>>, L>;

type DeepPartial6289<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6289<T[P]> }
  : T;

type Paths6289<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6289<K, Paths6289<T[K], Prev6289[D]>> : never }[keyof T]
  : never;

type Prev6289 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6289<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6289 {
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

type ConfigPaths6289 = Paths6289<NestedConfig6289>;

interface HeavyProps6289 {
  config: DeepPartial6289<NestedConfig6289>;
  path?: ConfigPaths6289;
}

const HeavyComponent6289 = memo(function HeavyComponent6289({ config }: HeavyProps6289) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6289) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6289 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6289: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6289.displayName = 'HeavyComponent6289';
export default HeavyComponent6289;
