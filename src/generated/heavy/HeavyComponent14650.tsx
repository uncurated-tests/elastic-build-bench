'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14650<T> = T extends (infer U)[]
  ? DeepReadonlyArray14650<U>
  : T extends object
  ? DeepReadonlyObject14650<T>
  : T;

interface DeepReadonlyArray14650<T> extends ReadonlyArray<DeepReadonly14650<T>> {}

type DeepReadonlyObject14650<T> = {
  readonly [P in keyof T]: DeepReadonly14650<T[P]>;
};

type UnionToIntersection14650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14650<T> = UnionToIntersection14650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14650<T extends unknown[], V> = [...T, V];

type TuplifyUnion14650<T, L = LastOf14650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14650<TuplifyUnion14650<Exclude<T, L>>, L>;

type DeepPartial14650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14650<T[P]> }
  : T;

type Paths14650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14650<K, Paths14650<T[K], Prev14650[D]>> : never }[keyof T]
  : never;

type Prev14650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14650 {
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

type ConfigPaths14650 = Paths14650<NestedConfig14650>;

interface HeavyProps14650 {
  config: DeepPartial14650<NestedConfig14650>;
  path?: ConfigPaths14650;
}

const HeavyComponent14650 = memo(function HeavyComponent14650({ config }: HeavyProps14650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14650.displayName = 'HeavyComponent14650';
export default HeavyComponent14650;
