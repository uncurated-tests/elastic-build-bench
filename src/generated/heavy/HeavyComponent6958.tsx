'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6958<T> = T extends (infer U)[]
  ? DeepReadonlyArray6958<U>
  : T extends object
  ? DeepReadonlyObject6958<T>
  : T;

interface DeepReadonlyArray6958<T> extends ReadonlyArray<DeepReadonly6958<T>> {}

type DeepReadonlyObject6958<T> = {
  readonly [P in keyof T]: DeepReadonly6958<T[P]>;
};

type UnionToIntersection6958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6958<T> = UnionToIntersection6958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6958<T extends unknown[], V> = [...T, V];

type TuplifyUnion6958<T, L = LastOf6958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6958<TuplifyUnion6958<Exclude<T, L>>, L>;

type DeepPartial6958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6958<T[P]> }
  : T;

type Paths6958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6958<K, Paths6958<T[K], Prev6958[D]>> : never }[keyof T]
  : never;

type Prev6958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6958 {
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

type ConfigPaths6958 = Paths6958<NestedConfig6958>;

interface HeavyProps6958 {
  config: DeepPartial6958<NestedConfig6958>;
  path?: ConfigPaths6958;
}

const HeavyComponent6958 = memo(function HeavyComponent6958({ config }: HeavyProps6958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6958.displayName = 'HeavyComponent6958';
export default HeavyComponent6958;
