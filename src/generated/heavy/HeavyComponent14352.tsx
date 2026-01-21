'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14352<T> = T extends (infer U)[]
  ? DeepReadonlyArray14352<U>
  : T extends object
  ? DeepReadonlyObject14352<T>
  : T;

interface DeepReadonlyArray14352<T> extends ReadonlyArray<DeepReadonly14352<T>> {}

type DeepReadonlyObject14352<T> = {
  readonly [P in keyof T]: DeepReadonly14352<T[P]>;
};

type UnionToIntersection14352<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14352<T> = UnionToIntersection14352<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14352<T extends unknown[], V> = [...T, V];

type TuplifyUnion14352<T, L = LastOf14352<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14352<TuplifyUnion14352<Exclude<T, L>>, L>;

type DeepPartial14352<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14352<T[P]> }
  : T;

type Paths14352<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14352<K, Paths14352<T[K], Prev14352[D]>> : never }[keyof T]
  : never;

type Prev14352 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14352<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14352 {
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

type ConfigPaths14352 = Paths14352<NestedConfig14352>;

interface HeavyProps14352 {
  config: DeepPartial14352<NestedConfig14352>;
  path?: ConfigPaths14352;
}

const HeavyComponent14352 = memo(function HeavyComponent14352({ config }: HeavyProps14352) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14352) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14352 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14352: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14352.displayName = 'HeavyComponent14352';
export default HeavyComponent14352;
