'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6493<T> = T extends (infer U)[]
  ? DeepReadonlyArray6493<U>
  : T extends object
  ? DeepReadonlyObject6493<T>
  : T;

interface DeepReadonlyArray6493<T> extends ReadonlyArray<DeepReadonly6493<T>> {}

type DeepReadonlyObject6493<T> = {
  readonly [P in keyof T]: DeepReadonly6493<T[P]>;
};

type UnionToIntersection6493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6493<T> = UnionToIntersection6493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6493<T extends unknown[], V> = [...T, V];

type TuplifyUnion6493<T, L = LastOf6493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6493<TuplifyUnion6493<Exclude<T, L>>, L>;

type DeepPartial6493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6493<T[P]> }
  : T;

type Paths6493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6493<K, Paths6493<T[K], Prev6493[D]>> : never }[keyof T]
  : never;

type Prev6493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6493 {
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

type ConfigPaths6493 = Paths6493<NestedConfig6493>;

interface HeavyProps6493 {
  config: DeepPartial6493<NestedConfig6493>;
  path?: ConfigPaths6493;
}

const HeavyComponent6493 = memo(function HeavyComponent6493({ config }: HeavyProps6493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6493.displayName = 'HeavyComponent6493';
export default HeavyComponent6493;
