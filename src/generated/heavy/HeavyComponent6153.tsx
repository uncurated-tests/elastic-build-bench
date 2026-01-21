'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6153<T> = T extends (infer U)[]
  ? DeepReadonlyArray6153<U>
  : T extends object
  ? DeepReadonlyObject6153<T>
  : T;

interface DeepReadonlyArray6153<T> extends ReadonlyArray<DeepReadonly6153<T>> {}

type DeepReadonlyObject6153<T> = {
  readonly [P in keyof T]: DeepReadonly6153<T[P]>;
};

type UnionToIntersection6153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6153<T> = UnionToIntersection6153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6153<T extends unknown[], V> = [...T, V];

type TuplifyUnion6153<T, L = LastOf6153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6153<TuplifyUnion6153<Exclude<T, L>>, L>;

type DeepPartial6153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6153<T[P]> }
  : T;

type Paths6153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6153<K, Paths6153<T[K], Prev6153[D]>> : never }[keyof T]
  : never;

type Prev6153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6153 {
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

type ConfigPaths6153 = Paths6153<NestedConfig6153>;

interface HeavyProps6153 {
  config: DeepPartial6153<NestedConfig6153>;
  path?: ConfigPaths6153;
}

const HeavyComponent6153 = memo(function HeavyComponent6153({ config }: HeavyProps6153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6153.displayName = 'HeavyComponent6153';
export default HeavyComponent6153;
