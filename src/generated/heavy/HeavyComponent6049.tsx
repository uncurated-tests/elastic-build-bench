'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6049<T> = T extends (infer U)[]
  ? DeepReadonlyArray6049<U>
  : T extends object
  ? DeepReadonlyObject6049<T>
  : T;

interface DeepReadonlyArray6049<T> extends ReadonlyArray<DeepReadonly6049<T>> {}

type DeepReadonlyObject6049<T> = {
  readonly [P in keyof T]: DeepReadonly6049<T[P]>;
};

type UnionToIntersection6049<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6049<T> = UnionToIntersection6049<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6049<T extends unknown[], V> = [...T, V];

type TuplifyUnion6049<T, L = LastOf6049<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6049<TuplifyUnion6049<Exclude<T, L>>, L>;

type DeepPartial6049<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6049<T[P]> }
  : T;

type Paths6049<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6049<K, Paths6049<T[K], Prev6049[D]>> : never }[keyof T]
  : never;

type Prev6049 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6049<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6049 {
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

type ConfigPaths6049 = Paths6049<NestedConfig6049>;

interface HeavyProps6049 {
  config: DeepPartial6049<NestedConfig6049>;
  path?: ConfigPaths6049;
}

const HeavyComponent6049 = memo(function HeavyComponent6049({ config }: HeavyProps6049) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6049) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6049 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6049: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6049.displayName = 'HeavyComponent6049';
export default HeavyComponent6049;
