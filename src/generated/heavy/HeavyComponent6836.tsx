'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6836<T> = T extends (infer U)[]
  ? DeepReadonlyArray6836<U>
  : T extends object
  ? DeepReadonlyObject6836<T>
  : T;

interface DeepReadonlyArray6836<T> extends ReadonlyArray<DeepReadonly6836<T>> {}

type DeepReadonlyObject6836<T> = {
  readonly [P in keyof T]: DeepReadonly6836<T[P]>;
};

type UnionToIntersection6836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6836<T> = UnionToIntersection6836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6836<T extends unknown[], V> = [...T, V];

type TuplifyUnion6836<T, L = LastOf6836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6836<TuplifyUnion6836<Exclude<T, L>>, L>;

type DeepPartial6836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6836<T[P]> }
  : T;

type Paths6836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6836<K, Paths6836<T[K], Prev6836[D]>> : never }[keyof T]
  : never;

type Prev6836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6836 {
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

type ConfigPaths6836 = Paths6836<NestedConfig6836>;

interface HeavyProps6836 {
  config: DeepPartial6836<NestedConfig6836>;
  path?: ConfigPaths6836;
}

const HeavyComponent6836 = memo(function HeavyComponent6836({ config }: HeavyProps6836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6836.displayName = 'HeavyComponent6836';
export default HeavyComponent6836;
