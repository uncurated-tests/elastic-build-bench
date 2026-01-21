'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6306<T> = T extends (infer U)[]
  ? DeepReadonlyArray6306<U>
  : T extends object
  ? DeepReadonlyObject6306<T>
  : T;

interface DeepReadonlyArray6306<T> extends ReadonlyArray<DeepReadonly6306<T>> {}

type DeepReadonlyObject6306<T> = {
  readonly [P in keyof T]: DeepReadonly6306<T[P]>;
};

type UnionToIntersection6306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6306<T> = UnionToIntersection6306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6306<T extends unknown[], V> = [...T, V];

type TuplifyUnion6306<T, L = LastOf6306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6306<TuplifyUnion6306<Exclude<T, L>>, L>;

type DeepPartial6306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6306<T[P]> }
  : T;

type Paths6306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6306<K, Paths6306<T[K], Prev6306[D]>> : never }[keyof T]
  : never;

type Prev6306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6306 {
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

type ConfigPaths6306 = Paths6306<NestedConfig6306>;

interface HeavyProps6306 {
  config: DeepPartial6306<NestedConfig6306>;
  path?: ConfigPaths6306;
}

const HeavyComponent6306 = memo(function HeavyComponent6306({ config }: HeavyProps6306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6306.displayName = 'HeavyComponent6306';
export default HeavyComponent6306;
