'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6126<T> = T extends (infer U)[]
  ? DeepReadonlyArray6126<U>
  : T extends object
  ? DeepReadonlyObject6126<T>
  : T;

interface DeepReadonlyArray6126<T> extends ReadonlyArray<DeepReadonly6126<T>> {}

type DeepReadonlyObject6126<T> = {
  readonly [P in keyof T]: DeepReadonly6126<T[P]>;
};

type UnionToIntersection6126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6126<T> = UnionToIntersection6126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6126<T extends unknown[], V> = [...T, V];

type TuplifyUnion6126<T, L = LastOf6126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6126<TuplifyUnion6126<Exclude<T, L>>, L>;

type DeepPartial6126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6126<T[P]> }
  : T;

type Paths6126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6126<K, Paths6126<T[K], Prev6126[D]>> : never }[keyof T]
  : never;

type Prev6126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6126 {
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

type ConfigPaths6126 = Paths6126<NestedConfig6126>;

interface HeavyProps6126 {
  config: DeepPartial6126<NestedConfig6126>;
  path?: ConfigPaths6126;
}

const HeavyComponent6126 = memo(function HeavyComponent6126({ config }: HeavyProps6126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6126.displayName = 'HeavyComponent6126';
export default HeavyComponent6126;
