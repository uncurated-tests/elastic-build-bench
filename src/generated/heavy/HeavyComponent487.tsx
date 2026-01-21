'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly487<T> = T extends (infer U)[]
  ? DeepReadonlyArray487<U>
  : T extends object
  ? DeepReadonlyObject487<T>
  : T;

interface DeepReadonlyArray487<T> extends ReadonlyArray<DeepReadonly487<T>> {}

type DeepReadonlyObject487<T> = {
  readonly [P in keyof T]: DeepReadonly487<T[P]>;
};

type UnionToIntersection487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf487<T> = UnionToIntersection487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push487<T extends unknown[], V> = [...T, V];

type TuplifyUnion487<T, L = LastOf487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push487<TuplifyUnion487<Exclude<T, L>>, L>;

type DeepPartial487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial487<T[P]> }
  : T;

type Paths487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join487<K, Paths487<T[K], Prev487[D]>> : never }[keyof T]
  : never;

type Prev487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig487 {
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

type ConfigPaths487 = Paths487<NestedConfig487>;

interface HeavyProps487 {
  config: DeepPartial487<NestedConfig487>;
  path?: ConfigPaths487;
}

const HeavyComponent487 = memo(function HeavyComponent487({ config }: HeavyProps487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent487.displayName = 'HeavyComponent487';
export default HeavyComponent487;
