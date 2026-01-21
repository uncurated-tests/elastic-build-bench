'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6450<T> = T extends (infer U)[]
  ? DeepReadonlyArray6450<U>
  : T extends object
  ? DeepReadonlyObject6450<T>
  : T;

interface DeepReadonlyArray6450<T> extends ReadonlyArray<DeepReadonly6450<T>> {}

type DeepReadonlyObject6450<T> = {
  readonly [P in keyof T]: DeepReadonly6450<T[P]>;
};

type UnionToIntersection6450<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6450<T> = UnionToIntersection6450<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6450<T extends unknown[], V> = [...T, V];

type TuplifyUnion6450<T, L = LastOf6450<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6450<TuplifyUnion6450<Exclude<T, L>>, L>;

type DeepPartial6450<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6450<T[P]> }
  : T;

type Paths6450<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6450<K, Paths6450<T[K], Prev6450[D]>> : never }[keyof T]
  : never;

type Prev6450 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6450<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6450 {
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

type ConfigPaths6450 = Paths6450<NestedConfig6450>;

interface HeavyProps6450 {
  config: DeepPartial6450<NestedConfig6450>;
  path?: ConfigPaths6450;
}

const HeavyComponent6450 = memo(function HeavyComponent6450({ config }: HeavyProps6450) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6450) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6450 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6450: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6450.displayName = 'HeavyComponent6450';
export default HeavyComponent6450;
