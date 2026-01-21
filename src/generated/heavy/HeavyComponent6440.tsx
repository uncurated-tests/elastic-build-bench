'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6440<T> = T extends (infer U)[]
  ? DeepReadonlyArray6440<U>
  : T extends object
  ? DeepReadonlyObject6440<T>
  : T;

interface DeepReadonlyArray6440<T> extends ReadonlyArray<DeepReadonly6440<T>> {}

type DeepReadonlyObject6440<T> = {
  readonly [P in keyof T]: DeepReadonly6440<T[P]>;
};

type UnionToIntersection6440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6440<T> = UnionToIntersection6440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6440<T extends unknown[], V> = [...T, V];

type TuplifyUnion6440<T, L = LastOf6440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6440<TuplifyUnion6440<Exclude<T, L>>, L>;

type DeepPartial6440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6440<T[P]> }
  : T;

type Paths6440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6440<K, Paths6440<T[K], Prev6440[D]>> : never }[keyof T]
  : never;

type Prev6440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6440 {
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

type ConfigPaths6440 = Paths6440<NestedConfig6440>;

interface HeavyProps6440 {
  config: DeepPartial6440<NestedConfig6440>;
  path?: ConfigPaths6440;
}

const HeavyComponent6440 = memo(function HeavyComponent6440({ config }: HeavyProps6440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6440.displayName = 'HeavyComponent6440';
export default HeavyComponent6440;
