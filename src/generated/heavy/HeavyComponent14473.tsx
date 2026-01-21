'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14473<T> = T extends (infer U)[]
  ? DeepReadonlyArray14473<U>
  : T extends object
  ? DeepReadonlyObject14473<T>
  : T;

interface DeepReadonlyArray14473<T> extends ReadonlyArray<DeepReadonly14473<T>> {}

type DeepReadonlyObject14473<T> = {
  readonly [P in keyof T]: DeepReadonly14473<T[P]>;
};

type UnionToIntersection14473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14473<T> = UnionToIntersection14473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14473<T extends unknown[], V> = [...T, V];

type TuplifyUnion14473<T, L = LastOf14473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14473<TuplifyUnion14473<Exclude<T, L>>, L>;

type DeepPartial14473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14473<T[P]> }
  : T;

type Paths14473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14473<K, Paths14473<T[K], Prev14473[D]>> : never }[keyof T]
  : never;

type Prev14473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14473 {
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

type ConfigPaths14473 = Paths14473<NestedConfig14473>;

interface HeavyProps14473 {
  config: DeepPartial14473<NestedConfig14473>;
  path?: ConfigPaths14473;
}

const HeavyComponent14473 = memo(function HeavyComponent14473({ config }: HeavyProps14473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14473.displayName = 'HeavyComponent14473';
export default HeavyComponent14473;
