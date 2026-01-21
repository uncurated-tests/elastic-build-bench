'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6298<T> = T extends (infer U)[]
  ? DeepReadonlyArray6298<U>
  : T extends object
  ? DeepReadonlyObject6298<T>
  : T;

interface DeepReadonlyArray6298<T> extends ReadonlyArray<DeepReadonly6298<T>> {}

type DeepReadonlyObject6298<T> = {
  readonly [P in keyof T]: DeepReadonly6298<T[P]>;
};

type UnionToIntersection6298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6298<T> = UnionToIntersection6298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6298<T extends unknown[], V> = [...T, V];

type TuplifyUnion6298<T, L = LastOf6298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6298<TuplifyUnion6298<Exclude<T, L>>, L>;

type DeepPartial6298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6298<T[P]> }
  : T;

type Paths6298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6298<K, Paths6298<T[K], Prev6298[D]>> : never }[keyof T]
  : never;

type Prev6298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6298 {
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

type ConfigPaths6298 = Paths6298<NestedConfig6298>;

interface HeavyProps6298 {
  config: DeepPartial6298<NestedConfig6298>;
  path?: ConfigPaths6298;
}

const HeavyComponent6298 = memo(function HeavyComponent6298({ config }: HeavyProps6298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6298.displayName = 'HeavyComponent6298';
export default HeavyComponent6298;
