'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4578<T> = T extends (infer U)[]
  ? DeepReadonlyArray4578<U>
  : T extends object
  ? DeepReadonlyObject4578<T>
  : T;

interface DeepReadonlyArray4578<T> extends ReadonlyArray<DeepReadonly4578<T>> {}

type DeepReadonlyObject4578<T> = {
  readonly [P in keyof T]: DeepReadonly4578<T[P]>;
};

type UnionToIntersection4578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4578<T> = UnionToIntersection4578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4578<T extends unknown[], V> = [...T, V];

type TuplifyUnion4578<T, L = LastOf4578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4578<TuplifyUnion4578<Exclude<T, L>>, L>;

type DeepPartial4578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4578<T[P]> }
  : T;

type Paths4578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4578<K, Paths4578<T[K], Prev4578[D]>> : never }[keyof T]
  : never;

type Prev4578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4578 {
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

type ConfigPaths4578 = Paths4578<NestedConfig4578>;

interface HeavyProps4578 {
  config: DeepPartial4578<NestedConfig4578>;
  path?: ConfigPaths4578;
}

const HeavyComponent4578 = memo(function HeavyComponent4578({ config }: HeavyProps4578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4578.displayName = 'HeavyComponent4578';
export default HeavyComponent4578;
