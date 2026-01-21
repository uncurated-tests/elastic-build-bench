'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6453<T> = T extends (infer U)[]
  ? DeepReadonlyArray6453<U>
  : T extends object
  ? DeepReadonlyObject6453<T>
  : T;

interface DeepReadonlyArray6453<T> extends ReadonlyArray<DeepReadonly6453<T>> {}

type DeepReadonlyObject6453<T> = {
  readonly [P in keyof T]: DeepReadonly6453<T[P]>;
};

type UnionToIntersection6453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6453<T> = UnionToIntersection6453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6453<T extends unknown[], V> = [...T, V];

type TuplifyUnion6453<T, L = LastOf6453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6453<TuplifyUnion6453<Exclude<T, L>>, L>;

type DeepPartial6453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6453<T[P]> }
  : T;

type Paths6453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6453<K, Paths6453<T[K], Prev6453[D]>> : never }[keyof T]
  : never;

type Prev6453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6453 {
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

type ConfigPaths6453 = Paths6453<NestedConfig6453>;

interface HeavyProps6453 {
  config: DeepPartial6453<NestedConfig6453>;
  path?: ConfigPaths6453;
}

const HeavyComponent6453 = memo(function HeavyComponent6453({ config }: HeavyProps6453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6453.displayName = 'HeavyComponent6453';
export default HeavyComponent6453;
