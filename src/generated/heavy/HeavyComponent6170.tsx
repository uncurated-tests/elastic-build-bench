'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6170<T> = T extends (infer U)[]
  ? DeepReadonlyArray6170<U>
  : T extends object
  ? DeepReadonlyObject6170<T>
  : T;

interface DeepReadonlyArray6170<T> extends ReadonlyArray<DeepReadonly6170<T>> {}

type DeepReadonlyObject6170<T> = {
  readonly [P in keyof T]: DeepReadonly6170<T[P]>;
};

type UnionToIntersection6170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6170<T> = UnionToIntersection6170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6170<T extends unknown[], V> = [...T, V];

type TuplifyUnion6170<T, L = LastOf6170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6170<TuplifyUnion6170<Exclude<T, L>>, L>;

type DeepPartial6170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6170<T[P]> }
  : T;

type Paths6170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6170<K, Paths6170<T[K], Prev6170[D]>> : never }[keyof T]
  : never;

type Prev6170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6170 {
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

type ConfigPaths6170 = Paths6170<NestedConfig6170>;

interface HeavyProps6170 {
  config: DeepPartial6170<NestedConfig6170>;
  path?: ConfigPaths6170;
}

const HeavyComponent6170 = memo(function HeavyComponent6170({ config }: HeavyProps6170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6170.displayName = 'HeavyComponent6170';
export default HeavyComponent6170;
