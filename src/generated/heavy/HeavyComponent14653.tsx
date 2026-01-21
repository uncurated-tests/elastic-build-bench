'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14653<T> = T extends (infer U)[]
  ? DeepReadonlyArray14653<U>
  : T extends object
  ? DeepReadonlyObject14653<T>
  : T;

interface DeepReadonlyArray14653<T> extends ReadonlyArray<DeepReadonly14653<T>> {}

type DeepReadonlyObject14653<T> = {
  readonly [P in keyof T]: DeepReadonly14653<T[P]>;
};

type UnionToIntersection14653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14653<T> = UnionToIntersection14653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14653<T extends unknown[], V> = [...T, V];

type TuplifyUnion14653<T, L = LastOf14653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14653<TuplifyUnion14653<Exclude<T, L>>, L>;

type DeepPartial14653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14653<T[P]> }
  : T;

type Paths14653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14653<K, Paths14653<T[K], Prev14653[D]>> : never }[keyof T]
  : never;

type Prev14653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14653 {
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

type ConfigPaths14653 = Paths14653<NestedConfig14653>;

interface HeavyProps14653 {
  config: DeepPartial14653<NestedConfig14653>;
  path?: ConfigPaths14653;
}

const HeavyComponent14653 = memo(function HeavyComponent14653({ config }: HeavyProps14653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14653.displayName = 'HeavyComponent14653';
export default HeavyComponent14653;
