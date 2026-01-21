'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6551<T> = T extends (infer U)[]
  ? DeepReadonlyArray6551<U>
  : T extends object
  ? DeepReadonlyObject6551<T>
  : T;

interface DeepReadonlyArray6551<T> extends ReadonlyArray<DeepReadonly6551<T>> {}

type DeepReadonlyObject6551<T> = {
  readonly [P in keyof T]: DeepReadonly6551<T[P]>;
};

type UnionToIntersection6551<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6551<T> = UnionToIntersection6551<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6551<T extends unknown[], V> = [...T, V];

type TuplifyUnion6551<T, L = LastOf6551<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6551<TuplifyUnion6551<Exclude<T, L>>, L>;

type DeepPartial6551<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6551<T[P]> }
  : T;

type Paths6551<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6551<K, Paths6551<T[K], Prev6551[D]>> : never }[keyof T]
  : never;

type Prev6551 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6551<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6551 {
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

type ConfigPaths6551 = Paths6551<NestedConfig6551>;

interface HeavyProps6551 {
  config: DeepPartial6551<NestedConfig6551>;
  path?: ConfigPaths6551;
}

const HeavyComponent6551 = memo(function HeavyComponent6551({ config }: HeavyProps6551) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6551) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6551 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6551: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6551.displayName = 'HeavyComponent6551';
export default HeavyComponent6551;
