'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6444<T> = T extends (infer U)[]
  ? DeepReadonlyArray6444<U>
  : T extends object
  ? DeepReadonlyObject6444<T>
  : T;

interface DeepReadonlyArray6444<T> extends ReadonlyArray<DeepReadonly6444<T>> {}

type DeepReadonlyObject6444<T> = {
  readonly [P in keyof T]: DeepReadonly6444<T[P]>;
};

type UnionToIntersection6444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6444<T> = UnionToIntersection6444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6444<T extends unknown[], V> = [...T, V];

type TuplifyUnion6444<T, L = LastOf6444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6444<TuplifyUnion6444<Exclude<T, L>>, L>;

type DeepPartial6444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6444<T[P]> }
  : T;

type Paths6444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6444<K, Paths6444<T[K], Prev6444[D]>> : never }[keyof T]
  : never;

type Prev6444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6444 {
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

type ConfigPaths6444 = Paths6444<NestedConfig6444>;

interface HeavyProps6444 {
  config: DeepPartial6444<NestedConfig6444>;
  path?: ConfigPaths6444;
}

const HeavyComponent6444 = memo(function HeavyComponent6444({ config }: HeavyProps6444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6444.displayName = 'HeavyComponent6444';
export default HeavyComponent6444;
