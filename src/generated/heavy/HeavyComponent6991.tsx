'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6991<T> = T extends (infer U)[]
  ? DeepReadonlyArray6991<U>
  : T extends object
  ? DeepReadonlyObject6991<T>
  : T;

interface DeepReadonlyArray6991<T> extends ReadonlyArray<DeepReadonly6991<T>> {}

type DeepReadonlyObject6991<T> = {
  readonly [P in keyof T]: DeepReadonly6991<T[P]>;
};

type UnionToIntersection6991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6991<T> = UnionToIntersection6991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6991<T extends unknown[], V> = [...T, V];

type TuplifyUnion6991<T, L = LastOf6991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6991<TuplifyUnion6991<Exclude<T, L>>, L>;

type DeepPartial6991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6991<T[P]> }
  : T;

type Paths6991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6991<K, Paths6991<T[K], Prev6991[D]>> : never }[keyof T]
  : never;

type Prev6991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6991 {
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

type ConfigPaths6991 = Paths6991<NestedConfig6991>;

interface HeavyProps6991 {
  config: DeepPartial6991<NestedConfig6991>;
  path?: ConfigPaths6991;
}

const HeavyComponent6991 = memo(function HeavyComponent6991({ config }: HeavyProps6991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6991.displayName = 'HeavyComponent6991';
export default HeavyComponent6991;
