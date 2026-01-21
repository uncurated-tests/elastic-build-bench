'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14348<T> = T extends (infer U)[]
  ? DeepReadonlyArray14348<U>
  : T extends object
  ? DeepReadonlyObject14348<T>
  : T;

interface DeepReadonlyArray14348<T> extends ReadonlyArray<DeepReadonly14348<T>> {}

type DeepReadonlyObject14348<T> = {
  readonly [P in keyof T]: DeepReadonly14348<T[P]>;
};

type UnionToIntersection14348<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14348<T> = UnionToIntersection14348<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14348<T extends unknown[], V> = [...T, V];

type TuplifyUnion14348<T, L = LastOf14348<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14348<TuplifyUnion14348<Exclude<T, L>>, L>;

type DeepPartial14348<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14348<T[P]> }
  : T;

type Paths14348<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14348<K, Paths14348<T[K], Prev14348[D]>> : never }[keyof T]
  : never;

type Prev14348 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14348<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14348 {
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

type ConfigPaths14348 = Paths14348<NestedConfig14348>;

interface HeavyProps14348 {
  config: DeepPartial14348<NestedConfig14348>;
  path?: ConfigPaths14348;
}

const HeavyComponent14348 = memo(function HeavyComponent14348({ config }: HeavyProps14348) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14348) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14348 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14348: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14348.displayName = 'HeavyComponent14348';
export default HeavyComponent14348;
