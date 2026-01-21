'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6247<T> = T extends (infer U)[]
  ? DeepReadonlyArray6247<U>
  : T extends object
  ? DeepReadonlyObject6247<T>
  : T;

interface DeepReadonlyArray6247<T> extends ReadonlyArray<DeepReadonly6247<T>> {}

type DeepReadonlyObject6247<T> = {
  readonly [P in keyof T]: DeepReadonly6247<T[P]>;
};

type UnionToIntersection6247<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6247<T> = UnionToIntersection6247<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6247<T extends unknown[], V> = [...T, V];

type TuplifyUnion6247<T, L = LastOf6247<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6247<TuplifyUnion6247<Exclude<T, L>>, L>;

type DeepPartial6247<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6247<T[P]> }
  : T;

type Paths6247<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6247<K, Paths6247<T[K], Prev6247[D]>> : never }[keyof T]
  : never;

type Prev6247 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6247<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6247 {
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

type ConfigPaths6247 = Paths6247<NestedConfig6247>;

interface HeavyProps6247 {
  config: DeepPartial6247<NestedConfig6247>;
  path?: ConfigPaths6247;
}

const HeavyComponent6247 = memo(function HeavyComponent6247({ config }: HeavyProps6247) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6247) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6247 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6247: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6247.displayName = 'HeavyComponent6247';
export default HeavyComponent6247;
