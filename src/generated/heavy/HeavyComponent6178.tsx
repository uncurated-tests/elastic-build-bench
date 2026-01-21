'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6178<T> = T extends (infer U)[]
  ? DeepReadonlyArray6178<U>
  : T extends object
  ? DeepReadonlyObject6178<T>
  : T;

interface DeepReadonlyArray6178<T> extends ReadonlyArray<DeepReadonly6178<T>> {}

type DeepReadonlyObject6178<T> = {
  readonly [P in keyof T]: DeepReadonly6178<T[P]>;
};

type UnionToIntersection6178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6178<T> = UnionToIntersection6178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6178<T extends unknown[], V> = [...T, V];

type TuplifyUnion6178<T, L = LastOf6178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6178<TuplifyUnion6178<Exclude<T, L>>, L>;

type DeepPartial6178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6178<T[P]> }
  : T;

type Paths6178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6178<K, Paths6178<T[K], Prev6178[D]>> : never }[keyof T]
  : never;

type Prev6178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6178 {
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

type ConfigPaths6178 = Paths6178<NestedConfig6178>;

interface HeavyProps6178 {
  config: DeepPartial6178<NestedConfig6178>;
  path?: ConfigPaths6178;
}

const HeavyComponent6178 = memo(function HeavyComponent6178({ config }: HeavyProps6178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6178.displayName = 'HeavyComponent6178';
export default HeavyComponent6178;
