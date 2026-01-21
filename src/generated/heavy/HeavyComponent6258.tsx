'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6258<T> = T extends (infer U)[]
  ? DeepReadonlyArray6258<U>
  : T extends object
  ? DeepReadonlyObject6258<T>
  : T;

interface DeepReadonlyArray6258<T> extends ReadonlyArray<DeepReadonly6258<T>> {}

type DeepReadonlyObject6258<T> = {
  readonly [P in keyof T]: DeepReadonly6258<T[P]>;
};

type UnionToIntersection6258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6258<T> = UnionToIntersection6258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6258<T extends unknown[], V> = [...T, V];

type TuplifyUnion6258<T, L = LastOf6258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6258<TuplifyUnion6258<Exclude<T, L>>, L>;

type DeepPartial6258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6258<T[P]> }
  : T;

type Paths6258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6258<K, Paths6258<T[K], Prev6258[D]>> : never }[keyof T]
  : never;

type Prev6258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6258 {
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

type ConfigPaths6258 = Paths6258<NestedConfig6258>;

interface HeavyProps6258 {
  config: DeepPartial6258<NestedConfig6258>;
  path?: ConfigPaths6258;
}

const HeavyComponent6258 = memo(function HeavyComponent6258({ config }: HeavyProps6258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6258.displayName = 'HeavyComponent6258';
export default HeavyComponent6258;
