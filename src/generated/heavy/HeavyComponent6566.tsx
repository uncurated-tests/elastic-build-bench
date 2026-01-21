'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6566<T> = T extends (infer U)[]
  ? DeepReadonlyArray6566<U>
  : T extends object
  ? DeepReadonlyObject6566<T>
  : T;

interface DeepReadonlyArray6566<T> extends ReadonlyArray<DeepReadonly6566<T>> {}

type DeepReadonlyObject6566<T> = {
  readonly [P in keyof T]: DeepReadonly6566<T[P]>;
};

type UnionToIntersection6566<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6566<T> = UnionToIntersection6566<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6566<T extends unknown[], V> = [...T, V];

type TuplifyUnion6566<T, L = LastOf6566<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6566<TuplifyUnion6566<Exclude<T, L>>, L>;

type DeepPartial6566<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6566<T[P]> }
  : T;

type Paths6566<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6566<K, Paths6566<T[K], Prev6566[D]>> : never }[keyof T]
  : never;

type Prev6566 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6566<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6566 {
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

type ConfigPaths6566 = Paths6566<NestedConfig6566>;

interface HeavyProps6566 {
  config: DeepPartial6566<NestedConfig6566>;
  path?: ConfigPaths6566;
}

const HeavyComponent6566 = memo(function HeavyComponent6566({ config }: HeavyProps6566) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6566) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6566 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6566: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6566.displayName = 'HeavyComponent6566';
export default HeavyComponent6566;
