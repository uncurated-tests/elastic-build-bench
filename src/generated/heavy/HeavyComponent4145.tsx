'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4145<T> = T extends (infer U)[]
  ? DeepReadonlyArray4145<U>
  : T extends object
  ? DeepReadonlyObject4145<T>
  : T;

interface DeepReadonlyArray4145<T> extends ReadonlyArray<DeepReadonly4145<T>> {}

type DeepReadonlyObject4145<T> = {
  readonly [P in keyof T]: DeepReadonly4145<T[P]>;
};

type UnionToIntersection4145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4145<T> = UnionToIntersection4145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4145<T extends unknown[], V> = [...T, V];

type TuplifyUnion4145<T, L = LastOf4145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4145<TuplifyUnion4145<Exclude<T, L>>, L>;

type DeepPartial4145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4145<T[P]> }
  : T;

type Paths4145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4145<K, Paths4145<T[K], Prev4145[D]>> : never }[keyof T]
  : never;

type Prev4145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4145 {
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

type ConfigPaths4145 = Paths4145<NestedConfig4145>;

interface HeavyProps4145 {
  config: DeepPartial4145<NestedConfig4145>;
  path?: ConfigPaths4145;
}

const HeavyComponent4145 = memo(function HeavyComponent4145({ config }: HeavyProps4145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4145.displayName = 'HeavyComponent4145';
export default HeavyComponent4145;
