'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly360<T> = T extends (infer U)[]
  ? DeepReadonlyArray360<U>
  : T extends object
  ? DeepReadonlyObject360<T>
  : T;

interface DeepReadonlyArray360<T> extends ReadonlyArray<DeepReadonly360<T>> {}

type DeepReadonlyObject360<T> = {
  readonly [P in keyof T]: DeepReadonly360<T[P]>;
};

type UnionToIntersection360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf360<T> = UnionToIntersection360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push360<T extends unknown[], V> = [...T, V];

type TuplifyUnion360<T, L = LastOf360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push360<TuplifyUnion360<Exclude<T, L>>, L>;

type DeepPartial360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial360<T[P]> }
  : T;

type Paths360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join360<K, Paths360<T[K], Prev360[D]>> : never }[keyof T]
  : never;

type Prev360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig360 {
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

type ConfigPaths360 = Paths360<NestedConfig360>;

interface HeavyProps360 {
  config: DeepPartial360<NestedConfig360>;
  path?: ConfigPaths360;
}

const HeavyComponent360 = memo(function HeavyComponent360({ config }: HeavyProps360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent360.displayName = 'HeavyComponent360';
export default HeavyComponent360;
