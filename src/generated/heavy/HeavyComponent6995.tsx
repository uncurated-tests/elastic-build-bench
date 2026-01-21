'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6995<T> = T extends (infer U)[]
  ? DeepReadonlyArray6995<U>
  : T extends object
  ? DeepReadonlyObject6995<T>
  : T;

interface DeepReadonlyArray6995<T> extends ReadonlyArray<DeepReadonly6995<T>> {}

type DeepReadonlyObject6995<T> = {
  readonly [P in keyof T]: DeepReadonly6995<T[P]>;
};

type UnionToIntersection6995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6995<T> = UnionToIntersection6995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6995<T extends unknown[], V> = [...T, V];

type TuplifyUnion6995<T, L = LastOf6995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6995<TuplifyUnion6995<Exclude<T, L>>, L>;

type DeepPartial6995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6995<T[P]> }
  : T;

type Paths6995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6995<K, Paths6995<T[K], Prev6995[D]>> : never }[keyof T]
  : never;

type Prev6995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6995 {
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

type ConfigPaths6995 = Paths6995<NestedConfig6995>;

interface HeavyProps6995 {
  config: DeepPartial6995<NestedConfig6995>;
  path?: ConfigPaths6995;
}

const HeavyComponent6995 = memo(function HeavyComponent6995({ config }: HeavyProps6995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6995.displayName = 'HeavyComponent6995';
export default HeavyComponent6995;
