'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4570<T> = T extends (infer U)[]
  ? DeepReadonlyArray4570<U>
  : T extends object
  ? DeepReadonlyObject4570<T>
  : T;

interface DeepReadonlyArray4570<T> extends ReadonlyArray<DeepReadonly4570<T>> {}

type DeepReadonlyObject4570<T> = {
  readonly [P in keyof T]: DeepReadonly4570<T[P]>;
};

type UnionToIntersection4570<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4570<T> = UnionToIntersection4570<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4570<T extends unknown[], V> = [...T, V];

type TuplifyUnion4570<T, L = LastOf4570<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4570<TuplifyUnion4570<Exclude<T, L>>, L>;

type DeepPartial4570<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4570<T[P]> }
  : T;

type Paths4570<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4570<K, Paths4570<T[K], Prev4570[D]>> : never }[keyof T]
  : never;

type Prev4570 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4570<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4570 {
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

type ConfigPaths4570 = Paths4570<NestedConfig4570>;

interface HeavyProps4570 {
  config: DeepPartial4570<NestedConfig4570>;
  path?: ConfigPaths4570;
}

const HeavyComponent4570 = memo(function HeavyComponent4570({ config }: HeavyProps4570) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4570) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4570 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4570: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4570.displayName = 'HeavyComponent4570';
export default HeavyComponent4570;
