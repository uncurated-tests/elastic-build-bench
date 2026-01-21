'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6425<T> = T extends (infer U)[]
  ? DeepReadonlyArray6425<U>
  : T extends object
  ? DeepReadonlyObject6425<T>
  : T;

interface DeepReadonlyArray6425<T> extends ReadonlyArray<DeepReadonly6425<T>> {}

type DeepReadonlyObject6425<T> = {
  readonly [P in keyof T]: DeepReadonly6425<T[P]>;
};

type UnionToIntersection6425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6425<T> = UnionToIntersection6425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6425<T extends unknown[], V> = [...T, V];

type TuplifyUnion6425<T, L = LastOf6425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6425<TuplifyUnion6425<Exclude<T, L>>, L>;

type DeepPartial6425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6425<T[P]> }
  : T;

type Paths6425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6425<K, Paths6425<T[K], Prev6425[D]>> : never }[keyof T]
  : never;

type Prev6425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6425 {
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

type ConfigPaths6425 = Paths6425<NestedConfig6425>;

interface HeavyProps6425 {
  config: DeepPartial6425<NestedConfig6425>;
  path?: ConfigPaths6425;
}

const HeavyComponent6425 = memo(function HeavyComponent6425({ config }: HeavyProps6425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6425.displayName = 'HeavyComponent6425';
export default HeavyComponent6425;
