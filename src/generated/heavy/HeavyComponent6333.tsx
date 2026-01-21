'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6333<T> = T extends (infer U)[]
  ? DeepReadonlyArray6333<U>
  : T extends object
  ? DeepReadonlyObject6333<T>
  : T;

interface DeepReadonlyArray6333<T> extends ReadonlyArray<DeepReadonly6333<T>> {}

type DeepReadonlyObject6333<T> = {
  readonly [P in keyof T]: DeepReadonly6333<T[P]>;
};

type UnionToIntersection6333<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6333<T> = UnionToIntersection6333<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6333<T extends unknown[], V> = [...T, V];

type TuplifyUnion6333<T, L = LastOf6333<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6333<TuplifyUnion6333<Exclude<T, L>>, L>;

type DeepPartial6333<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6333<T[P]> }
  : T;

type Paths6333<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6333<K, Paths6333<T[K], Prev6333[D]>> : never }[keyof T]
  : never;

type Prev6333 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6333<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6333 {
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

type ConfigPaths6333 = Paths6333<NestedConfig6333>;

interface HeavyProps6333 {
  config: DeepPartial6333<NestedConfig6333>;
  path?: ConfigPaths6333;
}

const HeavyComponent6333 = memo(function HeavyComponent6333({ config }: HeavyProps6333) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6333) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6333 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6333: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6333.displayName = 'HeavyComponent6333';
export default HeavyComponent6333;
