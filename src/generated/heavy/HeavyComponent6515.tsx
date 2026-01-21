'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6515<T> = T extends (infer U)[]
  ? DeepReadonlyArray6515<U>
  : T extends object
  ? DeepReadonlyObject6515<T>
  : T;

interface DeepReadonlyArray6515<T> extends ReadonlyArray<DeepReadonly6515<T>> {}

type DeepReadonlyObject6515<T> = {
  readonly [P in keyof T]: DeepReadonly6515<T[P]>;
};

type UnionToIntersection6515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6515<T> = UnionToIntersection6515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6515<T extends unknown[], V> = [...T, V];

type TuplifyUnion6515<T, L = LastOf6515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6515<TuplifyUnion6515<Exclude<T, L>>, L>;

type DeepPartial6515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6515<T[P]> }
  : T;

type Paths6515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6515<K, Paths6515<T[K], Prev6515[D]>> : never }[keyof T]
  : never;

type Prev6515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6515 {
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

type ConfigPaths6515 = Paths6515<NestedConfig6515>;

interface HeavyProps6515 {
  config: DeepPartial6515<NestedConfig6515>;
  path?: ConfigPaths6515;
}

const HeavyComponent6515 = memo(function HeavyComponent6515({ config }: HeavyProps6515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6515.displayName = 'HeavyComponent6515';
export default HeavyComponent6515;
