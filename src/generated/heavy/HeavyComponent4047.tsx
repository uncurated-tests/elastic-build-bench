'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4047<T> = T extends (infer U)[]
  ? DeepReadonlyArray4047<U>
  : T extends object
  ? DeepReadonlyObject4047<T>
  : T;

interface DeepReadonlyArray4047<T> extends ReadonlyArray<DeepReadonly4047<T>> {}

type DeepReadonlyObject4047<T> = {
  readonly [P in keyof T]: DeepReadonly4047<T[P]>;
};

type UnionToIntersection4047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4047<T> = UnionToIntersection4047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4047<T extends unknown[], V> = [...T, V];

type TuplifyUnion4047<T, L = LastOf4047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4047<TuplifyUnion4047<Exclude<T, L>>, L>;

type DeepPartial4047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4047<T[P]> }
  : T;

type Paths4047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4047<K, Paths4047<T[K], Prev4047[D]>> : never }[keyof T]
  : never;

type Prev4047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4047 {
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

type ConfigPaths4047 = Paths4047<NestedConfig4047>;

interface HeavyProps4047 {
  config: DeepPartial4047<NestedConfig4047>;
  path?: ConfigPaths4047;
}

const HeavyComponent4047 = memo(function HeavyComponent4047({ config }: HeavyProps4047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4047.displayName = 'HeavyComponent4047';
export default HeavyComponent4047;
