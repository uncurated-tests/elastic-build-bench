'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6202<T> = T extends (infer U)[]
  ? DeepReadonlyArray6202<U>
  : T extends object
  ? DeepReadonlyObject6202<T>
  : T;

interface DeepReadonlyArray6202<T> extends ReadonlyArray<DeepReadonly6202<T>> {}

type DeepReadonlyObject6202<T> = {
  readonly [P in keyof T]: DeepReadonly6202<T[P]>;
};

type UnionToIntersection6202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6202<T> = UnionToIntersection6202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6202<T extends unknown[], V> = [...T, V];

type TuplifyUnion6202<T, L = LastOf6202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6202<TuplifyUnion6202<Exclude<T, L>>, L>;

type DeepPartial6202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6202<T[P]> }
  : T;

type Paths6202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6202<K, Paths6202<T[K], Prev6202[D]>> : never }[keyof T]
  : never;

type Prev6202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6202 {
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

type ConfigPaths6202 = Paths6202<NestedConfig6202>;

interface HeavyProps6202 {
  config: DeepPartial6202<NestedConfig6202>;
  path?: ConfigPaths6202;
}

const HeavyComponent6202 = memo(function HeavyComponent6202({ config }: HeavyProps6202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6202.displayName = 'HeavyComponent6202';
export default HeavyComponent6202;
