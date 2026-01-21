'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6960<T> = T extends (infer U)[]
  ? DeepReadonlyArray6960<U>
  : T extends object
  ? DeepReadonlyObject6960<T>
  : T;

interface DeepReadonlyArray6960<T> extends ReadonlyArray<DeepReadonly6960<T>> {}

type DeepReadonlyObject6960<T> = {
  readonly [P in keyof T]: DeepReadonly6960<T[P]>;
};

type UnionToIntersection6960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6960<T> = UnionToIntersection6960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6960<T extends unknown[], V> = [...T, V];

type TuplifyUnion6960<T, L = LastOf6960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6960<TuplifyUnion6960<Exclude<T, L>>, L>;

type DeepPartial6960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6960<T[P]> }
  : T;

type Paths6960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6960<K, Paths6960<T[K], Prev6960[D]>> : never }[keyof T]
  : never;

type Prev6960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6960 {
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

type ConfigPaths6960 = Paths6960<NestedConfig6960>;

interface HeavyProps6960 {
  config: DeepPartial6960<NestedConfig6960>;
  path?: ConfigPaths6960;
}

const HeavyComponent6960 = memo(function HeavyComponent6960({ config }: HeavyProps6960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6960.displayName = 'HeavyComponent6960';
export default HeavyComponent6960;
