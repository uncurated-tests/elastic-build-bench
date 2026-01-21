'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4975<T> = T extends (infer U)[]
  ? DeepReadonlyArray4975<U>
  : T extends object
  ? DeepReadonlyObject4975<T>
  : T;

interface DeepReadonlyArray4975<T> extends ReadonlyArray<DeepReadonly4975<T>> {}

type DeepReadonlyObject4975<T> = {
  readonly [P in keyof T]: DeepReadonly4975<T[P]>;
};

type UnionToIntersection4975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4975<T> = UnionToIntersection4975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4975<T extends unknown[], V> = [...T, V];

type TuplifyUnion4975<T, L = LastOf4975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4975<TuplifyUnion4975<Exclude<T, L>>, L>;

type DeepPartial4975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4975<T[P]> }
  : T;

type Paths4975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4975<K, Paths4975<T[K], Prev4975[D]>> : never }[keyof T]
  : never;

type Prev4975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4975 {
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

type ConfigPaths4975 = Paths4975<NestedConfig4975>;

interface HeavyProps4975 {
  config: DeepPartial4975<NestedConfig4975>;
  path?: ConfigPaths4975;
}

const HeavyComponent4975 = memo(function HeavyComponent4975({ config }: HeavyProps4975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4975.displayName = 'HeavyComponent4975';
export default HeavyComponent4975;
