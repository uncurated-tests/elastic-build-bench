'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14798<T> = T extends (infer U)[]
  ? DeepReadonlyArray14798<U>
  : T extends object
  ? DeepReadonlyObject14798<T>
  : T;

interface DeepReadonlyArray14798<T> extends ReadonlyArray<DeepReadonly14798<T>> {}

type DeepReadonlyObject14798<T> = {
  readonly [P in keyof T]: DeepReadonly14798<T[P]>;
};

type UnionToIntersection14798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14798<T> = UnionToIntersection14798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14798<T extends unknown[], V> = [...T, V];

type TuplifyUnion14798<T, L = LastOf14798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14798<TuplifyUnion14798<Exclude<T, L>>, L>;

type DeepPartial14798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14798<T[P]> }
  : T;

type Paths14798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14798<K, Paths14798<T[K], Prev14798[D]>> : never }[keyof T]
  : never;

type Prev14798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14798 {
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

type ConfigPaths14798 = Paths14798<NestedConfig14798>;

interface HeavyProps14798 {
  config: DeepPartial14798<NestedConfig14798>;
  path?: ConfigPaths14798;
}

const HeavyComponent14798 = memo(function HeavyComponent14798({ config }: HeavyProps14798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14798.displayName = 'HeavyComponent14798';
export default HeavyComponent14798;
