'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6940<T> = T extends (infer U)[]
  ? DeepReadonlyArray6940<U>
  : T extends object
  ? DeepReadonlyObject6940<T>
  : T;

interface DeepReadonlyArray6940<T> extends ReadonlyArray<DeepReadonly6940<T>> {}

type DeepReadonlyObject6940<T> = {
  readonly [P in keyof T]: DeepReadonly6940<T[P]>;
};

type UnionToIntersection6940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6940<T> = UnionToIntersection6940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6940<T extends unknown[], V> = [...T, V];

type TuplifyUnion6940<T, L = LastOf6940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6940<TuplifyUnion6940<Exclude<T, L>>, L>;

type DeepPartial6940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6940<T[P]> }
  : T;

type Paths6940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6940<K, Paths6940<T[K], Prev6940[D]>> : never }[keyof T]
  : never;

type Prev6940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6940 {
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

type ConfigPaths6940 = Paths6940<NestedConfig6940>;

interface HeavyProps6940 {
  config: DeepPartial6940<NestedConfig6940>;
  path?: ConfigPaths6940;
}

const HeavyComponent6940 = memo(function HeavyComponent6940({ config }: HeavyProps6940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6940.displayName = 'HeavyComponent6940';
export default HeavyComponent6940;
