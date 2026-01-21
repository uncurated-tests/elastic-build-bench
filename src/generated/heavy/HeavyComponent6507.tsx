'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6507<T> = T extends (infer U)[]
  ? DeepReadonlyArray6507<U>
  : T extends object
  ? DeepReadonlyObject6507<T>
  : T;

interface DeepReadonlyArray6507<T> extends ReadonlyArray<DeepReadonly6507<T>> {}

type DeepReadonlyObject6507<T> = {
  readonly [P in keyof T]: DeepReadonly6507<T[P]>;
};

type UnionToIntersection6507<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6507<T> = UnionToIntersection6507<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6507<T extends unknown[], V> = [...T, V];

type TuplifyUnion6507<T, L = LastOf6507<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6507<TuplifyUnion6507<Exclude<T, L>>, L>;

type DeepPartial6507<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6507<T[P]> }
  : T;

type Paths6507<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6507<K, Paths6507<T[K], Prev6507[D]>> : never }[keyof T]
  : never;

type Prev6507 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6507<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6507 {
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

type ConfigPaths6507 = Paths6507<NestedConfig6507>;

interface HeavyProps6507 {
  config: DeepPartial6507<NestedConfig6507>;
  path?: ConfigPaths6507;
}

const HeavyComponent6507 = memo(function HeavyComponent6507({ config }: HeavyProps6507) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6507) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6507 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6507: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6507.displayName = 'HeavyComponent6507';
export default HeavyComponent6507;
