'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6022<T> = T extends (infer U)[]
  ? DeepReadonlyArray6022<U>
  : T extends object
  ? DeepReadonlyObject6022<T>
  : T;

interface DeepReadonlyArray6022<T> extends ReadonlyArray<DeepReadonly6022<T>> {}

type DeepReadonlyObject6022<T> = {
  readonly [P in keyof T]: DeepReadonly6022<T[P]>;
};

type UnionToIntersection6022<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6022<T> = UnionToIntersection6022<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6022<T extends unknown[], V> = [...T, V];

type TuplifyUnion6022<T, L = LastOf6022<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6022<TuplifyUnion6022<Exclude<T, L>>, L>;

type DeepPartial6022<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6022<T[P]> }
  : T;

type Paths6022<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6022<K, Paths6022<T[K], Prev6022[D]>> : never }[keyof T]
  : never;

type Prev6022 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6022<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6022 {
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

type ConfigPaths6022 = Paths6022<NestedConfig6022>;

interface HeavyProps6022 {
  config: DeepPartial6022<NestedConfig6022>;
  path?: ConfigPaths6022;
}

const HeavyComponent6022 = memo(function HeavyComponent6022({ config }: HeavyProps6022) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6022) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6022 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6022: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6022.displayName = 'HeavyComponent6022';
export default HeavyComponent6022;
