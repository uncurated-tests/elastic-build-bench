'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6053<T> = T extends (infer U)[]
  ? DeepReadonlyArray6053<U>
  : T extends object
  ? DeepReadonlyObject6053<T>
  : T;

interface DeepReadonlyArray6053<T> extends ReadonlyArray<DeepReadonly6053<T>> {}

type DeepReadonlyObject6053<T> = {
  readonly [P in keyof T]: DeepReadonly6053<T[P]>;
};

type UnionToIntersection6053<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6053<T> = UnionToIntersection6053<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6053<T extends unknown[], V> = [...T, V];

type TuplifyUnion6053<T, L = LastOf6053<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6053<TuplifyUnion6053<Exclude<T, L>>, L>;

type DeepPartial6053<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6053<T[P]> }
  : T;

type Paths6053<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6053<K, Paths6053<T[K], Prev6053[D]>> : never }[keyof T]
  : never;

type Prev6053 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6053<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6053 {
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

type ConfigPaths6053 = Paths6053<NestedConfig6053>;

interface HeavyProps6053 {
  config: DeepPartial6053<NestedConfig6053>;
  path?: ConfigPaths6053;
}

const HeavyComponent6053 = memo(function HeavyComponent6053({ config }: HeavyProps6053) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6053) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6053 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6053: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6053.displayName = 'HeavyComponent6053';
export default HeavyComponent6053;
