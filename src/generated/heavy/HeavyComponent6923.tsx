'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6923<T> = T extends (infer U)[]
  ? DeepReadonlyArray6923<U>
  : T extends object
  ? DeepReadonlyObject6923<T>
  : T;

interface DeepReadonlyArray6923<T> extends ReadonlyArray<DeepReadonly6923<T>> {}

type DeepReadonlyObject6923<T> = {
  readonly [P in keyof T]: DeepReadonly6923<T[P]>;
};

type UnionToIntersection6923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6923<T> = UnionToIntersection6923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6923<T extends unknown[], V> = [...T, V];

type TuplifyUnion6923<T, L = LastOf6923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6923<TuplifyUnion6923<Exclude<T, L>>, L>;

type DeepPartial6923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6923<T[P]> }
  : T;

type Paths6923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6923<K, Paths6923<T[K], Prev6923[D]>> : never }[keyof T]
  : never;

type Prev6923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6923 {
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

type ConfigPaths6923 = Paths6923<NestedConfig6923>;

interface HeavyProps6923 {
  config: DeepPartial6923<NestedConfig6923>;
  path?: ConfigPaths6923;
}

const HeavyComponent6923 = memo(function HeavyComponent6923({ config }: HeavyProps6923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6923.displayName = 'HeavyComponent6923';
export default HeavyComponent6923;
