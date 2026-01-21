'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4250<T> = T extends (infer U)[]
  ? DeepReadonlyArray4250<U>
  : T extends object
  ? DeepReadonlyObject4250<T>
  : T;

interface DeepReadonlyArray4250<T> extends ReadonlyArray<DeepReadonly4250<T>> {}

type DeepReadonlyObject4250<T> = {
  readonly [P in keyof T]: DeepReadonly4250<T[P]>;
};

type UnionToIntersection4250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4250<T> = UnionToIntersection4250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4250<T extends unknown[], V> = [...T, V];

type TuplifyUnion4250<T, L = LastOf4250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4250<TuplifyUnion4250<Exclude<T, L>>, L>;

type DeepPartial4250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4250<T[P]> }
  : T;

type Paths4250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4250<K, Paths4250<T[K], Prev4250[D]>> : never }[keyof T]
  : never;

type Prev4250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4250 {
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

type ConfigPaths4250 = Paths4250<NestedConfig4250>;

interface HeavyProps4250 {
  config: DeepPartial4250<NestedConfig4250>;
  path?: ConfigPaths4250;
}

const HeavyComponent4250 = memo(function HeavyComponent4250({ config }: HeavyProps4250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4250.displayName = 'HeavyComponent4250';
export default HeavyComponent4250;
