'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6351<T> = T extends (infer U)[]
  ? DeepReadonlyArray6351<U>
  : T extends object
  ? DeepReadonlyObject6351<T>
  : T;

interface DeepReadonlyArray6351<T> extends ReadonlyArray<DeepReadonly6351<T>> {}

type DeepReadonlyObject6351<T> = {
  readonly [P in keyof T]: DeepReadonly6351<T[P]>;
};

type UnionToIntersection6351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6351<T> = UnionToIntersection6351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6351<T extends unknown[], V> = [...T, V];

type TuplifyUnion6351<T, L = LastOf6351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6351<TuplifyUnion6351<Exclude<T, L>>, L>;

type DeepPartial6351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6351<T[P]> }
  : T;

type Paths6351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6351<K, Paths6351<T[K], Prev6351[D]>> : never }[keyof T]
  : never;

type Prev6351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6351 {
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

type ConfigPaths6351 = Paths6351<NestedConfig6351>;

interface HeavyProps6351 {
  config: DeepPartial6351<NestedConfig6351>;
  path?: ConfigPaths6351;
}

const HeavyComponent6351 = memo(function HeavyComponent6351({ config }: HeavyProps6351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6351.displayName = 'HeavyComponent6351';
export default HeavyComponent6351;
