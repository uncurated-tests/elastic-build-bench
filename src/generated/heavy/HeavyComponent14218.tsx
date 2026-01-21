'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14218<T> = T extends (infer U)[]
  ? DeepReadonlyArray14218<U>
  : T extends object
  ? DeepReadonlyObject14218<T>
  : T;

interface DeepReadonlyArray14218<T> extends ReadonlyArray<DeepReadonly14218<T>> {}

type DeepReadonlyObject14218<T> = {
  readonly [P in keyof T]: DeepReadonly14218<T[P]>;
};

type UnionToIntersection14218<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14218<T> = UnionToIntersection14218<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14218<T extends unknown[], V> = [...T, V];

type TuplifyUnion14218<T, L = LastOf14218<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14218<TuplifyUnion14218<Exclude<T, L>>, L>;

type DeepPartial14218<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14218<T[P]> }
  : T;

type Paths14218<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14218<K, Paths14218<T[K], Prev14218[D]>> : never }[keyof T]
  : never;

type Prev14218 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14218<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14218 {
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

type ConfigPaths14218 = Paths14218<NestedConfig14218>;

interface HeavyProps14218 {
  config: DeepPartial14218<NestedConfig14218>;
  path?: ConfigPaths14218;
}

const HeavyComponent14218 = memo(function HeavyComponent14218({ config }: HeavyProps14218) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14218) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14218 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14218: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14218.displayName = 'HeavyComponent14218';
export default HeavyComponent14218;
