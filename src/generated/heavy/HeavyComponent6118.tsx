'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6118<T> = T extends (infer U)[]
  ? DeepReadonlyArray6118<U>
  : T extends object
  ? DeepReadonlyObject6118<T>
  : T;

interface DeepReadonlyArray6118<T> extends ReadonlyArray<DeepReadonly6118<T>> {}

type DeepReadonlyObject6118<T> = {
  readonly [P in keyof T]: DeepReadonly6118<T[P]>;
};

type UnionToIntersection6118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6118<T> = UnionToIntersection6118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6118<T extends unknown[], V> = [...T, V];

type TuplifyUnion6118<T, L = LastOf6118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6118<TuplifyUnion6118<Exclude<T, L>>, L>;

type DeepPartial6118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6118<T[P]> }
  : T;

type Paths6118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6118<K, Paths6118<T[K], Prev6118[D]>> : never }[keyof T]
  : never;

type Prev6118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6118 {
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

type ConfigPaths6118 = Paths6118<NestedConfig6118>;

interface HeavyProps6118 {
  config: DeepPartial6118<NestedConfig6118>;
  path?: ConfigPaths6118;
}

const HeavyComponent6118 = memo(function HeavyComponent6118({ config }: HeavyProps6118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6118.displayName = 'HeavyComponent6118';
export default HeavyComponent6118;
