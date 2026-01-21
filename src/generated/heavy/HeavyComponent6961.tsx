'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6961<T> = T extends (infer U)[]
  ? DeepReadonlyArray6961<U>
  : T extends object
  ? DeepReadonlyObject6961<T>
  : T;

interface DeepReadonlyArray6961<T> extends ReadonlyArray<DeepReadonly6961<T>> {}

type DeepReadonlyObject6961<T> = {
  readonly [P in keyof T]: DeepReadonly6961<T[P]>;
};

type UnionToIntersection6961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6961<T> = UnionToIntersection6961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6961<T extends unknown[], V> = [...T, V];

type TuplifyUnion6961<T, L = LastOf6961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6961<TuplifyUnion6961<Exclude<T, L>>, L>;

type DeepPartial6961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6961<T[P]> }
  : T;

type Paths6961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6961<K, Paths6961<T[K], Prev6961[D]>> : never }[keyof T]
  : never;

type Prev6961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6961 {
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

type ConfigPaths6961 = Paths6961<NestedConfig6961>;

interface HeavyProps6961 {
  config: DeepPartial6961<NestedConfig6961>;
  path?: ConfigPaths6961;
}

const HeavyComponent6961 = memo(function HeavyComponent6961({ config }: HeavyProps6961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6961.displayName = 'HeavyComponent6961';
export default HeavyComponent6961;
