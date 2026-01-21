'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6951<T> = T extends (infer U)[]
  ? DeepReadonlyArray6951<U>
  : T extends object
  ? DeepReadonlyObject6951<T>
  : T;

interface DeepReadonlyArray6951<T> extends ReadonlyArray<DeepReadonly6951<T>> {}

type DeepReadonlyObject6951<T> = {
  readonly [P in keyof T]: DeepReadonly6951<T[P]>;
};

type UnionToIntersection6951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6951<T> = UnionToIntersection6951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6951<T extends unknown[], V> = [...T, V];

type TuplifyUnion6951<T, L = LastOf6951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6951<TuplifyUnion6951<Exclude<T, L>>, L>;

type DeepPartial6951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6951<T[P]> }
  : T;

type Paths6951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6951<K, Paths6951<T[K], Prev6951[D]>> : never }[keyof T]
  : never;

type Prev6951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6951 {
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

type ConfigPaths6951 = Paths6951<NestedConfig6951>;

interface HeavyProps6951 {
  config: DeepPartial6951<NestedConfig6951>;
  path?: ConfigPaths6951;
}

const HeavyComponent6951 = memo(function HeavyComponent6951({ config }: HeavyProps6951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6951.displayName = 'HeavyComponent6951';
export default HeavyComponent6951;
