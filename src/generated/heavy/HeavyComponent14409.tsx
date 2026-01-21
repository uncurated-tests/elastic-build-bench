'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14409<T> = T extends (infer U)[]
  ? DeepReadonlyArray14409<U>
  : T extends object
  ? DeepReadonlyObject14409<T>
  : T;

interface DeepReadonlyArray14409<T> extends ReadonlyArray<DeepReadonly14409<T>> {}

type DeepReadonlyObject14409<T> = {
  readonly [P in keyof T]: DeepReadonly14409<T[P]>;
};

type UnionToIntersection14409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14409<T> = UnionToIntersection14409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14409<T extends unknown[], V> = [...T, V];

type TuplifyUnion14409<T, L = LastOf14409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14409<TuplifyUnion14409<Exclude<T, L>>, L>;

type DeepPartial14409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14409<T[P]> }
  : T;

type Paths14409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14409<K, Paths14409<T[K], Prev14409[D]>> : never }[keyof T]
  : never;

type Prev14409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14409 {
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

type ConfigPaths14409 = Paths14409<NestedConfig14409>;

interface HeavyProps14409 {
  config: DeepPartial14409<NestedConfig14409>;
  path?: ConfigPaths14409;
}

const HeavyComponent14409 = memo(function HeavyComponent14409({ config }: HeavyProps14409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14409.displayName = 'HeavyComponent14409';
export default HeavyComponent14409;
