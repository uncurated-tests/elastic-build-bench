'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4251<T> = T extends (infer U)[]
  ? DeepReadonlyArray4251<U>
  : T extends object
  ? DeepReadonlyObject4251<T>
  : T;

interface DeepReadonlyArray4251<T> extends ReadonlyArray<DeepReadonly4251<T>> {}

type DeepReadonlyObject4251<T> = {
  readonly [P in keyof T]: DeepReadonly4251<T[P]>;
};

type UnionToIntersection4251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4251<T> = UnionToIntersection4251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4251<T extends unknown[], V> = [...T, V];

type TuplifyUnion4251<T, L = LastOf4251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4251<TuplifyUnion4251<Exclude<T, L>>, L>;

type DeepPartial4251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4251<T[P]> }
  : T;

type Paths4251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4251<K, Paths4251<T[K], Prev4251[D]>> : never }[keyof T]
  : never;

type Prev4251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4251 {
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

type ConfigPaths4251 = Paths4251<NestedConfig4251>;

interface HeavyProps4251 {
  config: DeepPartial4251<NestedConfig4251>;
  path?: ConfigPaths4251;
}

const HeavyComponent4251 = memo(function HeavyComponent4251({ config }: HeavyProps4251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4251.displayName = 'HeavyComponent4251';
export default HeavyComponent4251;
