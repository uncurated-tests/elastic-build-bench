'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6474<T> = T extends (infer U)[]
  ? DeepReadonlyArray6474<U>
  : T extends object
  ? DeepReadonlyObject6474<T>
  : T;

interface DeepReadonlyArray6474<T> extends ReadonlyArray<DeepReadonly6474<T>> {}

type DeepReadonlyObject6474<T> = {
  readonly [P in keyof T]: DeepReadonly6474<T[P]>;
};

type UnionToIntersection6474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6474<T> = UnionToIntersection6474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6474<T extends unknown[], V> = [...T, V];

type TuplifyUnion6474<T, L = LastOf6474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6474<TuplifyUnion6474<Exclude<T, L>>, L>;

type DeepPartial6474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6474<T[P]> }
  : T;

type Paths6474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6474<K, Paths6474<T[K], Prev6474[D]>> : never }[keyof T]
  : never;

type Prev6474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6474 {
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

type ConfigPaths6474 = Paths6474<NestedConfig6474>;

interface HeavyProps6474 {
  config: DeepPartial6474<NestedConfig6474>;
  path?: ConfigPaths6474;
}

const HeavyComponent6474 = memo(function HeavyComponent6474({ config }: HeavyProps6474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6474.displayName = 'HeavyComponent6474';
export default HeavyComponent6474;
