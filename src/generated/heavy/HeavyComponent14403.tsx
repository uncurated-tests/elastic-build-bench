'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14403<T> = T extends (infer U)[]
  ? DeepReadonlyArray14403<U>
  : T extends object
  ? DeepReadonlyObject14403<T>
  : T;

interface DeepReadonlyArray14403<T> extends ReadonlyArray<DeepReadonly14403<T>> {}

type DeepReadonlyObject14403<T> = {
  readonly [P in keyof T]: DeepReadonly14403<T[P]>;
};

type UnionToIntersection14403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14403<T> = UnionToIntersection14403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14403<T extends unknown[], V> = [...T, V];

type TuplifyUnion14403<T, L = LastOf14403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14403<TuplifyUnion14403<Exclude<T, L>>, L>;

type DeepPartial14403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14403<T[P]> }
  : T;

type Paths14403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14403<K, Paths14403<T[K], Prev14403[D]>> : never }[keyof T]
  : never;

type Prev14403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14403 {
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

type ConfigPaths14403 = Paths14403<NestedConfig14403>;

interface HeavyProps14403 {
  config: DeepPartial14403<NestedConfig14403>;
  path?: ConfigPaths14403;
}

const HeavyComponent14403 = memo(function HeavyComponent14403({ config }: HeavyProps14403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14403.displayName = 'HeavyComponent14403';
export default HeavyComponent14403;
