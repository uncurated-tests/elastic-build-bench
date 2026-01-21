'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6470<T> = T extends (infer U)[]
  ? DeepReadonlyArray6470<U>
  : T extends object
  ? DeepReadonlyObject6470<T>
  : T;

interface DeepReadonlyArray6470<T> extends ReadonlyArray<DeepReadonly6470<T>> {}

type DeepReadonlyObject6470<T> = {
  readonly [P in keyof T]: DeepReadonly6470<T[P]>;
};

type UnionToIntersection6470<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6470<T> = UnionToIntersection6470<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6470<T extends unknown[], V> = [...T, V];

type TuplifyUnion6470<T, L = LastOf6470<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6470<TuplifyUnion6470<Exclude<T, L>>, L>;

type DeepPartial6470<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6470<T[P]> }
  : T;

type Paths6470<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6470<K, Paths6470<T[K], Prev6470[D]>> : never }[keyof T]
  : never;

type Prev6470 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6470<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6470 {
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

type ConfigPaths6470 = Paths6470<NestedConfig6470>;

interface HeavyProps6470 {
  config: DeepPartial6470<NestedConfig6470>;
  path?: ConfigPaths6470;
}

const HeavyComponent6470 = memo(function HeavyComponent6470({ config }: HeavyProps6470) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6470) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6470 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6470: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6470.displayName = 'HeavyComponent6470';
export default HeavyComponent6470;
