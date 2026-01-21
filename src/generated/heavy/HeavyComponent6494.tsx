'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6494<T> = T extends (infer U)[]
  ? DeepReadonlyArray6494<U>
  : T extends object
  ? DeepReadonlyObject6494<T>
  : T;

interface DeepReadonlyArray6494<T> extends ReadonlyArray<DeepReadonly6494<T>> {}

type DeepReadonlyObject6494<T> = {
  readonly [P in keyof T]: DeepReadonly6494<T[P]>;
};

type UnionToIntersection6494<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6494<T> = UnionToIntersection6494<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6494<T extends unknown[], V> = [...T, V];

type TuplifyUnion6494<T, L = LastOf6494<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6494<TuplifyUnion6494<Exclude<T, L>>, L>;

type DeepPartial6494<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6494<T[P]> }
  : T;

type Paths6494<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6494<K, Paths6494<T[K], Prev6494[D]>> : never }[keyof T]
  : never;

type Prev6494 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6494<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6494 {
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

type ConfigPaths6494 = Paths6494<NestedConfig6494>;

interface HeavyProps6494 {
  config: DeepPartial6494<NestedConfig6494>;
  path?: ConfigPaths6494;
}

const HeavyComponent6494 = memo(function HeavyComponent6494({ config }: HeavyProps6494) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6494) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6494 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6494: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6494.displayName = 'HeavyComponent6494';
export default HeavyComponent6494;
