'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6789<T> = T extends (infer U)[]
  ? DeepReadonlyArray6789<U>
  : T extends object
  ? DeepReadonlyObject6789<T>
  : T;

interface DeepReadonlyArray6789<T> extends ReadonlyArray<DeepReadonly6789<T>> {}

type DeepReadonlyObject6789<T> = {
  readonly [P in keyof T]: DeepReadonly6789<T[P]>;
};

type UnionToIntersection6789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6789<T> = UnionToIntersection6789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6789<T extends unknown[], V> = [...T, V];

type TuplifyUnion6789<T, L = LastOf6789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6789<TuplifyUnion6789<Exclude<T, L>>, L>;

type DeepPartial6789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6789<T[P]> }
  : T;

type Paths6789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6789<K, Paths6789<T[K], Prev6789[D]>> : never }[keyof T]
  : never;

type Prev6789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6789 {
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

type ConfigPaths6789 = Paths6789<NestedConfig6789>;

interface HeavyProps6789 {
  config: DeepPartial6789<NestedConfig6789>;
  path?: ConfigPaths6789;
}

const HeavyComponent6789 = memo(function HeavyComponent6789({ config }: HeavyProps6789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6789.displayName = 'HeavyComponent6789';
export default HeavyComponent6789;
