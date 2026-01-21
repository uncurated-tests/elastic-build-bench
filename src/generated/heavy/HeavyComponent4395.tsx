'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4395<T> = T extends (infer U)[]
  ? DeepReadonlyArray4395<U>
  : T extends object
  ? DeepReadonlyObject4395<T>
  : T;

interface DeepReadonlyArray4395<T> extends ReadonlyArray<DeepReadonly4395<T>> {}

type DeepReadonlyObject4395<T> = {
  readonly [P in keyof T]: DeepReadonly4395<T[P]>;
};

type UnionToIntersection4395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4395<T> = UnionToIntersection4395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4395<T extends unknown[], V> = [...T, V];

type TuplifyUnion4395<T, L = LastOf4395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4395<TuplifyUnion4395<Exclude<T, L>>, L>;

type DeepPartial4395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4395<T[P]> }
  : T;

type Paths4395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4395<K, Paths4395<T[K], Prev4395[D]>> : never }[keyof T]
  : never;

type Prev4395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4395 {
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

type ConfigPaths4395 = Paths4395<NestedConfig4395>;

interface HeavyProps4395 {
  config: DeepPartial4395<NestedConfig4395>;
  path?: ConfigPaths4395;
}

const HeavyComponent4395 = memo(function HeavyComponent4395({ config }: HeavyProps4395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4395.displayName = 'HeavyComponent4395';
export default HeavyComponent4395;
