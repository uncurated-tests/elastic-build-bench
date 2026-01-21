'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14146<T> = T extends (infer U)[]
  ? DeepReadonlyArray14146<U>
  : T extends object
  ? DeepReadonlyObject14146<T>
  : T;

interface DeepReadonlyArray14146<T> extends ReadonlyArray<DeepReadonly14146<T>> {}

type DeepReadonlyObject14146<T> = {
  readonly [P in keyof T]: DeepReadonly14146<T[P]>;
};

type UnionToIntersection14146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14146<T> = UnionToIntersection14146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14146<T extends unknown[], V> = [...T, V];

type TuplifyUnion14146<T, L = LastOf14146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14146<TuplifyUnion14146<Exclude<T, L>>, L>;

type DeepPartial14146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14146<T[P]> }
  : T;

type Paths14146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14146<K, Paths14146<T[K], Prev14146[D]>> : never }[keyof T]
  : never;

type Prev14146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14146 {
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

type ConfigPaths14146 = Paths14146<NestedConfig14146>;

interface HeavyProps14146 {
  config: DeepPartial14146<NestedConfig14146>;
  path?: ConfigPaths14146;
}

const HeavyComponent14146 = memo(function HeavyComponent14146({ config }: HeavyProps14146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14146.displayName = 'HeavyComponent14146';
export default HeavyComponent14146;
