'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6160<T> = T extends (infer U)[]
  ? DeepReadonlyArray6160<U>
  : T extends object
  ? DeepReadonlyObject6160<T>
  : T;

interface DeepReadonlyArray6160<T> extends ReadonlyArray<DeepReadonly6160<T>> {}

type DeepReadonlyObject6160<T> = {
  readonly [P in keyof T]: DeepReadonly6160<T[P]>;
};

type UnionToIntersection6160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6160<T> = UnionToIntersection6160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6160<T extends unknown[], V> = [...T, V];

type TuplifyUnion6160<T, L = LastOf6160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6160<TuplifyUnion6160<Exclude<T, L>>, L>;

type DeepPartial6160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6160<T[P]> }
  : T;

type Paths6160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6160<K, Paths6160<T[K], Prev6160[D]>> : never }[keyof T]
  : never;

type Prev6160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6160 {
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

type ConfigPaths6160 = Paths6160<NestedConfig6160>;

interface HeavyProps6160 {
  config: DeepPartial6160<NestedConfig6160>;
  path?: ConfigPaths6160;
}

const HeavyComponent6160 = memo(function HeavyComponent6160({ config }: HeavyProps6160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6160.displayName = 'HeavyComponent6160';
export default HeavyComponent6160;
