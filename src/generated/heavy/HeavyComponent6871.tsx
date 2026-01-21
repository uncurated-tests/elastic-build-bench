'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6871<T> = T extends (infer U)[]
  ? DeepReadonlyArray6871<U>
  : T extends object
  ? DeepReadonlyObject6871<T>
  : T;

interface DeepReadonlyArray6871<T> extends ReadonlyArray<DeepReadonly6871<T>> {}

type DeepReadonlyObject6871<T> = {
  readonly [P in keyof T]: DeepReadonly6871<T[P]>;
};

type UnionToIntersection6871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6871<T> = UnionToIntersection6871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6871<T extends unknown[], V> = [...T, V];

type TuplifyUnion6871<T, L = LastOf6871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6871<TuplifyUnion6871<Exclude<T, L>>, L>;

type DeepPartial6871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6871<T[P]> }
  : T;

type Paths6871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6871<K, Paths6871<T[K], Prev6871[D]>> : never }[keyof T]
  : never;

type Prev6871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6871 {
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

type ConfigPaths6871 = Paths6871<NestedConfig6871>;

interface HeavyProps6871 {
  config: DeepPartial6871<NestedConfig6871>;
  path?: ConfigPaths6871;
}

const HeavyComponent6871 = memo(function HeavyComponent6871({ config }: HeavyProps6871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6871.displayName = 'HeavyComponent6871';
export default HeavyComponent6871;
