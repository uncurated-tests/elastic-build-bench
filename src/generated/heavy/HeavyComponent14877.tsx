'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14877<T> = T extends (infer U)[]
  ? DeepReadonlyArray14877<U>
  : T extends object
  ? DeepReadonlyObject14877<T>
  : T;

interface DeepReadonlyArray14877<T> extends ReadonlyArray<DeepReadonly14877<T>> {}

type DeepReadonlyObject14877<T> = {
  readonly [P in keyof T]: DeepReadonly14877<T[P]>;
};

type UnionToIntersection14877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14877<T> = UnionToIntersection14877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14877<T extends unknown[], V> = [...T, V];

type TuplifyUnion14877<T, L = LastOf14877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14877<TuplifyUnion14877<Exclude<T, L>>, L>;

type DeepPartial14877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14877<T[P]> }
  : T;

type Paths14877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14877<K, Paths14877<T[K], Prev14877[D]>> : never }[keyof T]
  : never;

type Prev14877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14877 {
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

type ConfigPaths14877 = Paths14877<NestedConfig14877>;

interface HeavyProps14877 {
  config: DeepPartial14877<NestedConfig14877>;
  path?: ConfigPaths14877;
}

const HeavyComponent14877 = memo(function HeavyComponent14877({ config }: HeavyProps14877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14877.displayName = 'HeavyComponent14877';
export default HeavyComponent14877;
