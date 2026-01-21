'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4718<T> = T extends (infer U)[]
  ? DeepReadonlyArray4718<U>
  : T extends object
  ? DeepReadonlyObject4718<T>
  : T;

interface DeepReadonlyArray4718<T> extends ReadonlyArray<DeepReadonly4718<T>> {}

type DeepReadonlyObject4718<T> = {
  readonly [P in keyof T]: DeepReadonly4718<T[P]>;
};

type UnionToIntersection4718<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4718<T> = UnionToIntersection4718<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4718<T extends unknown[], V> = [...T, V];

type TuplifyUnion4718<T, L = LastOf4718<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4718<TuplifyUnion4718<Exclude<T, L>>, L>;

type DeepPartial4718<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4718<T[P]> }
  : T;

type Paths4718<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4718<K, Paths4718<T[K], Prev4718[D]>> : never }[keyof T]
  : never;

type Prev4718 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4718<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4718 {
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

type ConfigPaths4718 = Paths4718<NestedConfig4718>;

interface HeavyProps4718 {
  config: DeepPartial4718<NestedConfig4718>;
  path?: ConfigPaths4718;
}

const HeavyComponent4718 = memo(function HeavyComponent4718({ config }: HeavyProps4718) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4718) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4718 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4718: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4718.displayName = 'HeavyComponent4718';
export default HeavyComponent4718;
