'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4012<T> = T extends (infer U)[]
  ? DeepReadonlyArray4012<U>
  : T extends object
  ? DeepReadonlyObject4012<T>
  : T;

interface DeepReadonlyArray4012<T> extends ReadonlyArray<DeepReadonly4012<T>> {}

type DeepReadonlyObject4012<T> = {
  readonly [P in keyof T]: DeepReadonly4012<T[P]>;
};

type UnionToIntersection4012<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4012<T> = UnionToIntersection4012<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4012<T extends unknown[], V> = [...T, V];

type TuplifyUnion4012<T, L = LastOf4012<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4012<TuplifyUnion4012<Exclude<T, L>>, L>;

type DeepPartial4012<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4012<T[P]> }
  : T;

type Paths4012<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4012<K, Paths4012<T[K], Prev4012[D]>> : never }[keyof T]
  : never;

type Prev4012 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4012<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4012 {
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

type ConfigPaths4012 = Paths4012<NestedConfig4012>;

interface HeavyProps4012 {
  config: DeepPartial4012<NestedConfig4012>;
  path?: ConfigPaths4012;
}

const HeavyComponent4012 = memo(function HeavyComponent4012({ config }: HeavyProps4012) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4012) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4012 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4012: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4012.displayName = 'HeavyComponent4012';
export default HeavyComponent4012;
