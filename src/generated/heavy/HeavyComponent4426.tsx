'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4426<T> = T extends (infer U)[]
  ? DeepReadonlyArray4426<U>
  : T extends object
  ? DeepReadonlyObject4426<T>
  : T;

interface DeepReadonlyArray4426<T> extends ReadonlyArray<DeepReadonly4426<T>> {}

type DeepReadonlyObject4426<T> = {
  readonly [P in keyof T]: DeepReadonly4426<T[P]>;
};

type UnionToIntersection4426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4426<T> = UnionToIntersection4426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4426<T extends unknown[], V> = [...T, V];

type TuplifyUnion4426<T, L = LastOf4426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4426<TuplifyUnion4426<Exclude<T, L>>, L>;

type DeepPartial4426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4426<T[P]> }
  : T;

type Paths4426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4426<K, Paths4426<T[K], Prev4426[D]>> : never }[keyof T]
  : never;

type Prev4426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4426 {
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

type ConfigPaths4426 = Paths4426<NestedConfig4426>;

interface HeavyProps4426 {
  config: DeepPartial4426<NestedConfig4426>;
  path?: ConfigPaths4426;
}

const HeavyComponent4426 = memo(function HeavyComponent4426({ config }: HeavyProps4426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4426.displayName = 'HeavyComponent4426';
export default HeavyComponent4426;
