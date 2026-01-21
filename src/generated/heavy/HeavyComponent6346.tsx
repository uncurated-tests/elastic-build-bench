'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6346<T> = T extends (infer U)[]
  ? DeepReadonlyArray6346<U>
  : T extends object
  ? DeepReadonlyObject6346<T>
  : T;

interface DeepReadonlyArray6346<T> extends ReadonlyArray<DeepReadonly6346<T>> {}

type DeepReadonlyObject6346<T> = {
  readonly [P in keyof T]: DeepReadonly6346<T[P]>;
};

type UnionToIntersection6346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6346<T> = UnionToIntersection6346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6346<T extends unknown[], V> = [...T, V];

type TuplifyUnion6346<T, L = LastOf6346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6346<TuplifyUnion6346<Exclude<T, L>>, L>;

type DeepPartial6346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6346<T[P]> }
  : T;

type Paths6346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6346<K, Paths6346<T[K], Prev6346[D]>> : never }[keyof T]
  : never;

type Prev6346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6346 {
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

type ConfigPaths6346 = Paths6346<NestedConfig6346>;

interface HeavyProps6346 {
  config: DeepPartial6346<NestedConfig6346>;
  path?: ConfigPaths6346;
}

const HeavyComponent6346 = memo(function HeavyComponent6346({ config }: HeavyProps6346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6346.displayName = 'HeavyComponent6346';
export default HeavyComponent6346;
