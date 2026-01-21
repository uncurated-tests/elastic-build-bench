'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6104<T> = T extends (infer U)[]
  ? DeepReadonlyArray6104<U>
  : T extends object
  ? DeepReadonlyObject6104<T>
  : T;

interface DeepReadonlyArray6104<T> extends ReadonlyArray<DeepReadonly6104<T>> {}

type DeepReadonlyObject6104<T> = {
  readonly [P in keyof T]: DeepReadonly6104<T[P]>;
};

type UnionToIntersection6104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6104<T> = UnionToIntersection6104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6104<T extends unknown[], V> = [...T, V];

type TuplifyUnion6104<T, L = LastOf6104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6104<TuplifyUnion6104<Exclude<T, L>>, L>;

type DeepPartial6104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6104<T[P]> }
  : T;

type Paths6104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6104<K, Paths6104<T[K], Prev6104[D]>> : never }[keyof T]
  : never;

type Prev6104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6104 {
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

type ConfigPaths6104 = Paths6104<NestedConfig6104>;

interface HeavyProps6104 {
  config: DeepPartial6104<NestedConfig6104>;
  path?: ConfigPaths6104;
}

const HeavyComponent6104 = memo(function HeavyComponent6104({ config }: HeavyProps6104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6104.displayName = 'HeavyComponent6104';
export default HeavyComponent6104;
