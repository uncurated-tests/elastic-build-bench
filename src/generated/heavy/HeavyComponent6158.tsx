'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6158<T> = T extends (infer U)[]
  ? DeepReadonlyArray6158<U>
  : T extends object
  ? DeepReadonlyObject6158<T>
  : T;

interface DeepReadonlyArray6158<T> extends ReadonlyArray<DeepReadonly6158<T>> {}

type DeepReadonlyObject6158<T> = {
  readonly [P in keyof T]: DeepReadonly6158<T[P]>;
};

type UnionToIntersection6158<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6158<T> = UnionToIntersection6158<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6158<T extends unknown[], V> = [...T, V];

type TuplifyUnion6158<T, L = LastOf6158<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6158<TuplifyUnion6158<Exclude<T, L>>, L>;

type DeepPartial6158<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6158<T[P]> }
  : T;

type Paths6158<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6158<K, Paths6158<T[K], Prev6158[D]>> : never }[keyof T]
  : never;

type Prev6158 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6158<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6158 {
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

type ConfigPaths6158 = Paths6158<NestedConfig6158>;

interface HeavyProps6158 {
  config: DeepPartial6158<NestedConfig6158>;
  path?: ConfigPaths6158;
}

const HeavyComponent6158 = memo(function HeavyComponent6158({ config }: HeavyProps6158) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6158) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6158 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6158: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6158.displayName = 'HeavyComponent6158';
export default HeavyComponent6158;
