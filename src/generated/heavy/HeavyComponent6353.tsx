'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6353<T> = T extends (infer U)[]
  ? DeepReadonlyArray6353<U>
  : T extends object
  ? DeepReadonlyObject6353<T>
  : T;

interface DeepReadonlyArray6353<T> extends ReadonlyArray<DeepReadonly6353<T>> {}

type DeepReadonlyObject6353<T> = {
  readonly [P in keyof T]: DeepReadonly6353<T[P]>;
};

type UnionToIntersection6353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6353<T> = UnionToIntersection6353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6353<T extends unknown[], V> = [...T, V];

type TuplifyUnion6353<T, L = LastOf6353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6353<TuplifyUnion6353<Exclude<T, L>>, L>;

type DeepPartial6353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6353<T[P]> }
  : T;

type Paths6353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6353<K, Paths6353<T[K], Prev6353[D]>> : never }[keyof T]
  : never;

type Prev6353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6353 {
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

type ConfigPaths6353 = Paths6353<NestedConfig6353>;

interface HeavyProps6353 {
  config: DeepPartial6353<NestedConfig6353>;
  path?: ConfigPaths6353;
}

const HeavyComponent6353 = memo(function HeavyComponent6353({ config }: HeavyProps6353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6353.displayName = 'HeavyComponent6353';
export default HeavyComponent6353;
