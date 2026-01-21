'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6947<T> = T extends (infer U)[]
  ? DeepReadonlyArray6947<U>
  : T extends object
  ? DeepReadonlyObject6947<T>
  : T;

interface DeepReadonlyArray6947<T> extends ReadonlyArray<DeepReadonly6947<T>> {}

type DeepReadonlyObject6947<T> = {
  readonly [P in keyof T]: DeepReadonly6947<T[P]>;
};

type UnionToIntersection6947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6947<T> = UnionToIntersection6947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6947<T extends unknown[], V> = [...T, V];

type TuplifyUnion6947<T, L = LastOf6947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6947<TuplifyUnion6947<Exclude<T, L>>, L>;

type DeepPartial6947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6947<T[P]> }
  : T;

type Paths6947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6947<K, Paths6947<T[K], Prev6947[D]>> : never }[keyof T]
  : never;

type Prev6947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6947 {
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

type ConfigPaths6947 = Paths6947<NestedConfig6947>;

interface HeavyProps6947 {
  config: DeepPartial6947<NestedConfig6947>;
  path?: ConfigPaths6947;
}

const HeavyComponent6947 = memo(function HeavyComponent6947({ config }: HeavyProps6947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6947.displayName = 'HeavyComponent6947';
export default HeavyComponent6947;
