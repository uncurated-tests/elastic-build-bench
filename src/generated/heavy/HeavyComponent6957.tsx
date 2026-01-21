'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6957<T> = T extends (infer U)[]
  ? DeepReadonlyArray6957<U>
  : T extends object
  ? DeepReadonlyObject6957<T>
  : T;

interface DeepReadonlyArray6957<T> extends ReadonlyArray<DeepReadonly6957<T>> {}

type DeepReadonlyObject6957<T> = {
  readonly [P in keyof T]: DeepReadonly6957<T[P]>;
};

type UnionToIntersection6957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6957<T> = UnionToIntersection6957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6957<T extends unknown[], V> = [...T, V];

type TuplifyUnion6957<T, L = LastOf6957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6957<TuplifyUnion6957<Exclude<T, L>>, L>;

type DeepPartial6957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6957<T[P]> }
  : T;

type Paths6957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6957<K, Paths6957<T[K], Prev6957[D]>> : never }[keyof T]
  : never;

type Prev6957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6957 {
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

type ConfigPaths6957 = Paths6957<NestedConfig6957>;

interface HeavyProps6957 {
  config: DeepPartial6957<NestedConfig6957>;
  path?: ConfigPaths6957;
}

const HeavyComponent6957 = memo(function HeavyComponent6957({ config }: HeavyProps6957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6957.displayName = 'HeavyComponent6957';
export default HeavyComponent6957;
