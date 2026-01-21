'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4189<T> = T extends (infer U)[]
  ? DeepReadonlyArray4189<U>
  : T extends object
  ? DeepReadonlyObject4189<T>
  : T;

interface DeepReadonlyArray4189<T> extends ReadonlyArray<DeepReadonly4189<T>> {}

type DeepReadonlyObject4189<T> = {
  readonly [P in keyof T]: DeepReadonly4189<T[P]>;
};

type UnionToIntersection4189<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4189<T> = UnionToIntersection4189<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4189<T extends unknown[], V> = [...T, V];

type TuplifyUnion4189<T, L = LastOf4189<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4189<TuplifyUnion4189<Exclude<T, L>>, L>;

type DeepPartial4189<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4189<T[P]> }
  : T;

type Paths4189<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4189<K, Paths4189<T[K], Prev4189[D]>> : never }[keyof T]
  : never;

type Prev4189 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4189<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4189 {
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

type ConfigPaths4189 = Paths4189<NestedConfig4189>;

interface HeavyProps4189 {
  config: DeepPartial4189<NestedConfig4189>;
  path?: ConfigPaths4189;
}

const HeavyComponent4189 = memo(function HeavyComponent4189({ config }: HeavyProps4189) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4189) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4189 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4189: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4189.displayName = 'HeavyComponent4189';
export default HeavyComponent4189;
