'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6076<T> = T extends (infer U)[]
  ? DeepReadonlyArray6076<U>
  : T extends object
  ? DeepReadonlyObject6076<T>
  : T;

interface DeepReadonlyArray6076<T> extends ReadonlyArray<DeepReadonly6076<T>> {}

type DeepReadonlyObject6076<T> = {
  readonly [P in keyof T]: DeepReadonly6076<T[P]>;
};

type UnionToIntersection6076<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6076<T> = UnionToIntersection6076<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6076<T extends unknown[], V> = [...T, V];

type TuplifyUnion6076<T, L = LastOf6076<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6076<TuplifyUnion6076<Exclude<T, L>>, L>;

type DeepPartial6076<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6076<T[P]> }
  : T;

type Paths6076<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6076<K, Paths6076<T[K], Prev6076[D]>> : never }[keyof T]
  : never;

type Prev6076 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6076<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6076 {
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

type ConfigPaths6076 = Paths6076<NestedConfig6076>;

interface HeavyProps6076 {
  config: DeepPartial6076<NestedConfig6076>;
  path?: ConfigPaths6076;
}

const HeavyComponent6076 = memo(function HeavyComponent6076({ config }: HeavyProps6076) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6076) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6076 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6076: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6076.displayName = 'HeavyComponent6076';
export default HeavyComponent6076;
