'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6251<T> = T extends (infer U)[]
  ? DeepReadonlyArray6251<U>
  : T extends object
  ? DeepReadonlyObject6251<T>
  : T;

interface DeepReadonlyArray6251<T> extends ReadonlyArray<DeepReadonly6251<T>> {}

type DeepReadonlyObject6251<T> = {
  readonly [P in keyof T]: DeepReadonly6251<T[P]>;
};

type UnionToIntersection6251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6251<T> = UnionToIntersection6251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6251<T extends unknown[], V> = [...T, V];

type TuplifyUnion6251<T, L = LastOf6251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6251<TuplifyUnion6251<Exclude<T, L>>, L>;

type DeepPartial6251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6251<T[P]> }
  : T;

type Paths6251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6251<K, Paths6251<T[K], Prev6251[D]>> : never }[keyof T]
  : never;

type Prev6251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6251 {
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

type ConfigPaths6251 = Paths6251<NestedConfig6251>;

interface HeavyProps6251 {
  config: DeepPartial6251<NestedConfig6251>;
  path?: ConfigPaths6251;
}

const HeavyComponent6251 = memo(function HeavyComponent6251({ config }: HeavyProps6251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6251.displayName = 'HeavyComponent6251';
export default HeavyComponent6251;
