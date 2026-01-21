'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6105<T> = T extends (infer U)[]
  ? DeepReadonlyArray6105<U>
  : T extends object
  ? DeepReadonlyObject6105<T>
  : T;

interface DeepReadonlyArray6105<T> extends ReadonlyArray<DeepReadonly6105<T>> {}

type DeepReadonlyObject6105<T> = {
  readonly [P in keyof T]: DeepReadonly6105<T[P]>;
};

type UnionToIntersection6105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6105<T> = UnionToIntersection6105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6105<T extends unknown[], V> = [...T, V];

type TuplifyUnion6105<T, L = LastOf6105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6105<TuplifyUnion6105<Exclude<T, L>>, L>;

type DeepPartial6105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6105<T[P]> }
  : T;

type Paths6105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6105<K, Paths6105<T[K], Prev6105[D]>> : never }[keyof T]
  : never;

type Prev6105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6105 {
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

type ConfigPaths6105 = Paths6105<NestedConfig6105>;

interface HeavyProps6105 {
  config: DeepPartial6105<NestedConfig6105>;
  path?: ConfigPaths6105;
}

const HeavyComponent6105 = memo(function HeavyComponent6105({ config }: HeavyProps6105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6105.displayName = 'HeavyComponent6105';
export default HeavyComponent6105;
