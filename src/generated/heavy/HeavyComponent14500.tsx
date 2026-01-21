'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14500<T> = T extends (infer U)[]
  ? DeepReadonlyArray14500<U>
  : T extends object
  ? DeepReadonlyObject14500<T>
  : T;

interface DeepReadonlyArray14500<T> extends ReadonlyArray<DeepReadonly14500<T>> {}

type DeepReadonlyObject14500<T> = {
  readonly [P in keyof T]: DeepReadonly14500<T[P]>;
};

type UnionToIntersection14500<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14500<T> = UnionToIntersection14500<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14500<T extends unknown[], V> = [...T, V];

type TuplifyUnion14500<T, L = LastOf14500<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14500<TuplifyUnion14500<Exclude<T, L>>, L>;

type DeepPartial14500<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14500<T[P]> }
  : T;

type Paths14500<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14500<K, Paths14500<T[K], Prev14500[D]>> : never }[keyof T]
  : never;

type Prev14500 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14500<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14500 {
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

type ConfigPaths14500 = Paths14500<NestedConfig14500>;

interface HeavyProps14500 {
  config: DeepPartial14500<NestedConfig14500>;
  path?: ConfigPaths14500;
}

const HeavyComponent14500 = memo(function HeavyComponent14500({ config }: HeavyProps14500) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14500) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14500 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14500: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14500.displayName = 'HeavyComponent14500';
export default HeavyComponent14500;
