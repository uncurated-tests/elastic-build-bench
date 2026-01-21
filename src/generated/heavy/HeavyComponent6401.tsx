'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6401<T> = T extends (infer U)[]
  ? DeepReadonlyArray6401<U>
  : T extends object
  ? DeepReadonlyObject6401<T>
  : T;

interface DeepReadonlyArray6401<T> extends ReadonlyArray<DeepReadonly6401<T>> {}

type DeepReadonlyObject6401<T> = {
  readonly [P in keyof T]: DeepReadonly6401<T[P]>;
};

type UnionToIntersection6401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6401<T> = UnionToIntersection6401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6401<T extends unknown[], V> = [...T, V];

type TuplifyUnion6401<T, L = LastOf6401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6401<TuplifyUnion6401<Exclude<T, L>>, L>;

type DeepPartial6401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6401<T[P]> }
  : T;

type Paths6401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6401<K, Paths6401<T[K], Prev6401[D]>> : never }[keyof T]
  : never;

type Prev6401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6401 {
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

type ConfigPaths6401 = Paths6401<NestedConfig6401>;

interface HeavyProps6401 {
  config: DeepPartial6401<NestedConfig6401>;
  path?: ConfigPaths6401;
}

const HeavyComponent6401 = memo(function HeavyComponent6401({ config }: HeavyProps6401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6401.displayName = 'HeavyComponent6401';
export default HeavyComponent6401;
