'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6070<T> = T extends (infer U)[]
  ? DeepReadonlyArray6070<U>
  : T extends object
  ? DeepReadonlyObject6070<T>
  : T;

interface DeepReadonlyArray6070<T> extends ReadonlyArray<DeepReadonly6070<T>> {}

type DeepReadonlyObject6070<T> = {
  readonly [P in keyof T]: DeepReadonly6070<T[P]>;
};

type UnionToIntersection6070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6070<T> = UnionToIntersection6070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6070<T extends unknown[], V> = [...T, V];

type TuplifyUnion6070<T, L = LastOf6070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6070<TuplifyUnion6070<Exclude<T, L>>, L>;

type DeepPartial6070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6070<T[P]> }
  : T;

type Paths6070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6070<K, Paths6070<T[K], Prev6070[D]>> : never }[keyof T]
  : never;

type Prev6070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6070 {
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

type ConfigPaths6070 = Paths6070<NestedConfig6070>;

interface HeavyProps6070 {
  config: DeepPartial6070<NestedConfig6070>;
  path?: ConfigPaths6070;
}

const HeavyComponent6070 = memo(function HeavyComponent6070({ config }: HeavyProps6070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6070.displayName = 'HeavyComponent6070';
export default HeavyComponent6070;
