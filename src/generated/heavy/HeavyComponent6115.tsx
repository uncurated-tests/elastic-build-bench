'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6115<T> = T extends (infer U)[]
  ? DeepReadonlyArray6115<U>
  : T extends object
  ? DeepReadonlyObject6115<T>
  : T;

interface DeepReadonlyArray6115<T> extends ReadonlyArray<DeepReadonly6115<T>> {}

type DeepReadonlyObject6115<T> = {
  readonly [P in keyof T]: DeepReadonly6115<T[P]>;
};

type UnionToIntersection6115<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6115<T> = UnionToIntersection6115<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6115<T extends unknown[], V> = [...T, V];

type TuplifyUnion6115<T, L = LastOf6115<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6115<TuplifyUnion6115<Exclude<T, L>>, L>;

type DeepPartial6115<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6115<T[P]> }
  : T;

type Paths6115<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6115<K, Paths6115<T[K], Prev6115[D]>> : never }[keyof T]
  : never;

type Prev6115 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6115<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6115 {
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

type ConfigPaths6115 = Paths6115<NestedConfig6115>;

interface HeavyProps6115 {
  config: DeepPartial6115<NestedConfig6115>;
  path?: ConfigPaths6115;
}

const HeavyComponent6115 = memo(function HeavyComponent6115({ config }: HeavyProps6115) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6115) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6115 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6115: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6115.displayName = 'HeavyComponent6115';
export default HeavyComponent6115;
