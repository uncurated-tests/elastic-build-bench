'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6946<T> = T extends (infer U)[]
  ? DeepReadonlyArray6946<U>
  : T extends object
  ? DeepReadonlyObject6946<T>
  : T;

interface DeepReadonlyArray6946<T> extends ReadonlyArray<DeepReadonly6946<T>> {}

type DeepReadonlyObject6946<T> = {
  readonly [P in keyof T]: DeepReadonly6946<T[P]>;
};

type UnionToIntersection6946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6946<T> = UnionToIntersection6946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6946<T extends unknown[], V> = [...T, V];

type TuplifyUnion6946<T, L = LastOf6946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6946<TuplifyUnion6946<Exclude<T, L>>, L>;

type DeepPartial6946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6946<T[P]> }
  : T;

type Paths6946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6946<K, Paths6946<T[K], Prev6946[D]>> : never }[keyof T]
  : never;

type Prev6946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6946 {
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

type ConfigPaths6946 = Paths6946<NestedConfig6946>;

interface HeavyProps6946 {
  config: DeepPartial6946<NestedConfig6946>;
  path?: ConfigPaths6946;
}

const HeavyComponent6946 = memo(function HeavyComponent6946({ config }: HeavyProps6946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6946.displayName = 'HeavyComponent6946';
export default HeavyComponent6946;
