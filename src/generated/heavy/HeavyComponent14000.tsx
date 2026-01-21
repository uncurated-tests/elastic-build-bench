'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14000<T> = T extends (infer U)[]
  ? DeepReadonlyArray14000<U>
  : T extends object
  ? DeepReadonlyObject14000<T>
  : T;

interface DeepReadonlyArray14000<T> extends ReadonlyArray<DeepReadonly14000<T>> {}

type DeepReadonlyObject14000<T> = {
  readonly [P in keyof T]: DeepReadonly14000<T[P]>;
};

type UnionToIntersection14000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14000<T> = UnionToIntersection14000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14000<T extends unknown[], V> = [...T, V];

type TuplifyUnion14000<T, L = LastOf14000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14000<TuplifyUnion14000<Exclude<T, L>>, L>;

type DeepPartial14000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14000<T[P]> }
  : T;

type Paths14000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14000<K, Paths14000<T[K], Prev14000[D]>> : never }[keyof T]
  : never;

type Prev14000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14000 {
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

type ConfigPaths14000 = Paths14000<NestedConfig14000>;

interface HeavyProps14000 {
  config: DeepPartial14000<NestedConfig14000>;
  path?: ConfigPaths14000;
}

const HeavyComponent14000 = memo(function HeavyComponent14000({ config }: HeavyProps14000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14000.displayName = 'HeavyComponent14000';
export default HeavyComponent14000;
