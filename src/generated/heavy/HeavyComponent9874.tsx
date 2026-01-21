'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9874<T> = T extends (infer U)[]
  ? DeepReadonlyArray9874<U>
  : T extends object
  ? DeepReadonlyObject9874<T>
  : T;

interface DeepReadonlyArray9874<T> extends ReadonlyArray<DeepReadonly9874<T>> {}

type DeepReadonlyObject9874<T> = {
  readonly [P in keyof T]: DeepReadonly9874<T[P]>;
};

type UnionToIntersection9874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9874<T> = UnionToIntersection9874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9874<T extends unknown[], V> = [...T, V];

type TuplifyUnion9874<T, L = LastOf9874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9874<TuplifyUnion9874<Exclude<T, L>>, L>;

type DeepPartial9874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9874<T[P]> }
  : T;

type Paths9874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9874<K, Paths9874<T[K], Prev9874[D]>> : never }[keyof T]
  : never;

type Prev9874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9874 {
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

type ConfigPaths9874 = Paths9874<NestedConfig9874>;

interface HeavyProps9874 {
  config: DeepPartial9874<NestedConfig9874>;
  path?: ConfigPaths9874;
}

const HeavyComponent9874 = memo(function HeavyComponent9874({ config }: HeavyProps9874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9874.displayName = 'HeavyComponent9874';
export default HeavyComponent9874;
