'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6206<T> = T extends (infer U)[]
  ? DeepReadonlyArray6206<U>
  : T extends object
  ? DeepReadonlyObject6206<T>
  : T;

interface DeepReadonlyArray6206<T> extends ReadonlyArray<DeepReadonly6206<T>> {}

type DeepReadonlyObject6206<T> = {
  readonly [P in keyof T]: DeepReadonly6206<T[P]>;
};

type UnionToIntersection6206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6206<T> = UnionToIntersection6206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6206<T extends unknown[], V> = [...T, V];

type TuplifyUnion6206<T, L = LastOf6206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6206<TuplifyUnion6206<Exclude<T, L>>, L>;

type DeepPartial6206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6206<T[P]> }
  : T;

type Paths6206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6206<K, Paths6206<T[K], Prev6206[D]>> : never }[keyof T]
  : never;

type Prev6206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6206 {
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

type ConfigPaths6206 = Paths6206<NestedConfig6206>;

interface HeavyProps6206 {
  config: DeepPartial6206<NestedConfig6206>;
  path?: ConfigPaths6206;
}

const HeavyComponent6206 = memo(function HeavyComponent6206({ config }: HeavyProps6206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6206.displayName = 'HeavyComponent6206';
export default HeavyComponent6206;
