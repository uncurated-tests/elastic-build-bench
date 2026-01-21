'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14612<T> = T extends (infer U)[]
  ? DeepReadonlyArray14612<U>
  : T extends object
  ? DeepReadonlyObject14612<T>
  : T;

interface DeepReadonlyArray14612<T> extends ReadonlyArray<DeepReadonly14612<T>> {}

type DeepReadonlyObject14612<T> = {
  readonly [P in keyof T]: DeepReadonly14612<T[P]>;
};

type UnionToIntersection14612<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14612<T> = UnionToIntersection14612<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14612<T extends unknown[], V> = [...T, V];

type TuplifyUnion14612<T, L = LastOf14612<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14612<TuplifyUnion14612<Exclude<T, L>>, L>;

type DeepPartial14612<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14612<T[P]> }
  : T;

type Paths14612<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14612<K, Paths14612<T[K], Prev14612[D]>> : never }[keyof T]
  : never;

type Prev14612 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14612<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14612 {
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

type ConfigPaths14612 = Paths14612<NestedConfig14612>;

interface HeavyProps14612 {
  config: DeepPartial14612<NestedConfig14612>;
  path?: ConfigPaths14612;
}

const HeavyComponent14612 = memo(function HeavyComponent14612({ config }: HeavyProps14612) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14612) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14612 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14612: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14612.displayName = 'HeavyComponent14612';
export default HeavyComponent14612;
