'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6044<T> = T extends (infer U)[]
  ? DeepReadonlyArray6044<U>
  : T extends object
  ? DeepReadonlyObject6044<T>
  : T;

interface DeepReadonlyArray6044<T> extends ReadonlyArray<DeepReadonly6044<T>> {}

type DeepReadonlyObject6044<T> = {
  readonly [P in keyof T]: DeepReadonly6044<T[P]>;
};

type UnionToIntersection6044<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6044<T> = UnionToIntersection6044<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6044<T extends unknown[], V> = [...T, V];

type TuplifyUnion6044<T, L = LastOf6044<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6044<TuplifyUnion6044<Exclude<T, L>>, L>;

type DeepPartial6044<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6044<T[P]> }
  : T;

type Paths6044<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6044<K, Paths6044<T[K], Prev6044[D]>> : never }[keyof T]
  : never;

type Prev6044 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6044<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6044 {
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

type ConfigPaths6044 = Paths6044<NestedConfig6044>;

interface HeavyProps6044 {
  config: DeepPartial6044<NestedConfig6044>;
  path?: ConfigPaths6044;
}

const HeavyComponent6044 = memo(function HeavyComponent6044({ config }: HeavyProps6044) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6044) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6044 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6044: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6044.displayName = 'HeavyComponent6044';
export default HeavyComponent6044;
