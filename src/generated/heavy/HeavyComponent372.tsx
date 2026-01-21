'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly372<T> = T extends (infer U)[]
  ? DeepReadonlyArray372<U>
  : T extends object
  ? DeepReadonlyObject372<T>
  : T;

interface DeepReadonlyArray372<T> extends ReadonlyArray<DeepReadonly372<T>> {}

type DeepReadonlyObject372<T> = {
  readonly [P in keyof T]: DeepReadonly372<T[P]>;
};

type UnionToIntersection372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf372<T> = UnionToIntersection372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push372<T extends unknown[], V> = [...T, V];

type TuplifyUnion372<T, L = LastOf372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push372<TuplifyUnion372<Exclude<T, L>>, L>;

type DeepPartial372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial372<T[P]> }
  : T;

type Paths372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join372<K, Paths372<T[K], Prev372[D]>> : never }[keyof T]
  : never;

type Prev372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig372 {
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

type ConfigPaths372 = Paths372<NestedConfig372>;

interface HeavyProps372 {
  config: DeepPartial372<NestedConfig372>;
  path?: ConfigPaths372;
}

const HeavyComponent372 = memo(function HeavyComponent372({ config }: HeavyProps372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent372.displayName = 'HeavyComponent372';
export default HeavyComponent372;
